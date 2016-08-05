(function(){
	angular.module('app')
		.controller('appCtrl', appController);

	appController.$inject = ['$scope', 'userSrv', '$location'];

	function appController($scope, user, $location){
		console.log('run');
	
		
		$scope.$watch(user.checkLogin, function(isLogon){
			if(!isLogon){
			 $location.path('/login');
		 }
		});
			
		// $scope.isFeature = true;
		// $scope.isParadise = false;
		// $scope.isCar = false;

		$scope.selectFeature = function(id){
		 toggleFeatures(id);
		};

		// $scope.$watch(user.checkLogin, function(isLogon){
			// if(!isLogon){
				// toggleFeatures(-1);
			// }
		// });

		function toggleFeatures(id) {
		    console.log(user.getApps().length)
			if(id == -1){
				$location.path('/f');
			}else if(id == 12){
				$location.path('/p');
			}				
			else if(id == 22){
				$location.path('/c');
			}
		}
	}
})();