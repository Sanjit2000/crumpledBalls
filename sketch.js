
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,690,800,20);

	box1 = new Ground(770,595,40,170);
	box2 = new Ground(530,600,40,160);
	box3 = new Ground(650,660,200,40);

	ball = new Ball()
	//box1 = Bodies.rectangle(width/2,550,width,10,{isStatic:true});
	//World.add(world, box1);
	//Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)

  rectMode(CENTER);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display()
  
}

function keyPressed () {

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-350})

   }

}

