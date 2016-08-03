(function(){
	'use strict';

	angular.module('app')
		.directive('featureApp', featureApp);

	featureApp.$inject = ['paradiseSrv', 'carSrv', 'userSrv'];

	function featureApp(paradises, cars, userSrv){
		return {
			restrict: 'AE',
			//templateUrl: 'app/feature.html',
			template: '<div><h4>Applications:</h4><ul class="list-group"><li class="list-group-item" ng-repeat="item in features">'
            		+ '<div><h4>{{item.app.title}}</h4><p><button  type="button" class="btn btn-primary" ng-click="addApp(item.app.id)">Add</button></p>'
            		+ '</div></ul></div>'
            		+ '<div ng-show="paradise"><h4>Paradise</h4></div>'
            		+ '<div ng-show="car"><h4>Car</h4></div>',
			scope: {},
			link: function(scope, elem, attrs){
				scope.features = [
					{ app: paradises.getParadise() },
					{ app: cars.getCar() }
				];

				scope.addApp = function(appId){
					console.log("addApp" + appId)
					var app = getApp(appId);
					console.log("app " + app)
					if(app){
						userSrv.addApp(app);
					}
				};

				var getApp = function(appId){
					var app;
					angular.forEach(scope.features, function(item){
						if(item.app.id === appId){
							app = {
								id: item.app.id,
								title: item.app.title,
								items: []
							};
						}
					});

					return app;
				};
			}
		};
	}
})();
