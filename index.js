var Models = require('./models.js');
var Algoritmo = require('./algoritmo.js');



var fs = require('fs');

var nameFile = null;
nameFile = process.argv[3];

if(nameFile != null){
	nameFile = process.env.NFILE;
}else{
	nameFile = 'a_example.in'; //Name File
}
//const nameFile = require('nameFile');
console.log('Start');
var archivo = fs.readFileSync(nameFile, 'utf-8');
var riderList = [];
var conf = [];

	matrix = archivo.split("\n");
	conf = matrix[0].split(" ");

	var Game = new Models.Game(parseInt(conf[0]),parseInt(conf[1]),parseInt(conf[2]),parseInt(conf[3]),parseInt(conf[4]),parseInt(conf[5]));

	var line = 1;
	for(i = 0; i < Game.rides; i++){
		var maEp = matrix[line].split(' ');
		riderList[parseInt(line)] = new Models.Ride(new Models.Location(parseInt(maEp[0]),parseInt(maEp[1])),new Models.Location(parseInt(maEp[2]),parseInt(maEp[3])),parseInt(maEp[4]),parseInt(maEp[5]), parseInt(line));
		line++;
	}

	console.log(Game);
	console.log(riderList);




resultText('Test');

//Lista de car vs riders
function resultText(message){
	//Car - Ride
	var fs = require('fs');
	fs.writeFile('./test.in', message, function(err){
		if(err){
			return console.log(err);
		}
	});
}
