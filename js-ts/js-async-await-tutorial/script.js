function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log('Making request to ' + location)
        if(location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve('Extra information: ' + response)
    })
}

// use promises to make request
makeRequest('Google').then(response => {
    console.log('Response received')
    return processRequest(response)
// chain then statements after response
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

// async function with an await inside that does the same thing as the promise only syntax
async function doWork() {
    // use try catch to handle any errors with the promise
    try {
        // await says that the code should wait for this code to finish before executing the next thing
        const response = await makeRequest('Google')
        console.log('Response received')
        const processedResponse = await makeRequest(response)
        console.log(processedResponse)
    // catch will be used if promise rejects instead of resolves
    } catch(err) {
        console.log(err)
    }
}
doWork()