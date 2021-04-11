const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img, backgroundImg;
var score=0;

function preload(){
    polygon_img = loadImage("polygon.png");
}
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

stand1 = new Ground (390,300,250,10);

box1 = new Box (300,275,30,50);
box2 = new Box (330,275,30,50);
box3 = new Box (360,275,30,50);
box4 = new Box (390,275,30,50);
box5 = new Box (420,275,30,50);
box6 = new Box (450,275,30,50);
box7 = new Box (480,275,30,50);

box8 = new Box (330,225,30,50);
box9 = new Box (360,225,30,50);
box10 = new Box (390,225,30,50);
box11 = new Box (420,225,30,50);
box12 = new Box (450,225,30,50);

box13 = new Box (360,175,30,50);
box14 = new Box (390,175,30,50);
box15 = new Box (420,175,30,50);

box16 = new Box (390,125,30,50);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(polygon,{x:50,y:200});

}
function draw() {
   
    background(0);
    Engine.update(engine);

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    textSize(20);
    fill("lightyellow");
    text("SCORE : "+score,750,40);

    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    
    slingShot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon);
    }
  }

 