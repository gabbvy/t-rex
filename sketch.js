var reximage;
var rex;
var ground;
var groundimage;
var inv;
function preload(){
  reximage=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
 rex  = createSprite(200,145,5,5);
 rex.addAnimation("image",reximage);
 rex.scale=0.6;
 
 ground =createSprite(500,170,100,5);
 ground.addImage("floor",groundimage);
 ground.x = ground.width/2;

 inv = createSprite(100,190,200,5);
 inv.visible=false;
}

function draw(){
  background("white")
 if(keyDown("space")){
  rex.velocityY=-6;
 }
 rex.velocityY=rex.velocityY + 0.5;
  ground.velocityX=-5

  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  rex.collide(inv);
   drawSprites();
}
