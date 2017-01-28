var App = angular.module('App', []);

App.controller('listCtrl', function($scope, $http) {
  $http.get('country.json')
       .then(function(res){
          $scope.contents = res.data;                
        });
});