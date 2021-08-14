// getCustomer(1, (customer: Customer) => {
//     console.log('Customer: ', customer)
//     if (customer.isGold) {
//         getTopMovies(movies => {
//             console.log('Top movies: ', movies)
//             sendEmail(customer.email, movies, () => {
//                 console.log('Email sent...')
//             })
//         })
//     }
// })

interface Customer {
    id: number
    name: string
    isGold: boolean
    email: string
}

async function notifyCustomer() {
    try {
        const customer = await getCustomer(1)
        console.log('Customer: ', customer)
        if (customer.isGold) {
            const movies = await getTopMovies()
            console.log('Top movies: ', movies)
            await sendEmail(customer.email, movies)
            console.log('Email sent...')
        }
    } catch (error) {
        console.log('Error', error)
    }
}
notifyCustomer()

function getCustomer(id: number) {
    return new Promise<Customer>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email',
            })
        }, 4000)
    })
}

function getTopMovies() {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2'])
        }, 4000)
    })
}

function sendEmail(email: string, movies: string[]) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined)
        }, 4000)
    })
}
