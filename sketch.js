
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var monkeyImage;
var gameState="play";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage = loadImage("sprite_0.png");
 
}



function setup() {
  
  //createCanvas(400,400);
  monkey = createSprite(100,300,20,100);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //create a ground
  ground = createSprite(200,350,800,20);
  ground.velocityX =-4;
  
  score=0;
  
 //create Group
  FoodGroup = new Group();
  obstacleGroup= new Group();
  
  
  

  
}


function draw() {
  
  background("white");  
  text("Survival Time:"+score,180,80);
   
  
  if(ground.x<0){
    ground.x=200;
  }
  
  
  
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }  
  monkey.velocityY=monkey.velocityY+0.5;
  
  monkey.collide(ground);
  
  
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    gameState="end";
    
    //score=0;
    //monkey.stopAnimation();
    
    
  }
  if(gameState==="play"){
    score =score+Math.round(getFrameRate()/60);
    createBanana();
  createObstacles();
  }
 drawSprites();
  
}

function createBanana(){
  
  if(frameCount%80===0){
    banana = createSprite(400,30,20,20);
    var rand = Math.round(random(120,200));
    banana.y=rand;
    banana.velocityX =-2;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;
    FoodGroup.add(banana);
    
  }
  
  
}

function createObstacles(){
  
  if(frameCount%300===0){
  
    var obstacles = createSprite(400,330,20,20);
    obstacles.velocityX = -2;
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.1;
    obstacles.lifetime=200;
    obstacleGroup.add(obstacles);
  }
}






