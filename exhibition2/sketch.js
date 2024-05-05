let inputCont = document.getElementById('inputCont');
let colorCont = document.getElementById('colorCont');
let strokeCont = document.getElementById('strokeCont');
let buttonCont = document.getElementById('buttonCont');
let fontCont = document.getElementById('fontCont');
let sizeCont = document.getElementById('sizeCont');
let weightCont = document.getElementById('weightCont');



let preview = document.getElementById('preview');


let myText;
// let textArr = [];
let font;

let letterArr = [];
let myLetters = [];

let myPositions;

let posArr = [];

let refAll;

let myObjs = [];

let allData = [];

let wordsNum = 0;

let updateData = [];

let intPositions = [];

let palette = ['#c40404', '#000000', '#2071f5', '#5fc91c', '#ffffff', '#eb9131', '#f5e133', '#b929d6', '#fa34cf'];

let initX = [];

let keys;

let myKeys = [];

let Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;

let counter = 0;

let ground, wall1, wall2;

let selectedColors = [];

let control;

let myTest;

let sizeSlider, strokeSlider;

let fontSelect;

let database;

let arizona, graphik, typewriter, gilroy;

let myFonts = [];




function preload() {
     font = loadFont('ABCArizonaMix-Bold-Trial.otf');

    //  graphik = loadFont('Graphik-Medium.otf');
    // //  typewriter = loadFont('AmericanTypewriter.ttc');
    //  gilroy = loadFont('Gilroy-Light.otf');

    // myFonts = [arizona, graphik, gilroy];




    // font = myFonts[0];
  }


    
function setup () {
    // counter = 0;


    createCanvas(1600, windowHeight + 30);
    
   
    console.log(myLetters);

    myInput = createInput();
    myInput.parent('inputCont');

    engine = Engine.create();

    let button = createButton('Submit');
    button.parent('buttonCont')
    button.mousePressed(rewrite);


    createColorButtons('colorCont', 0);
    createColorButtons('strokeCont', 1);

    // console.log(myInput.value());

    // fontSelect = createSlider(0, 2, 1);
    // fontSelect.parent('fontCont');

    sizeSlider = createSlider(50, 200, 125);
    sizeSlider.parent('sizeCont');

    strokeSlider = createSlider(1, 17, 9);
    strokeSlider.parent('weightCont');


    ground = Bodies.rectangle(400, height-10, width/2, 40, { isStatic: true,  friction: 1});
    wall1 = Bodies.rectangle(20, height/2, 40, height, { isStatic: true, friction: 1});
    wall2 = Bodies.rectangle(width/2 - 10, height/2, 40, height, { isStatic: true, friction: 1});
    control = Bodies.rectangle(0, 0, 50, 50);

    Composite.add(engine.world, [ground, wall1, wall2]);

    }



function draw() {

    noFill();
    background(255);
    Engine.update(engine);

    strokeJoin(ROUND);
    rectMode(CENTER);
    ellipseMode(CENTER);

    if(myInput.value() == ""){
        preview.innerHTML = 'Preview';

    } else {
    preview.innerHTML = myInput.value();

    }

    // let strokeSize = map(strokeSlider.value(), 1, 21, )

    let fonts = ['arizona', 'graphik', 'gilroy'];


    if (selectedColors.length == 0){
        preview.style.webkitTextStroke = strokeSlider.value() / 8 + 'px  ' + 'black';

    } else {
    preview.style.color = selectedColors[0];
    preview.style.webkitTextStroke = strokeSlider.value() / 8 + 'px  ' + selectedColors[1];
    }

    preview.style.fontSize = sizeSlider.value() / 2 + 'px';
    // preview.style.fontFamily = fonts[fontSelect.value()];



    


    for(let i = 0; i < myObjs.length; i++){
        let obj = myObjs[i];
        obj.update();
        obj.show();
    }

    if(myObjs.length > 25) {
        console.log('bigger than 20!');
        console.log(myObjs[myObjs.length - 1].body);
        for(let i = 0; i < 5; i ++){
            Composite.remove(engine.world, myObjs[0].body);
            myObjs.splice(0, 1);
        }
    }
    counter++;
    }


function rewrite() {
    counter = 0;
    let randomX = random(150, 630);
    initX.push(randomX);
    // console.log(initX);
    // console.log(selectedColor);
    // let n = new myLetter(newText, randomX, 50, 0, 0);
    let pos = [randomX, 50, 0, 0];
    // pos.push(n.body.position.x, n.body.position.y, n.body.angle, n.body.angularVelocity);
    posArr.push(pos);

    
    // console.log(arizona);

    // console.log(myFonts[fontSelect.value()]);


    let n = new myLetter(myInput.value(), selectedColors[0], selectedColors[1], sizeSlider.value(), strokeSlider.value(), randomX, 0, 0, 0);
    myObjs.push(n);
    console.log(myObjs.length);
    redraw();

    
}

function createColorButtons(container, index) {
    let arr = [];


    for (let i = 0; i < palette.length; i++) {

        let c = palette[i];
        let div = createDiv();
        div.style('background', c);
        div.parent(container);
        div.mousePressed(function() {
            for (let element of arr){
                element.style('border', 'none');
            }

            console.log(c);
            selectedColors[index] = c;
            arr.push(div);

            console.log(selectedColors);
         
            arr[arr.length - 1].style('border', '3px solid aqua');
            // div.classList.add('selected');
        }) 
    }

    

}






