(function(){
	'use strict';

	angular.module('app')
		.service('carSrv', carService);

	function carService(){
		console.log('car service app module');

		var car = {
			id: 22,
			picture: '',
			title: 'Car Service',
			items: [
				{ id: 1, picture: '', title: 'Ford', color: 'Red', description: 'description description description' },
				{ id: 2, picture: '', title: 'VW', color: 'Black', description: 'description description' },
				{ id: 3, picture: '', title: 'AUDI', color: 'White', description: 'description description description' },
				{ id: 4, picture: '', title: 'BMW', color: 'Green', description: 'description description description description' },
				{ id: 5, picture: '', title: 'Honda', color: 'Black', description: 'description description description' },
				{ id: 6, picture: '', title: 'UAZ', color: 'Black', description: 'description' },
				{ id: 7, picture: '', title: 'LADA', color: 'White', description: 'description description' },
				{ id: 8, picture: '', title: 'BelAZ', color: 'Red', description: 'description description description description' }
			]
		};

		this.getCar = function(){
			return car;
		};

		return {
			getCar: this.getCar
		};
	}
})();
