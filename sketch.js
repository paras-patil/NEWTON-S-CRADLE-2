
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  roof = new Roof(330,200,600,20);
  
  bobDiameter=50;

	bobObj1 = new Bob(230,550,50);
	bobObj2 = new Bob(330,550,50);
  bobObj3 = new Bob(430,550,50);
	bobObj4 = new Bob(530,550,50);
  bobObj5 = new Bob(630,550,50);
  
  rope1 = new Rope(bobObj1.body,roof.body,-bobDiameter*2, 0)
	rope2 = new Rope(bobObj2.body,roof.body,-bobDiameter*1, 0)
	rope3 = new Rope(bobObj3.body,roof.body,0, 0)
	rope4 = new Rope(bobObj4.body,roof.body,bobDiameter*1, 0)
	rope5 = new Rope(bobObj5.body,roof.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  
  text(mouseX+","+mouseY,mouseX,mouseY);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
}

function keyPressed() {
  if (keyCode === 65) {

    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-500,y:-450});

  }

  if (keyCode === 66) {

    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-500,y:-450});
    Matter.Body.applyForce(bobObj2.body,bobObj2.body.position,{x:-500,y:-450});

  }

  if (keyCode === 67) {

    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-500,y:-450});
    Matter.Body.applyForce(bobObj2.body,bobObj2.body.position,{x:-500,y:-450});
    Matter.Body.applyForce(bobObj3.body,bobObj3.body.position,{x:-500,y:-450});

  }

  if (keyCode === 68) {

    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-500,y:-450});
    Matter.Body.applyForce(bobObj2.body,bobObj2.body.position,{x:-500,y:-450});
    Matter.Body.applyForce(bobObj3.body,bobObj3.body.position,{x:-500,y:-450});
    Matter.Body.applyForce(bobObj4.body,bobObj4.body.position,{x:-500,y:-450});

  }
}

