// docs: https://nodejs.org/api/fs.html

import * as fs from 'fs'

// get files from current directory (synchronous version)
const files = fs.readdirSync('./')
console.log(files)

// async methods take a function as a parameter which node will call when this operation completes
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err)
    else console.log('Result', files)
})
