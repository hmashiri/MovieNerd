(function() {
    'use strict';

    angular
        .module('app')
        .service('MovieService', MovieService);

    MovieService.$inject = ['$http'];

    /* @ngInject */
    function MovieService($http) {
        //this.getMovie = getMovie;

        ////////////////

        this.getMovie = function(movieType) {

            return $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/?',
                params: {

                    s: movieType
                }

            }).then(function(response) {

                return response.data;

            });
        }


        this.getMovieInfoDetails = function(movieDetailId) {

            return $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    i: movieDetailId
                }

            }).then(function(response) {


                return response.data;

            });
        }


    }
})();
