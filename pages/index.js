import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (

      <div id="container">
      <Head>
        <title>Git Some Stuff</title>

      </Head>

      <main>
    

  <div id="1-how-to-check-your-git-configuration"> #1-how-to-check-your-git-configuration
  </div>

<p>The git config command is a convenience function that is used to set Git configuration values on a global or local project level.
</p>

<div id="card">
<p id="highlight plaintext">git config -l
</p>

</div>




  <div id="2-setup-your-git-username-and-email-id"> #2-setup-your-git-username-and-email-id
  </div>

<p>There are many configurations and settings possible. Git config is how to assign these settings.2 important settings are username and user email.</p>

<p>Name and Email address assigned to commit from local computer.
</p>

<div id="card">
<p id="highlight plaintext">git config --global user.name "Tabassum"
git config --global user.email "tabassum@gmail.com"
</p>

</div>




  <div id="3-initialize-a-git-repo"> #3-initialize-a-git-repo
  </div>

<p>This command turns a directory into an empty Git repo.
</p>

<div id="card">
<p id="highlight plaintext">git init
</p>

</div>




  <div id="4-add-a-file-to-the-staging-area-in-git"> #4-add-a-file-to-the-staging-area-in-git
  </div>

<p>The command below will add a file to the staging area. Just replace filename_here with the name of the file you want to add to the staging area.
</p>

<div id="card">
<p id="highlight plaintext">git add filename_here
</p>

</div>




  <div id="5-add-all-files-in-the-staging-area-in-git"> #5-add-all-files-in-the-staging-area-in-git
  </div>

<p>If you want to add all files in your project to the staging area, you can use a wildcard. and every file will be added for you.
</p>

<div id="card">
<p id="highlight plaintext">git add .
</p>

</div>




  <div id="6-commit-changes-in-the-editor"> #6-commit-changes-in-the-editor
  </div>

<p>Records the change made for the files in a local repo.
</p>

<div id="card">
<p id="highlight plaintext">git commit
</p>

</div>



<p>You can add a commit message without opening the editor. This command lets you only specify a short summary for your commit message.
</p>

<div id="card">
<p id="highlight plaintext">git commit -m "first commit"
</p>

</div>




  <div id="7-see-your-commit-history"> #7-see-your-commit-history
  </div>

<p>This command shows the commit history for the current repository.
</p>

<div id="card">
<p id="highlight plaintext">git log
</p>

</div>




  <div id="8-git-status"> #8-git-status
  </div>

<p>This command returns the current status of the repo. If a file is in the staging area, but not committed, it shows, with git status.
</p>

<div id="card">
<p id="highlight plaintext">git status
</p>

</div>




  <div id="9-remove-tracked-files-from-the-current-working-tree"> #9-remove-tracked-files-from-the-current-working-tree
  </div>

<p>This command expects a commit message to explain why the file was deleted.
</p>

<div id="card">
<p id="highlight plaintext">git rm filename
</p>

</div>




  <div id="10-rename-files"> #10-rename-files
  </div>

<p>This command stages the changes, then it expects a commit message.
</p>

<div id="card">
<p id="highlight plaintext">git mv oldfile newfile
</p>

</div>




  <div id="11-create-a-new-branch"> #11-create-a-new-branch
  </div>

<p>By default, you have one branch, the main branch. With this command, you can create a new branch. Git won't switch to it automatically – you will need to do it manually with the next command.
</p>

<div id="card">
<p id="highlight plaintext">git branch branch_name
</p>

</div>




  <div id="12-switch-to-a-newly-created-branch"> #12-switch-to-a-newly-created-branch
  </div>

<p>When you want to use a different or a newly created branch you can use this command:
</p>

<div id="card">
<p id="highlight plaintext">git checkout branch_name
</p>

</div>




  <div id="13-list-branches"> #13-list-branches
  </div>

<p>You can view all created branches using the git branch command. It will show a list of all branches and mark the current branch with an asterisk and highlight it in green.
</p>

<div id="card">
<p id="highlight plaintext">git branch
</p>

</div>




  <div id="14-create-a-branch-in-git-and-switch-to-it-immediately"> #14-create-a-branch-in-git-and-switch-to-it-immediately
  </div>

<p>In a single command, you can create and switch to a new branch right away.
</p>

<div id="card">
<p id="highlight plaintext">git checkout -b branch_name
</p>

</div>




  <div id="15-merge-two-branches"> #15-merge-two-branches
  </div>

<p>To merge the history of the branch you are currently in with the branch_name, you will need to use the command below:
</p>

<div id="card">
<p id="highlight plaintext">git merge branch_name
</p>

</div>




  <div id="16-add-a-remote-repository-in-git"> #16-add-a-remote-repository-in-git
  </div>

<p>This command adds a remote repository to your local repository
</p>

<div id="card">
<p id="highlight plaintext">git add remote https://repo_here
</p>

</div>




  <div id="17-cloning-other-repos"> #17-cloning-other-repos
  </div>

<p>Git clone is a command for downloading existing source code from a remote repository (like Github, for example). In other words, Git clone basically makes an identical copy of the latest version of a project in a repository and saves it to your computer.
</p>

<div id="card">
<p id="highlight plaintext">git clone
</p>

</div>




  <div id="18-pull-changes-to-a-remote-repo"> #18-pull-changes-to-a-remote-repo
  </div>

<p>The git pull command allows you to download updates from a remote repository. Using this command, you execute both git fetch and git merge operations, which means local changes are updated and updates are uploaded to remote repositories
</p>

<div id="card">
<p id="highlight plaintext">git pull
</p>

</div>




  <div id="19-push-changes-to-a-remote-repo"> #19-push-changes-to-a-remote-repo
  </div>

<p>After committing your changes, the next thing you want to do is send your changes to the remote server. Git push uploads your commits to the remote repository.
</p>

<div id="card">
<p id="highlight plaintext">git push
</p>
</div>



<p>force push:
</p>

<div id="card">
<p id="highlight plaintext">git push -f
</p>
</div>




  <div id="20-how-to-use-git-rebase">#20-how-to-use-git-rebase
  </div>


<p>You can transfer completed work from one branch to another using git-rebase.
</p>

<div id="card">
<p id="highlight plaintext">git rebase branch_name_here
</p>

</div>



      </main>

      <Footer />
    </div>
  )
}
