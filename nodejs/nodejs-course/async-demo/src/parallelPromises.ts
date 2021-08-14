const p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Async operation 1...')
        resolve(1)
    }, 2000)
})

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Async operation 2...')
        resolve(2)
    }, 2000)
})

// create a promise that is resolved when all of the given promises are resolved / rejected
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log('Error', error.message))

// resolve when first promise is resolved / rejected
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(error => console.log('Error', error.message))
