(function() {
    'use strict';

    function scoreRowController($scope) {
        
    }

    angular.module('dartsScoreboardApp').directive('scoreRow', [
        function scoreRowDirective() {
            return {
                restrict: 'A',
                template: `<div class="row">
                                <div class="col-xs-4 tbl-cell" ng-class="{ 'strike-1' : scoreCard.players[0].score[num] === 1, 'strike-2' : scoreCard.players[0].score[num] === 2, 'strike-3' : scoreCard.players[0].score[num] >= 3 }" score-cell ng-click="cellClicked(0, num)"></div>
                                <div class="col-xs-4 tbl-cell">{{num}}</div>
                                <div class="col-xs-4 tbl-cell" ng-class="{ 'strike-1' : scoreCard.players[1].score[num] === 1, 'strike-2' : scoreCard.players[1].score[num] === 2, 'strike-3' : scoreCard.players[1].score[num] >= 3 }" score-cell ng-click="cellClicked(1, num)"></div>
                            </div>`,
                controller: ['$scope', scoreRowController]

            }
        }
    ]);
})();