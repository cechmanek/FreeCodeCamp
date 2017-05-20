process.argv; // read in from command line when program is run

var total = 0;

for (var i=0; i<process.argv.length-2; i++){
	total += Number(process.argv[i+2]);
}

console.log(total);