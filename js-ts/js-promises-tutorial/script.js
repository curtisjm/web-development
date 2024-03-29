// function watchTutorialCallback(callback, errorCallback) {
//   let userLeft = false
//   let userWatchingCatMeme = false

//   if (userLeft) {
//     errorCallback({
//       name: 'User Left', 
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat' 
//     })
//   } else {
//     callback('Thumbs up and Subscribe')
//   }
// }

function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

// watchTutorialCallback(message => {
//   console.log(message)
// }, error => {
//   console.log(error.name + ' ' + error.message)
// })

watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})

// run all promises at the same time and wait for them all to complete
// pass an array of promises and return an array of messages
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages)
})

// do something as soon as one promise is completed
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => {
  console.log(message)
})