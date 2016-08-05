(function(){
	'use strict';

	angular.module('app')
		.directive('userMenu', userMenu);

	userMenu.$inject = ['userSrv'];

	function userMenu(userSrv){
		return {
			restrict: 'AE',
			//templateUrl: 'app/user-apps.html',
			template: '<div ng-show="isLogin"><h4>User Apps:</h4><ul class="list-group"><li ng-click="selectTab(app.id)" class="list-group-item" ng-repeat="app in apps">'
            		+ '<h5>{{app.title}}</h5><ul class="list-group"><li class="list-group-item" ng-repeat="item in app.items">{{item.title}}</li>'
            		+ '</ul></li><li ng-click="selectTab(-1)" class="list-group-item"><button type="button" class="btn btn-default btn-lg btn-block"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button></li></ul></div>',
			scope: {
				selectFeature: '&'
			},
			link: function(scope, elem, attrs){
				scope.isLogin = false;
				scope.apps = [];

				scope.selectTab = function(id){
					scope.selectFeature({id: id});
				};

				scope.$watch(userSrv.getApps, function(apps){				    
				    scope.apps =userSrv.checkLogin() ? apps : [];
				});

				scope.$watch(userSrv.checkLogin, function(isLogon){
					if(!isLogon){
						scope.isLogin = false;
					} else {
						scope.isLogin = true;
					}
				})
			}
		}
	}
})();
