(function(){
	'use strict';

	angular.module('app', ['ngRoute'])
		.constant('API_KEY', 31415926)
		.config(configModule)
		.run(initModule);

	function configModule($routeProvider, API_KEY){
		console.log('config app module');
		console.log('config app module API_KEY=' + API_KEY);
	}

	function initModule(){
		console.log('run app module');
	}
})();