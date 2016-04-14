app.controller("DropdownList", function($scope, testModel){
	$scope.ProcedureList = [
		{name: 'Unit_Test1'},
		{name: 'Unit_Test2'}
	];

	$scope.selectedItem;

	console.log($scope.ProcedureList);

	$scope.dropboxselectedItem = function(item) {
		$scope.selectedItem = item;
		testModel.proc_name = item;
		console.log($scope.selectedItem);
		console.log(testModel.proc_name);
	}

});