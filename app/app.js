/**
 * @ngdoc overview
 * @name timeslotapp
 * @description - Main module of the application used to configure application
 * @author - Poonam Gokani
 * # timeslotapp 
 * Main module of the application.
 */
var app = angular.module('timeslotapp', ['ui.router','angular-loading-bar']);

app.config(['$stateProvider','$urlRouterProvider',
	function ($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "templates/home.html"
			})
			.state('utilizeTimeSlot', {
				url: "/utilizetimeslot",
				templateUrl: "templates/utilizetimeslot.html"
			})			
	}
]);

app.run(function($rootScope, $state) {
	$rootScope.$state = $state;
});

/**
 * @ngdoc function
 * @name timeslot-list
 * @author Poonam Gokani
 * @description - Timeslot List Controller to listing available timeslot details
 * # timeslot-list
 * Controller of the timeslotapp
 */
app.controller('timeslot-list',function($scope,$state,$http,$filter,serviceTimeSlot){
	$scope.timeslotlist = {};	
	$http.get("http://localhost:8080/timeslot").success(function(response){
		if(response.error === 0){
			$scope.timeslotlist = response.timeSlotDetail;					
		}else{
			$scope.timeslotlist = [];
		}
	});	
	$scope.editTimeSlot = function($index){		
		serviceTimeSlot.setProperty($scope.timeslotlist[$index]);		
		$state.go('utilizeTimeSlot');

	};	
	
});


/**
 * @ngdoc function
 * @name timeslotapp.controller:utilize-timeslot
 * @author Poonam Gokani
 * @description - Utilize Timeslot Controller to handle functionality of update time slot details
 * # utilize-timeslot
 * Controller of the timeslotapp
 */
app.controller('utilize-timeslot',function($scope,$http,$state,serviceTimeSlot){
	$scope.timeslotdata = serviceTimeSlot.getProperty();		
	$scope.utilizeTimeSlot = function(){
		var payload = {
			"_id": $scope.timeslotdata._id,			
			"firstName":$scope.timeslotdata.firstName,
			"lastName":$scope.timeslotdata.lastName,
			"phoneNumber":$scope.timeslotdata.phoneNumber,
			"isUtilize":true,
		}		
		if($scope.timeslotdata.firstName!="" && $scope.timeslotdata.lastName!="" && $scope.timeslotdata.phoneNumber!=""){
			$http.put("http://localhost:8080/timeslot",payload).success(function(res){
				if(res.error == 0){
					$state.go("home");
				}else{
					
				}
			});
		}
	};
	$scope.cancel = function(){
		$state.go("home");
	};
});


/**
 * @ngdoc service
 * @name timeslotapp.serviceTimeSlot
 * @description - Service used to get and set property
 * # serviceTimeSlot
 * Service in the timeslotapp.
 */
app.service('serviceTimeSlot', function () {
	var property = [];
	return {
		getProperty: function () {
			return property;
		},
		setProperty: function(value) {
			property = value;
		}
	};
});