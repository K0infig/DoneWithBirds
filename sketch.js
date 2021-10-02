const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";

var score = 0;

// Types of values

//Number (Integers)
var x = 50;
console.log(x);

// Decimal
var a = 4.5;
console.log(a);

// String
var name = "Sri";
console.log(name);

// BOOLEAN
var b = true;
console.log(b);

//undefined
var obj;
console.log(obj);

obj = null;
console.log(obj);

// Arrays
var array1 = [23,56,78,90,34];
console.log(array1);
console.log(array1[1]);
console.log(array1[3]);

array1.push(1);
console.log(array1);

array1.pop();
console.log(array1);

array2 = [11, 23, 13, 21, "Sri", true];
console.log(array2);

array3 = [[1,4,6,7], [9,11,13,15], [78,111,112,113]];
console.log(array3);

console.log(array3[1][1]);
console.log(array3[2][2]);

// JSON - JavaScript Object Notation

var details = {
    "name": "Sri",
    "age": 12,
    "grade": 7,
    "city": "apex",
    "number of crushes": 13
}

console.log(details.age);






function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    if(backgroundImg){
        background(backgroundImg);

        textSize(20);
        text("Score: "+score, width-100, 40);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    }    
}

function mouseDragged(){
    //if(gameState=="onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    //}
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode == 32){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
        slingshot.attach(bird.body);

    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON  = await response.json();

    
    var datetime = responseJSON.datetime;
   
    var hour = datetime.slice(11,13);
    console.log(hour);
    var bg;
    if(hour > 06 && hour < 19){
        bg = "sprites/bg.png";

    }
    else{
        bg ="sprites/bg2.jpeg";
    }
    
    backgroundImg = loadImage(bg);

}