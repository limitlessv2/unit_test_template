app.controller("AddTest", function($scope){
	$scope.Options = [
		{name: 'Yes'},
		{name: 'No'}
	];

	console.log($scope.Options);
});