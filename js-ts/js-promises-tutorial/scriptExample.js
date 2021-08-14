let p = new Promise((resolve, reject) => {
    // this is what is promised
    let a = 1 + 1
    // if it succeeds or fails
    if(a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// then runs after a resolve (success)
p.then((message) => {
    console.log('This is in the then ' + message)
// catch runs after reject (failure)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})