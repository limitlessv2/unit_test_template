app.controller("Generate", function($scope, $http, testModel){
	$scope.Options = [
		{name: 'Tests'},
		{name: 'Temp table'}
	];

	//console.log($scope.Options);
	
	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		testModel.generate = item;
		//console.log($scope.selectedItem);
		//console.log(testModel.generate);
		data = JSON.stringify(testModel);
		console.log(data);
		$http({
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		data: data,
		url : 'http://localhost:8080/generateTest'
		}).then(function successCallback(response){
			//console.log(response);
			console.log('no error');
		}, function errorCallback(response){
			//console.log(response);
			console.log('error');
		});
	}
});