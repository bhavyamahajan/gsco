function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var car,wall;

var speed,weight;


  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,hieght/2);
  wall.shapecolor=(80,80,80)
  car.velocityX=speed;
  car.speed=3;
  car.colide(wall);
  Deformation=0.5*weight*speed*speed/22500


}

function draw() {
  background(255,255,255);  
  drawSprites();
}
if(Deformation<100){
  car.shapecolor=(0,255,0)
  }
  if(Deformation=Mathrandom(100,180)){
    car.shapecolor=(230,230,0)
    }
    if(Deformation>180){
      car.shapecolor=(255,0,0)
      }