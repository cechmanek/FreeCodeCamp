/* create a program that prints a list of files in a given 
directory filtered by the extension of the files
*/

var fs = require('fs');

var fileName = process.argv[2];
var extension = process.argv[3]; // not sure if this is correct