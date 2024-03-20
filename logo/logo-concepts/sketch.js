let expressionistBrushes = ["hatch_brush", "marker", "cpencil", "charcoal"];
let classicBrushes = ["pen", "2B", "HB", "charcoal"];

// // if (classic){
//   fillstyle = brush.fill(random(palette), opacity);
    //if (!minimalist){
//    brush.bleed(randomRange);
// brush.fillTexture(randomRange);
  //  }

// }

//if(radical){
  //
  // if (!minimalist){
    //

  // }else{
    //brush.noHatch();
  //}
//}

function preload() {
    font = loadFont('AlteHaasGroteskBold.ttf');
  }
  
  
  function setup() {


    console.log(brush.box());

    frameRate(5);

    cnv = createCanvas(1400, 800, WEBGL);
    angleMode(DEGREES);

    positionCanvas();

}

function draw() {


    noLoop();


    background("white");
    translate(-width/2,-height/2);



    brush.push();

    brush.noField();
    brush.set("rotring", "black", 3);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    // drawFlash();

    // drawArt();
    
    // brush.set(random(brush.box()), "black", random(1, 4));
    brush.set("hatch_brush", "black", 4);
    
    drawFlash();

    drawArt();

    push(); 

    translate(0, 300);

    brush.set("marker2", "black", 7);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    drawFlash();

    drawArt();
    
    // brush.set(random(brush.box()), "black", random(1, 4));
    brush.set("marker", "black", 1);
    
    drawFlash();

    drawArt();

    

    pop();

    push(); 

    translate(700, 0);

    brush.set("marker2", "red", 7);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    drawFlash();

    drawArt();

    brush.set("marker2", "blue", 1);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    drawFlash();

    drawArt();

    brush.pop();
    
    // brush.set(random(brush.box()), "black", random(1, 4));

    fill("black");
    textFont(font);
  textSize(100);
  text('flash art', 130, 200);

 

    brush.set("marker", "red", 2);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    drawFlash();

    drawArt();

    brush.set("marker2", "white", 2);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    drawFlash();

    drawArt();

    brush.set("hatch_brush", "black", 6);

    // brush.set(random(brush.box()), "black", random(1, 8));

    
    drawFlash();

    drawArt();

    pop();





  






}



function windowResized() {
    positionCanvas();
  }


  function positionCanvas() {
    let x = windowWidth /2 - (width/2);
    let y = 50;
    cnv.position(x, y);

}

function drawFlash(){
    push();
    brush.push();
  
    translate(100, 100);



    brush.beginShape(0);

    brush.vertex(10, 10);
    brush.vertex(50, 5);
    brush.vertex(10, 10);
    brush.vertex(10, 50);
    brush.vertex(50, 45);
    brush.vertex(10, 50);
    brush.vertex(10, 120);


    brush.endShape();

    brush.pop();


    brush.push();

    translate(30, 10);



    brush.beginShape(0);

    brush.vertex(10, 50);
    brush.vertex(10, 150);
    brush.vertex(50, 155);
    brush.vertex(10, 150);

    brush.endShape();

    brush.pop();

    translate(30, -30);


    brush.beginShape(0);

    brush.vertex(10, random(100, 180));
    brush.vertex(30, random(0, 20));
    brush.vertex(60, random(100, 180));
    brush.vertex(45, 70);
    brush.vertex(5, 80);
    brush.vertex(20, 80);

    brush.endShape();

    translate(40, -10);


    brush.beginShape(1);

    brush.vertex(10, 150);
    brush.vertex(70, 160);
    brush.vertex(70, 110);
    brush.vertex(20, 110);
    brush.vertex(20, 70);
    brush.vertex(60, 60);

    brush.endShape();

    translate(70, 20);


    brush.beginShape(0);

    brush.vertex(10, 160);
    brush.vertex(10, 10);
    brush.vertex(10, 60);
    brush.vertex(0, 60);
    brush.vertex(90, 80);
    brush.vertex(50, 70);
    brush.vertex(50, 10);
    brush.vertex(50, 70);
    brush.vertex(50, 160);
    brush.vertex(50, 70);
    brush.vertex(10, 60);


    brush.endShape();


    translate(100, 30);



    pop();

}


function drawArt(){
    push();
    brush.push();

    translate(390, 120);


    brush.beginShape(0);

    brush.vertex(10, random(100, 180));
    brush.vertex(30, random(0, -20));
    brush.vertex(60, random(100, 180));
    brush.vertex(35, 50);
    brush.vertex(random(0, -20), 60);
    brush.vertex(20, 60);

    brush.endShape();

    translate(60, 20);


    brush.beginShape(0);

    brush.vertex(10, 120);
    brush.vertex(15, -20);
    brush.vertex(random(60, 80), 10);
    brush.vertex(0, 45);
    brush.vertex(12, 42);
    brush.vertex(60,  random(100, 180));
    brush.vertex(12, 42);

    brush.endShape();

    translate(40, -30);


    brush.beginShape(0);

    brush.vertex(10, 8);
    brush.vertex(40, 15);
    brush.vertex(40, 0);
    brush.vertex(30, random(100, 150));
    brush.vertex(40, 15);
    brush.vertex(random(70, 100), 30);
    brush.vertex(40, 15);


    brush.endShape();

    brush.pop();
    pop();

}


