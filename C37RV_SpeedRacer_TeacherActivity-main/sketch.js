var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_image = loadImage("./assets/car1.png");
  car2_image = loadImage("./assets/car2.png");
  track_image = loadImage("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
