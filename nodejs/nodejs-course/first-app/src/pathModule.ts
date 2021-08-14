// docs: https://nodejs.org/api/path.html

// js version
// const path = require('path')

// ts version
import * as path from 'path'

var pathObj = path.parse(__filename)

console.log(pathObj)
