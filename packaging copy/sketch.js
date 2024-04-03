let data;
let inc = 0.1;
let cols, rows;
let scl = 10;

var particles = [];

let zoff = 0;

let flowfield;

function preload () {
        let sheetID = "1F9hk_1pmr8dlvLzMMr3BTQb1xVvZquNtT06hwHnaBlA";   
        let tabName = 'Sheet1';

        let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;
        data = loadJSON(opensheet_uri);
      
    }

function setup () {
        console.log(data);
        console.log(data[0].Product);
        createCanvas(200, 400);
        cols = floor(width/scl);
        rows = floor(height/scl);


        flowfield = new Array(cols * rows);

        for (let i = 0; i < 500; i++){
            particles[i] = new Particle();
        }
    }

function draw() {
    // background('white');

    let yoff = 0;
    for (let y = 0; y < rows; y++){
        let xoff = 0;
        for (let x = 0; x < cols; x++){
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
            // stroke(0, 50);
            // strokeWeight(1);
            // push();
            // translate(x * scl, y * scl);
            // rotate(v.heading());
            // line(0, 0, scl, 0);
            // pop();
        }
        yoff += inc;
        zoff += 0.0003;

    }


    for (let i = 0; i < particles.length; i++){
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();


    }

        

    }