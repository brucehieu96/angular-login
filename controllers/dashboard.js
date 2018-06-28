/*
 * Login Controller
 */
app.controller('dashboard', function ($scope, $rootScope, $routeParams, $location, $http, RestApiClientService) {

    $scope.logout = function () {

        var results = {status:"success","message":"Đã Đăng Xuất"};
        RestApiClientService.toast(results);
        $location.path('login');
    }
});