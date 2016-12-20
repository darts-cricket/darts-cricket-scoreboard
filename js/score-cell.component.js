
(function() {
  'use strict';

  angular.module("dartsScoreboardApp")
    .controller('ScoreCellCtrl', ['$scope', function($scope) {

        $scope.toggleScoreboard = function(toggle) {
            $scope.toggleScoreboard = toggle;
        };
    }])
    .directive('scoreCell', [
        "$parse", 'scoreCard',
        function($parse, scoreCard) {
        
        function link(scope, element, attrs) {
            scope.cellClicked = function(playerIdx, num) {
                var player = scoreCard.players[playerIdx];
                scope.scoreCard.hit(player, num);

            };
        }
        
        return {
            restrict: "A",
            link: link,
            scope: true
        }
    }]);
})();

