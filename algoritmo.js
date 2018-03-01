var cars = [];
var riders = [];

//Inicialmente son todos
var emptyCars = [];
var emptyRiders = [];

//
var score = 0;
var actualScore = 0;


var totalTime = 10;
var actualTime =0;

var move = function(totalTime,cars,riders,score,actualScore,actualTime){
  
  var assignations = getAsignation(cars,riders);

  





  if(actualTime <=totalTime){
    
    cars.forEach(function(car){
      
      if(car.isBusy()){
        var score = car.move();
        if(score){
          actualScore += score;
        }
      } 
      var bestRide = getBestRide(riders,cars);
      car.assignRide(bestRider);
    });
    
    return move(totalTime,cars,riders,score,actualScore,actualTime++);
    
    
    //Recursivo
  } else {
    return actualScore;
  }
  


  var solution {
    cars: [],
    rides: [],
    score : 0,
    steps : 10,
    //assigments : [a => 1, b => 2]

    getChilds: function(){

      Solution = [{
        cars = [{a,1},{b,2}],
        rides = [3],
        score : 0,
        steps : 10,
        actualStep : 1,
      },{
        cars = [{a,2},{b,1}],
        rides = [3],
        score : 0,
        steps : 10,
        actualStep : 1,
      }]
      cars.forEach(function(car){
        rides.forEach(function(ride)){

        }
      });
    }
  }


  var play = function(solution){
    //sumar 1 al time
    var solutions = solution.getChilds();
    var scoreChild;
    if(solutions){
      solutions.forEach(function(solution){
        
        scoreChild = play(solution);
        if(solution.score < score.Child){
          solution.score = score.Child;
        }
      });
    } else {
      return solution.score;
    }
  }



}



var