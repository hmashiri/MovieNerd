(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieSearchController', MovieSearchController);

    MovieSearchController.$inject = ['$http', 'MovieService'];

    /* @ngInject */
    function MovieSearchController($http, MovieService) {
        var vm = this;
        vm.title = 'MovieSearchController';


        activate();

        ////////////////

        function activate() {
        }

        vm.getMovieInfo = function(movieType){

        	MovieService.getMovie(movieType).then(function(result){

        		vm.search = result.Search;
                

        	},function(error){
                console.log(error);
            });
        }

    }
})();