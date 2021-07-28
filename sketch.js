var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var redLeaf, orangeLeaf,orangeImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
spawnApples();
spawnRedLeaf();
spawnOrangeLeaf();
rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}

function spawnApples(){
  if(frameCount % 50 === 0){
    apple = createSprite(100,10,10,10)
    apple.addImage("apples",appleImg);
    apple.x = Math.round(random(20,350))
    apple.velocityY =3;
    apple.scale =0.1
  }
}
function spawnOrangeLeaf(){
  if(frameCount % 70 === 0){
    orangeLeaf = createSprite(100,10,10,10)
    orangeLeaf.addImage("leaf",orangeImg);
    orangeLeaf.x = Math.round(random(20,350))
    orangeLeaf.velocityY =3;
    orangeLeaf.scale =0.1
  }
}

function spawnRedLeaf(){
  if(frameCount % 90 === 0){
    redLeaf = createSprite(100,10,10,10)
    redLeaf.addImage("red Leaf",redImg);
    redLeaf.x = Math.round(random(20,350))
    redLeaf.velocityY =3;
    redLeaf.scale =0.1
  }
}
