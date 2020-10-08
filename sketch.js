var fixedRect, movingRect;
//var box1, box2, box3, box4;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX= -3;
  fixedRect.velocityX = 3;


/*
  box1 = createSprite(200,200,50,50);
  box2 = createSprite(300,200,50,50);
  box3 = createSprite(400,200,50,50);
  box4 = createSprite(500,200,50,50);

  box1.shapeColor = "red";
  box2.shapeColor = "blue";
  box3.shapeColor = "yellow";
  box4.shapeColor = "pink";

  box1.debug = true;
  box2.debug = true;
  box3.debug = true;
  box4.debug = true;
  */
}

function draw() {
  background(0,0,0);  
  
bounceOff(fixedRect, movingRect);

  drawSprites();
}

function bounceOff(obj1, obj2){
  if (obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    ) {
  obj1.velocityX = obj1.velocityX * (-1);
  obj2.velocityX = obj2.velocityX * (-1);
}
if(obj2.y - obj1.y < obj1.height/2 + obj2.height/2
  && obj1.y - obj2.y < obj1.height/2 + obj2.height/2){
    obj1.velocityY = obj1.velocityY * -1;
    obj2.velocityY = obj2.velocityY * -1;
  }
}