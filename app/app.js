var app = angular.module('authenticationApp', ['ngRoute', 'ngAnimate', 'toaster']);

//var gallery_app = angular.module("authenticationApp", []);  
// app.directive("fileInput", function($parse){  
//   return{  
//     link: function($scope, element, attrs){  
//       element.on("change", function(event){  
//            var files = event.target.files;                       
//            $parse(attrs.fileInput).assign($scope, element[0].files);  
//            $scope.$apply();  
//       });  
//     }  
//   }  
// });

app.controller("uploadController", function($scope, $http){  
    $scope.uploadImage = function(){  
         var form_data = new FormData();  
         angular.forEach($scope.files, function(file){  
              console.log(file);
              form_data.append('file[]', file);  
         });  
         $http.post('api/v1/web/image_upload.php', form_data,  
         {  
              transformRequest: angular.identity,  
              headers: {'Content-Type': undefined,'Process-Data': false}  
         }).success(function(response){  
              alert(response);  
              $scope.show_images();  
         });  
    }  
    $scope.show_images = function(){  
         $http.get("api/v1/web/show_images.php")  
         .success(function(data){  
            console.log(data);
            $scope.uploaded_images = data;  
         });  
    }  
});  

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'views/login.html',
            controller: 'login'
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'views/login.html',
                controller: 'login'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'views/signup.html',
                controller: 'signup'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'dashboard'
            })
            .when('/', {
                title: 'Login',
                templateUrl: 'views/login.html',
                controller: 'login',
                role: '0'
            })
            .otherwise({
                redirectTo: '/login'
            });
  }]);
