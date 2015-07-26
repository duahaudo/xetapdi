angular
	.module('app.main', [
		'main.controller'
	])
	.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
		var baseUrl = 'client/modules/main/views/';
		$stateProvider
			.state('main', {
				url: '/',
				views: {
					'footer': {
						templateUrl: baseUrl + 'footer.ng.html'
					},
					'header': {
						templateUrl: baseUrl + 'header.ng.html'
					},
					'content': {
						templateUrl: baseUrl + 'content.ng.html'
					}
				}
			});
	})
	.run(function($rootScope) {
		
	});