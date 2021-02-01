const Engine = Matter.Engine
const  World = Matter.World
const  Events = Matter.Events
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here\
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(472,469,20,950)
  hero = new Hero(120,323,90)
  monster = new Monster(910,375,100)
  box1 = new Box(600, 100, 60, 60);
  box2 = new Box(900, 100, 60, 60);
  box3 = new Box(900, 100, 60, 60);
  box4 = new Box(900, 100, 60, 60);
  box5 = new Box(900, 100, 60, 60);
  box6 = new Box(900, 100, 60, 60);
  box7 = new Box(800, 100, 60, 60);
  box8 = new Box(800, 100,  60, 60);
  box9 = new Box(800, 100, 60, 60);
  box10 = new Box(800, 100, 60, 60);
  box11 = new Box(800, 100, 60, 60);
  box12 = new Box(800, 100, 60, 60);
  box13 = new Box(800, 100, 60, 60);
  box14 = new Box(800, 100, 60, 60);
  box15 = new Box(700, 100, 60, 60);
  box16 = new Box(700, 100, 60, 60);
  box17 = new Box(700, 100, 60, 60);
  box18 = new Box(700, 100, 60, 60);
  box19 = new Box(700, 100, 60, 60);
  box20 = new Box(700, 100, 60, 60);
  box21 = new Box(600, 100, 60, 60);
  box22 = new Box(600, 100, 60, 60);
  box23 = new Box(600, 100, 60, 60);
  box24 = new Box(600, 100, 60, 60);
  box25 = new Box(600, 100, 60, 60);
  box26 = new Box(600, 100, 60, 60);

 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster.display();
  box1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  rope.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

