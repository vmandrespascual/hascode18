
var Ride = function(st, ed, earl, last) {

	this.start = st; //location instance
	this.finish = ed; //location instance
	this.earliest = earl;
	this.latest = last;
	this.car = null;
	this.points = 0;
}

Ride.prototype.assignRide = function(car) {
	car.currentTrip = this;
	this.car = car;
}

Ride.prototype.calculatePoints = function() {
	return 0; //todo
}


var Location = function(a, b) {
	this.x = a;
	this.y = b;
}

Location.prototype.isSame = function(otherLoc) {
	return this.x == otherLoc.x && this.y = otherLoc.y;
}

var Car = function() {

	this.location = new Location(0,0);
	this.currentTrip = null;
	this.isPicked = false;
}
/*
Car.protoype.isBusy = function() {
	return this.currentTrip != undefined;
}*/

Car.protoype.move = function(ride) {
	if (this.currentTrip && this.isPicked) {
		//TODO move to this.currentTrip.finish
	} else if (ride) {
		//TODO move to ride.start
	} else {
		throw 'Tell where to move';
	}

	return this.currentTrip && this.location.isSame(this.currentTrip.finish) ?
			currentTrip.calculatePoints() : null;
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