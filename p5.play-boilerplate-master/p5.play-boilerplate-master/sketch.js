var ground
var lander
var BackgroundImage
var landerImage
function preload(){
  BackgroundImage=loadImage("Bg Image.png")
  landerImage=loadImage("Lander.png")

}

function setup() {
  createCanvas(1000,800);
  ground=createSprite(0,790,1000,10)
  lander=createSprite(300,550,30,30)
  lander.addImage(landerImage)
  lander.scale=0.10
}

function draw() {
  background(255,255,255);  
  image(BackgroundImage,0,0,width,height)
  drawSprites();
  

}

