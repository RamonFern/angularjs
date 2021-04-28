angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

    function HomeController($location, CursoService){
        vm = this;
        vm.teste = 'Home 2'
        vm.clientes = ''

        vm.navegar = function(rota){
            $location.path(rota)
        }
        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if(resposta){
                    console.log(resposta)
                }
            })
        }
    }