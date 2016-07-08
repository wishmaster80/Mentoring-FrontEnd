(function(){
	angular.module('app')
		.controller('appCtrl', appController);

	appController.$inject = ['$scope', 'userSrv'];

	function appController($scope, user){
		$scope.isFeature = true;
		$scope.isParadise = false;
		$scope.isCar = false;

		$scope.selectFeature = function(id){
			toggleFeatures(id);
		};

		$scope.$watch(user.checkLogin, function(isLogon){
			if(!isLogon){
				toggleFeatures(-1);
			}
		});

		function toggleFeatures(id){
			if(id == -1){
				$scope.isFeature = true;
				$scope.isParadise = false;
				$scope.isCar = false;
			}else if(id == 12){
				$scope.isFeature = false;
				$scope.isParadise = true;
				$scope.isCar = false;
			}else if(id == 22){
				$scope.isFeature = false;
				$scope.isParadise = false;
				$scope.isCar = true;
			}
		}
	}
})();