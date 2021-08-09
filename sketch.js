const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;
var backGroundImg;

function preload(){
    backGroundImg = loadImage("assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle=-PI/4;
  
    tower=new Tower(150,350,160,310);
    cannon=new Cannon(180,110,100,50,angle);


    
}

function draw(){
    background(0);
    image(backGroundImg,0,0,width,height);
    tower.display();
    cannon.display();
   
    Engine.update(engine);
     
    
}
