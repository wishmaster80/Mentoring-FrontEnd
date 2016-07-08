(function(){
	'use strict';

	angular.module('app')
		.service('paradiseSrv', paradiseService);

	function paradiseService(){
		console.log('paradise service app module');

		var paradise = {
			id: 12,
			picture: '',
			title: 'Paradise Service',
			items: [
				{ id: 1, picture: '', title: 'Coca-Cola', description: 'description description description description description description' },
				{ id: 2, picture: '', title: 'Fanta', description: 'description description description description description' },
				{ id: 4, picture: '', title: 'Beer', description: 'description description description description description description description' },
				{ id: 5, picture: '', title: 'Pepsi', description: 'description description description description description description' },
				{ id: 8, picture: '', title: 'Aqua', description: 'description description description description description description description' }
			]
		};

		this.getParadise = function(){
			return paradise;
		};

		return {
			getParadise: this.getParadise
		};
	}
})();
