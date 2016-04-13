app.controller("Save", function($scope){
	$scope.Options = [
		{name: 'Export'}
	];

	console.log($scope.Options);
	
	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		console.log($scope.selectedItem);
	}
});