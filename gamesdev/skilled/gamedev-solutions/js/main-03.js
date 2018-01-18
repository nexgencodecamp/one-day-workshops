/******************************************************************
/******************************************************************
/******************************************************************

██╗     ███████╗███████╗███████╗ ██████╗ ███╗   ██╗    ██████╗
██║     ██╔════╝██╔════╝██╔════╝██╔═══██╗████╗  ██║    ╚════██╗
██║     █████╗  ███████╗███████╗██║   ██║██╔██╗ ██║     █████╔╝
██║     ██╔══╝  ╚════██║╚════██║██║   ██║██║╚██╗██║     ╚═══██╗
███████╗███████╗███████║███████║╚██████╔╝██║ ╚████║    ██████╔╝
╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝

********************************
******* ADDING A PLAYER ********
********************************

 */

/**** GLOBAL VARIABLES ****/
var __gameState;
var __player;

/**** SPRITES ****/
Crafty.sprite("../img/ship.png", {
  ship: [0, 0, 32, 34]
});

initialiseGame();

function initialiseGame(){
  // Draw screen after all assets load
  Crafty.init(GAME_WIDTH, GAME_HEIGHT, document.getElementById('game'));

  // Add black Background with no image
  Crafty.background('#000000')

  // Create the Starfield
  __starField = new Starfield(game);
  __starField.start();

  // Add a Player
  __player = Crafty.e("Player");
}

/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

  1. This lesson is adding a Player..BUT when you run your code - do you see a player ?

  2. What do we need to add ? Try and add it above under the section **** SPRITES ****

  3. Run your code after completing ALL these things again. What is different?

 */
