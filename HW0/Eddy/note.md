# 八股题目

## 1. What is the difference between git fetch and git pull?

git fetch only downloads remote changes without altering your local branch, while git pull both fetches and immediately merges those changes into your current branch.

## 2. What is the difference between git merge and git rebase? Pro and Cons?

git merge combines two branches and creates a new merge commit, so the original history stays unchanged. And git rebase moves your commits to the tip of another branch and rewrites history to make it look linear.

- git merge pro: It is safe for shared branches and keeps the true history.
- git merge con: It can add extra merge commits and make the history look messy.
- git rebase pro: It makes the history clean and easy to read.
- git rebase con: It rewrites history, which is risky on shared branches, and you may resolve similar conflicts multiple times.

## 3. How do you resolve merge conflicts in Git?

I can first run _git status_ to see which files are in conflict. Then, I can open each conflicted file and edit the sections marked by Git to choose or combine the correct changes. After fixing the files, I can run _git add file_name_ for each resolved file, and finally run _git commit_ to complete the merge.

## 4. What is the purpose of .gitignore?

The purpose of .gitignore is to tell Git which files or folders should not be tracked.

## 5. How do you undo a commit that has already been pushed?

If I want to undo a commit that has already been pushed, I usually use _git revert commit_hash_ because it creates a new commit that cancels the changes safely without rewriting history.

## 6. Can you give me some common git commands?

- git init → Initialize a new Git repository.
- git clone url → Copy an existing remote repository.
- git status → Show the current state of the working directory.
- git add file_name → Stage changes for the next commit.
- git commit -m "message" → Save staged changes with a message.
- git log → Show the history of commits.
- git branch → List, create, or delete branches.
- git checkout branch_name → Switch to another branch.
- git merge branch_name → Merge another branch into the current one.
- git pull → Fetch and merge changes from a remote branch.
- git push → Upload local commits to the remote repository.
