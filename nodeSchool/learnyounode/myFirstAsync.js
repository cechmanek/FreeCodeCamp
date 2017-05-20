
var fs = require('fs');

var fileName = process.argv[2]; // read in file name when running progrfileContent.toString().split('\n').length - 1am

fs.readFile(fileName, function(err, contents)
	{
		if (err){
		return console.log(err);
		}

		var lines = contents.toString().split('\n').length - 1;
		console.log(lines);
	});

/*  defining a function within the parameters of fs.readFile()
	we could have also defined a function and then just passed the name
	function myCallBackFucntion(err, contents){
		if (err){
		return console.log(err)
		}

		var lines = contents.toString().split('\n').length - 1
		console.log(lines)
	}

	fs.readFile(fileName, myCallBackFunction)
*/