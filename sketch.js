var ball;

function setup() {
  createCanvas(800,400);
 ball = createSprite(400, 200, 50, 50);
  ball.shapecolor = "yellow";
}

function draw() {
  background("salmon");  
  if(keyDown("LEFT_ARROW")){
    changePosition(-1,0);
  }
  else if (keyDown(RIGHT_ARROW)){
    changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    changePosition(0,-1)
  }
  else if (keyDown(DOWN_ARROW)){
    changePosition(0,+1);
  }
  drawSprites();
}
function changePOsition(x,y){
  ball.x = ball.x+x;
  ball.y = ball.y+y;
}