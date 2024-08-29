// let header = document.getElementById("main-header");

let cnv; 
let size = 100;

let opacity = 255;
let circleArray = [];







function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    brush.load();
    console.log(brush.box());
    console.log('test');
  brush.set('pen', "#000", 2);
  frameRate(5);



    // toggleButton.addEventListener('click', toggleFunction);
    // projects.addEventListener('click', protoggleFunction);
    // toggleFunction();



}




function windowResized() {
  // if(isLooping()){
  //   resizeCanvas(windowWidth, windowHeight);
  // } else {
  //   resizeCanvas(windowWidth, windowHeight, noRedraw);
  // }

  resizeCanvas(windowWidth, windowHeight);

  }

function draw() {
  background('#f0f0f0');
  
  // brush.beginStroke('curve', 15, 30);
  //   brush.segment(30, 40, 1);
  //   brush.segment(40, 40, 1);


  // brush.endStroke(30, 0.6);

  brush.circle(30, 30, 30, true);



  // if (proCont.classList.contains("appear")) {
  //   opacity = 10;
  // } else {
  //   opacity = 255;
  // }
  

  //   // fill(114, 47, 55);
  //   noFill();
  //   stroke(114, 47, 55, opacity);
  //   strokeWeight(4);
  //   filter(BLUR, 2);

  //   if (mouseIsPressed){
  //       stroke(2, 50, 46, opacity);
  //   }

  //   if(mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height){

  //   ellipse(mouseX, mouseY, size, size);
  // }

    


}




// function keyPressed() {
//     if (keyCode === LEFT_ARROW) {
//       size -=10;
//     } else if (keyCode === RIGHT_ARROW) {
//       size +=10;
//     } else if(keyCode === RETURN){
//         clear();
//     }
//   }

// function mousePressed() {
//     clear();}

