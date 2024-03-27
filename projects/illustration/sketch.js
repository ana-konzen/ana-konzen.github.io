// let header = document.getElementById("main-header");

let cnv; 
let size = 100;

let opacity = 255;
let circleArray = [];

console.log(proCont.classList.contains("appear"));




function setup() {
    createCanvas(windowWidth, windowHeight);
    cursor(CROSS);



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {

  if (proCont.classList.contains("appear")) {
    opacity = 10;
  } else {
    opacity = 255;
  }
  

    // fill(114, 47, 55);
    noFill();
    stroke(114, 47, 55, opacity);
    strokeWeight(4);
    filter(BLUR, 2);

    if (mouseIsPressed){
        stroke(2, 50, 46);
    }

    circleArray.push(ellipse(mouseX, mouseY, size, size));

    


}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      size -=10;
    } else if (keyCode === RIGHT_ARROW) {
      size +=10;
    } else if(keyCode === RETURN){
        clear();
    }
  }

// function mousePressed() {
//     clear();}

