var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var score = 0;

function preload(){
  woodenBg = loadImage("woodenBg.png")
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 20; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,150));
  }

  //create 3rd row of plinko objects
  for (var j = 40; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,225));
  }  
  
  //create 4th row of plinko objects
  for (var j = 60; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,300));
  }    
}
 


function draw() {
  background(woodenBg);
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount
  if(frameCount%20===0){
    particles.push(new Particles(random(0,800),0))
  }

  //display the particles 
  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  textSize(35);
  fill("black");
  text("PLINKO GAME!",290,40);

}