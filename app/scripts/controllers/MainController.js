app.controller("MainController", function($scope, $http, testModel){
	
	//Dropdown
	$scope.selectedItem;

	//Input
	$scope.inputProc = "";

	//Action
	$scope.actionName = "";

	//Template
	$scope.template = "";

	//Dropdown
	$scope.ProcedureList = [
		{name: 'Unit_Test1'},
		{name: 'Unit_Test2'}
	];

	//Save
	$scope.save = "";

	//AddTest
	$scope.addTest = "";

	$scope.procedureSelected = function(item) {
		$scope.selectedItem = item;
		$scope.inputProc = item;
		testModel.proc = item;
	}
	
	//Input -- var
	$scope.$watch(
		function(scope){
			return $scope.inputProc;
		},
		function handleNameChange(newValue, oldValue){
			testModel.proc = newValue;
			$scope.inputProc = newValue;
			//console.log(testModel.proc);
		}
	);

	//Refresh button -- todo
	$scope.$watch(
		function(scope){
			return testModel.proc;
		},
		function handleNameChange(newValue, oldValue){
			testModel.proc = newValue;
			$scope.inputProc = newValue;
			//console.log(testModel.proc);
		}
	);

	//Action
	$scope.Actions = [
		{name: 'Put'},
		{name: 'Get'},
		{name: 'Delete'},
		{name: 'Update'},
		{name: 'None'},
	];

	$scope.actionSelected = function(item) {
		$scope.actionName = item.name;
		testModel.action = item.name;
	}

	//Template
	$scope.templateOptions = [
		{name: 'Yes'},
		{name: 'No'}
	];

	$scope.templateSelected = function(item) {
		$scope.template = item.name;
		testModel.template = item.name;
	}

	//Reset
	$scope.resetOptions = [
		{name: 'Yes'},
		{name: 'No'}
	];

	$scope.resetSelected = function(item) {
		//console.log(item);
		if(item.name === 'Yes'){
			//console.log('should be overwritten');
			testModel.proc = '';
			testModel.action = '';
			testModel.template = '';
			testModel.generate = '';
		}
	}

	//Generate
	$scope.generateOptions = [
		{name: 'Tests'},
		{name: 'Temp table'}
	];

	$scope.generateSelected = function(item) {
		testModel.generate = item.name;
		//console.log($scope.selectedItem);
		//console.log(testModel.generate);
		var data = '{ "proc" ' +  ' : "' + testModel.proc+ '", ' +
						'"action" ' +  ': "' + testModel.action+ '", ' +
						'"template" ' +  ': "' + testModel.template+ '", ' +
						'"generate" ' +  ': "' + testModel.generate+ '"'
					+ " }" ;
		//var data = angular.toJson(testModel);
		console.log(data);
		$http({
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		data: data,
		url : 'http://localhost:8080/generateTest'
		}).then(function successCallback(response){
			console.log("success");
			console.log(response);
			//console.log('tests returned');
			console.log(response["data"]["pre"]);
			console.log(response["data"]["test"]);
			console.log(response["data"]["post"]);
			//console.log(response["data"]["list"].test);
			//console.log(response["data"]["list"].post);
			//console.log('no error');
		}, function errorCallback(response){
			console.log(response);
			console.log('error');

		});
	}

	//Save
	$scope.saveOptions = [
		{name: 'Export'}
	];

	$scope.saveOp = function(item) {
		$scope.save = item.name;
	}

	//StartOver
	$scope.soOptions = [
		{name: 'Yes'},
		{name: 'No'}
	];

	$scope.soSelected = function(item) {
		if (item.name == 'Yes'){
			//console.log('should be overwritten');
			testModel.proc = '';
			testModel.action = '';
			testModel.template = '';
			testModel.generate = '';
		}
	}

	//AddTest
	$scope.atOptions = [
		{name: 'Yes'},
		{name: 'No'}
	];

	$scope.atSelected = function(item) {
		$scope.addTest = item.name;
		//console.log($scope.selectedItem);
	}
});