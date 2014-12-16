var app = angular.module('andela', []);

app.controller('EnrollmentForm', function($scope){
  $scope.saveData = function(){
    
    $scope.formInfo = {
     'name': $scope.name,
     'email':   $scope.email,
     'location': $scope.location,

     'salutation': "Name:",
     'emailSalute': "Email:",
     'locationSalute': "Location:"
     };
    };
})
   