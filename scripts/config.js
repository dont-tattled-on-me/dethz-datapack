let fs = require('fs')

let exportName = 'dethz-1.20.1'

let sourceFolder = 'src/'
let exportFolder = 'dist'

const fileVersion = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`, 'utf-8')).version

// Pls Don't touch me :(
let outputSource = exportFolder + '/' + exportName + '-v.' + fileVersion + '.zip'

module.exports = {
  exportName,
  sourceFolder,
  exportFolder,
  outputSource
}