angular.module('gApp.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService, gApi) {
  // "Pets" is a service returning mock data (services.js)
  //$scope.pets = PetService.all();
        $scope.pets = gApi.query();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService, gApi) {
  // "Pets" is a service returning mock data (services.js)
  //$scope.pet = PetService.get($stateParams.petId);
  $scope.pet = gApi.get({petId:$stateParams.petId});
})

.controller('GroupIndexCtrl', function($scope, gApiGroup){
        $scope.groups = gApiGroup.query();
    });


