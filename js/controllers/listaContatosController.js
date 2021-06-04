angular.module("AngularJS").controller("contatosController", function ($scope) {
            $scope.app = "Lista de Contatos";
            $scope.contatos = [
                { nome: "Vinicius", telefone: "44 9999-9988", data: new Date()},
                { nome: "Vanessa", telefone: "44 9999-9977", data: new Date()},
                { nome: "Joaquim", telefone: "44 9999-9966", data: new Date()}
            ];
            $scope.adicionarContato = function (contato) {
                contato.data = new Date();
                $scope.contatos.push(angular.copy(contato))
                delete $scope.contato
                $scope.contatoForm.$setPristine();
            }
            $scope.excluirContatos = function (contatos) {
                $scope.contatos = contatos.filter(function (contato) {
                    if (!contato.selecionado) return contato
                })
            }
            $scope.contatoSelecionado = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado
                })
            }
        })