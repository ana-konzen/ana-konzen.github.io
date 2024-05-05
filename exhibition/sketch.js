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

let myObjs = {};

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
  }


    
function setup () {
    const firebaseConfig = {
        apiKey: "AIzaSyBfYwIYYJlhqXS55UidVjMkGhceMakJuL4",
        authDomain: "wordplay-2f97c.firebaseapp.com",
        projectId: "wordplay-2f97c",
        storageBucket: "wordplay-2f97c.appspot.com",
        messagingSenderId: "721772964267",
        appId: "1:721772964267:web:4af68029cfcee41b980aee",
        measurementId: "G-XDRL2Y65D3",
        databaseURL: "https://wordplay-2f97c-default-rtdb.firebaseio.com/"
      };
      
    firebase.initializeApp(firebaseConfig);

    database = firebase.database();

    console.log(firebase);



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


    sizeSlider = createSlider(50, 200, 125);
    sizeSlider.parent('sizeCont');

    strokeSlider = createSlider(1, 17, 9);
    strokeSlider.parent('weightCont');


    ground = Bodies.rectangle(400, height-10, width/2, 40, { isStatic: true,  friction: 1});
    wall1 = Bodies.rectangle(20, height/2, 40, height, { isStatic: true, friction: 1});
    wall2 = Bodies.rectangle(width/2 - 10, height/2, 40, height, { isStatic: true, friction: 1});
    control = Bodies.rectangle(0, 0, 50, 50);

    Composite.add(engine.world, [ground, wall1, wall2]);


    let ref = database.ref('myWords');
    ref.on('child_added', function(myData) {
        let key = myData.key
        if (!(key in myObjs)) {
            let n = new myLetter(myData.val().word, myData.val().background, 
                myData.val().stroke, myData.val().size, myData.val().weight, 
                null, null, null)
            myObjs[key] = n
            console.log('Added myWords key: ' + key)
        }
        else {
            myObjs[key].text = myData.val().word
            myObjs[key].color = myData.val().background
            myObjs[key].stroke = myData.val().stroke
            myObjs[key].size = myData.val().size
            myObjs[key].weight = myData.val().weight
            console.log('Updated myWords key: ' + key)
        } 
    })

    let posRef = database.ref('myPositions');
    posRef.on('child_added', function(myData) {
        let key = myData.key
        if (!(key in myObjs)) {
            let n = new myLetter(null, null, null, null, null, 
                myData.val().x, myData.val().y, myData.val().angle)
            myObjs[key] = n
            console.log('Added myPosition key: ' + key)
        }
        else {
            let n = new myLetter(myObjs[key].text, myObjs[key].color, 
                myObjs[key].stroke, myObjs[key].size, myObjs[key].weight, 
                myData.val().x, myData.val().y, myData.val().angle)
            Composite.remove(engine.world, myObjs[key].body);
            myObjs[key] = n
            console.log('Updated myPosition key: ' + key)
        }
    })

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

    if (selectedColors.length == 0){
        preview.style.webkitTextStroke = strokeSlider.value() / 8 + 'px  ' + 'black';

    } else {
    preview.style.color = selectedColors[0];
    preview.style.webkitTextStroke = strokeSlider.value() / 8 + 'px  ' + selectedColors[1];
    }

    preview.style.fontSize = sizeSlider.value() / 2 + 'px';
    
    for(let key in myObjs){
        let obj = myObjs[key];
        if ((obj.inx === null) || (obj.text === null)) break;
        obj.update();
        database.ref('myPositions/' + key).set({
            x: obj.body.position.x,
            y: obj.body.position.y,
            angle: obj.body.angle
        });
        obj.show();
    }

    mykeys = Object.keys(myObjs)
    if(mykeys.length > 20) {
        console.log('bigger than 20!');
        console.log(myObjs[mykeys[0]].body);
        for(let i = 0; i < 5; i ++){
            Composite.remove(engine.world, myObjs[mykeys[i]].body);
            delete myObjs[mykeys[i]];
            database.ref('myPositions/' + mykeys[i]).remove();
            database.ref('myWords/' + mykeys[i]).remove();
        }
    }
    }


function rewrite() {
    counter = 0;
    let randomX = random(150, 630);
    initX.push(randomX);
    let pos = [randomX, 50, 0, 0];
    posArr.push(pos);


    let data = {
        word: myInput.value(),
        background: selectedColors[0],
        stroke: selectedColors[1],
        size: sizeSlider.value(),
        weight: strokeSlider.value(),
        initx: randomX
    }

    let posData = {
        x: randomX,
        y: 0,
        angle: 0
    }

    let ref = database.ref('myWords');
    let result = ref.push(data);
    let posRef = database.ref('myPositions/' + result.key);
    posRef.set(posData);
    
    myKeys.push(result.key);


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
        }) 
    }

    

}






