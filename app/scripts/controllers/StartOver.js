app.controller("StartOver", function($scope){
	$scope.Options = [
		{name: 'Yes'},
		{name: 'No'}
	];

	console.log($scope.Options);
});