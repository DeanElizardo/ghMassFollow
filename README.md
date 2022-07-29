# What am
A cheeky little script that runs from the command line. Quickly add a bunch of users to the list
of who you follow.

Requires Node.js 17.5 or later and npm.

# Installation and Configuration
Clone this repo and from the root of the clone run `npm install`.

Once installation is complete, you should create a file named `PAT.txt` in the root folder.

 `PAT.txt` should contain a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token).

 `contacts.json` should contain a comma-separated list of usernames you would like to follow.

# Usage
`node ghMassFollow <your_username>`

`<your_username>` should be replaced with the the username you use to login to GitHub.
