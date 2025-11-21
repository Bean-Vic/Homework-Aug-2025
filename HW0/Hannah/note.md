## 1. What is the difference between git fetch and git pull?

Git fetch only updates the local representation of the remote repo without merging the remote branches with your local commits, while git pull not only downloads the latest copy of the remote repo but also merge it with your local commits.
In short, git pull = git fetch + git merge

## 2. What is the difference between git merge and git rebase? Pro and Cons?

Git merge and rebase both can combine two different branches together, however, git merge keeps the history of both merging branches, and git rebase detach one branch, copy it and move it to base on the other branch. Git merge keeps the history of both branches well for tracing, but might be cluttered. Git rebase changes the history of one branch, but the commits history tree overall may look more linear and cleaner.

## 3. How do you resolve merge conflicts in Git?

Manually check the inconsistencies between two branches, and clear the conflicts and merge again.

## 4. What is the purpose of .gitignore?

Ignore the files that you don't want to add to git repo, thus make the repo clean, sotrage friendly and efficient.

## 5. How do you undo a commit that has already been pushed?

Use git reset to return to the previous HEAD, or use git revert to remove the commit, without impacting other contributor's commits.
git reset --soft HEAD~1
git revert <commit_hash>

## 6. Can you give me some common git commands?

git clone
remote repos: git push, git pull
local repos: git add, git commit, git merge, git fetch, git branch -b <branch_name>
