(function(){
	'use strict';

	angular.module('app')
		.directive('login', loginDirective);

	loginDirective.$inject = ['userSrv'];

	function loginDirective(user){
		return {
			restrict: 'AE',
			//templateUrl: 'app/login.html',
			template: '<div><p ng-show="userName">Welcom <strong>{{userName}}</strong>!<span> <a href="" ng-click="logout()">Log Out</a></span></p>'
					+ '<p ng-hide="userName"><a href="" ng-click="login()">Log In</a></p></div>',
			scope: {},
			link: function(scope, elem, attrs){
				scope.userName = user.getUserName();

				scope.login = function(){
					user.logon();
				};

				scope.logout = function(){
					user.logout();
				};

				scope.$watch(user.getUserName, function(name){
					scope.userName = name;
				});
			}
		};
	}
})();
