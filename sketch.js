var square,square1;
var arrow1, arrow1Img,arrow2,arrow2Img;
var circle,circle1,circle2,circle3;
function preload(){
arrowImg = loadImage("ARROW.png")
arrow2Img = loadImage("ARROW2.png")
}
function setup(){
  createCanvas(1000,600)
square = createSprite(100,50,100,100);
square.shapeColor = "red"
arrow1 = createSprite(100,50,30,30)
arrow1.addImage(arrow1Img);
arrow1.scale = 0.5;
circle = createSprite(250,100,40,60);
circle.shapeColor = "blue"
circle1 = createSprite(375,50,40,60);
circle1.shapeColor = "blue"
circle2 = createSprite(500,100,40,60);
circle2.shapeColor = "blue"
circle3 = createSprite(625,50,40,60);
circle3.shapeColor = "blue"
square1 = createSprite(725,50,100,100);
square1.shapeColor = "red"
//arrow2 = createSprite(725,50,30,30)
//arrow2.addImage("A2",arrow2Img);
//arrow2.scale = 0.5;
}
function draw(){
  background(0);
  drawSprites();
}