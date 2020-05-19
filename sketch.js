
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
var box 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    gr = new Ground(29,200,57,76)
     
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 300) {
        boxes.push(new Box(mouseX,mouseY,random(20,50),random(5,30)))
        
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(0);
     rect(200,200,50,50)
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
     gr.display()
    // Use a for loop to show all the boxes
    for(i = 0;i<boxes.length;i++){
     boxes[i].display();

    }
}
 



  