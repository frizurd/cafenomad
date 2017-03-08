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
		.when('/cities', {
			controller: "CityController",
			templateUrl: "views/cities.html"
		})
		.when('/city/:city', {
			controller: "CityController",
			templateUrl: "views/city_detail.html"
		})
		.when('/admin', {
			controller: "AdminController",
			templateUrl: "views/admin.html"
		})
		.otherwise({
			redirectTo: '/'
		});

});
