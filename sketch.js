const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;


function preload(){
  bg=loadImage('images/bg.jpg')
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  ground=new Ground(600,390,1200,10)
  boggie1=new Boggie(50,170,50,50)
  boggie2=new Boggie(150,170,50,50)
  boggie3=new Boggie(250,170,50,50)
  boggie4=new Boggie(350,170,50,50)
  boggie5=new Boggie(450,170,50,50)
  connect1=new Chain(boggie1.body,boggie2.body)
  connect2=new Chain(boggie2.body,boggie3.body)
  connect3=new Chain(boggie3.body,boggie4.body)
  connect4=new Chain(boggie4.body,boggie5.body)
rock=new Rock(1100,200,100,100)

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
boggie1.show()
boggie2.show()
boggie3.show()
boggie4.show()
boggie5.show()
connect1.show()
connect2.show()
connect3.show()
connect4.show()
rock.show()
if(keyCode==RIGHT_ARROW)
{
  Matter.Body.applyForce(boggie5.body,boggie5.body.position,{x:0.1,y:0})
}
  ground.show()
 
}