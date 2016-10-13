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
        }

        vm.getMovieDetails = function(movieType){

        	MovieService.getMovie(movieType).then(function(result){

        		vm.search = result.Search;
        	});
        }

    }
})();