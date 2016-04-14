app.controller("Action", function($scope,testModel){
	$scope.Options = [
		{name: 'Put'},
		{name: 'Get'},
		{name: 'Delete'},
		{name: 'Update'},
		{name: 'None'},
	];

	console.log($scope.Options);

	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		testModel.action = item;
		console.log($scope.selectedItem);
		console.log(testModel.action);
	}
});