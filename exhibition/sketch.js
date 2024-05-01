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





// if(getCookie('myLetters') == ''){
//     console.log("no words have been submited")
// } else {
//     myLetters = JSON.parse(getCookie('myLetters'));
//     intPositions = JSON.parse(getCookie('intPositions'));

//     console.log(myLetters);
//     console.log(intPositions);

// }

function preload() {
    font = loadFont('ABCArizonaMix-Bold-Trial.otf');
  }


    
function setup () {
    // counter = 0;
deleteAllCookies();




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
    myInput.position(820, 20);

    engine = Engine.create();



    let button = createButton('Submit');
    button.position(820, 50);
    button.mousePressed(rewrite);

    slider = createSlider(50, 250);
    slider.position(820, 100);
    slider.size(100);



    console.log(myObjs);


    // let letters = Array.from(myText);

    // for (let i =0; i < letters.length; i++){

    //     let letter = letters[i];
    // let points = font.textToPoints(letter, 0, 0, 200, { sampleFactor:  0.1, simplifyThreshold: 0 });
    // for (let p of points){
    //     delete p.alpha;
    // }
    // console.log(points);
    //     let pletter = Bodies.fromVertices(300 * i + 50, 0, points, {restitution: 0.8, friction: 0.1});
    //     letterArr.push(pletter);
    // }


    ground = Bodies.rectangle(400, height-10, width/2, 40, { isStatic: true,  friction: 1});
    wall1 = Bodies.rectangle(20, height/2, 40, height, { isStatic: true, friction: 1});
    wall2 = Bodies.rectangle(width/2 - 10, height/2, 40, height, { isStatic: true, friction: 1});

    control = Bodies.rectangle(0, 0, 50, 50);

    // console.log(letterArr[1].bounds.min.x);
    // console.log(letterArr[1].bounds.max.x);



    Composite.add(engine.world, [ground, wall1, wall2]);

    // Runner.run(engine);

    refAll = database.ref('initialInput');

    refAll.on('child_added', function(data){
        let word = data.val();
        allData.push(word);
        console.log(allData);
        console.log(word);

        let nx = word.positions[0];
        let ny = word.positions[1];
        let nangle = word.positions[2];
        let nvel = word.positions[3];

        let n = new myLetter(word.word, nx, ny, nangle, nvel);
        myObjs.push(n);
       console.log(myObjs);



        // let n = new myLetter()
    });
    // console.log(myKeys);
    // console.log(myPositions);


    // let n = new myLetter

    


    }


// function gotData(data) {
//     // console.log(data.val());
//     let words = data.val();
//     keys = Object.keys(words);
//     console.log(keys[0]);
//     console.log(data.val());
//     console.log(words[keys[0]]);


//     for (let i = 0; i < keys.length; i++){
//         key = keys[i];
//         // myKeys.push(key);

//         let word = words[key].word;
//         myPositions = words[key].positions;

//         console.log(word);

//         let nx = myPositions[0];
//         let ny = myPositions[1];
//         let nangle = myPositions[2];
//         let nvel = myPositions[3];

//         // let n = new myLetter(word, nx, ny, nangle, nvel);

//         // myObjs.push(n);

//     }

    // console.log(myObjs);

    // for(let i= 0; i < myLetters.length; i++){
    //     let letter = myLetters[i];
    //     // letter.show();
    //     console.log(letter);

    //     let nx = intPositions[i][0];
    //     let ny = intPositions[i][1];
    //     let nangle = intPositions[i][2];
    //     let nvel = intPositions[i][3];




    //     let n = new myLetter(letter, nx, ny, nangle, nvel);


    //     // n.color = letter.color;
    //     // n.posx = letter.posx;
    //     // n.posy = letter.posy;
    //     // n.size = letter.size;

    //     myObjs.push(n);

    //     console.log(n);
    // }
// }



function updateData(word, arr, key) {
    let ref = database.ref('initialInput/' + key);
    ref.set({
        word: word,
        positions: arr
    })




}

function errData(err) {
    console.log('error');
    console.log(err);
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

    textSize(slider.value());
    textAlign(LEFT);

    text(myInput.value(), width/2+20,200)

    pop();

    // console.log(allData);





    // fill(252, 173, 3);
    // noStroke();

    strokeJoin(ROUND);
    rectMode(CENTER);
    ellipseMode(CENTER);


    // filter(BLUR, 10);
    // stroke(72);
    // text(myText, width / 2, height / 2);


//   //   drawingContext.shadowBlur = 0.1;
//     drawingContext.shadowColor = '#ba7002';
//     drawingContext.shadowOffsetX = 1;
//     drawingContext.shadowOffsetY = 1;
fill(0);

noStroke();

// rect(ground.position.x, ground.position.y - 15, width/2, 10);
// rect(wall1.position.x + 15, wall1.position.y, 10, height);
// rect(wall2.position.x - 15, wall2.position.y, 10, height);



strokeWeight(3);
stroke(0);



    // let letters = Array.from(myText);
    let letters = ['h', 'i'];

    textAlign(CENTER, CENTER);
    push();
    fill('red');

    textSize(200);



    // for (let i =0; i < letters.length; i++){

    //     let letter = letters[i];
 
    //     let points = font.textToPoints(letter, 0, 0, 200, { sampleFactor:  0.1, simplifyThreshold: 0 });


      

    //     // translate(letterArr[i].position.x, letterArr[i].position.y);


    //     // rotate(letterArr[i].angle);

     
        
    //     text(letter, 0, 0);



    // }

    pop();

    // console.log(myKeys);

    for(let i = 0; i < myObjs.length; i++){
        let obj = myObjs[i];

        obj.show();

        console.log(allData);

        // if(counter < 450) {

        //     console.log(obj.body.position.x);
        //     console.log(obj.body.position.y);
        //     console.log(obj.body.angle);

        //     let posArr = [];

        //     posArr.push(obj.body.position.x, obj.body.position.y, obj.body.angle, obj.body.angularVelocity);
        //     console.log(posArr);
        //     intPositions[i] = posArr;

        //     let data = {
        //         positions: posArr,
        //         word: obj.text
        //     }


        //     let ref = database.ref('oldInputs');
        
        //     ref.push(data);
        // }

     

        // if(counter > 250) {
        //     obj.color = 'white';
        // }
        // posArr.push(obj.body.position.x, obj.body.position.y, obj.body.angle, obj.body.angularVelocity);
        posArr[i] = [obj.body.position.x, obj.body.position.y, obj.body.angle, obj.body.angularVelocity];
        // console.log(posArr[0]);

        // console.log(keys[i]);

        // let ref = database.ref('initialInput/' + keys[i]);
        // ref.set({
        //     word: obj.text,
        //     positions: posArr[i]
        // });

        // obj.show();
 
        // updateData(obj.word, posArr[i], myKeys[i]);
            // console.log(key);

    
    }


    // rect(control.position.x, control.position.y, 50, 50);

    // myLetters[0].show();



    // for(let letter of myLetters){
    //     // letter.show();

    //     console.log(letter);
    // }




    // console.log(myKeys);



 
    counter++;
    // console.log(counter);
   

    }

function rewrite() {
    counter = 0;
    let newText = myInput.value();
    let randomX = random(150, 630);
    let n = new myLetter(newText, randomX, 50, 0, 0);
    let pos = [];
    pos.push(n.body.position.x, n.body.position.y, n.body.angle, n.body.angularVelocity);
    posArr.push(pos);
    myObjs.push(n);



    myLetters.push(newText);
    letter_str = JSON.stringify(myLetters);
    // storeItem('textArr', textArr);
    setCookie("myLetters", letter_str, 1);

    let data = {
        word: myInput.value(),
        positions: pos
    }

    console.log(n.invel);

    let ref = database.ref('initialInput');

    let result = ref.push(data);

    console.log(result.key);

    myKeys.push(result.key);


    console.log(myKeys);

    

    redraw();


    
}



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}



