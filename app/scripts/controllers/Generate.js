app.controller("Generate", function($scope){
	$scope.Options = [
		{name: 'Test'},
		{name: 'Temp table'}
	];

	console.log($scope.Options);
	
	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		console.log($scope.selectedItem);
	}
});