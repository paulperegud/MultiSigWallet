(
    function () {
      angular
      .module('multiSigWeb')
      .controller('footerCtrl', function ($scope, Utils) {
        $scope.navCollapsed = true;

        $scope.openGithub = function () {
          Utils.openResource(txDefault.resources.multiSigGithub);
        }

        $scope.openFork = function () {
          Utils.openResource(txDefault.resources.restyledFork);
        }
      });
    }
)();
