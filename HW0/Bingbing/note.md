1. What is the difference between git fetch and git pull?

Answer:
“git fetch only downloads new commits from the remote and updates my remote-tracking branches, but it doesn’t change my working branch. git pull goes one step further — it does a fetch and then immediately merges or rebases into my local branch. So fetch is like checking the news, and pull is like actually applying the update.”

2. What is the difference between git merge and git rebase? Pros and Cons?

Answer:
“Merge keeps the true history of how branches diverged and adds a merge commit. It’s safe but can get a bit messy. Rebase, on the other hand, rewrites my commits on top of a new base so the history looks linear and clean. I usually rebase my own feature branches for clarity, but when working with teammates we merge into main to avoid rewriting shared history.”

3. How do you resolve merge conflicts in Git?

Answer:
“When I hit a conflict, I open the file, decide which parts of the code to keep or combine, then mark it resolved with git add. After that, I continue with either git commit or git rebase --continue. If things look too messy, I can always abort and try again. The key is to carefully review and test after resolving.”

4. What is the purpose of .gitignore?

Answer:
“.gitignore is used to tell Git which files to skip. For example, I ignore build outputs, dependencies like node_modules, and secrets like .env. It keeps the repo clean and makes sure we don’t accidentally commit sensitive or unnecessary files.”

5. How do you undo a commit that has already been pushed?

Answer:
“If it’s already pushed, the safest option is to use git revert. That creates a new commit that undoes the previous one, so history stays intact. Reset and force-push are possible but dangerous in shared branches, so I only use them if the team agrees.”

6. Can you give me some common git commands?

Answer:
“Sure — I use git status and git diff to see what’s going on, which means I can check which files changed and exactly what lines were modified. Then I use git add and git commit to save changes into history. To stay up to date with the team, I run git fetch and often git pull --rebase so my work sits cleanly on top of the latest code. Once I’m happy, I git push to share my work. For branching, I usually do git checkout -b feature to create and switch to a new branch. And when I make mistakes, I rely on tools like git reset to adjust local commits, git revert to safely undo a pushed commit, or git stash to quickly save work in progress.”