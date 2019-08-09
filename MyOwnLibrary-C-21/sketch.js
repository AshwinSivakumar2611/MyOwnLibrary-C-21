var fixedRect,movingRect;
var gameObject1;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,100,50,50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,400,80,50);
  movingRect.shapeColor="green";
  movingRect.velocityY=-3;
  fixedRect.debug=true;
  movingRect.debug=true;
  gameObject1 = createSprite(150,200,50,50);
  gameObject1.shapeColor="blue";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="white";
    gameObject1.shapeColor="violet";
  }
  else{
    movingRect.shapeColor="purple";
    gameObject1.shapeColor="purple";
  }
  drawSprites();
}
