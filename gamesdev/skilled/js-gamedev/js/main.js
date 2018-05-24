/**** GLOBAL VARIABLES ****/
var __gameState;
var __player;
var __score = 0;

/**** EVENTS ****/
Crafty.bind('player_killed', function () {
  displayGameOver();
});
Crafty.bind('EnterFrame', function () {
  displayPlayerScore();
});
Crafty.bind('player_fired', function (player)   {
  player.fire();
  Crafty.audio.play("ship-shoot");                                
});


initialiseGame();

function initialiseGame(){
  // Draw screen after all assets load
  Crafty.init(508, 768, document.getElementById('game'));

  // Add black Background with no image
  Crafty.background('#000000');

  // Create the Starfield
  __starField = new Starfield(game);
  __starField.start();

  // Add a Player
  __player = Crafty.e("Player");

  // Spawn your ENEMIES
  spawnEnemies(50);

}

// Write a spawnEnemies() function
function spawnEnemies(interval) {
  Crafty.e("Delay").delay(function(){
    var enemy = Crafty.e("Enemy");
    enemy.afterInit({x: Crafty.math.randomNumber(40, 460) , y: -34, speed: 100});
  }, interval, -1)
}
