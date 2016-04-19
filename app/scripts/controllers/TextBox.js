app.controller("TextBox", function($scope, testModel){
	
	$scope.FormC = "";

	$scope.$watch(
		function(scope){
			return testModel.proc;
		},
		function handleNameChange(newValue, oldValue){
			testModel.proc = newValue;
			$scope.FormC = newValue;
			//console.log(testModel.proc);
		}
	);
});