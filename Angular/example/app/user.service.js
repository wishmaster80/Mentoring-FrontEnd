(function(){
	'use strict';

	angular.module('app')
		.service('userSrv', userService);

	function userService(){
		console.log('user service app module');

		var user = {
			name: '',
			apps: []
		};

		this.checkLoginUser = function(){
			return user.name != '';
		};

		this.logon = function(){
			user.name = 'Nail Green';
		};

		this.logout = function(){
			user.name = '';
		};

		this.getUserName = function(){
			return user.name;
		};

		this.addApp = function(app){
			console.log("user.name " + user.name);
			console.log("app " + app);
			if(user.name && app){
				if(!getUserAppById(app.id)){
					console.log("app22 " + user.apps.length);
					user.apps.push(app);
					console.log("app33 " + user.apps.length);
				}
			}
		};

		this.getApps = function(){
			return user.apps;
		};

		this.addAppItem = function(appId, item){
			var app = getUserAppById(appId);
			if(app && item){
				var isItem = getAppItem(app, item.id);
				if(!isItem){
					app.items.push(item);
				}
			}
		};

		var getUserAppById = function(id){
			var app;
			for(var i = 0, len = user.apps.length; i < len; i++){
				if(user.apps[i].id === id){
					app = user.apps[i];
				}
			}
			return app;
		};

		var getAppItem = function(app, id){
			for(var i = 0, len = app.items.length; i < len; i++){
				if(app.items[i].id == id){
					return true;
				}
			}
			return false;
		};

		return {
			logon: this.logon,
			logout: this.logout,
			checkLogin: this.checkLoginUser,
			getUserName: this.getUserName,
			addApp: this.addApp,
			getApps: this.getApps,
			addAppItem: this.addAppItem
		};
	}
})();
