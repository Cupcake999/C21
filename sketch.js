var fixedRect, movingRect;
var rect1 , rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100, 100, 50, 80);
  rect1.shapeColor = "green";

  rect2 = createSprite(600, 100, 50, 80);
  rect2.shapeColor = "green";



  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 
rect2.x=World.mouseX;
rect2.y = World.mouseY;

if(isTouching(rect1,rect2))
  {
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else
  {
    rect1.shapeColor = "green";
    rect2.shapeColor = "blue";
  }

  drawSprites();
}

