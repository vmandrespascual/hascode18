
var Ride = function(st, ed, earl, last) {

	this.start = st; //location instance
	this.finish = ed; //location instance
	this.earliest = earl;
	this.latest = last;
	this.car = null;
}

Ride.prototype.assignRide = function(car) {
	car.currentTrip = this;
	this.car = car;
}


var Location = function(a, b) {
	this.x = a;
	this.y = b;
}


var Car = function() {

	this.location = new Location(0,0);
	this.currentTrip = null;
}

Car.protoype.isBusy = function() {
	return this.currentTrip != undefined;
}


var Game = function(rows, cols, cars, rides, bonus, steps) {

	this.rows = rows;
	this.cols = cols;
	this.cars = cars;
	this.rides = rides;
	this.bonus = bonus;
	this.steps = steps;
}

module.exports.Car = Car;
module.exports.Ride = Ride;
module.exports.Location = Location;
module.exports.Game = Game;