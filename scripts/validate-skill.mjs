#!/usr/bin/env node
/**
 * cine-director — skill validator
 *
 * Zero dependencies. Run with: node scripts/validate-skill.mjs
 *
 * Why this exists: SKILL.md frontmatter is consumed by several different YAML
 * parsers (Claude Code, the `skills` CLI, Claude.ai upload, Cursor, Codex...).
 * They do not agree. A plain unquoted scalar containing ": " parses in the
 * lenient ones and hard-fails in the strict ones — which silently made this
 * skill uninstallable via `npx skills add`.
 *
 * So this validator does not check "is it valid YAML?". It checks the stricter
 * question: "is it in the portable subset that every parser agrees on?"
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Claude Code truncates `description` + `when_to_use` in the skill listing at
// this many characters. Past it, the trigger keywords silently disappear.
const LISTING_CAP = 1536;
const NAME_MAX = 64;
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const BLOCK_SCALAR_RE = /^[|>][-+]?\d*$/;

const errors = [];
const warnings = [];
const passed = [];

const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);
const ok = (msg) => passed.push(msg);

/** Collect every markdown file in the repo, skipping .git and node_modules. */
function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

/**
 * Split a markdown file into { frontmatter, body }.
 * Returns frontmatter === null when the file has none.
 */
function splitFrontmatter(text) {
  if (!text.startsWith('---\n')) return { frontmatter: null, body: text };
  const end = text.indexOf('\n---\n', 3);
  if (end === -1) return { frontmatter: null, body: text, unterminated: true };
  return {
    frontmatter: text.slice(4, end + 1),
    body: text.slice(end + 5),
  };
}

/**
 * Parse the portable YAML subset: top-level `key: value` pairs where the value
 * is a block scalar, a quoted string, or a plain scalar that is unambiguous in
 * every parser. Anything outside the subset is reported as an error rather than
 * guessed at, because guessing is exactly what breaks across parsers.
 */
function parsePortableFrontmatter(fm, label) {
  const lines = fm.split('\n');
  const out = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === '' || line.trimStart().startsWith('#')) {
      i++;
      continue;
    }
    if (/^\s/.test(line)) {
      fail(`${label}: unexpected indentation at line ${i + 2}: "${line.trim()}"`);
      i++;
      continue;
    }

    const sep = line.indexOf(':');
    if (sep === -1) {
      fail(`${label}: line ${i + 2} is not a "key: value" pair: "${line.trim()}"`);
      i++;
      continue;
    }

    const key = line.slice(0, sep).trim();
    let rawValue = line.slice(sep + 1).trim();

    if (BLOCK_SCALAR_RE.test(rawValue)) {
      // Block scalar: consume the indented lines that follow. This form is
      // parser-proof — colons, quotes and dashes inside it are just text.
      const collected = [];
      i++;
      while (i < lines.length && (lines[i].trim() === '' || /^\s/.test(lines[i]))) {
        collected.push(lines[i].trim());
        i++;
      }
      out[key] = collected.join(' ').replace(/\s+/g, ' ').trim();
      continue;
    }

    if (
      (rawValue.startsWith('"') && rawValue.endsWith('"') && rawValue.length > 1) ||
      (rawValue.startsWith("'") && rawValue.endsWith("'") && rawValue.length > 1)
    ) {
      out[key] = rawValue.slice(1, -1);
      i++;
      continue;
    }

    // Plain scalar. This is where portability goes to die.
    if (rawValue.includes(': ')) {
      fail(
        `${label}: "${key}" is an unquoted value containing ": " — strict YAML ` +
          `parsers reject this ("Nested mappings are not allowed"). Use a block ` +
          `scalar (${key}: >-) or quote the value.`
      );
    } else if (rawValue.includes('"') || rawValue.includes("'")) {
      warn(
        `${label}: "${key}" is an unquoted value containing quote characters. ` +
          `Prefer a block scalar (${key}: >-) so quoting rules never apply.`
      );
    } else if (rawValue.endsWith(':')) {
      fail(`${label}: "${key}" value ends with ":" — ambiguous across parsers.`);
    } else if (/^[&*!%@`]/.test(rawValue)) {
      fail(`${label}: "${key}" value starts with a reserved YAML character.`);
    }
    out[key] = rawValue;
    i++;
  }
  return out;
}

// ---------------------------------------------------------------------------
// 1. SKILL.md exists and has well-formed frontmatter
// ---------------------------------------------------------------------------
const skillPath = join(ROOT, 'SKILL.md');
if (!existsSync(skillPath)) {
  fail('SKILL.md not found at repository root. Skill installers look for it there.');
} else {
  const raw = readFileSync(skillPath, 'utf8');
  const { frontmatter, unterminated } = splitFrontmatter(raw);

  if (unterminated) {
    fail('SKILL.md: frontmatter opens with "---" but is never closed.');
  } else if (frontmatter === null) {
    fail('SKILL.md: missing YAML frontmatter. It must start with "---" on line 1.');
  } else {
    ok('SKILL.md frontmatter is delimited correctly');
    const meta = parsePortableFrontmatter(frontmatter, 'SKILL.md');

    // name
    if (!meta.name) {
      fail('SKILL.md: missing required field "name".');
    } else {
      if (!NAME_RE.test(meta.name)) {
        fail(
          `SKILL.md: name "${meta.name}" must be lowercase letters, digits and ` +
            `single hyphens (e.g. cine-director).`
        );
      }
      if (meta.name.length > NAME_MAX) {
        fail(`SKILL.md: name is ${meta.name.length} chars, max ${NAME_MAX}.`);
      }
      if (NAME_RE.test(meta.name)) ok(`name "${meta.name}" is well-formed`);
    }

    // description
    if (!meta.description) {
      fail(
        'SKILL.md: missing required field "description". The `skills` CLI ' +
          'refuses to install a skill without one.'
      );
    } else {
      ok(`description present (${meta.description.length} chars)`);
    }

    // listing budget
    const listingLen =
      (meta.description?.length ?? 0) + (meta.when_to_use?.length ?? 0);
    if (listingLen > LISTING_CAP) {
      fail(
        `SKILL.md: description + when_to_use is ${listingLen} chars, over the ` +
          `${LISTING_CAP}-char listing cap. Trigger keywords at the end will be ` +
          `truncated away.`
      );
    } else {
      ok(`listing text is ${listingLen}/${LISTING_CAP} chars`);
    }
  }
}

// ---------------------------------------------------------------------------
// 2. Every referenced file actually exists
// ---------------------------------------------------------------------------
const mdFiles = existsSync(ROOT) ? walk(ROOT) : [];
const PATH_IN_BACKTICKS = /`([A-Za-z0-9._\-/]+\.md)`/g;
const MD_LINK = /\[[^\]]*\]\((\.{0,2}\/?[A-Za-z0-9._\-/]+\.md)\)/g;

// Only strings with a directory component are treated as path references. A
// bare "sequence-shot.md" in prose — a changelog entry naming a renamed file,
// say — is a name, not a link, and must not be resolved against the filesystem.
const isPathReference = (ref) => ref.includes('/');

let refsChecked = 0;
for (const file of mdFiles) {
  const text = readFileSync(file, 'utf8');
  const here = dirname(file);
  const candidates = new Set();

  for (const m of text.matchAll(PATH_IN_BACKTICKS)) candidates.add(m[1]);
  for (const m of text.matchAll(MD_LINK)) candidates.add(m[1]);

  for (const ref of [...candidates].filter(isPathReference)) {
    refsChecked++;
    const tries = [resolve(here, ref), resolve(ROOT, ref.replace(/^\.\//, ''))];
    if (!tries.some((p) => existsSync(p) && statSync(p).isFile())) {
      fail(
        `${relative(ROOT, file)}: references "${ref}", which does not exist. ` +
          `A user following this document hits a dead end.`
      );
    }
  }
}
if (refsChecked > 0) ok(`${refsChecked} file references resolved`);

// ---------------------------------------------------------------------------
// 3. Shot cards are all listed in SKILL.md
// ---------------------------------------------------------------------------
const shotsDir = join(ROOT, 'references', 'shots');
if (existsSync(shotsDir) && existsSync(skillPath)) {
  const skillText = readFileSync(skillPath, 'utf8');
  const cards = readdirSync(shotsDir).filter((f) => f.endsWith('.md'));
  const missing = cards.filter((c) => !skillText.includes(c));
  if (missing.length) {
    fail(
      `SKILL.md does not list these shot cards, so the agent will never open ` +
        `them: ${missing.join(', ')}`
    );
  } else if (cards.length) {
    ok(`all ${cards.length} shot cards are listed in SKILL.md`);
  }
}

// ---------------------------------------------------------------------------
// 4. Unfilled template placeholders that would ship to a user
// ---------------------------------------------------------------------------
for (const file of mdFiles) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, 'utf8');
  if (/\[yyyy\]|\[name of copyright owner\]/.test(text) && rel !== 'LICENSE') {
    warn(`${rel}: contains an unfilled copyright placeholder.`);
  }
  if (/TODO|FIXME|XXX/.test(text)) {
    warn(`${rel}: contains a TODO/FIXME marker.`);
  }
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
const g = (s) => `\x1b[32m${s}\x1b[0m`;
const y = (s) => `\x1b[33m${s}\x1b[0m`;
const r = (s) => `\x1b[31m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

console.log('');
console.log(dim('cine-director — skill validation'));
console.log('');
for (const p of passed) console.log(`  ${g('✓')} ${p}`);
for (const w of warnings) console.log(`  ${y('!')} ${w}`);
for (const e of errors) console.log(`  ${r('✗')} ${e}`);
console.log('');

if (errors.length) {
  console.log(
    r(`${errors.length} error${errors.length > 1 ? 's' : ''}`) +
      (warnings.length ? `, ${y(`${warnings.length} warning(s)`)}` : '') +
      ' — this skill would fail for users.'
  );
  process.exit(1);
}
console.log(
  g('All checks passed.') +
    (warnings.length ? ` ${y(`${warnings.length} warning(s).`)}` : '')
);
