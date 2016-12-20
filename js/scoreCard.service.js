(function() {
   'use strict;'

   var ScoreCard = function() {
       this.players = [
           new Player("p1"),
           new Player("p2")
       ];
       
        this.hit = function(player, num) {
            player.hit(num);

            var opponent = this.players.filter(function(item) {
                return item !== player;
            })[0];

            if (player.score[num] > 3 && (opponent.score[num] == null || opponent.score[num] < 3)) 
            {
                player.points += num;
            }
        }
   };
   ScoreCard.prototype.numbers = [20, 19, 18];

   var Player = function(name) {
       this.name = name;
       this.score = [];
       this.points = 0;

       this.hit = function(num) {
           this.score[num] = this.score[num] + 1 || 1;
       };
   }

    angular.module('dartsScoreboardApp').service('scoreCard', [
        ScoreCard
    ]);

})();