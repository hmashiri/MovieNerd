(function() {
    'use strict';


    var app = angular.module('app', ['ui.router', 'ui.bootstrap']);


    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/search");

        $stateProvider
            .state('search', {
                url: "/search",
                templateUrl: "app/partials/search.html",
                controller: 'MovieSearchController',
                controllerAs: 'vm'
            })
            .state('search.details', {
                url: "/details:movieDetailId",
                onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                    $uibModal.open({
                        templateUrl: "app/partials/details.html",
                        size: 'lg',
                        backdrop: true,
                        controller: 'MovieDetailController',
                        controllerAs: 'vm'
                    }).result.finally(function() {
                        $state.go('^');
                    })

                }],
                // templateUrl: "app/partials/details.html",
                controller: 'MovieDetailController',
                controllerAs: 'vm'


            })
    })
})();
