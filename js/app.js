var app = angular.module('cafeNomad', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/cafe', {
			controller: 'CafeDetailController',
			templateUrl: 'views/cafe-detail.html'
		})
		.otherwise({
			redirectTo: '/'
		});

});
