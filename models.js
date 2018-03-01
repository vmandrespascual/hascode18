
var Ride = function(st, ed, earl, last, index) {

	this.start = st; //location instance
	this.finish = ed; //location instance
	this.earliest = earl;
	this.latest = last;
	this.index = index;
	this.car = null;
	this.points = 0;
}

Ride.prototype.assignRide = function(car) {
	car.currentTrip = this;
	this.car = car;
}

Ride.prototype.calculatePoints = function() {
	return this.points; //todo ride + bonus
}


var Location = function(a, b) {
	this.x = a;
	this.y = b;
}

Location.prototype.isSame = function(otherLoc) {
	return this.x == otherLoc.x && this.y == otherLoc.y;
}

var Car = function(index) {

	this.location = new Location(0,0);
	this.currentTrip = null;
	this.isPicked = false;
	this.completedRides = [];
	this.index = index;
}


Car.prototype.isBusy = function() {
	return this.currentTrip != undefined;
}

Car.prototype.move = function(ride) {

	if (this.currentTrip && this.isPicked) {
		this.moveTowardLoc(this.currentTrip.finish);
		this.currentTrip.points++;
	} else if (ride) {
		this.moveTowardLoc(ride.start);
	} else {
		throw 'Tell where to move';
	}

	if (this.currentTrip && this.location.isSame(this.currentTrip.finish)) {
		this.completedRides.push(this.currentTrip.index);
		return currentTrip.calculatePoints();
	}

	return null;
}


Car.prototype.moveTowardLoc = function(loc) {

	if (this.location.x > loc.x) {
		this.location.x--;
	} else if (this.location.x < loc.x) {
		this.location.x++;
	}

	if (this.location.y > loc.y) {
		this.location.y--;
	} else if (this.location.y < loc.y) {
		this.location.y++;
	}
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