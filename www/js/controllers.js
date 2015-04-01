angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.$on("$stateChangeSuccess", function(event, next, current) {
    init();
  });
})

.controller('stableCtrl', function($scope, $stateParams, $state, $rootScope) {
  $scope.page = 'templates/stable/' + $stateParams.page + '.html';
  $scope.title = $stateParams.page.capitalize();
  $rootScope.loaded = function() {
    init();
  };
})

.controller('aboutCtrl', function($scope) {
  $scope.version = appVersion;
});
