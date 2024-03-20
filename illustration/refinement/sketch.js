//cars
let carY = 1000;
let rowCount = 10;
let redPos;
let inverted;
let originX, originY;
let yes = 1;
let no = 0;
let y;
let carCount = 21;
let carMargin = 31;
let carHeight = 47;
let carWidth = 75;
let ang = 0;

//colors
let carColors = [];
let lightColor = "white";
let palette = [];
let red = "#f74034";
let yellow = "#ffd640";

//claw
let claws = 45;
let clawx;
let clawy = 150;



// let scrollDelta = 0;
// //canvas and grain
// let w = 2048;
// let h = 4000;
// // let textureImage;
// // let grain;
// let cnv;

// let ny;

let scrollDelta = 0;




let textureImage;
let grain;

    let w = 2048;
    let h = 4000;


   function preload() {
        textureImage = loadImage('texture.jpg');
    }

    function setup() {


        let cnv2 = createCanvas(w, h);
        cnv2.id("grainCanvas");
        background(250, 248, 242);


        createFilmGrain(0, 0, w, h, 100, 3, 0.1); //not my code (see credit above)

    }

    function draw (){
        background(250, 248, 242);

    updateGrain(); //not my code (see credit above)
    displayGrain(); //not my code (see credit above)
    }
    //the below is not my code (see credit above) 

    function updateGrain  () {
    grain.update();
  }
  
  function displayGrain () {
    grain.display();
  }
  
  createFilmGrain = function (x, y, w, h, patternSize, sampleSize, patternAlpha) {
    grain = new FilmGrainEffect(x, y, w, h, patternSize, sampleSize, patternAlpha);
  }




const carCnv = p => {

        p.w = 2048;
        p.h = 4000;

        let cars = [];


        p.setup = function() {
            p.cnv = p.createCanvas(p.w, p.h);
            p.cnv.id("carCanvas");
            p.angleMode(p.DEGREES);
            p.frameRate(40);

            // positionCanvas();
            p.noStroke();

            for (let i = 0; i <= 255; i += 255 / 15) {
                palette.push(p.color(i)); 
            }



            for(i = 0; i < rowCount; i++){
                let lineColors = [];
                let lineCars = [];
                for(j = 0; j < carCount; j++){
                    lineColors.push(p.random(palette));
                    let c = new myCar (p, -(carWidth + carMargin) * j + p.width);
                    lineCars.push(c);
                }
                carColors.push(lineColors);
                cars.push(lineCars);
                clawx = p.width * 0.682;
            }

            console.log(cars);

            redPos = p.int(p.random(8, carCount - 1));

            for (i = 0; i < 10; i ++){
            randomPos = p.int(p.random(carCount));
            randomRow = p.int(p.random(rowCount));
            cars[randomRow][randomPos].stroke = "rgba(0,0,0,100)";

            }

            for (i = 0; i < 40; i ++){
                randomPos = p.int(p.random(carCount));
                randomRow = p.int(p.random(rowCount));
                cars[randomRow][randomPos].stroke2 = "rgba(0,0,0,100)";
                }

                for (i = 0; i < 30; i ++){
                    randomPos = p.int(p.random(carCount));
                    randomRow = p.int(p.random(rowCount));
                    cars[randomRow][randomPos].stroke2 = "rgba(255,255,255,100)";
                    }


            for (i = 0; i < 30; i ++){
                randomPos = p.int(p.random(carCount));
                randomRow = p.int(p.random(rowCount));
                cars[randomRow][randomPos].window2 = "#c0cdcf";
                }

            for (i = 0; i < 30; i ++){
                randomPos = p.int(p.random(carCount));
                randomRow = p.int(p.random(rowCount));
                cars[randomRow][randomPos].window = "#c0cdcf";
                    }

                for (i = 0; i < 10; i ++){
                    randomPos = p.int(p.random(carCount));
                    randomRow = p.int(p.random(rowCount));
                    cars[randomRow][randomPos].window = "#565f61";
                    cars[randomRow][randomPos].window2 = "#565f61";
                        }
                        
            carColors[rowCount - 1][redPos] = red;

            cars[rowCount - 1][redPos].stroke = "rgba(0,0,0,0)";
            cars[rowCount - 1][redPos].stroke2 = "rgba(0,0,0,0)";
            cars[rowCount - 1][redPos].window = "#edf9fa";
            cars[rowCount - 1][redPos].window2 = "#edf9fa";



        }

        // function windowResized() {
        //     resizeCanvas(w, h);

            

        //     positionCanvas();
        //   }

        p.draw = function() {


            p.clear();



            for(let i = 0; i < rowCount; i++){
                p.noFill();
                p.stroke("#3c3c3c");
                p.strokeWeight(2);
                y = (p.height - (4000 - 2048) - 450) - i * 120;
                p.rect(0, y, p.width, 30);
                p.fill("red");

                if (i % 2 == 0){
                    inverted = yes;
                }
                else {
                    inverted = no;
                }   

                for (let j = 0; j < carCount; j++){
                    let car = cars[i][j];
                    carY = y - 30;
                    car.color = carColors[i][j];
                    car.scale = p.map(inverted, 0, 1, -1, 1);
                    car.x = p.map(inverted, 0, 1, car.vx, p.width - car.vx - car.w) ;
                    car.vx+=5;


            
                    
                    if(car.color != red) {
                        car.light = "white";
                        car.y = carY;
                        ang = 0;
                        originX = 0;
                        originY = 0;

                    }
                    else {

                        
                        car.light = yellow;
                        if(car.vx < p.width * 0.75 && car.y >= carY){
                            car.y = carY;
                            car.vx = cars[i][redPos + 1].vx + 5 + carWidth + carMargin;
                            claws = 20;

                            if(clawx < p.width * 0.682){
                                clawx +=10;
                                clawy = 150;

                            
                            } else if (clawx >= p.width * 0.682 && car.vx > p.width * 0.6){
                                clawx = p.width * 0.682;
                                clawy+=5;

                            }
                            else if (clawx >= p.width * 0.682 && car.vx < p.width * 0.6){
                                clawx = p.width * 0.682;
                                clawy = 150;
                            }

                        }
                    
                        else if(car.vx >= p.width * 0.75 && car.y > y - 200){
                            car.y-=10;
                            clawy-=10;
                            claws = 45;
                            car.vx = p.width * 0.75;
            
                            ang = 20;
                        }
                        else if(car.y <= y - 200 && car.vx > p.width * 0.25){
                            car.y = y - 200;
                            car.vx-=10;
                            clawx-=5;
                            clawy = 280;

                            ang = 35;

                            
                        }
                        else {
                            car.vx = p.width * 0.25;
                            car.y+=10;
                            claws = 15;
                            if(clawy > 150){
                                clawy-=7;
                                
                            }
                            else if(clawy <=150){
                                clawy = 150;
                                claws = 20;
                            }


                        }
                    }

                    if (car.vx >= p.width + carWidth){
                        for (let k = 0; k < rowCount; k++){
                            carColors[k][j] = p.random(palette);
                        }
                        if (j == redPos){
                            carColors[rowCount-1][j] = red;
                        }
                        car.color = carColors[i][j];
                        car.vx = -(carWidth + carMargin);
                    }

            

            


                    p.fill("red");
                    
                
                    car.show();

            
                }


            }

            new claw(p).show();

            // let newClaw = new claw();
            // let newCar = new myCar();
            // newCar.color = red;
            // ang = 35;
            // newClaw.x = 0.75 * p.width;
            // newClaw.s = 45;
            // newCar.x = 0.79 * p.width;

            // if(scrollDelta <  1800 - 72){


            //     newCar.y = 1800 + 428;
                
        
            //     newClaw.y = 1800 + 428;}

                    
                // newCar.y =+ scrollDelta;
            
                // newClaw.y =+ scrollDelta;


        
            // else if (scrollDelta >=  1800 - 72){
            //     newCar.y = scrollDelta + 500;
                
        
            //     newClaw.y = scrollDelta + 500;
        
            // }

            // else if(scrollDelta >= 3000){
            //     newCar.y = 3500;
            //     newClaw.y = 3500;


            // }
            

            //    newClaw.show();
            //    newCar.show();
                // console.log("hi!");

        
}





}

const scrollie = p => {

    p.w = 400;
    p.h = 800;

    p.setup = function() {
        p.cnv = p.createCanvas(p.w, p.h);
        p.cnv.id("scrollCanvas");
        // p.cnv.position(p.windowWidth - p.w/2 - 100, 0);
        p.angleMode(p.DEGREES);
        p.frameRate(40);
        // p.background("white");

        // positionCanvas();
        // p.noStroke();

        p.translate(80, 500);

        let newClaw = new claw(p);
        let newCar = new myCar(p, 0);
            newCar.color = red;
            ang = 35;
            newClaw.x = 0;
            newCar.light = yellow;
            newClaw.s = 45;
            newCar.x = 143;
            newCar.y = 240;
            newCar.scale = -1;
            newClaw.y = 200;
        newCar.show();
        newClaw.show();


       
    }



}







function positionCanvas() {
    let x = windowWidth /2 - (width/2);
    let y = 0;
    cnv.position(x, y);

}






let carCanvas = new p5(carCnv);
let scrollCanvas = new p5(scrollie, "scrollContainer");
let scrollCanvas2 = new p5(scrollie, "scrollContainer2");
let scrollCanvas3 = new p5(scrollie, "scrollContainer3");
let scrollContainer = document.getElementById("scrollContainer");
let scrollContainer2 = document.getElementById("scrollContainer2");
let scrollContainer3 = document.getElementById("scrollContainer3");





function mouseWheel (event) { 
    scrollDelta += event.deltaY; 
    // rect(50, 500, 50, 500);

    

    if(scrollDelta < 0){
        scrollDelta = 0;
    }
    if(scrollDelta > 3300){
        scrollDelta = 3300;
    }

    if(scrollDelta > 1000){
        let opacity = map(scrollDelta, 0, 1500, 10, -1);
        carCanvas.cnv.style("opacity", opacity);
    }
    else{
        carCanvas.cnv.style("opacity", 100);
    }

    if(scrollDelta > 1300 && scrollDelta < 2100){
        let conX = map(scrollDelta, 1300, 2100, -800, 0);
        scrollContainer.style.top = conX + "px";

     }
     else if(scrollDelta >= 2100){
        scrollContainer.style.top = "0px";

     }
     else {
        scrollContainer.style.top = "-800px";

     }

    //  if(scrollDelta > 1700 && scrollDelta < 2800){
    //     let conX2 = map(scrollDelta, 1700, 2800, -800, -200);
    //     scrollContainer2.style.top = conX2 + "px";
    //  }
    //  else if(scrollDelta >= 2800){
    //     scrollContainer2.style.top = "-400px";

    //  }
    //  else {
    //     scrollContainer2.style.top = "-800px";

    //  }

    //  if(scrollDelta > 2600 && scrollDelta < 3200){
    //     let conX3 = map(scrollDelta, 2600, 3200, -800, -200);
    //     scrollContainer3.style.top = conX3 + "px";
    //  }
    //  else if(scrollDelta >= 3200){
    //     scrollContainer3.style.top = "-200px";

    //  }
    //  else {
    //     scrollContainer3.style.top = "-800px";

    //  }

    console.log(scrollDelta);

   


}





