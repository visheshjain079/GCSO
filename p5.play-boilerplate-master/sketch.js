var wall;
var speed;
var car;
var deformation;
var weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 100, 50,1200);
  speed = random(30,100);
   car = createSprite(200,200,50,50);
   weight=random(400,2000);

   car.shapeColor="white";
   wall.shapeColor="brown";
}

function draw() {
  background("black"); 

  if(keyDown("space")){
    car.velocityX=speed;
    car.shapeColor="pink"
  }
  if(car.collide(wall)){
   
    deformation=0.5*weight*speed*speed/22500;

   }
   if(deformation>180){

    car.shapeColor=color(255,0,0);

   }
   if(deformation>100 && deformation<180){

    car.shapeColor=color(230,230,0);
    
   }
   if(deformation<100){

    car.shapeColor=color(0,255,0);
    
   }
  
  
  drawSprites();
}