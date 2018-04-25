/******************************************************************
/******************************************************************
/******************************************************************

.-.   .----. .----. .----. .---. .-. .-.        .---.
} |   } |__}{ {__-`{ {__-`/ {-. \|  \{ |        `-`} }
} '--.} '__}.-._} }.-._} }\ '-} /| }\  {          / /
`----'`----'`----' `----'  `---' `-' `-'         `-'

********************************************
******* ADDING BULLETS & COLLISIONS ********
********************************************

 */

/**** GLOBAL VARIABLES ****/
var __gameState;
var __player;

/**** SPRITES ****/
Crafty.sprite("../img/ship.png", {
  ship: [0, 0, 32, 34]
});
Crafty.sprite(26, 20, "../img/enemy-1-sprite-T20x26.png", {
  bee: [0, 0]
});
Crafty.sprite(6, 16, "../img/ship-bullet-T6x16.png", {
  bullet: [0, 0]
});
Crafty.sprite(60, 60, "../img/enemy-explosion-T60x60.png", {
  enemy_explosion: [0, 0]
});

/**** EVENTS ****/
Crafty.bind('player_fired', function(player) {
  /*** SOLUTION CODE ***/
  player.fire();
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
  spawnEnemies(1000);

}

// Write a spawnEnemies() function
function spawnEnemies(interval) {
  Crafty.e("Delay").delay(function(){
    var enemy = Crafty.e("EnemySimple");
    enemy.afterInit({x: Crafty.math.randomNumber(40, 460) , y: -34, speed: 100});
  }, interval, -1)
}


/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

1. The event 'player_fired' is written for you above. Your task is to add 1 line of code inside the event.
   The line of code calls the 'fire' function on the Player ie. your ship.
   Write the line of code in!

2. How can we make our player and bullets faster ?


 */
