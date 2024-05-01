let Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
let world;
let ground;
let wall1;
let wall2;

let boxes = [];
    
function setup () {

    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    ground = new Boundary(200, height, width, 50);

    // wall1 = Bodies.rectangle(0, 250, 50, height, options);
    // wall2 = Bodies.rectangle(width, 250, 50, height, options);
    
    // Runner.run(engine);
    }

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
    background(255);
    Engine.update(engine);
    noStroke();

    for(i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    ground.show();





    }


