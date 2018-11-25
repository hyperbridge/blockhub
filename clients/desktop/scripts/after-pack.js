const execSync = require('child_process').execSync
const os = require('os')
const fs = require('fs')
const p = require("path")

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = p.join(path, file)
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

const replaceTextInFile = function(file, originalText, replacementText) {
    fs.readFile(p.join(file), 'utf8', function (err,data) {
        if (err) {
            return console.log(err)
        }
        var result = data.replace(originalText, replacementText)

        fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.log(err)
        })
    })
}

exports.default = async function (context) {
    deleteFolderRecursive('./dist/packages/win-unpacked/resources/app/node_modules/scrypt')
    replaceTextInFile('./dist/packages/win-unpacked/resources/app/node_modules/scrypt.js/node.js', "require('scrypt')", "require('scrypt-js')")
}