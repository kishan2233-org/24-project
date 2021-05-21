const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
  stone = new Stone(300,450);
  rubber = new Rubber(900,450,70);
  iron = new Iron(500,450,50,30);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    iron.display();
    hammer.display();
    stone.display();
    rubber.display();

 
}