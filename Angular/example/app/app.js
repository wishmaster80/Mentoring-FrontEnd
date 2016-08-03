(function(){
	'use strict';

	angular.module('app', ['ngRoute'])
		.constant('API_KEY', 31415926)
		.config(configModule)
		.run(initModule);
		
		
		
	function configModule($routeProvider, API_KEY){
		console.log('config app module');
		console.log('config app module API_KEY=' + API_KEY);
		$routeProvider.when('/xxx', {
							templateUrl: 'xxx.html',
							controller: 'appCtrl'
							
						})
						.when('/yyy', {
							templateUrl: 'yyy.html',
							controller: 'appCtrl'
							
						})
						.when('/login', {
							templateUrl: 'login.html',
						})
						.when('/f', {
							templateUrl: 'f.html'
						})
						.when('/p', {
							templateUrl: 'p.html'
						})
						.when('/c', {
							templateUrl: 'c.html'
						})							
	}

	function initModule(){
		
		console.log('run app module');
	}
})();