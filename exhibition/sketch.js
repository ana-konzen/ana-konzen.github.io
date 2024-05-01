let menu = document.getElementById('menu');
let myText;
// let textArr = [];
let font;
let slider;

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

let palette = [];

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

let control;

let myTest;


let database;






function preload() {
    font = loadFont('ABCArizonaMix-Bold-Trial.otf');
  }


    
function setup () {
    // counter = 0;




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







    // clearStorage();

    createCanvas(1600, windowHeight + 30);
    // textArr = getItem('textArr');
    
   
    console.log(myLetters);

    myInput = createInput();
    myInput.parent('menu');

    engine = Engine.create();



    let button = createButton('Submit');
    // button.position(820, 50);
    button.parent('menu')
    button.mousePressed(rewrite);

    // slider = createSlider(50, 250);
    // slider.position(820, 100);
    // slider.size(100);



    console.log(myObjs);



    ground = Bodies.rectangle(400, height-10, width/2, 40, { isStatic: true,  friction: 1});
    wall1 = Bodies.rectangle(20, height/2, 40, height, { isStatic: true, friction: 1});
    wall2 = Bodies.rectangle(width/2 - 10, height/2, 40, height, { isStatic: true, friction: 1});

    control = Bodies.rectangle(0, 0, 50, 50);




    Composite.add(engine.world, [ground, wall1, wall2]);

    refUpdated = database.ref('updatedPositions');

    refUpdated.on('child_added', function(data){
        let words = data.val();
        console.log(words);
        updateData.push(words);
        // console.log(words);
        // for(let word of words){
        //     console.log(word);
        //     let nx = word.positions[0];
        //     let ny = word.positions[1];
        //     let nangle = word.positions[2];
        //     let nvel = word.positions[3];
    
        //     let n = new myLetter(word.word, nx, ny, nangle, nvel);
        //     myObjs.push(n);
        // }
        // console.log(myObjs);



    })

    refAll = database.ref('initialInput');


    refAll.on('child_added', function(data){
        let words = data.val();
        allData.push(words);
        console.log(allData);
        console.log(words);

        for(let word of allData){
            let nx = word.positions[0];
            let ny = word.positions[1];
            let nangle = word.positions[2];
            let nvel = word.positions[3];
    
            let n = new myLetter(word.word, nx, ny, nangle, nvel);
            myObjs.push(n);

        }

       



        // let n = new myLetter()
    });

    


    }



function draw() {
    // translate(width/2, height/2);

    // fill(72);
    noFill();
    // background(255);
    Engine.update(engine);
    // stroke(0);

    push();
    noStroke();
    fill(0);
    textFont(font);

    // textSize(slider.value());
    textAlign(LEFT);

    text(myInput.value(), width/2+20,200)

    pop();

    strokeJoin(ROUND);
    rectMode(CENTER);
    ellipseMode(CENTER);

fill(0);

noStroke();
strokeWeight(3);
stroke(0);



    let letters = ['h', 'i'];

    textAlign(CENTER, CENTER);
    push();
    fill('red');

    textSize(200);


    pop();


    for(let i = 0; i < myObjs.length; i++){
        let obj = myObjs[i];


        // obj.update();
        obj.show();

      
        posArr[i] = [obj.body.position.x, obj.body.position.y, obj.body.angle, obj.body.angularVelocity];

        allData[i] = {
            positions: [obj.body.position.x, obj.body.position.y, obj.body.angle, obj.body.angularVelocity],
            word: obj.text
        }

    
    }

    let newref = database.ref('updatedPositions');
    newref.set({
       info: allData
    });




 
    counter++;
   

    }

function rewrite() {
    counter = 0;
    let newText = myInput.value();
    let randomX = random(150, 630);
    // let n = new myLetter(newText, randomX, 50, 0, 0);
    let pos = [randomX, 50, 0, 0];
    // pos.push(n.body.position.x, n.body.position.y, n.body.angle, n.body.angularVelocity);
    posArr.push(pos);
    // myObjs.push(n);

    wordsNum++;
    console.log(wordsNum);

   

    let data = {
        word: myInput.value(),
        positions: pos
    }

    // console.log(n.invel);

    let ref = database.ref('initialInput');

    let numRef = database.ref('numWords');
    numRef.set({
        count: wordsNum
    });

    let result = ref.push(data);

    console.log(result.key);

    myKeys.push(result.key);


    console.log(myKeys);

    

    redraw();


    
}






