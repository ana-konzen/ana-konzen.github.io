let inputCont = document.getElementById('inputCont');
let colorCont = document.getElementById('colorCont');
let strokeCont = document.getElementById('strokeCont');
let buttonCont = document.getElementById('buttonCont');
let fontCont = document.getElementById('fontCont');
let sizeCont = document.getElementById('sizeCont');
let weightCont = document.getElementById('weightCont');

let wcounter = document.getElementById('wcounter');
let chcounter = document.getElementById('chcounter');

let dateCont = document.getElementById('date');
let hourCont = document.getElementById('hour');








let myText;
// let textArr = [];
let font;

let letterArr = [];
let myLetters = [];

let groundW, groundH;

let wallW, wallH; 

let myPositions;

let posArr = [];

let submitButton;

let refAll;

let myObjs = {};

let allData = [];

let wordsNum = 0;

let updateData = [];

let intPositions = [];

let palette = ['#c40404', '#000000', '#2071f5', '#5fc91c', '#ffffff', '#eb9131', '#f5e133', '#b929d6', '#fa34cf', '#a0f2f0'];

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

let wally, wall1x, wall2x, groundy, groundx;

let selectedColors = [];

let control;

let myTest;

let sizeSlider, strokeSlider;

let fontSelect;

let database;

let arizona, graphik, typewriter, gilroy;

let myFonts = [];

let wordCount = 0;
let characterCount = 0;





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



    createCanvas(windowWidth, windowHeight + 30);

    
   

    myInput = createInput();
    myInput.elt.maxLength = 15;
    myInput.elt.minLength = 2;
    myInput.elt.placeholder = 'Type here';

    myInput.parent('inputCont');


    console.log(myInput);

  
    

    engine = Engine.create();

    submitButton = createButton('Submit');
    submitButton.parent('buttonCont')
    submitButton.mousePressed(rewrite);


    // let bt = createButton('Test');
    // bt.parent('buttonCont');
    // bt.mousePressed(testFunction);



    createColorButtons('colorCont', 0);
    createColorButtons('strokeCont', 1);


    sizeSlider = createSlider(50, 200, 125);
    sizeSlider.parent('sizeCont');

    sizeSlider.addClass('slider');

    strokeSlider = createSlider(1, 17, 9);
    strokeSlider.parent('weightCont');
    strokeSlider.addClass('slider');


    groundW = width * 4;
    groundH = 80;
    wallW = 40;
    wallH = height * 4;

    groundx = width - groundW / 2;
    groundy = height + groundH / 8;

    ground = new myBound(groundx, groundy, groundW, groundH);
    wall1 = new myBound(-wallW / 2, height - wallH / 2, wallW, wallH);
    wall2 = new myBound(width + wallW / 2, height - wallH / 2, wallW, wallH);

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

    database.ref('wordNumber').on('value', function(myData) {
        if (myData.val() == null){
            console.log('no data yet');
        } else {
        let data = myData.val().info;
        wordCount = data.words;
        characterCount = data.characters;
        wcounter.innerHTML = wordCount;
        chcounter.innerHTML = characterCount;}

    });





    }

function windowResized () {
    // resizeCanvas(windowWidth, windowHeight + 30);
    // repositionBodies();

}

function setDate () {
    let today = new Date();

    let weekday = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(today);
    let month = new Intl.DateTimeFormat("en-US", {month: "long"}).format(today);
    let day = new Intl.DateTimeFormat("en-US", {day: "numeric"}).format(today);

    dateCont.innerHTML = weekday + ", " + month + "<span class='counters'>&nbsp" + day + "</span>";

    let options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/New_York"
      };

    hourCont.innerHTML = new Intl.DateTimeFormat("en-US", options).format(today);

}

function repositionBodies() {

    ground.x = width - groundW / 2;
    ground.y = height + groundH / 8;
    ground.update();

    wall1.x = - wallW / 2;
    wall1.y = height - wallH / 2;
    wall1.update();

    wall2.x = width + wallW / 2;
    wall2.y = height - wallH / 2;
    wall2.update();

 
    

}


function draw() {
    setDate();


    noFill();
    background(250);
    Engine.update(engine);


    strokeJoin(ROUND);
    rectMode(CENTER);
    ellipseMode(CENTER);

    if((myInput.value().length < 2) || selectedColors.length < 2){
    submitButton.elt.disabled = true;

    } else {
    submitButton.elt.disabled = false;


    }

    




    if ((selectedColors.length == 0) || (myInput.value() == "")){
        myInput.elt.style.webkitTextStroke = 'none';
    } else {
    myInput.elt.style.color = selectedColors[0];
    myInput.elt.style.webkitTextStroke = strokeSlider.value() / 5 + 'px  ' + selectedColors[1];

    }


    let inpad = map(sizeSlider.value(), 50, 200, 78, 20);

    myInput.elt.style.paddingTop = inpad + 'px';
    myInput.elt.style.fontSize = sizeSlider.value() / 3 + 'px';


    
    for(let key in myObjs){
        let obj = myObjs[key];
        if ((obj.inx === null) || (obj.text === null)) break;
        obj.update();
        if(frameCount % 60 === 0){
            console.log('updated position');
        database.ref('myPositions/' + key).set({
            x: obj.body.position.x,
            y: obj.body.position.y,
            angle: obj.body.angle
        });}
        obj.show();
    }

    mykeys = Object.keys(myObjs)
    if(mykeys.length > 40) {
        console.log('bigger than 40!');
        console.log(myObjs[mykeys[0]].body);
        for(let i = 0; i < 10; i ++){
            Composite.remove(engine.world, myObjs[mykeys[i]].body);
            delete myObjs[mykeys[i]];
            database.ref('myPositions/' + mykeys[i]).remove();
            database.ref('myWords/' + mykeys[i]).remove();
        }
    }


    ground.show();
    wall1.show();
    wall2.show();



    }


function rewrite() {

    // if(inputValue())
    

    let randomX = random(150, 630);


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
    console.log('done');
    let result = ref.push(data);
    let posRef = database.ref('myPositions/' + result.key);
    posRef.set(posData);
    
    myKeys.push(result.key);

    wordCount++;
    characterCount = characterCount + myInput.value().length;

    database.ref('wordNumber/' + 'info').set({
        words: wordCount,
        characters: characterCount
    })
  


    redraw();

    
}

function testFunction (){


 

    // let refTest = database.ref('Test');
    // refTest.push({text: 'test'});

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
         
            arr[arr.length - 1].style('border', '2px solid grey');
        }) 
    }

    

}






