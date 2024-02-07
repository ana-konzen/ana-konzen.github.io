let cnv;
let c;
let claws = 0;
let clawx = 450;
let clawy = -400;
let distx = 0;
let redAng = 0;
let distX = 0;
let disty = 0;
let carPoints = [[30, 100], [390, 100], [400, 40], [350, 30], [300, -50], [100, -50], [0, 50]];
let wPoints = [[200, 20], [320, 25], [280, -30], [200, -30]];
let wPoints2 = [[70, 20], [170, 20], [170, -30], [120, -30]];
let lights = [[398, 50], [408, 50], [405, 70], [395, 70]];
let lights2 = [[0, 50], [20, 50], [20, 70], [0, 70]];

let palette = ["blue", "red", "green"];
let carList = [];
let redCar = 1;
function setup() {
    frameRate(60);


    console.log(brush.box());

    cnv = createCanvas(800, 800, WEBGL);
    angleMode(DEGREES);

    positionCanvas();
    for (let i = 0; i < palette.length; i ++){
        let car = new cars(palette[i], -(450 * i), 0);
        carList.push(car);
    }

    distx = carList[redCar].x
    disty = carList[redCar].y

    c = new claw();
    c.s = claws;
    c.x = clawx;
    c.y = clawy;
    brush.fillAnimatedMode(true);

}

function windowResized() {
    positionCanvas();
  }

function draw() {


    background(250, 248, 242);
    translate(-width/2,-height/2);

   
    brush.noField();

    brush.set("marker", "black", 1);
    brush.rotate(30);
    // brush.fill("#002185", 80);


    translate(0, 500);



    if(distx < width/2 && disty >= 0){
        distx = carList[2].x+450+20;
        // distx = distx + 20;
        disty = 0;
        redAng = 0;
        clawy = - width/2 + distx - 60;
        clawx = 450;
    }
    else if(disty > -250 && distx > 0){
        disty = disty-18;
        clawy = clawy - 18;
        redAng = -10;
        claws = 100;
    }
    else if(disty <= -250 && distx > 0){
        disty = -250;
        distx = distx - 20; 
        clawx = clawx - 20;
        if(redAng == -10){
            clawy = clawy - 30;
        }
        claws = 100;
        redAng = -20;
    }
    else if(distx <= 0 && disty < 0){
        distx = 0;
        disty = disty +20;
        claws = -50;

        if(disty > -150){
            clawx = clawx + 40;
            claws = 0;

        }
        redAng = -10;

    }
   

    carList[redCar].x = distx;
    carList[redCar].y = disty;
    carList[redCar].ang = redAng;


    for (let i = 0; i < palette.length; i ++){
        if (i != redCar){
            if (carList[i].x >= width){
                carList[i].x = 800 - 450*palette.length;
            }
            else{
                carList[i].x = carList[i].x + 20;
            }
            carList[i].show();
         }
        else{
            carList[i].show();
        }
    }


    c.s = claws;
    c.x = clawx;
    c.y = clawy;

    c.show();
}



class cars {
    constructor(carColor, x, y){
        this.x = x;
        this.y = y;
        this.color = carColor;
        this.ang = 0;

    }

    show(){
        brush.push();
        push();
        translate(this.x, this.y);
        // brush.fillTexture(0.5, 0.3);
        

        brush.fill(this.color, 80);
        brush.bleed(0.01, "out");

        brush.rotate(this.ang);

        brush.noStroke();

       

        brush.polygon(carPoints);



        brush.fill("white", 255);
        // brush.bleed(0.1, "out");

       


        brush.polygon(wPoints);
        brush.polygon(wPoints2);



        brush.fill("yellow", 255);
        brush.bleed(0.1, "out");
        // brush.fillTexture(0.3, 0.3);

        

        brush.polygon(lights);
        brush.polygon(lights2);





    
        // brush.fill("black", 100);
        // brush.fillTexture(0.3, 0.3);
    
        brush.fill("black", 255);
        brush.bleed(0.1, "out");



        brush.circle(100, 100, 40);
        brush.circle(300, 100, 40);



        brush.fill("white", 255);
        brush.bleed(0.1, "out");

        
        brush.circle(100, 100, 20);
        brush.circle(300, 100, 20);

        brush.push();
        
        brush.rotate(-this.ang);


        brush.stroke("white");
        brush.line(190, 40, 190, 90);
        brush.pop();


        // brush.line(90, -height/2, 150, -50);



        brush.pop();
        pop();
    }

} 


class claw {

    constructor(){
        this.s = claws;
        this.x = clawx;
        this.y = clawy;

    }

    show(){

    brush.push();

    translate(this.x, this.y)

    brush.set("pen", "#3d3d3d", 4);
    brush.noFill();


    brush.beginShape(1);

    brush.vertex(50 + this.s, 110, 7);
    brush.vertex(20 + this.s, 70, 5);
    brush.vertex(150, -200, 2);
    brush.vertex(200, -200, 2);
    brush.vertex(200, -800, 2);
    brush.vertex(200, -200, 2);
    brush.vertex(250, -200, 2);
    brush.vertex(380 - this.s, 70, 5);
    brush.vertex(350 - this.s, 110, 7);


    brush.endShape();

    brush.pop();
    }

}





function positionCanvas() {
    let x = windowWidth /2 - (width/2);
    let y = 50;
    cnv.position(x, y);

}




