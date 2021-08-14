// synchronous
//      console.log('Before')
//      const user = getUser(1)
//      const repos = getRepositories(user.githubUsername)
//      const commits = getCommits(repos[0])
//      console.log('After')

/* asynchronous callbacks ----------------------------------------------------------------------- */

console.log('Before')
getUser(1, user => {
    console.log('User', user)
    // get repos from this user
    getRepositories(user.githubUsername, repos => {
        console.log('Repos', repos)
        getCommits(repos[0], commits => {
            console.log('Commits', commits)
        })
    })
})
console.log('After')

/* named functions ----------------------------------------------------------------------- */

console.log('Before')
getUser(1, getRepositoriesHelper)
console.log('After')

function getRepositoriesHelper(user: User) {
    getRepositories(user.githubUsername, getCommitsHelper)
}

function getCommitsHelper(repos: string[]) {
    getCommits(repos[0], displayCommits2)
}

function displayCommits2(commits: string[]) {
    console.log(commits)
}

/* promises ----------------------------------------------------------------------- */


/* ----------------------------------------------------------------------- */

interface User {
    id: number
    githubUsername: string
}

function getUser(id: number, callback: (user: User) => void) {
    setTimeout(() => {
        console.log('Reading a user from database...')
        callback({ id: id, githubUsername: 'mosh' })
    }, 2000)
}

function getRepositories(
    username: string,
    callback: (repos: string[]) => void
) {
    setTimeout(() => {
        console.log('Calling GitHub API...')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}

function getCommits(repo: string, callback: (commits: string[]) => void) {
    setTimeout(() => {
        console.log('Getting commits...')
        callback(['initial commit', 'add stuff', 'bug fixes'])
    }, 2000)
}
