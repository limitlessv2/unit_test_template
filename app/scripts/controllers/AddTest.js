app.controller("AddTest", function($scope){
	$scope.Options = [
		{name: 'Yes'},
		{name: 'No'}
	];

	console.log($scope.Options);
	
	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		console.log($scope.selectedItem);
	}
});