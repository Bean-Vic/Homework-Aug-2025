# Git Homework 0

## 1. What is the difference between `git fetch` and `git pull`?

- **`git fetch`**: Downloads new updates from the remote repository without merging them into your current branch. It updates your local repository's knowledge of the remote state but doesn't change your working directory.
- **`git pull`**: Downloads new updates from the remote repository AND merges them into your current branch. It's essentially `git fetch` followed by `git merge`.

## 2. What is the difference between `git merge` and `git rebase`? Pros and Cons?

### Git Merge
- **What it does**: Creates a new merge commit that combines changes from another branch into the current branch, preserving the branch history.
- **Pros**:
  - Maintains complete commit history
  - Shows clear merge points
  - Non-destructive operation
- **Cons**:
  - Can create complex, non-linear history
  - Multiple merges can make the commit graph difficult to read

### Git Rebase
- **What it does**: Replays commits from the current branch onto the target branch, creating a linear history as if the work was done sequentially.
- **Pros**:
  - Creates clean, linear history
  - Easier to read and understand
  - No merge commits cluttering the history
- **Cons**:
  - Rewrites commit history (can be dangerous on shared branches)
  - May cause conflicts for team members
  - Loses context about when branches were merged

## 3. How do you resolve merge conflicts in Git?

1. **Identify conflict files**: Git will list the files with conflicts in the terminal output
2. **Open conflicted files**: Look for conflict markers:
   - `<<<<<<<` marks the beginning of your changes (HEAD)
   - `=======` separates your changes from incoming changes
   - `>>>>>>>` marks the end of incoming changes
3. **Resolve conflicts**: Choose which version to keep or manually combine both versions
4. **Stage resolved files**: Use `git add <filename>` after resolving conflicts
5. **Complete the merge**: Use `git commit` to finalize the merge

## 4. What is the purpose of `.gitignore`?

The `.gitignore` file specifies which files and directories Git should ignore and not track. Common use cases include:
- Build artifacts and compiled files
- Dependencies and libraries (like `node_modules/`)
- IDE/editor configuration files (like `.vscode/`, `.idea/`)
- Log files and temporary files
- Local configuration files with sensitive data
- Operating system files (like `.DS_Store`, `Thumbs.db`)

## 5. How do you undo a commit that has already been pushed?

**Safe method (recommended for shared repositories):**
```bash
git revert <commit_id>
git push
```
This creates a new commit that undoes the changes from the specified commit, preserving history.

## 6. Common Git Commands

### Branch Management
- `git branch` - List all branches
- `git branch <branch-name>` - Create a new branch
- `git checkout <branch-name>` - Switch to a branch
- `git checkout -b <branch-name>` - Create and switch to a new branch

### Basic Operations
- `git status` - Check repository status
- `git add <file>` - Stage files for commit
- `git commit -m "message"` - Commit staged changes
- `git push` - Push commits to remote repository
- `git pull` - Pull and merge changes from remote

### History and Information
- `git log` - View commit history
- `git diff` - Show changes between commits/files
- `git show <commit-id>` - Show details of a specific commit