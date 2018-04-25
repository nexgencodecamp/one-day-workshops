/******************************************************************
/******************************************************************
/******************************************************************

.##......######...####....####....####...##..##....................##...
.##......##......##......##......##..##..###.##...................##....
.##......####.....####....####...##..##..##.###..................#####..
.##......##..........##......##..##..##..##..##..................##..##.
.######..######...####....####....####...##..##...................####..
........................................................................

********************************************
******* ADDING MORE ENEMIES ********
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

initialiseGame();

function initialiseGame(){
  // Draw screen after all assets load
  Crafty.init(GAME_WIDTH, GAME_HEIGHT, document.getElementById('game'));

  // Add black Background with no image
  Crafty.background('#000000');

  // Create the Starfield
  __starField = new Starfield(game);
  __starField.start();

  // Add a Player
  __player = Crafty.e("Player");

  // Add an Enemy
  // Add a for...loop
  /*** SOLUTION CODE - FOR...LOOP ***/


  // Write and call a spawnEnemies() function
  /*** SOLUTION CODE FOR SPAWN ENEMY EVERY SECOND ***/

}



/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

1. Write a for...loop so that multiple enemies are created. Test your solution

2. Now remove the for...loop altogether. We are going to write a function called 'spawnEnemies()'
  that spawns an enemy every second. We are going to do this together as a class.

 */
