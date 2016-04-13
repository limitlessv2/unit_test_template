app.controller("Action", function($scope){
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
		console.log($scope.selectedItem);
	}
});