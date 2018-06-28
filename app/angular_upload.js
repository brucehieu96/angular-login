var gallery_app = angular.module("authenticationApp", []);  
   
 gallery_app.controller("uploadController", function($scope, $http){  
      $scope.uploadImage = function(){  
           var form_data = new FormData();  
           angular.forEach($scope.files, function(file){  
		        console.log(file);
                form_data.append('file[]', file);  
           });  
           $http.post('image_upload.php', form_data,  
           {  
                transformRequest: angular.identity,  
                headers: {'Content-Type': undefined,'Process-Data': false}  
           }).success(function(response){  
                alert(response);  
                $scope.show_images();  
           });  
      }  
      $scope.show_images = function(){  
           $http.get("show_images.php")  
           .success(function(data){  
              console.log(data);
              $scope.uploaded_images = data;  
           });  
      }  
 });  