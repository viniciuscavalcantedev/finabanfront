angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles?page",
      templateUrl: "billingCycle/tabs.html"
    }).state('clientes', {
      url: "/clientes",
      templateUrl: "/cliente/clientes.html"
    }).state('clienteNovo', {
      url: "/cliente/novo",
      templateUrl: "/cliente/teste.html"
    }).state('pendencias', {
      url: "/pendencias",
      templateUrl: "/pendencia/pendencias.html"})

    $urlRouterProvider.otherwise('/dashboard')
}])
