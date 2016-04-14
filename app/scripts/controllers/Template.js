app.controller("Template", function($scope, testModel){
	$scope.Options = [
		{name: 'Yes'},
		{name: 'No'}
	];

	//console.log($scope.Options);

	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		testModel.template = item;
		//console.log($scope.selectedItem);
		//console.log(testModel.template);
	}
});