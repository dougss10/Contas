var app=angular.module('appContas',[]);
app.controller ('appContasCrtl', ['$scope', function($scope){
	/*angular.element(document).ready(function () {
		$scope.somarEntrada($scope.form);
		$scope.somarSaida($scope.form);
	});*/
	$scope.totalEntrada = 0;
	$scope.totalSaida = 0;

	
	$scope.mesAtual = moment().format("MMMM");
	$scope.form = [{
		data: "15/05/2016",
		descricao: "Album Fotos",
		valor: 115,
		categoria: false
	},{
		data: "15/06/2016",
		descricao: "Album Fotos",
		valor: 115,
		categoria: false
	},{
		data: "10/05/2016",
		descricao: "Pagamento",
		valor: 1000,
		categoria: true
	}];

 	$scope.somarSaida = function(form){
 		if (form == undefined) {
 			return;
 		}
 		var total = 0, tamanhoArray = form.length;
 		for (var i = 0; i < tamanhoArray; i++) {
 			if(!form[i].categoria) {
 				total += Number(form[i].valor);
 			}
 		}
		$scope.totalSaida = total;
 	};

 	$scope.somarEntrada = function(form){
		if (form == undefined) {
			return;
		}
		var total = 0, tamanhoArray = form.length;
		for (var i = 0; i < tamanhoArray; i++) {
			if(form[i].categoria) {
				total += Number(form[i].valor);
			}
		}
		$scope.totalEntrada = total;
	};
	var totais = function(arrayValores) {
		$scope.somarEntrada(arrayValores);
		$scope.somarSaida(arrayValores);
	};

	totais($scope.form);

	$scope.salvar = function(data, descricao, valor, categoria){
		$scope.form.push({data: new Date(data), descricao: descricao, valor: valor, categoria: categoria});
		totais($scope.form);
	};
	$scope.excluirConta = function(form){
		$scope.form= form.filter(function(formulario){
			if (!formulario.selecionado) return formulario;
			})
 	};



 	$scope.retornaMes = function(form, mesParam){

/* 		var mesMoment = moment("01/06/2016", 'DD/MM/YYYY');
 		console.log(mesMoment.month());
 		console.log(form[1].data);
 		console.log(moment(form[1].data, 'DD/MM/YYYY').month() === mesParam);
		console.log(mesParam);
		var mesTitulo = moment(form[1].data, 'DD/MM/YYYY').month();
		console.log(moment(form[1].data, 'DD/MM/YYYY').month() == mesParam);
		console.log(form.length);*/

 		var total = 0, tamanhoArray = form.length;
 		for (var i = 0; i < tamanhoArray; i++){
 			if(moment(form[i].data, 'DD/MM/YYYY').month() == mesParam){
 				
 				total += Number(form[i].valor)
 			}
 	 	}
 	 	console.log(total)
		return total
 	}



}])