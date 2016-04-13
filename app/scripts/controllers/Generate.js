app.controller("Generate", function($scope){
	$scope.Options = [
		{name: 'Test'},
		{name: 'Temp table'}
	];

	console.log($scope.Options);
});