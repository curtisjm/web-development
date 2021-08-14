// create a promise that is already resolved
const promise1 = Promise.resolve({ id: 1 })
promise1.then(result => console.log(result))

// create a promise that is rejected
const promise2 = Promise.reject(new Error('Reason for rejection...'))
promise2.catch(error => console.log(error))
