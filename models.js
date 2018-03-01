var car = function() {

	this.location_x = 0;
	this.location_y = 0;
	this.isBusy = false; 
}


var ride = function(st, ed, earl, last) {

	this.start = st;
	this.finish = ed;
	this.earliest = earl;
	this.latest = last;
}


module.exports.car = car;
module.exports.ride = ride;