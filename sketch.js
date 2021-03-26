var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var leftEdge ;
var rightEdge;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.24;

	leftEdge = createSprite(797,350,2,800);
	
	rightEdge = createSprite(3,350,2,800);

	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	
	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	starBody.velocityY =4;
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(starBody.position.y > 470){
     star.velocityY =0;
	}
 
	
    leftEdge.setCollider("rectangle",0,0,leftEdge.width+125,leftEdge.height);
	leftEdge.debug = false;

	rightEdge.setCollider("rectangle",0,0,rightEdge.width+120,rightEdge.height);
	rightEdge.debug = false;

	fairy.setCollider("rectangle",0,0,fairy.width+50,fairy.height+30);
	fairy.debug = false;

	leftEdge.visible = true;
	rightEdge.visible = true;
	

	fairy.collide(leftEdge);
    fairy.collide(rightEdge);

	if(keyWentDown(RIGHT_ARROW)){
		fairy.velocityX =2;
		fairy.velocityY =0;
	}
	
	if(keyWentDown(LEFT_ARROW)){
		fairy.velocityX =-2;
		fairy.velocityY =0;
	}


  drawSprites();

}

function keyPressed() {



	
	
	

	
	//write code here
}