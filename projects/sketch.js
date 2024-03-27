// let header = document.getElementById("main-header");

let cnv; 
let exclist = document.getElementById("exclist");
let exercise = document.getElementById("exercises");
let project = document.getElementById("projects");
let size = 100;


let prolist = document.getElementById("prolist");



function setup() {
    createCanvas(windowWidth, windowHeight);
    cursor(CROSS);



}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {

    // fill(114, 47, 55);
    noFill();
    stroke(114, 47, 55);
    strokeWeight(4);
    filter(BLUR, 2);

    if (mouseIsPressed){
        stroke(2, 50, 46);
    }

    ellipse(mouseX, mouseY, size, size);


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

function openExc() {
    exclist.classList.toggle("appear");

    }

    function openPro() {
        prolist.classList.toggle("appear");
    
        }
