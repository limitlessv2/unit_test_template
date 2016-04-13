app.controller("DropdownList", function($scope){
	$scope.ProcedureList = [
		{name: 'Unit_Test1'},
		{name: 'Unit_Test2'}
	];

	$scope.selectedItem;

	console.log($scope.ProcedureList);

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		console.log($scope.selectedItem);
	}

});