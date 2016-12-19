
angular.module("dartsScoreboardApp", [])
    .controller('ScoreCellCtrl', ['$scope', function($scope) {
        $scope.p1_20 = 0;
        $scope.p2_20 = 0;
        $scope.p1_19 = 0;
        $scope.p2_19 = 0;
        $scope.p1_18 = 0;
        $scope.p2_18 = 0;
        $scope.p1_score = 0;
        $scope.p2_score = 0;

        $scope.toggleScoreboard = function(toggle) {
            $scope.toggleScoreboard = toggle;
        };
    }])
    .directive('scoreCell', ["$parse", function($parse) {
        
        function link(scope, element, attrs) {
            element.bind('click', function() {
                
                var currentId = element[0].id;
                var currentBase = currentId.substring(0, 2);
                var opponentId = generateOpponentId(currentId);
                if (scope[currentId] == 0) {
                    angular.element(element).css({'background':'url("img/checks1.png")'});
                    populateValueToScope(currentId, scope[currentId] + 1, scope);
                } else if (scope[currentId] == 1) {
                    angular.element(element).css({'background':'url("img/checks2.png")'});
                    populateValueToScope(currentId, scope[currentId] + 1, scope);
                } else if (scope[currentId] == 2) {
                    angular.element(element).css({'background':'url("img/checks3.png")'});
                    populateValueToScope(currentId, scope[currentId] + 1, scope);
                } else {
                    if (scope[opponentId] < 3)
                    {
                        var valueToAdd = parseInt(currentId.substring(3, 5));
                        populateValueToScope(currentBase + "_score", scope[currentBase + "_score"] + valueToAdd, scope); 
                    } else return;
                }
            });
        }

        function populateValueToScope(variable, value, scope) {
            $parse(variable).assign(scope, value);
            scope.$apply();
        }

        function generateOpponentId(currentId) {
            if (currentId.indexOf("p1") === -1)
                return currentId.replace("p2", "p1");    
            else 
                return currentId.replace("p1", "p2")
        }
        
        return {
            restrict: "A",
            link: link
        }
    }]);