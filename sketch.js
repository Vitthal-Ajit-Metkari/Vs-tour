var player;
var playerRun;
var vRoad, vRoadImage;
var bullImage;


function preload(){
  playerRun=loadAnimation("Player/Player1.png","Player/Player2.png","Player/Player3.png","Player/Player4.png","Player/Player5.png","Player/Player6.png","Player/Player7.png","Player/Player8.png");
  vRoadImage=loadImage("bg/villageRd2.png");
 
  bullImage=loadImage("obstacle/cactus.png");
}


function setup() {
  createCanvas(1200,600);
  player=createSprite(600,150, 50, 100);
  player.addAnimation("player_running",playerRun);
  

  bull=createSprite(500,290, 50, 100);
  bull.addImage(bullImage);
  vRoad=createSprite(600,300,40,80);
  vRoad.addImage(vRoadImage);
  vRoad.Y = vRoad.hieght/500;
  vRoad.velocityY = -2;

  
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if (vRoad.y < 0){
    vRoad.y = vRoad.hieght/2;
  }

  vRoad.depth = player.depth;
  player.depth = player.depth + 1;

  
}