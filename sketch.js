
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dusbin1, dusbin2, dusbin3;
var paper1,ground1;
function preload()
{
	dusbin1=loadImage("dusbin.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//dusbin1= new Dusbin(600,600,200,20);
	dusbin2=new Dusbin(1000,535,20,150);
	//dusbin3=new Dusbin (700, 535,20,150);
	

	paper1=new Paper(300,350);
	ground1 = new Ground(400,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(222);
  

  //dusbin2.display();
  
  image(dusbin1, 1000,500,200,200);
  paper1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:130,y:-140})
	}
}






