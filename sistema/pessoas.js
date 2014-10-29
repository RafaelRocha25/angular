var myModule = angular.module('pessoas', ['ngRoute'])

myModule.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when('/', {templateUrl: 'listar.html'})
		.when('/pessoa/adicionar', {
				templateUrl: 'adicionar.html', 
				controller: 'CtrlAdicionar'});
});
	 		
myModule.controller('CtrlPessoas', ['$scope', function($scope) {
	
	$scope.pessoas = [
		{nome: "Maria", cidade: "Sao Paulo"},
		{nome: "Pedro", cidade: "Fortaleza"},
		{nome: "Cleber", cidade: "Rio de Janeiro"},
		{nome: "Rafael", cidade: "Parnaiba"},
		{nome: "Weslet", cidade: "Joao Pessoa"},	
	];	
	
}]);

myModule.controller('CtrelAdicionar', ['$scope', function ($scope) {

	$scope.add = function ($scope) {

		if($scope.pessoa.nome && $scope.pessoa.cidade) {					
			$scope.pessoas.push({
			nome: $scope.pessoa.nome,
			cidade: $scope.pessoa.cidade});
		} else {
			alert("Todos os campos obrigatórios!");
		}
		$scope.vNome = "";
		$scope.vCidade = "";
		
	};
}]);
