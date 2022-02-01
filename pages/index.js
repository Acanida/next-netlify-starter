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
                <div id="highlight plaintext"></div>

                <div id="card">
                    <div id="highlight plaintext">git config -l

                    </div>
                    <div id="card2">

                        <div id="highlight plaintext">
                            #1-how-to-check-your-git-configuration
                        </div>
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git config --global user.name "ACANIDA"
                        git config --global user.email "ACANIDA@gmail.com"

                    </div>
                    <div id="card2">
                        #2-setup-your-git-username-and-email-id
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git init



                    </div>
                    <div id="card2">
                        #3-initialize-a-git-repo
                        <div id="highlight plaintext">The git config command is a convenience function that is used to
                            set Git configuration values on
                            a global or local project level.
                        </div>

                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git add filename_here


                    </div>
                    <div id="card2">
                        #4-add-a-file-to-the-staging-area-in-git
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git add .


                    </div>
                    <div id="card2">
                        #5-add-all-files-in-the-staging-area-in-git
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git commit


                    </div>

                    <div id="card2">
                        #6-commit-changes-in-the-editor
                        <div id="highlight plaintext">Name and Email address assigned to commit from local computer.
                        </div>

                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="highlight plaintext"></div>


                <div id="card">
                    <div id="highlight plaintext">git log


                    </div>

                    <div id="card2">
                        #7-see-your-commit-history
                        <div id="highlight plaintext">This command turns a directory into an empty Git repo.
                        </div>

                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git status


                    </div>
                    <div id="card2">
                        #8-git-status
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git rm filename


                    </div>

                    <div id="card2">
                        <div id="highlight plaintext">
                            #9-remove-tracked-files-from-the-current-working-tree
                            <div id="highlight plaintext">The command below will add a file to the staging area. Just
                                replace filename_here with the name
                                of the file you want to add to the staging area.
                            </div>
                        </div>
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git mv oldfile newfile

                    </div>

                    <div id="card2">
                        <div id="highlight plaintext">
                            #10-rename-files
                        </div>
                        <div id="highlight plaintext">If you want to add all files in your project to the staging area,
                            you can use a wildcard. and
                            every file will be added for you.
                        </div>


                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git branch branch_name


                    </div>
                    <div id="card2">

                        <div id="highlight plaintext">
                            #11-create-a-new-branch
                        </div>
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git checkout branch_name
                    </div>


                    <div id="card2">
                        <div id="highlight plaintext">
                            #12-switch-to-a-newly-created-branch
                        </div>
                        <div id="highlight plaintext">Records the change made for the files in a local repo.
                        </div>


                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git branch
                    </div>


                    <div id="card2">

                        <div id="highlight plaintext">
                            #13-list-branches
                        </div>
                    </div>
                    <div id="highlight plaintext"></div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git checkout -b branch_name


                    </div>

                    <div id="card2">
                        <div id="highlight plaintext">
                            #14-create-a-branch-in-git-and-switch-to-it-immediately
                        </div>
                        <div id="highlight plaintext">You can add a commit message without opening the editor. This
                            command lets you only specify a
                            short summary for your commit message.
                        </div>


                    </div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git merge branch_name


                        <div id="card2">

                            <div id="highlight plaintext">
                                #15-merge-two-branches
                            </div>
                        </div>
                        <div id="highlight plaintext"></div>
                    </div>
                </div>
                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git add remote https://repo_here
                    </div>


                    <div id="card2">
                        <div id="highlight plaintext">
                            #16-add-a-remote-repository-in-git
                        </div>
                        <div id="highlight plaintext">This command shows the commit history for the current repository.
                        </div>


                    </div>
                </div>
                <div id="highlight plaintext"></div>

                <p></p>


                <div id="card">
                    <div id="highlight plaintext">git clone
                    </div>


                    <div id="card2">
                        <div id="highlight plaintext">#17 This command returns the current status of the repo. If a file
                            is in the staging area, but not committed, it shows, with git status.
                        </div>


                    </div>
                </div>

                <div id="highlight plaintext"></div>


                <p></p>

                <div id="card">
                    <div id="highlight plaintext">git pull
                    </div>


                    <div id="card2">
                        <div id="highlight plaintext">
                            #18-pull-changes-to-a-remote-repo
                        </div>
                        <div id="highlight plaintext">This command expects a commit message to explain why the file was
                            deleted.
                        </div>


                    </div>
                </div>

                <div id="highlight plaintext"></div>

                <p></p>

                <div id="card">
                    <div id="highlight plaintext">git push
                    </div>

                <div id="card2">
                    <div id="highlight plaintext">
                        #19-push-changes-to-a-remote-repo
                    </div>
                    <div id="highlight plaintext">This command stages the changes, then it expects a commit message.
                    </div>
                    <div id="highlight plaintext">After committing your changes, the next thing you want to do is send your
                        changes to the remote
                        server. Git push uploads your commits to the remote repository.
                    </div>
                </div>

                </div>

                <p></p>

                <div id="card">
                    <div id="highlight plaintext">git push -f
                    </div>

                    <div id="card2">
                <div id="highlight plaintext">force push:
                </div>
                    </div>
                </div>

                <p> </p>

                <div id="card">
                    <div id="highlight plaintext">git rebase branch_name_here


                </div>
                <div id="card2">
                    <div id="highlight plaintext">#20-how-to-use-git-rebase</div>

                </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
