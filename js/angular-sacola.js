
// Desenvolvido em:
// AngularJS 1.7.6
// Angular Material 1.1.12

var app = angular.module('LojaApp', ['ngMaterial', 'ngCookies']);

app.controller('LojaCtrl', function ($scope, $filter, $mdSidenav, $cookies, $http) {

    var quantidade_parcelas = 10;
    var quantidade_colunas = 3;
    $scope.totalItens=0;

    // Leitura do arquivo Json     
    $http.get('public/data/products.json').then(
        function (response) {

            $scope.imagem = 'imagens/imagem1.jpg'; //Teste para exibição da imagem do produto
            $scope.produtos = $scope.toRows(response.data.products, quantidade_colunas);

            if ($cookies.get("selecionados")) {
                $scope.selecionados = JSON.parse($cookies.get("selecionados"));
                $scope.totalItens = calcularTotalItens($scope.selecionados );
                $cookies.remove('selecionados');
            }

        });

    //Split do Json     
    $scope.toRows = function (arr, total) {
        var i = 0, rows = [];
        while (i < arr.length) {
            i % total == 0 && rows.push([]);
            rows[rows.length - 1].push(arr[i++])
        }
        return rows;
    };

    //Inclusão de um produto na sacola
    $scope.adicionarSacola = function (item) {
        var arr = [];
        if ($scope.selecionados) arr = $scope.selecionados;

        //Cálculo da quantidade de itens iguais adicionados
        if (arr.indexOf(item) !== -1) {

            item.qtd += 1;
        }
        else {
            item.qtd = 1;
            item.tamanho = item.availableSizes[0];
            arr.push(item);
        }

        $scope.selecionados = arr;
        $scope.totalItens+=1;
        $scope.totalPagar = calcularTotal($scope.selecionados);
        $scope.totalPagarParcelado = "OU EM ATÉ "+quantidade_parcelas+"X " + $filter('currency')($scope.totalPagar / quantidade_parcelas); 
        //Mostra a sacola
        $mdSidenav('aba-sacola').toggle();
        //Armazena selecionados no cookie
        $cookies.put("selecionados", JSON.stringify(arr));
    }

    //Remoção de produto da sacola
    $scope.removerSacola = function (item) {
        $scope.totalItens= $scope.totalItens - item.qtd;    
        $scope.selecionados.splice($scope.selecionados.indexOf(item), 1);
        $scope.totalPagar = calcularTotal($scope.selecionados);
        $scope.totalPagarParcelado = "OU EM ATÉ "+quantidade_parcelas+"X " + $filter('currency')($scope.totalPagar / quantidade_parcelas);
        //Armazena selecionados no cookie
        $cookies.put("selecionados", JSON.stringify($scope.selecionados));
    }

    //Inibe a sacola e limpa o cookie
    $scope.fecharSacola = function () {
        $mdSidenav('aba-sacola').close();
        $scope.selecionados = [];
        $scope.totalItens=0;
        $cookies.remove('selecionados');

    };

    //Cálculo do total a ser pago
    function calcularTotal(selecionados) {
        var total = 0;
        for (var index in selecionados) {
            total += selecionados[index].price * selecionados[index].qtd;
        }
        return total;
    }
    //Cálculo do total de itens selecionados
    function calcularTotalItens(selecionados) {
        var total = 0;
        for (var index in selecionados) {
            total += $scope.selecionados[index].qtd;
        }
        return total;
    }

})