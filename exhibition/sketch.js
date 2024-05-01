let myText;
// let textArr = [];
let font;
let slider;

let letterArr = [];
let myLetters = [];

let myObjs = [];

let intPositions = [];

let palette = [];

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





if(getCookie('myLetters') == ''){
    console.log("no words have been submited")
} else {
    myLetters = JSON.parse(getCookie('myLetters'));
    intPositions = JSON.parse(getCookie('intPositions'));

    console.log(myLetters);
    console.log(intPositions);

}

function preload() {
    font = loadFont('ABCArizonaMix-Bold-Trial.otf');
  }


    
function setup () {
    // counter = 0;
deleteAllCookies();


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

    for(let i= 0; i < myLetters.length; i++){
        let letter = myLetters[i];
        // letter.show();
        console.log(letter);

        let nx = intPositions[i][0];
        let ny = intPositions[i][1];
        let nangle = intPositions[i][2];
        let nvel = intPositions[i][3];




        let n = new myLetter(letter, nx, ny, nangle, nvel);


        // n.color = letter.color;
        // n.posx = letter.posx;
        // n.posy = letter.posy;
        // n.size = letter.size;

        myObjs.push(n);

        console.log(n);
    }

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

    for(let i = 0; i < myObjs.length; i++){
        let obj = myObjs[i];
        obj.show();

        if(counter === 250) {

            console.log(obj.body.position.x);
            console.log(obj.body.position.y);
            console.log(obj.body.angle);

            let posArr = [];

            posArr.push(obj.body.position.x, obj.body.position.y, obj.body.angle, obj.body.angularVelocity);
            console.log(posArr);
            intPositions[i] = posArr;
        }

        if(counter == 251){
            console.log(intPositions);

            pos_str = JSON.stringify(intPositions);
            // storeItem('textArr', textArr);
            setCookie("intPositions", pos_str, 1);

        }

        // if(counter > 250) {
        //     obj.color = 'white';
        // }
    }


    // rect(control.position.x, control.position.y, 50, 50);

    // myLetters[0].show();



    // for(let letter of myLetters){
    //     // letter.show();

    //     console.log(letter);
    // }

 
    counter++;
    // console.log(counter);
   

    }

function rewrite() {
    counter = 0;
    let newText = myInput.value();
    let n = new myLetter(newText, random(150, 630), 50, 0, 0);
    myObjs.push(n);

    redraw();


    myLetters.push(newText);
    letter_str = JSON.stringify(myLetters);
    // storeItem('textArr', textArr);
    setCookie("myLetters", letter_str, 1);
 

    
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



