---
name: changelog
description: Maintains CHANGELOG.md in the project root using git commit history. Use when the user invokes /changelog, asks to "update the changelog", "generate a changelog", or wants to record what changed before merging a branch. Creates the file from scratch if it doesn't exist (all commits grouped by date); otherwise appends only commits newer than the last recorded date.
---

# Changelog Skill

## Workflow

1. Run the script from the project root:

```bash
python3 <skill-dir>/scripts/changelog.py
```

Where `<skill-dir>` is the directory containing this skill. Claude Code exposes the skill path — use it directly.

2. The script handles both cases automatically:
   - **No CHANGELOG.md**: reads full git history for this project directory, writes the file with all dates
   - **CHANGELOG.md exists**: finds the newest `## YYYY-MM-DD` heading, fetches commits after that date, prepends new sections

3. Review the output, edit bullet wording if needed, then commit `CHANGELOG.md` as part of the merge commit.

## Format

```markdown
# Changelog

## 2026-03-31

- Add responsive design to layout and CSS
- Add Vitest test suite for components and routes

## 2026-03-30

- Initial project scaffold
```

- One `# Changelog` title at the top
- Date headings as `## YYYY-MM-DD`, newest first
- Each commit is one bullet; wording may be cleaned up manually after generation

## Notes

- Run from the **project root** — the directory this `.claude/` folder lives under
- Every `git log` call is scoped to that directory (`-- .`), not the whole repo: this project lives in a subdirectory of a shared repo (multiple lesson projects share one `.git`), so an unscoped `git log` would pull in commits from unrelated projects. In a repo dedicated to a single project this scoping is a no-op.
- Commit subjects come directly from `git log`; clean them up manually if needed
- The script is idempotent: re-running when nothing is new prints a message and exits without modifying the file
