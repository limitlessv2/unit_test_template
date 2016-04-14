app.controller("Generate", function($scope, testModel){
	$scope.Options = [
		{name: 'Test'},
		{name: 'Temp table'}
	];

	console.log($scope.Options);
	
	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		testModel.generate = item;
		console.log($scope.selectedItem);
		console.log(testModel.generate);
	}
});