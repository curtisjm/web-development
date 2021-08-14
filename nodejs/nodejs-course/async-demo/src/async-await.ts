// getUserP(1)
//     .then(user => getRepositoriesP(user.githubUsername))
//     .then(repos => getCommitsP(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(error => console.log('Error', error.message))

async function displayCommitsAA() {
    try {
        const user = await getUserAA(1)
        const repos = await getRepositoriesAA(user.githubUsername)
        const commits = await getCommitsAA(repos[0])
        console.log(commits)
    } catch (error) {
        console.log('Error', error)
    }
}
displayCommitsAA()

interface User {
    id: number
    githubUsername: string
}

function getUserAA(id: number) {
    return new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...')
            resolve({ id: id, githubUsername: 'mosh' })
        }, 2000)
    })
}

function getRepositoriesAA(username: string) {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...')
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })
}

function getCommitsAA(repo: string) {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting commits...')
            resolve(['initial commit', 'add stuff', 'bug fixes'])
        }, 2000)
    })
}
