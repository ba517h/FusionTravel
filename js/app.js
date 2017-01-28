var App = angular.module('App', []);

App.controller('listCtrl', function($scope, $http) {
  $http.get('country.json')
       .then(function(res){
       	var vm=$scope;
         vm.contents = res.data;

          vm.activeCountry = {}; 
 
    // Adding the Search property to be used in the ng-model
    		vm.search = "";
 
 
 
    vm.changeActiveCountry = changeActiveCountry;
 
    function changeActiveCountry(index){
        vm.activeCountry = index;
    }                
        });
});
App.controller('listCtrl1', function($scope, $http) {
  $http.get('blog.json')
       .then(function(res){
       	var vm=$scope;
         vm.contents1 = res.data;
              
        });
});