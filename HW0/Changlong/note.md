# Git Interview Questions & Answers

---

## 1. What is the difference between Git Fetch and Git Pull?

- **Git fetch**: get the update from the remote repository, but don’t touch my code.  
- **Git pull**: get the update from the remote repository **and** merge them into what I’m working on right now.  

---

## 2. What is the difference between Git Merge and Git Rebase? Pros and Cons

### Git Merge
- Combines the histories of two branches by creating a new “merge commit”.  
- Keeps the full history, so we can see when and how the branches were merged.  

**Pros:**
- Preserves history  
- Safer for team collaboration  
- No rewriting of commits  

**Cons:**
- Can make the history look more cluttered with many merge commits  

### Git Rebase
- Moves the commits on top of another branch, rewriting history so it looks like your work was done after the latest commits on that branch.  

**Pros:**
- Creates a cleaner, linear history that’s easier to read  

**Cons:**
- Rewrites commit history, which can cause problems if we rebase commits that other people are already using  

---

## 3. How do you resolve merge conflicts in Git?

When there’s a merge conflict:  
1. Open the conflicted files.  
2. Manually fix the differences.  
3. Mark them as resolved with `git add`.  
4. Complete the merge with `git commit`.  
5. Push the resolved branch.  

---

## 4. What is the purpose of `.gitignore`?

The purpose of `.gitignore` is to tell Git which files it should **not** track, such as:  
- Logs  
- Build outputs  
- Environment files  

---

## 5. How do you undo a commit that has already been pushed?

- **Safe way:** use `git revert`, which creates a new commit that cancels out the previous one.  
- **Dangerous way:** use `git reset` and then force push, but this should be avoided on shared branches.  

---

## 6. Can you give me some common git commands?

- `git clone` → copy a remote repository  
- `git status` → check which files have changed  
- `git add` and `git commit` → stage and save my changes  
- `git log` → review history  

