var fRect,mRect;

function setup() {
  createCanvas(1200,800);
 fRect= createSprite(400, 200, 50, 50);
 mRect= createSprite(800, 200, 50, 50);
 fRect.velocityX=2;
 mRect.velocityX=-2;
}

function draw() {
  background(1,6,1);  
bounceOff (mRect,fRect)
  drawSprites();
}
