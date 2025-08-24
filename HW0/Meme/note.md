
## 1) What is the difference between `git fetch` and `git pull`?

- `git fetch`: Downloads new commits, branches, and tags from the remote repository, but does not change your working directory or local branches. After this:
	origin/main may move forward to newer commits. Your local main stays where it was.
- `git pull`: Equivalent to `fetch` + (default) `merge`, or optionally `rebase`. It updates the current branch directly.

## 2) What is the difference between `git merge` and `git rebase`? Pros and Cons?

Merge
- Combines changes from one branch into another by creating a merge commit. History: Preserves the history exactly as it happened (branches + merges).

Rebase
- Re-applies commits** from your branch onto another branch, rewriting commit hashes.
- Pros**: Produces a linear history, easier to read and debug.
- Cons**: Rewrites history; do not rebase public/shared branches**.


## 3) How do you resolve merge conflicts in Git?

Steps
1. Check status: `git status`
2. Open conflicted files and fix conflict markers.
3. Mark resolved: `git add <files>` then `git commit` (merge) or `git rebase --continue` (rebase).
4. Abort if needed: `git merge --abort` or `git rebase --abort`.

Tips
- Sync often to reduce conflicts.
- Use tools (`git mergetool`) to assist.
- Inspect with `git diff --ours/--theirs/--base`.


## 4) What is the purpose of `.gitignore`?

Purpose: Specify files and directories to ignore (e.g., build artifacts, temp files). Applies only to untracked files.

Examples
```gitignore
node_modules/
dist/
*.log
.env
.DS_Store


## 5) How do you undo a commit that has already been pushed?

Safe (recommended): `git revert`
```bash
git revert <sha>
git revert <old_sha>^..<new_sha>
git push origin HEAD
```

Rewrite (risky): `git reset --hard` + force push
```bash
git reset --hard <good_sha>
git push --force-with-lease origin <branch>
```

## 6) Can you give me some common git commands?
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git init
git clone <url>

git status
git log --oneline --graph --decorate
git show <sha>
git diff
git diff --staged

git add <file|.>
git commit -m "message"
git commit 

git branch
git branch -r
git switch -c feature
git merge main
git rebase main

git remote -v
git fetch origin
git pull --rebase origin main
git push origin <branch>

git restore <file>
git restore --staged <file>
git reset --soft/--mixed/--hard <sha>
git revert <sha>
git clean -fdx

