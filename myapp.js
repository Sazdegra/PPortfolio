var app = angular.module('myApp', []);

app.controller('ctrlForm', function($scope){
	$scope.nome = ' ';
	$scope.email = ' ';
	$scope.titolo = '';
	$scope.commento = '';

	$scope.send = function() {
		$scope.success = false;
		$scope.error = false;
		if($scope.form.$valid){
			$scope.success = true;
		} else {
			$scope.error = true;
		}	
	}
});

app.controller('ctrlHome', function($scope, $interval){
	$scope.hopper = "hopper.jpg";
	$scope.snake = "snake.jpg";

	$interval(function(){
		$scope.hopper = "hopper1.png";
	}, 3000);
	$interval(function(){
		$scope.hopper = "hopper.jpg";
	}, 3005);

	$interval(function(){
		$scope.snake = "snake1.PNG";
	}, 5000);
	$interval(function(){
		$scope.snake = "snake.jpg";
	}, 5005);


	//mouseover
	$scope.glitchOn = function(){
		$scope.hopper = "hopper1.PNG";
	};
	$scope.glitchOff = function(){
		$scope.hopper = "hopper.jpg";
	};
	$scope.glitch2On = function(){
		$scope.snake = "snake1.PNG";
	};
	$scope.glitch2Off = function(){
		$scope.snake = "snake.jpg";
	};


});
