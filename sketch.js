var car,wall
var speed,weight

function setup() {
  createCanvas(800,400);
  wall = createSprite(800,270,60,height/2);
  car = createSprite(100,290,50,50)
 
 car.velocityX = 5;
 
 speen=random(25,31)
  weight=random(400,1500)
  
}

function draw() {
  background ("black");  
  
  
  if (wall.x-car.x  <  (car.width + wall.width)/2){
    car.velocityX = 0
    car.shapeColor = "red"
    wall.shapeColor = "white"
   var deformation=0.5  *  weight * speed*  speed/22509
  }
  if (deformation>180){
    car.shapeColor=color("yellow")
    wall.shapeColor=color("white")
  }

  if(deformation<180 && deformation>100){
    car.shapeColor=color("green")
    wall.shapeColor=color("white")
  }
  if (deformation<100){
    car.shapeColor=color("red")
    wall.shapeColor=color("white")
   }

  drawSprites()

}
  
 