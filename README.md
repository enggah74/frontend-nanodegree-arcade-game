frontend-nanodegree-arcade-game
===============================

Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.

First of all, I watched the 11 youtube videos from RainingChain which helped me understand how to write an HTML5 Game using OO Javascript from scratch.

I followed all the P3 instructions. First, I made sure the background images were drawn on the canvas. Then I made sure that the enemies were generated horizontally in three (3) specific stone-paved rows. Once the enemies were running at the right speed and orientation, I worked on the player object by making sure it displays correctly, moves within the boundaries of the background images and navigates across the canvas using the arrow keys. When the basic features worked, I added the Score feature each time the player hits the water.

I got stuck when it came to the collisions between the player and enemies and the player and the gem. What helped me was reading the code from https://github.com/joseterrera/frogger/blob/gh-pages/js/app.js (and engine.js). It took quite some time on how to apply the same code to mine since some of her code were missing. Finally, I was happy with my code. But it took a month for me to complete this project.

The goal of this Frogger game is to accummulate points by helping the player reach the water and collecting gems to add more points avoiding the enemies. A point is added each time the player reaches the water. Another 10 points are added if the player touches a gem.

The game allocates 3 lives. Once all lives are used, the player is drawn to its original position and the score is reset to zero. No score is deducted if player gets hit by a bug.

To play the game, do the following:

1-Copy this link to a browser. Game starts with bugs crossing the stones across from one end to the other randomly, player appearing at the bottom center of the grass area and a gree-colored gem randomly situated across the stones.

2-Move the player in all directions using the arrow keys to cross the grass and stone-paved areas to reach the water.

3-Avoid being hit by the bugs. You have 3 lives to play. Once all lives are used, an alert message "Game over!" is displayed, Score on the top left corner is shown as zero and the player is moved to its original position.

4-Touch the gems appearing randomly along the stone areas to collect 10 more points.






