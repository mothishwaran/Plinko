  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;
  const Body =Matter.Body;
  
  var world,engine;
  var ground;
  var boundry;
  var boundry2;
  
  var particles=[];
  var plinkos=[];
  var division=[];

  var divisionHeight=300;
  

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(240,780,480,20);
  boundry=new Boundry(240,790,480,10);
  boundry2=new Boundry(470,400,10,800);
  boundry3=new Boundry(10,400,10,800);

  
  
  for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
  }
  
  for(var j=15;j<=width;j=j+50){
  plinkos.push(new Plinko(j,175));
  }
  
  for(var j=45;j<width;j=j+50){
  plinkos.push(new Plinko(j,275));
  }
  
  for(var j=50;j<width;j=j+50){
  plinkos.push(new Plinko(j,375));
  }
  for(var k=20; k<=width ; k=k+80){
    division.push(new Division(k,(height+divisionHeight+200)/2,5,divisionHeight));
  }
  
  Engine.run(engine);
 
  
}


function draw() {
  background(0);  
  Engine.update(engine);
 
  boundry2.display();
  boundry3.display();
  ground.display();
  boundry.display();

 
 
  if(frameCount%10===0){
    
    (particles.push(new Particles (random(width/2-10,width/2+10),10)));
  }

  
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var m=0;m<particles.length;m++){
    particles[m].display();
  }
  drawSprites();
}


