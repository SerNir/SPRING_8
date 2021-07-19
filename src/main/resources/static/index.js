angular.module('app', []).controller('indexController', function ($scope, $http) {
    $scope.loadProducts = function () {
        $http({
            url: 'http://localhost:8189/summer/products',
            method: 'GET',
            params: {}
        }).then(function (response) {
            console.log(response);
            $scope.products = response.data;
        });
    };



    $scope.showProductInfo = function (productIndex) {
        $http({
            url: 'http://localhost:8189/summer/products/' + productIndex,
            method: 'GET'
        }).then(function (response) {
            alert(response.data.title);
        });
    };

    $scope.deleteProduct = function (productIndex) {
        $http({
            url: 'http://localhost:8189/summer/products/delete/' + productIndex,
            method: 'GET'
        }).then(function (response) {
            alert("deleted");
            setTimeout(function () {
                location.reload();
            }),2000

        });
    };

    $scope.loadProducts();
});