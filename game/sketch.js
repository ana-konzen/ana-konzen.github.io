//credit for animated grain texture: https://editor.p5js.org/lazydistribution/sketches/nB-VddIvd

let w, h;
let grains = [];
let textureImage;
let grain;
let cnv;
let distance = 0.95;
let circleSize = 80;
let wProp = 0.65;
let hProp = 0.65 / 1.485;
let wSum = 0;
let hSum = 0;
let cTop = 70;
let proportion = 100;
let myCanvases = [courbet, schiele, lepage];
let currentCanvas = 0;
let prompts = document.querySelectorAll(".prompt");




function preload() {
    textureImage = loadImage('texture.jpg');
}

function setup() {

    
    w = windowWidth * 0.65;
    h = w / 1.485;
    cnv = createCanvas(w, h);

    positionCanvas();

    console.log(map(0, 0, 100, windowHeight, windowWidth));

    // background(244, 232, 210);
    noCursor();


    createFilmGrain(0, 0, w, h, 100, 3, 0.1); //not my code (see credit above)
    

  
}

function windowResized() {
    console.log(width);

    let resize = map(proportion, 0, 100, windowHeight, windowWidth);
   
    w = resize * wProp + wSum;

    h = resize * hProp + hSum;

    resizeCanvas(w, h);
    console.log(resize);

    
    positionCanvas();
    createFilmGrain(0, 0, w, h, 100, 3, 0.1); //not my code (see credit above)

    
  }

function draw() {
    background(244, 232, 210);
 
    updateGrain(); //not my code (see credit above)
    displayGrain(); //not my code (see credit above)

    if(frameCount>10){

        let g = new sand();
        grains.push(g);

        for (let i = 0; i < grains.length; i++){
            grains[i].update();
            grains[i].show();

        }

        if(grains.length > 30){
            grains.splice(0, 1);
        }


    }

    console.log(mouseX);
    console.log(mouseY);



}


function mousePressed() {
    if (mouseX > width/4 && mouseX < width/2.4 && mouseY > 0 && mouseY < height/4) {
        prompts[0].style.opacity = "30%";
        // prompts[0].style.textDecoration = "line-through";

    }
    else if (mouseX > width/4 && mouseX < width/3 && mouseY > height/2 && mouseY < height/1.5) {
        prompts[2].style.opacity = "30%";

     


    }
  }



function keyPressed() {
   
    if (keyCode === RIGHT_ARROW) {
      circleSize += 15;
    }

    if (keyCode === LEFT_ARROW) {
        circleSize -= 20;
        
        circleSize = max(circleSize, 15); 
      }

      if (keyCode === RETURN) {
       currentCanvas++;
       if (currentCanvas >= myCanvases.length) {
        currentCanvas = 0; 
      }
      }
      myCanvases[currentCanvas]();
      console.log(myCanvases[currentCanvas]);
}



class sand {
    constructor(){
        this.x = mouseX * (1 + 0.02 * sin(frameCount * PI / 50));
        this.y = mouseY * (1 + 0.02 * sin(frameCount * PI / 40));
        this.width = circleSize * (1 + 0.1 * sin(frameCount * PI / 50));
        this.opacity = 255;
        // this.frame = frameCount;

    }

    update(){
        // this.opacity = max(0, this.opacity - 100);
        this.width = max(0, this.width - 1);

    }

    show(){
        push();
        erase(this.opacity, 0);
        drawingContext.filter = "blur(20px)";
        circle(this.x, this.y, this.width);
      
        noErase();
        pop();

    }

} 





function courbet() {
    wProp = 0.65;
    proportion = 100;
    distance = 0.95;
    hProp = 0.65 / 1.485;
    cTop = 70;
    w = windowWidth * wProp;
    h = windowWidth * hProp;
    resizeCanvas(w, h);
    positionCanvas();
    createFilmGrain(0, 0, w, h, 100, 3, 0.1); //not my code (see credit above)
    
}

function schiele() {
    wProp = 0.95/1.308;
    proportion = 0;
    hProp = 0.95;
    cTop = 25;
    distance = 0.8;
    w = windowHeight * wProp;
    h = windowHeight * hProp;
    resizeCanvas(w, h);
    positionCanvas();
    createFilmGrain(0, 0, w, h, 100, 3, 0.1); //not my code (see credit above)
    
}


function lepage() {
    wProp = 0.55;
    proportion = 100;
    hProp = 0.55 / 1.109;
    cTop = 50;
    distance = 0.92;
    w = windowWidth * wProp;
    h = windowWidth * hProp;
    resizeCanvas(w, h);
    positionCanvas();
    createFilmGrain(0, 0, w, h, 100, 3, 0.1); //not my code (see credit above)
    
}


function positionCanvas() {
    var x = windowWidth * distance - width;
    var y = cTop;
    cnv.position(x, y);

}




//the below is not my code (see credit above) 

function updateGrain() {
    grain.update();
  }
  
  function displayGrain() {
    grain.display();
  }
  
  function createFilmGrain(x, y, w, h, patternSize, sampleSize, patternAlpha) {
    grain = new FilmGrainEffect(x, y, w, h, patternSize, sampleSize, patternAlpha);
  }