// Objects/variables for the Frogger game
var WIDTH  = 400;
var HEIGHT = 440;
var MAX_WIDTH = 202;
var MAX_HEIGHT = 425;
var SCORE_HEIGHT = 160;
var randomNumber = 0;
var currentY = 0;

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Generate random number for rows 1,2 or 3 to draw picture
    this.x = -101;
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    this.y =  randomNumber * 73;
    this.speedX = 50 + Math.random() * 30;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    Resources.load([this.sprite]);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speedX * dt * 2;

    if (this.x > WIDTH + 101) {
        this.x = -101;
        randomNumber = Math.floor(Math.random() * 3) + 1;
        this.y = randomNumber * 73;
        this.speedX = 50 + Math.random() * 30;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.width = 101;
    this.height = 171;
    this.x = MAX_WIDTH;
    this.y = MAX_HEIGHT;
    this.score = 0;
    this.totalPlayers = 3;

    // The image/sprite for the player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    Resources.load([this.sprite]);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
    // Reset x and y if player hits the boundaries of the canvas
    currentY = this.y + this.height;
    if (this.x < this.width/10)
        this.x = this.width/10;
    if (this.x > WIDTH - this.width/10)
        this.x = WIDTH - this.width/10;
    if (this.y > HEIGHT)
        this.y = MAX_HEIGHT;


    // Check if player reaches the water at y <= 160
    if (currentY <= SCORE_HEIGHT) {
        this.y = SCORE_HEIGHT;
        this.score++;
        this.addScore();
        this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Reset player position
Player.prototype.reset = function() {
    this.x = MAX_WIDTH;
    this.y = MAX_HEIGHT;
}

Player.prototype.addScore = function() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.font = '24pt Impact';
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText('Score: ' + this.score,80,45);
}


// Capture the arrow keys to move player up, down, left, right
Player.prototype.handleInput = function(keyCode) {
    if (37 in keysDown)     // left arrow
        this.x -= 15;
    if (39 in keysDown)     // right arrow
        this.x += 15;
    if (38 in keysDown)     // up arrow
        this.y -= 15;
    if (40 in keysDown)     // down arrow
        this.y += 15;
};

// Create a Gem object
var Gem = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.width = 101;
    this.height = 171;
    this.x = 20 + 120 * (Math.floor(Math.random() * 4));
    this.y = 100 + 50 * (Math.floor(Math.random() * 4));

    // The image/sprite for the gem, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Gem Green.png';
    Resources.load([this.sprite]);
};

// Now write your own gem class
// This class requires an update(), render() and
// a handleInput() method.
Gem.prototype.update = function(dt) {
    //this.x = 20 + 120 * (Math.floor(Math.random() * 4)) * dt;
    //this.y = 100 + 50 * (Math.floor(Math.random() * 4)) * dt;
    this.x * dt;
    this.y * dt;
};

// Draw the enemy on the screen, required method for game
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(),new Enemy(),new Enemy()];

// Place the player object in a variable called player
var player = new Player();

// Place the gem object in a variable called gem
var gem = new Gem();

// Store the keys pressed in an object
var keysDown = {};

// The following listeners listen for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    // Will use keysDown instead of the allowedKeys object
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    delete keysDown[e.keyCode];
    player.handleInput(e.keyCode);
});

// This listens when the arrow keys are pressed
document.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
    player.handleInput(e.keyCode);
});
