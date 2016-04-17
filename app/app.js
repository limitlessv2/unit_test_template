var app = angular.module("myApp", []);

app.factory('testModel' , [ function () {
	return {
		proc : '',
		action : '',
		template : '',
		generate : ''
	};
}]);