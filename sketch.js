
var bullet, wall;
var thickness, speed, weight;



function setup() {
  createCanvas(1600,400);
  

  bullet = createSprite(50, 200, 100, 50);
  
  

  
  thickness = random(22, 83);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, height/2);

  speed = random(223, 321)
  bullet.velocityX = speed;
  Damage = (0.5 * weight * speed * speed)/thickness * thickness * thickness;
}

function draw() {
  background(255,255,255);  
if (bullet.collide(wall)){


  if (Damage > 10){
    wall.shapeColor = "red";
  }
  else if (Damage < 10){
    wall.shapeColor = "green";
  }
  
}
  drawSprites();
  

  
}