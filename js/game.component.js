(function() {
    'use strict';
    
    function gameController($scope, scoreCard) {
        $scope.scoreCard = scoreCard;
    }

    angular.module('dartsScoreboardApp').directive('game', [
        function gameDirective() {
            return {
                restict: 'A',
                controller: ['$scope', 'scoreCard', gameController]
            };
        }
    ])
})();