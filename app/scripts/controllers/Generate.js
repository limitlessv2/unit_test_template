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
		var data = '{ "proc" ' +  ' : "' + testModel.proc.name+ '", ' +
						'"action" ' +  ': "' + testModel.action.name+ '", ' +
						'"template" ' +  ': "' + testModel.template.name+ '", ' +
						'"generate" ' +  ': "' + testModel.generate.name+ '"'
					+ " }" ;
		//var data = angular.toJson(testModel);
		console.log(data);
		$http({
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		data: data,
		url : 'http://localhost:8080/generateTest'
		}).then(function successCallback(response){
			console.log("success");
			console.log(response);
			//console.log('tests returned');
			console.log(response["data"]["pre"]);
			console.log(response["data"]["test"]);
			console.log(response["data"]["post"]);
			//console.log(response["data"]["list"].test);
			//console.log(response["data"]["list"].post);
			//console.log('no error');
		}, function errorCallback(response){
			console.log(response);
			console.log('error');

		});
	}
});