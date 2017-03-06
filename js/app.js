var app = angular.module('cafeNomad', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider

		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/admin', {
			controller: "AdminController",
			templateUrl: "views/admin.html"
		})
		.otherwise({
			redirectTo: '/'
		});

});
