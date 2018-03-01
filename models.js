
var Ride = function(st, ed, earl, last) {

	this.start = st;
	this.finish = ed;
	this.earliest = earl;
	this.latest = last;
}

var Location = function(a, b) {
	this.x = a;
	this.y = b;
}


var Car = function() {

	this.location = new Location(0,0);
	this.isBusy = false; 
}


module.exports.Car = Car;
module.exports.Ride = Ride;
module.exports.Location = Location;