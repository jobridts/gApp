// gApp

angular.module('gApp', ['ionic', 'gApp.services', 'gApp.controllers', 'ngResource'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.person-index', {
      url: '/persons',
      views: {
        'pets-tab': {
          templateUrl: 'templates/person-index.html',
          controller: 'PersonIndexCtrl'
        }
      }
    })

    .state('tab.person-detail', {
      url: '/person/:personID',
      views: {
        'pets-tab': {
          templateUrl: 'templates/person-detail.html',
          controller: 'PersonDetailCtrl'
        }
      }
    })

    .state('tab.groups', {
      url: '/groups',
      views: {
        'groups-tab': {
          templateUrl: 'templates/groups.html',
          controller: 'GroupIndexCtrl'
        }
      }
    })

    .state('tab.search', {
      url: '/search',
      views: {
        'search-tab': {
          templateUrl: 'templates/search.html'
        }
      }
    })
  .state('tab.settings', {
      url: '/settings',
      views: {
        'settings-tab': {
          templateUrl: 'templates/settings.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/persons');
  

});

