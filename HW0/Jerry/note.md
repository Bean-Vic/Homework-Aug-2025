1. What is the difference between git fetch and git pull?
git fetch only update the remote but leave your branch unchanged, git pull does the same job as git fetch and integrate the commits into your current branch
2. What is the difference between git merge and git rebase? Pro and Cons?
The main difference is that git merge join the two histories and does not rewrite the existing commit, but rebase rewrites your commit. The pro of git merge is that it preserve all of the history and the con is that as you merge lots of times, the history may become messy. The pro of git rebased is that it keeps history clean and linear, and the con of git rebased is that it may lose some merge context and sometimes you don't want it to be lost.
3. How do you resolve merge conflicts in Git?
First, I will git fetch to make sure I’m up to date, then git merge origin/main. Run git status to see where is the conflict, and resolve it by keeping mine, theirs. After the consideration, I'll use git checkout my path or their path and git add to mark it resolved. Finally, I'll use git merge --continue, run test, and push
4. What is the purpose of .gitignore?
.gitignore applies only to untracked files, it tells Git which untracked files and paths to ignore, so they don’t get added, changed, or clutter your status. 
5. How do you undo a commit that has already been pushed?
The fastest way is to use git revert, it creates a new commit and undoes the changes from the previous commit directly, and push
6. Can you give me some common git commands?
git status  what’s changed
git add  stage changes
git commit  record a snapshot
git branch -name  create a new branch
git pull  fetch and integrate
git push  publish commits
git merge  combine histories
git clone  copy a repo