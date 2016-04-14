var app = angular.module("myApp", []);

app.factory('testModel' , [ function () {
	return {
		proc_name : '',
		action : '',
		template : '',
		generate : ''
	};
}])