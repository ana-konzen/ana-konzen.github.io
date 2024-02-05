let cnv;
let c;
let claws = 0;
let clawx = 450;
let clawy = -400;
let distx = 0;
let redAng = 0;
let distX = 0;
let disty = 0;

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
}

function windowResized() {
    positionCanvas();
  }

function draw() {

    brush.addField("hi", function(t, field) {
        let sinrange = random(10,12) + 4 * sin(t);
        let cosrange = random(3,4) + 2 * cos(t);
        let baseAngle = random(10,15);
        for (let column = 0; column < field.length; column++) {
            for (let row = 0; row < field[0].length; row++) {               
                let angle = sin(sinrange * column) * (baseAngle * cos(row * cosrange)) + random(-1,1);
                field[column][row] = angle;
            }
        }
        return field;
    });

   

    
    background(244, 232, 210);
    translate(-width/2,-height/2);

    brush.field("hi");
    brush.noField();

    brush.set("marker", "black", 1);
    brush.rotate(30);
    // brush.fill("#002185", 80);
    brush.fillAnimatedMode(true);

    // brush.bleed(0.3, "out");
    // brush.fillTexture(0.3, 0.3);

    translate(0, 500);


    // translate(distX, 0);

    

    // let blueCar = new cars("blue", distX - 450);
    // blueCar.show();

    // let greenCar = new cars("green", distX + 450);
    // greenCar.show();


  

    // fill("black");
    // rect(0, 0, 40, 40);




    if(distx < width/2 && disty >= 0){
        // distx = carList[2].x+450+20;
        distx = distx + 20;
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
        distx = distx - 25; 
        clawx = clawx - 25;
        if(redAng == -10){
            clawy = clawy - 30;
        }
        claws = 100;
        redAng = -20;
    }
    else if(distx <= 0 && disty < 0){
        distx = 0;
        disty = disty +30;
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
                carList[i].x = 20;
            }
            carList[i].show();
         }
        else{
            carList[i].show();
        }
    }

    // if (frameCount % 30 == 0){
    //     claws = 100;
    // }
    // else if (frameCount % 60 == 0){
    //     claws = -100;

    // }
    // else {claws = 0;}

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
        brush.fillTexture(0.5, 0.3);
        
        brush.bleed(0.01, "out");

        brush.fill(this.color, 80);
        brush.rotate(this.ang);

        brush.noStroke();

        brush.beginShape();
        
        brush.vertex(30, 100);
        brush.vertex(390, 100);
        brush.vertex(400, 40);
        brush.vertex(350, 30);
        brush.vertex(300, -50);
        brush.vertex(100, -50);
        brush.vertex(0, 50);

        
        brush.endShape(CLOSE);

        brush.fill("white", 255);


        brush.beginShape();
        
        brush.vertex(200, 20);
        brush.vertex(320, 25);
        brush.vertex(280, -30);
        brush.vertex(200, -30);

        brush.endShape(CLOSE);


        brush.beginShape();
        
        brush.vertex(70, 20);
        brush.vertex(170, 20);
        brush.vertex(170, -30);
        brush.vertex(120, -30);

        brush.endShape(CLOSE);

        brush.fill("yellow", 255);
        brush.bleed(0.1, "out");
        brush.fillTexture(0.3, 0.3);

        brush.beginShape();
        
        brush.vertex(398, 50);
        brush.vertex(408, 50);
        brush.vertex(405, 70);
        brush.vertex(395, 70);


        brush.endShape(CLOSE);


        brush.beginShape();
        
        brush.vertex(0, 50);
        brush.vertex(20, 50);
        brush.vertex(20, 70);
        brush.vertex(0, 70);


        brush.endShape(CLOSE);


    
        // brush.fill("black", 100);
        brush.bleed(0.1, "out");
        brush.fillTexture(0.3, 0.3);
    
        brush.fill("black", 255);


        brush.circle(100, 100, 40);
        brush.circle(300, 100, 40);

        brush.fill("white", 255);
        
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




