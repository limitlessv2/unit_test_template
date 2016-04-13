app.controller("DropdownList", function($scope){
	$scope.ProcedureList = [
		{name: 'Unit_Test1'},
		{name: 'Unit_Test2'}
	];

	console.log($scope.ProcedureList);
});