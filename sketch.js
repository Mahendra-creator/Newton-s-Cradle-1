const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var top;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	top = new Stand(650, 350, 400 , 30)
	ball1 = new Ball(340, 500 , 40)
	ball2 = new Ball(420, 500 , 40)
	ball3 = new Ball(500, 500 , 40)
	ball4 = new Ball(580, 500 , 40)
	ball5 = new Ball(660, 500 , 40)
	string1 = new String(top.body, ball1.body, -160, 0)
	string2 = new String(top.body, ball2.body, -80,0)
	string3 = new String(top.body, ball3.body,0,0)
	string4 = new String(top.body, ball4.body,80,0)
	string5 = new String(top.body, ball5.body,160,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 Engine.update(engine);
//top.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

  
 
}
