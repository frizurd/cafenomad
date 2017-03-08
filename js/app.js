var app = angular.module('cafeNomad', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/cafe/:id', {
			controller: 'CafeDetailController',
			templateUrl: 'views/cafe-detail.html'
		})
		.otherwise({
			redirectTo: '/'
		});

});
