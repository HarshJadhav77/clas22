var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
//	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  star.x=starBody.position.x;
  star.y=starBody.position.y;

  keyPressed();
  drawSprites();
  
  if(starBody.position.y > 470)
  {
	  starBody.x = fairy.x;
	  starBody = Bodies.circle(fairy.x+140 , 500 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
  }

}

function keyPressed() {
	
if(keyWentDown("LEFT_ARROW"))
{
	fairy.velocityX=-4;
}
if(keyWentUp("LEFT_ARROW"))
{
	fairy.velocityX=0;
}
if(keyWentDown("RIGHT_ARROW"))
{
	fairy.velocityX=4;
}
if(keyWentUp("RIGHT_ARROW"))
{
	fairy.velocityX=0;
}
if(keyDown("DOWN_ARROW"))
{
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
}
}
