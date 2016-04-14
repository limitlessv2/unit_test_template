app.controller("StartOver", function($scope, testModel){
	$scope.Options = [
		{name: 'Yes'},
		{name: 'No'}
	];

	//console.log($scope.Options);
	
	$scope.selectedItem;

	$scope.dropboxselectedItem = function(item) {
		if (item.name == 'Yes'){
			console.log('should be overwritten');
			testModel.proc_name = '';
			testModel.action = '';
			testModel.template = '';
			testModel.generate = '';
		}
		
		$scope.selectedItem = item;
		//console.log($scope.selectedItem);

	}
});