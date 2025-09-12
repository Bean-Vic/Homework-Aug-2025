#### 1. What is the difference between git fetch and git pull?
git fetch retrives from remote repo but doesn't merge them into local branch, while git pull is more like combined git fetch and git merge, it merges changes into local branch.

#### 2. What is the difference between git merge and git rebase? Pro and Cons?
git merge combines changes from two branches, and preserves complete history and branch structure. git rebase reapplies existing commits onto a new base,creates a linear history by rewriting it.

#### 3. How do you resolve merge conflicts in Git?
	1. Edit the conflited files, remove the conflict part
	2. run git add and git commit to complete the merge

#### 4. What is the purpose of .gitignore?
Specify which files should be ignored so that Git does not track or include them in the repository

#### 5. How do you undo a commit that has already been pushed?
use git revert

#### 6. Can you give me some common git commands?
git clone, git add. git commit, git branch, git checkout, git switch, git merge, git rebase, git remote, git fetch, git pull, git push, git stash
