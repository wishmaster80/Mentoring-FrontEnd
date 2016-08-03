(function(){
	'use strict';

	angular.module('app')
		.directive('userApps', userApps);

	userApps.$inject = ['userSrv'];

	function userApps(userSrv){
		return {
			restrict: 'AE',
			templateUrl: 'app/user-apps.html',
			scope: {},
			link: function(scope, elem, attrs){
				scope.apps = userSrv.getApps();

				scope.$watch(userSrv.getApps, function(apps){
					scope.apps = apps;
				})
			}
		}
	}
})();
