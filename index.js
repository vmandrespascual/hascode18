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
console.log('Inicio');
var archivo = fs.readFileSync(nameFile, 'utf-8');
var riders = [];
var conf = [];

var matrixValue = [];

	//console.log(archivo.slice(0, c+2));
	matrix = archivo.split("\n");
	conf = matrix[0].split(" ");

	var Game = new Models.Game(conf[0],conf[1],conf[2],conf[3],conf[4],conf[5]);

	var linea = 1;
	for(i = 0; i < Game.rides; i++){
		var maEp = matrix[linea].split(' ');
		console.log(maEp);
		riders[linea] = new Models.Ride(new Models.Location(maEp[0],maEp[1]),new Models.Location(maEp[2],maEp[3]),maEp[4],maEp[5], linea);
		linea++;
	}

	console.log(Game);
	console.log(riders);