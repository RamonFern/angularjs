angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location'];

    function HomeController($location){
        vm = this;
        vm.teste = 'Home 2'

        vm.navegar = function(){
            $location.path('Cadastro')
        }
    }