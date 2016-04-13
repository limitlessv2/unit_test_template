var app = angular.module('app', []);

app.controller('DropdownList', function($scope, $http) {
	$http.get('http://localhost:8080/storedProcedures.json').success(function(data) {
		$scope.storedProcedureList = data;
	});
});