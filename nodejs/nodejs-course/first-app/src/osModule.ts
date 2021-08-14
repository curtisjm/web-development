// docs: https://nodejs.org/api/os.html

// js version
// const os = require('os')

// ts version
import * as os from 'os'

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)