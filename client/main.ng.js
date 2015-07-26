angular
	.module('myApp', [
		"angular-meteor",
		'ui.router',
		'app.main'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	})
	.run(function($rootScope, $state) {
		//$state.go('main');	
	});