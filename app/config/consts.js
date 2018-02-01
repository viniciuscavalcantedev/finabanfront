angular.module('primeiraApp').constant('consts', {
  appName: 'Finaban - Sistema de Gestão Empresarial',
  version: '1.0',
  owner: 'Vinicius Cavalcante',
  year: '2018',
  site: 'http://viniciuscavalcante.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
