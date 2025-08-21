Git Interview Q&A (Short Answers)

Q1. What is the difference between git fetch and git pull?

git fetch only downloads changes from the remote but does not change your working files.

git pull = git fetch + git merge (it updates your local branch immediately).

Q2. What is the difference between git merge and git rebase? Pros and Cons?

Merge: Combines changes and creates a new merge commit. Keeps full history but can look messy.

Rebase: Re-applies commits on top of another branch. Creates a cleaner history but rewrites commits.

Q3. How do you resolve merge conflicts in Git?

Open the conflicting file, edit the conflict markers, and keep the correct code.

Mark the conflict as resolved with git add, then git commit to finish.

Q4. What is the purpose of .gitignore?

It tells Git which files or folders to ignore, such as logs, build outputs, or environment files.

Q5. How do you undo a commit that has already been pushed?

Use git revert <commit> to create a new commit that undoes the changes. (Safe way).

Or git reset --hard <commit> then force push, but this rewrites history (dangerous).

Q6. Can you give me some common git commands?

git clone – copy a repo.

git status – check current changes.

git add – stage changes.

git commit – save changes.

git push – upload commits.

git pull – update from remote.

git branch – manage branches.

git checkout / git switch – change branches.
