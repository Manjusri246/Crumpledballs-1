
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground
var rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,500,20,20)

var options={isStatic:true}
ground=Bodies.rectangle(400,695,800,10,options)
World.add(world,ground)



    rect1= Bodies.rectangle(600,685,100,10,{isStatic:true})
	World.add(world,rect1);
	
	
	
	rect2= Bodies.rectangle(645,630,10,100,{isStatic:true})
	World.add(world,rect2);
	
	
	
	rect3= Bodies.rectangle(555,630,10,100,{isStatic:true})
	World.add(world,rect3);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
background(0);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,900,20)

  rect(rect1.position.x,rect1.position.y,100,10)
  rect(rect2.position.x,rect2.position.y,10,100)
  rect(rect3.position.x,rect3.position.y,10,100)
  drawSprites();
 paper.display()
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyforce(paper.body,paper.paper.position,{x:30,y:-30})
	}
}

