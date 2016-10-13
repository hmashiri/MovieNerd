(function() {
    'use strict';

    angular
        .module('app')
        .service('MovieService', MovieService);

    MovieService.$inject = ['$http'];

    /* @ngInject */
    function MovieService($http) {
        this.getMovie = getMovie;

        ////////////////

        function getMovie(movieType) {

        	return $http({
        		method: 'GET',
        		url: 'http://www.omdbapi.com/?',
        		params: {
        			apikey: 'bbb847c8',
        			s: movieType
        		},
                
        	}).then(function(response) {

        		return response.data;
        		
        	});
        }

    }
})();