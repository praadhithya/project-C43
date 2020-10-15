var form,trex,trexs,trex1,trex2,game,player
var gamestate = 0; var playercount = 0;
function preload(){
cloud = loadImage("images/cloud.png")
obs1 = loadImage("images/obstacle1.png")
obs2 = loadImage("images/obstacle2.png")
obs3 = loadImage("images/obstacle3.png")
obs4 = loadImage("images/obstacle4.png")
obs5 = loadImage("images/obstacle5.png")
obs6 = loadImage("images/obstacle6.png")
trex = loadAnimation("images/trex1.png","images/trex3.png","images/trex4.png")
trexco = loadAnimation("images/trex_collided.png")
}
function setup() {
  createCanvas(1000,800);
  database = firebase.database();
  game = new Game()
  game.getState()
  // if (gamestate===0){
  //   form = new Form();
  // }
  game.start()
}

function draw() {
  background("white"); 
  drawSprites();
}