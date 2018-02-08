angular.module('primeiraApp').controller('pendenciaCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  BillingCycleController
])

function pendenciaController($scope, $http, $location, msgs, tabs, consts) {

  $scope.getPendencias = function() {
    const page = parseInt($location.search().page) || 1
    const url = `${consts.apiUrl}/pendencia?skip=${(page - 1) * 10}&limit=10`

    $http.get(url).then(function(resp) {
      $scope.pendencias = resp.data
      $scope.pendencia = {}

      /*$http.get(`${consts.apiUrl}/pendencia/count`).then(function(resp) {
        $scope.pages = Math.ceil(resp.data.value / 10)
      })*/
    })
  }

  $scope.getPendencias()
}
