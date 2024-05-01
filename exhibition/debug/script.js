let myText = 'hi';
let font;
let letterArr = [];

let pointsArr = [];
let pointsArr2 = [];

let fontArray = [];


function preload() {
    font = loadFont('../Graphik-Medium.otf');
  }
  function setup(){

        // module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;
Composites = Matter.Composites;
Matter.Common.setDecomp(decomp);


// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
element: document.body,
engine: engine
});


    // let letters = Array.from(myText);

    // for (let i =0; i < letters.length; i++){

        // let letter = letters[i];
    points = font.textToPoints('hey', 300, 0, 150, { sampleFactor:  0.3, simplifyThreshold: 0 });
    points2 = font.textToPoints('what', 300, -200, 150, { sampleFactor:  0.3, simplifyThreshold: 0 });


   


    for (let p of points){
        let point = Bodies.circle(p.x, p.y, 1, { });
        // Composite.add(engine.world, point);

        pointsArr.push(point);

    }

    for (let p of points2){
        let point = Bodies.circle(p.x, p.y, 1, { });
        // Composite.add(engine.world, point);

        pointsArr2.push(point);

    }

    myLetter = Matter.Body.create({
        parts: pointsArr,
        friction: 0.1,
        restitution: 0.9,
        mass: 0.00005,
        // frictionAir: 0.05
        // render: {
        //     fillStyle: 'black'
        // }
    });

    myLetter2 = Matter.Body.create({
        parts: pointsArr2,
        friction: 0.2,
        restitution: 0.7,
        mass: 0.00005,
        // frictionAir: 0.05

        // frictionAir: 0.1
        // render: {
        //     fillStyle: 'black'
        // }
    });

    console.log(myLetter.bounds)

    // Matter.Body.setCentre(myLetter, 100, true)

    console.log(pointsArr);

    // }
    
    // let pletter = Bodies.fromVertices(150 * i, 0, points, {restitution: 0.5, friction: 0.3});
    
    

console.log(letterArr);

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(150, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var wall = Bodies.rectangle(0, 300, 20, 610, { isStatic: true });
var wall2 = Bodies.rectangle(630, 300, 20, 610, { isStatic: true });



// add all of the bodies to the world
Composite.add(engine.world, [ground, wall, wall2, myLetter, myLetter2]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

}



