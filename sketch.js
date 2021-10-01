const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
var options ={
  isStatic:true
}
  //create player base body
  playerBase=Bodies.rectangle(200,200,40,40,options)
  //create player body
  player=Bodies.rectangle(200,150,40,40,options)
World.add(world,player)
World.add(world,playerBase)
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
image(baseimage,playerBase.body.position.x,playerBase.body.position.y,100,100)
  //show the playerbase image using image() function
  image(playerimage,player.body.position.x,player.body.position.y,100,100)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
