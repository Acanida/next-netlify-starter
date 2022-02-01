import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
<h3>
  <a name="1-how-to-check-your-git-configuration" href="#1-how-to-check-your-git-configuration">
  </a>
  1. How to check your Git configuration:
</h3>

<p>The git config command is a convenience function that is used to set Git configuration values on a global or local project level.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git config -l
</code></pre>

</div>



<h3>
  <a name="2-setup-your-git-username-and-email-id" href="#2-setup-your-git-username-and-email-id">
  </a>
  2. Setup your Git username and Email Id:
</h3>

<p>There are many configurations and settings possible. Git config is how to assign these settings.2 important settings are username and user email.</p>

<p>Name and Email address assigned to commit from local computer.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git config --global user.name "Tabassum"
git config --global user.email "tabassum@gmail.com"
</code></pre>

</div>



<h3>
  <a name="3-initialize-a-git-repo" href="#3-initialize-a-git-repo">
  </a>
  3. Initialize a Git repo:
</h3>

<p>This command turns a directory into an empty Git repo.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git init
</code></pre>

</div>



<h3>
  <a name="4-add-a-file-to-the-staging-area-in-git" href="#4-add-a-file-to-the-staging-area-in-git">
  </a>
  4. Add a file to the staging area in Git:
</h3>

<p>The command below will add a file to the staging area. Just replace filename_here with the name of the file you want to add to the staging area.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git add filename_here
</code></pre>

</div>



<h3>
  <a name="5-add-all-files-in-the-staging-area-in-git" href="#5-add-all-files-in-the-staging-area-in-git">
  </a>
  5. Add all files in the staging area in Git:
</h3>

<p>If you want to add all files in your project to the staging area, you can use a wildcard. and every file will be added for you.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git add .
</code></pre>

</div>



<h3>
  <a name="6-commit-changes-in-the-editor" href="#6-commit-changes-in-the-editor">
  </a>
  6. Commit changes in the editor:
</h3>

<p>Records the change made for the files in a local repo.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git commit
</code></pre>

</div>



<p>You can add a commit message without opening the editor. This command lets you only specify a short summary for your commit message.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git commit -m "first commit"
</code></pre>

</div>



<h3>
  <a name="7-see-your-commit-history" href="#7-see-your-commit-history">
  </a>
  7. See your commit history:
</h3>

<p>This command shows the commit history for the current repository.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git log
</code></pre>

</div>



<h3>
  <a name="8-git-status" href="#8-git-status">
  </a>
  8. Git status:
</h3>

<p>This command returns the current status of the repo. If a file is in the staging area, but not committed, it shows, with git status.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git status
</code></pre>

</div>



<h3>
  <a name="9-remove-tracked-files-from-the-current-working-tree" href="#9-remove-tracked-files-from-the-current-working-tree">
  </a>
  9. Remove tracked files from the current working tree:
</h3>

<p>This command expects a commit message to explain why the file was deleted.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git rm filename
</code></pre>

</div>



<h3>
  <a name="10-rename-files" href="#10-rename-files">
  </a>
  10. Rename files:
</h3>

<p>This command stages the changes, then it expects a commit message.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git mv oldfile newfile
</code></pre>

</div>



<h3>
  <a name="11-create-a-new-branch" href="#11-create-a-new-branch">
  </a>
  11.  Create a new branch:
</h3>

<p>By default, you have one branch, the main branch. With this command, you can create a new branch. Git won't switch to it automatically – you will need to do it manually with the next command.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git branch branch_name
</code></pre>

</div>



<h3>
  <a name="12-switch-to-a-newly-created-branch" href="#12-switch-to-a-newly-created-branch">
  </a>
  12. Switch to a newly created branch:
</h3>

<p>When you want to use a different or a newly created branch you can use this command:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git checkout branch_name
</code></pre>

</div>



<h3>
  <a name="13-list-branches" href="#13-list-branches">
  </a>
  13. List branches:
</h3>

<p>You can view all created branches using the git branch command. It will show a list of all branches and mark the current branch with an asterisk and highlight it in green.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git branch
</code></pre>

</div>



<h3>
  <a name="14-create-a-branch-in-git-and-switch-to-it-immediately" href="#14-create-a-branch-in-git-and-switch-to-it-immediately">
  </a>
  14. create a branch in Git and switch to it immediately:
</h3>

<p>In a single command, you can create and switch to a new branch right away.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git checkout -b branch_name
</code></pre>

</div>



<h3>
  <a name="15-merge-two-branches" href="#15-merge-two-branches">
  </a>
  15. Merge two branches:
</h3>

<p>To merge the history of the branch you are currently in with the branch_name, you will need to use the command below:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git merge branch_name
</code></pre>

</div>



<h3>
  <a name="16-add-a-remote-repository-in-git" href="#16-add-a-remote-repository-in-git">
  </a>
  16. Add a remote repository in Git:
</h3>

<p>This command adds a remote repository to your local repository (just replace <a href="https://repo_here">https://repo_here</a> with your remote repo URL).<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git add remote https://repo_here
</code></pre>

</div>



<h3>
  <a name="17-cloning-other-repos" href="#17-cloning-other-repos">
  </a>
  17. Cloning other repos:
</h3>

<p>Git clone is a command for downloading existing source code from a remote repository (like Github, for example). In other words, Git clone basically makes an identical copy of the latest version of a project in a repository and saves it to your computer.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git clone
</code></pre>

</div>



<h3>
  <a name="18-pull-changes-to-a-remote-repo" href="#18-pull-changes-to-a-remote-repo">
  </a>
  18. Pull changes to a remote repo:
</h3>

<p>The git pull command allows you to download updates from a remote repository. Using this command, you execute both git fetch and git merge operations, which means local changes are updated and updates are uploaded to remote repositories<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git pull 
</code></pre>

</div>



<h3>
  <a name="19-push-changes-to-a-remote-repo" href="#19-push-changes-to-a-remote-repo">
  </a>
  19. Push changes to a remote repo:
</h3>

<p>After committing your changes, the next thing you want to do is send your changes to the remote server. Git push uploads your commits to the remote repository.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git push
</code></pre>
</div>



<p>force push:<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git push -f
</code></pre>
</div>



<h3>
  <a name="20-how-to-use-git-rebase" href="#20-how-to-use-git-rebase">
  </a>
  20. How to use Git rebase:
</h3>

<p>You can transfer completed work from one branch to another using git-rebase.<br>
</p>

<div class="highlight js-code-highlight">
<pre class="highlight plaintext"><code>git rebase branch_name_here
</code></pre>



</div>
</div>

      </main>

      <Footer />
    </div>
  )
}
