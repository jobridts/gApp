angular.module('gApp.controllers', [])


// A simple controller that fetches a list of data from a service
    .controller('PersonIndexCtrl', function ($scope, gApiPerson) {
        // "Pets" is a service returning mock data (services.js)
        //$scope.pets = PetService.all();
        $scope.persons = gApiPerson.query();
    })
    .controller('PersonIndexGroupCtrl', function($scope, gApiPersonByGroup, gApiGroup, $stateParams){
        $scope.group = gApiGroup.get({groupId: $stateParams.groupId});
        //$scope.persons = gApiPerson.query();
        $scope.persons = gApiPersonByGroup.query({groupId:$stateParams.groupId});
    })


// A simple controller that shows a tapped item's data
    .controller('PersonDetailCtrl', function ($scope, $stateParams, gApiPerson) {
        // "Pets" is a service returning mock data (services.js)
        //$scope.pet = PetService.get($stateParams.petId);
        $scope.person = gApiPerson.get({personId: $stateParams.personId});
    })

    .controller('GroupIndexCtrl', function ($scope, gApiGroup) {
        $scope.groups = gApiGroup.query();
    });



