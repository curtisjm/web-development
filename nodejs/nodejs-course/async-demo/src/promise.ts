const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
        // reject(new Error('message'))
    }, 2000)
})

promise
    .then(result => console.log('Result', result))
    .catch(error => console.log('Error', error.message))

/* ------------------------------------------------------------- */

// getUser(1, user => {
//     console.log('User', user)
//     // get repos from this user
//     getRepositoriesP(user.githubUsername, repos => {
//         console.log('Repos', repos)
//         getCommitsP(repos[0], commits => {
//             console.log('Commits', commits)
//         })
//     })
// })

getUserP(1)
    .then(user => getRepositoriesP(user.githubUsername))
    .then(repos => getCommitsP(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(error => console.log('Error', error.message))

interface User {
    id: number
    githubUsername: string
}

function getUserP(id: number) {
    return new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...')
            resolve({ id: id, githubUsername: 'mosh' })
        }, 2000)
    })
}

function getRepositoriesP(username: string) {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...')
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })
}

function getCommitsP(repo: string) {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commits...')
            resolve(['initial commit', 'add stuff', 'bug fixes'])
        }, 2000)
    })
}
