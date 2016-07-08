(function(){
	'use strict';

	angular.module('app')
		.directive('carApp', carApp);

	carApp.$inject = ['carSrv', 'userSrv'];

	function carApp(cars, userSrv){
		return {
			restrict: 'AE',
			//templateUrl: 'app/feature.html',
			template: '<div><h4>Cars:</h4><ul class="list-group"><li class="list-group-item" ng-repeat="item in items">'
            		+ '<div><h4>{{item.title}}</h4><p>{{item.description}}</p><p><button  type="button" class="btn btn-primary" ng-click="addItem(item.id)">Add</button></p>'
            		+ '</div></ul></div>',
			scope: {},
			link: function(scope, elem, attrs){
				scope.car = cars.getCar();
				scope.items = scope.car.items;

				scope.addItem = function(id){
					var item = getItem(id);
					if(item){
						userSrv.addAppItem(scope.car.id, item);
					}
				};

				var getItem = function(id){
					var item;
					for(var i = 0, len = scope.items.length; i < len; i++){
						if(scope.items[i].id == id){
							item = {
								id: scope.items[i].id,
								title: scope.items[i].title,
								description: scope.items[i].description
							};
						}
					}

					return item;
				};
			}
		};
	}
})();