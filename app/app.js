(function() {
    'use strict';

  var app =  angular.module('app', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider){

  	$urlRouterProvider.otherwise("/search");
  	
  	$stateProvider
  		.state('search',{
  			url: "/search",
  			templateUrl: "app/partials/search.html",
  			controller: 'MovieSearchController',
  			controllerAs: 'vm'
  		})
  		.state('search.details',{
  			url: "/details/:movieDetailId",
  			templateUrl: "app/partials/details.html",
  			controller: 'MovieDetailController',
  			controllerAs: 'vm'

  		})	
  })
})();

