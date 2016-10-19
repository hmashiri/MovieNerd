(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['$http', 'MovieService', '$stateParams'];

    /* @ngInject */
    function MovieDetailController($http, MovieService, $stateParams) {
        var vm = this;
        vm.title = 'MovieDetailController';


        activate();

        ////////////////

        function activate() {


            MovieService.getMovieInfoDetails($stateParams.movieDetailId).then(function(result) {

                vm.movieSearch = result;

                $('search.details').modal('hide')
            });


            console.log($stateParams.movieDetailId); // << here getting IMDB id from 


        }
    }
})();
