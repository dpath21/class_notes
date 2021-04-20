// Git is a version control system designed to keep a chronological timeline of all your code changes*// 

//to travel file system in terminal:
// cd name_of_folder -> moves you down
// cd .. -> moves you up
// ls -> lists items inside existing folder
// pwd -> specifies directory path you're currently in

// to initiate a git repository
// git init

// Staging files for a commit - a commit boxes all of your changes 
// git add <file_name> OR 'git add . ' == this will pull everything from RIGHT here (as opposed to ' .. ' where it goes one file up)

// git status = gives you status of your repository, tells you commits and untracked files

//the repository is the main folder you are tracking; there will be sub folders that will also be tracked

// git commit -m "your commit message here" -- the whole point is to have a reference to your work chronologically; leave yourself a short yet comprehensive description/message

// if you modify the code itself, add lines; git is going to track changes so it will show you that it was modified so you have to re "git add ."

// git log will show you all your commits

//to commit your changes, run the following command: 
// git commit -m "Your commit message here"

// new note

// modification

// go to github.com and click CREATE REPOSITORY (OR ADD NEW)
// name repository, leave it public, keep all other options unselected
// click create repository
// then we copy th HTTPS url provided (end with .git)
// then go back to VS code, link local with remote by typing 
// "GIT REMOTE ADD ORIGIN <paste the link>"
// to push the remote repository:
// git push origin master 

// one last note -- make sure you save your files in VSC before committing!


