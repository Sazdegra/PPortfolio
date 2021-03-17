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

	$interval(function(){
		$scope.pattern = $("#snakefoto").attr("src","foto/snake1.PNG");
		$scope.hopper = $("#hopperfoto").attr("src","foto/hopper1.PNG");
	}, 3000);
	$interval(function(){
		$scope.pattern = $("#snakefoto").attr("src","foto/snake.jpg");
		$scope.hopper = $("#hopperfoto").attr("src","foto/hopper.jpg");
	}, 3010);

	$scope.glitchOn = function(){
		$("#hopperfoto").attr("src","foto/hopper1.PNG");
	};
	$scope.glitchOff = function(){
		$("#hopperfoto").attr("src","foto/hopper.jpg");
	};
	$scope.glitch2On = function(){
		$("#snakefoto").attr("src","foto/snake1.PNG");
	};
	$scope.glitch2Off = function(){
		$("#snakefoto").attr("src","foto/snake.jpg");
	};

});
