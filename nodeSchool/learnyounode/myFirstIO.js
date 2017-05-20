var fs = require('fs') // load and name a modulue (aka library)


var fileName = process.argv[2]; // read in file name when running program

var fileContent = fs.readFileSync(fileName);

var lines = fileContent.toString().split('\n').length - 1;// count number of new lines

console.log(lines); // print number of new lines

