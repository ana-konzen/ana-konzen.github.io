// let header = document.getElementById("main-header");

let cnv; 
let size = 100;

let opacity = 255;
let circleArray = [];

console.log(proCont.classList.contains("appear"));

let toggleButton = document.getElementById("toggleButton");
let toggleCircle = document.getElementById("toggleCircle");

let myBuffer = document.getElementById("buffer");
let myBuffer2 = document.getElementById("buffer2");



let instructions = document.getElementById("instructions");






function setup() {
    createCanvas(windowWidth, windowHeight);
    cursor(CROSS);

    // toggleButton.addEventListener('click', toggleFunction);
    // projects.addEventListener('click', protoggleFunction);
    // toggleFunction();



}

function toggleFunction() {
  if(toggleCircle.classList.contains('off')){
    toggleCircle.classList.remove('off');
    loop();
    cursor(CROSS);
    instructions.style.display = 'block';
    myBuffer.style.display = 'none';
    myBuffer2.style.display = 'none';
    proCont.style.cursor = 'crosshair';
    toggleButton.style.bottom = "90px";
  } else{
    toggleCircle.classList.add('off');
    noLoop();
    clear();
    cursor(ARROW);
    proCont.style.cursor = 'default';
    instructions.style.display = 'none';
    myBuffer.style.display = 'block';
    toggleButton.style.bottom = "20px";

  }
}

function protoggleFunction() {
  
    toggleCircle.classList.add('off');
    noLoop();
    // clear();
    cursor(ARROW);
    proCont.style.cursor = 'default';
    instructions.style.display = 'none';
    // myBuffer.style.display = 'block';
    toggleButton.style.bottom = "20px";
    // myBuffer2.style.display = 'block';


  
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
  console.log(isLooping());

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

