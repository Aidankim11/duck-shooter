function preload(){
  playerImg=loadImage("man.png")
  duckImg=loadImage("duck.png")
  bulletImg=loadImage("bullet.png")
}

function setup() {
  createCanvas(800,400);
  player=createSprite(100, 200, 50, 50);
  player.addImage(playerImg)
  player.scale=0.2
  edges=createEdgeSprites()
}

function draw() {
  background("blue"); 
  player.velocityY=0
  if(keyDown("up")||keyDown("w")){
    player.velocityY=-2
  }
  if(keyDown("down")||keyDown("s")){
    player.velocityY=2
  }
  player.collide(edges)
  if(keyDown(" ") && frameCount%5===0){
    bullet=createSprite(player.x+35,player.y-40,20,20)
    bullet.velocityX=7
    bullet.addImage(bulletImg)
    bullet.scale=0.1
  }

  if(frameCount%50===0){
    duck=createSprite(850,random(50,350))
   duck.addImage(duckImg) 
   duck.velocityX=-4
   duck.scale=0.15
   duck.mirrorX(-1)
  }
  drawSprites();
}