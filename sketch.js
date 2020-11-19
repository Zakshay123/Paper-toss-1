
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

box1= new Box(570,300,90,20)
box2= new Box(620,250,20,70)
box3= new Box(520,250,20,70)
paper= new Paper(200,250)
ground=new Ground(400,320,900,20)
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display()
  box2.display()
  box3.display()
  paper.display()
  ground.display()
  drawSprites();
}
function keyPressed(){
if (keyCode  === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
}
}