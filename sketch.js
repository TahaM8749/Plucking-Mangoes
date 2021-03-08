
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var treeIM;
var boy, boyIM;
var count = 6;
gameState = "play";

function preload()
{
	//mangoIM = loadImage("Images/mango.png")
	treeIM = loadImage("tree.png");
	boyIM = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(950,400,200,400);
	tree.scale = 0.5;
	boy = createSprite(240,600,20,20);
	boy.scale = 0.15;
	ground = new Ground(600,height,1200,20)
	mango1 = new Mango(1050,375);
	mango2 = new Mango(900,375);
	mango3 = new Mango(1000,300);
	mango4 = new Mango(900,300);
	mango5 = new Mango(1050,300);
	mango6 = new Mango(1050,240);
	
	boy.addImage(boyIM,"boy");
	tree.addImage(treeIM,"tree");
	stone = new Rock(165,525);
	slingshot = new Slingshot(stone.body,{x:165,y:525});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  textSize(15);
  if(gameState === "play"){
	text("knock down the mangos! Press space to bring back the rock. You have 6 resets to knock down all the mangos! Good luck!",20,40)
	text("You have "+count+" trys left",50,80);
  }

  if(gameState === "lost"){
	  text("You Lost!",30,80)
  }
  if(gameState === "won"){
	text("YOU WON!",30,80)
}
  if(count === 0||count <0){
	  gameState = "lost";
  }

  if(mango1.body.isStatic === false&&mango1.body.isStatic === false&&mango2.body.isStatic === false&&mango2.body.isStatic === false
	&&mango3.body.isStatic === false&&mango4.body.isStatic === false&&mango5.body.isStatic === false&&mango6.body.isStatic === false&&count>0){
		gameState = "won";
  }
  

  ground.display();
  slingshot.display();
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  console.log(count);

  
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(stone.body);
		count = count-1;
    }
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.posiiton

	var distance=dist(stone.body.position.x,stone.body.position.y,Lmango.body.position.x,Lmango.body.position.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}


