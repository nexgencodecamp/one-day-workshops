/******************************************************************
/******************************************************************
/******************************************************************

 ___       _______   ________   ________  ________  ________            _______
|\  \     |\  ___ \ |\   ____\ |\   ____\|\   __  \|\   ___  \         /  ___  \
\ \  \    \ \   __/|\ \  \___|_\ \  \___|\ \  \|\  \ \  \\ \  \       /__/|_/  /|
\ \  \    \ \  \_|/_\ \_____  \\ \_____  \ \  \\\  \ \  \\ \  \      |__|//  / /
 \ \  \____\ \  \_|\ \|____|\  \\|____|\  \ \  \\\  \ \  \\ \  \         /  /_/__
  \ \_______\ \_______\____\_\  \ ____\_\  \ \_______\ \__\\ \__\       |\________\
   \|_______|\|_______|\_________\\_________\|_______|\|__| \|__|        \|_______|
                      \|_________\|_________|

********************************
*** PLAYING WITH A STARFIELD ***
********************************
 */

/**** GLOBAL VARIABLES ****/
var __gameState;

initialiseGame();

function initialiseGame(){
  // Draw screen after all assets load
  Crafty.init(GAME_WIDTH, GAME_HEIGHT, document.getElementById('game'));

  // Add black Background with no image
  Crafty.background('#000000');

  // Create the Starfield
  __starField = new Starfield(game);

  // Start the __starField
  __starField.start();
}

/*
 ___                  _   _
/ _ \ _   _  ___  ___| |_(_) ___  _ __  ___
| | | | | | |/ _ \/ __| __| |/ _ \| '_ \/ __|
| |_| | |_| |  __/\__ \ |_| | (_) | | | \__ \
\__\_\\__,_|\___||___/\__|_|\___/|_| |_|___/

1. '__starField' is a new Starfield object. But how do we 'start' the Starfield so that we see stars ?
  HINT: Find the file Starfield.js in the components directory. Have a look inside it for a function that
  might start the starfield.

  Add some code to start the starfield.

2. How can you change the following:
  - Numbers of stars falling
  - Size of stars falling
  - speed of stars falling

3. Additionally, how can you change the color of the starfield ?

 */
