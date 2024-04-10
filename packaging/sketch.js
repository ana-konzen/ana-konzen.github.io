let data;
let inc = 0.1;
let cols, rows;
let scl = 10;
let strokeW = 10;
let color1, color2;
let circleSize;
let cnv;
let bleed;
let opacity;
let productName = document.getElementById("name");
let dotSize;
let pName, pStrength, pNotes, pFamily1, pFamily2, pFresh, pLight, pSound, pHeart, pInside, pSillage;
let indexSlider, seedSlider, xSlider, xSlider2, ySlider, ySlider2;
let darkPalette = ['#392217', '#9E3900', '#6A7021', '#245705', '#827D0A', '#7A0367', '#08424F', '#6E5525', '#9C0F29', '#880D0D', '#301404'];
let dimPalette = ['#84513B', '#C55F33', '#8D9632', '#4A9D2D', '#B6AF09', '#AA2B96', '#258DA4', '#AE8943', '#CF324E', '#C21313', '#612D22'];
let brightPalette = ['#B77457', '#FD996E', '#CFDA57', '#C0DC92', '#E2DA08', '#FA82E7', '#68E3FF', '#F7DBA6', '#FF6B86', '#EF1313', '#C69D8C'];
let palette = [];
let zoff = 0;
let flowfield;

function preload () {
        let sheetID = "1F9hk_1pmr8dlvLzMMr3BTQb1xVvZquNtT06hwHnaBlA";   
        let tabName = 'Sheet1';
        let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`;
        data = loadJSON(opensheet_url);
      
    }


function setup() {
        console.log(data);
        console.log(data[0].Product);
        let keys = Object.keys(data);
        console.log(keys.length);
        for (let i = 0; i < keys.length; i++){
        }
        angleMode(DEGREES);
        cnv = createCanvas(450, 750, WEBGL);
        seedSlider = createSlider(61, 561, 0, 50);
        seedSlider.position(30, 140);
        seedSlider.size(200);
        indexSlider = createSlider(0, keys.length - 1, 0, 1);
        indexSlider.position(30, 60);
        indexSlider.size(200);
        xSlider = createSlider(-100, 100, 0, 1);
        xSlider.position(30, 230);
        xSlider.size(200);
        xSlider2 = createSlider(-100, 100, 0, 1);
        xSlider2.position(30, 270);
        xSlider2.size(200);

        ySlider = createSlider(-100, 100, 0, 1);
        ySlider.position(30, 360);
        ySlider.size(200);
        ySlider2 = createSlider(-100, 100, 0, 1);
        ySlider2.position(30, 400);
        ySlider2.size(200);

        positionCanvas();
        brush.load();
        seedSlider.input(valuechanged);
        indexSlider.input(valuechanged);
        xSlider.input(valuechanged);
        xSlider2.input(valuechanged);
        ySlider.input(valuechanged);
        ySlider2.input(valuechanged);
        // valuechanged();
        let downb = createButton('Download Design');
        downb.addClass('downloadb');
        downb.mousePressed(downloadCanvas);
        noLoop();

    }

function valuechanged() {
    redraw();
}

function downloadCanvas() {
    saveCanvas();
}

function windowResized(){
    positionCanvas();
}

function draw() {
    background('#faf8f1');
    brush.noField();
    let seed = seedSlider.value() * (indexSlider.value() + 1);
    brush.seed(seed);
    randomSeed(seed);

    let index = indexSlider.value();
    analyzeData(index);
    productName.innerHTML = pName;

    let xoffset = xSlider.value();
    let xoffset2 = xSlider2.value();

    let yoffset = ySlider.value();
    let yoffset2 = ySlider2.value();



    
    fill('black');
    noStroke();
    scale(1.3);

    brush.set("rotring", color1, strokeW);

    ang1 = random(180);
    ang2 = random(180);
    ang3 = random(180);

    ang4 = random(180);
    ang5 = random(180);
    ang6 = random(180);

    let myLine = new brush.Plot('curve');
        myLine.addSegment(ang1, random(100, 200), strokeW / 2);
        myLine.addSegment(ang2, random(100, 200), strokeW / 2);
        myLine.addSegment(ang3, random(100, 200), strokeW / 2);
        myLine.endPlot(90, 20);

    brush.set("rotring", color1, strokeW);
    xpos = random(50, 100) + xoffset;
    ypos = random(200, 300) + yoffset;
    brush.plot(myLine, xpos, ypos, 1);
    let points = myLine.genPol(xpos, ypos);

    let freshness = floor(map(pFresh, 1, 10, 1, 7));

    xpos = random(100) + xoffset2;
    ypos = random(50) + yoffset2;

    let myLine2 = new brush.Plot('curve');
    myLine2.addSegment(ang4, random(100, 200), strokeW / 2);
    myLine2.addSegment(ang5, random(100, 200), strokeW / 2);
    myLine2.addSegment(ang6, random(100, 200), strokeW / 2);
    brush.set("rotring", color2, strokeW);
    brush.plot(myLine2, xpos, ypos, 1);

    let points2 = myLine2.genPol(xpos, ypos);

    let myDot = new brush.Plot('curve');
        myDot.addSegment(ang1, 1, dotSize);
        myDot.endPlot(ang1, dotSize/2);
        for(let i = 1; i < points.vertices.length+1; i+=freshness){
            brush.plot(myDot, points.vertices[points.vertices.length-i].x + 25, points.vertices[points.vertices.length-i].y - 25, 1);
        }
    let lineLength = map(pHeart, 60, 130, 10, 130);
    let myLines = new brush.Plot('curve');
        myLines.addSegment(30, lineLength, 5);
        myLines.endPlot(0, 2);
    brush.set("rotring", color1, strokeW/2);
    for(let i = 0; i < points2.vertices.length; i+=freshness){
        brush.plot(myLines, points2.vertices[i].x, points2.vertices[i].y, 1);
    }


    }

function positionCanvas() {
    var x = windowWidth/2 - width/2;
    var y = windowHeight/2 - height/2;
    cnv.position(x, y);
    
}

function analyzeData(index){

    let product = data[index];

    pName = product.Product;
    pFamily1 = product['Olfactive (Primary)'];
    pFamily2 = product['Olfactive (Secondary)'];
    pStrength = product.Strength;
    pNotes = Number(product['Number of Fragrance Notes']);
    pFresh = Number(product.Freshness);
    pLight = product['Light Level'];
    pHeart = Number(product['Heart Rate (BPM)']);
    pSound = product['Environmental Sound'];

    if(pStrength == 'Strong'){
        strokeW = 50;
        opacity = 100;
    }
    else if(pStrength == 'Moderate'){
        strokeW = 25;
        opacity = 50;
    }
    else if(pStrength == 'Delicate'){
        strokeW = 10;
        opacity = 20;
    }


    if (pSillage == 'Strong'){
        bleed = 0.4;
    } else if (pSillage == 'Moderate'){
        bleed = 0.25;
    } else if(pSillage == 'Delicate'){
        bleed = 0.0001;
    }

    if(pSound == 'Loud'){
        circleSize = 80;
        dotSize = 20;
    } 
    else if(pSound == 'Moderate'){
        circleSize = 50;
        dotSize = 15;
    }
    else if(pSound == 'Quiet'){
        circleSize = 20;
        dotSize = 10;
    }

    if(pLight == 'Bright'){
        palette = brightPalette;
    } else if(pLight == 'Dim'){
        palette = dimPalette;
    } else if(pLight == 'Dark'){
        palette = darkPalette;
    }

    if(pFamily1 == 'Woody'){
        color1 = palette[0];
    } else if(pFamily1 == 'Ambery'){
        color1 = palette[1];
    } else if(pFamily1 == 'Chypre'){
        color1 = palette[2];
    } else if(pFamily1 == 'Fougere'){
        color1 = palette[3];
    } else if(pFamily1 == 'Citrus'){
        color1 = palette[4];
    } else if(pFamily1 == 'Floral'){
        color1 = palette[5];
    } else if(pFamily1 == 'Aquatic'){
        color1 = palette[6];
    } else if(pFamily1 == 'Musky'){
        color1 = palette[7];
    } else if(pFamily1 == 'Fruity'){
        color1 = palette[8];
    } else if(pFamily1 == 'Spicy'){
        color1 = palette[9];
    } else if(pFamily1 == 'Gourmand'){
        color1 = palette[10];
    } 

    if(pFamily2 == 'Woody'){
        color2 = palette[0];
    } else if(pFamily2 == 'Ambery'){
        color2 = palette[1];
    } else if(pFamily2 == 'Chypre'){
        color2 = palette[2];
    } else if(pFamily2 == 'Fougere'){
        color2 = palette[3];
    } else if(pFamily2 == 'Citrus'){
        color2 = palette[4];
    } else if(pFamily2 == 'Floral'){
        color2 = palette[5];
    } else if(pFamily2 == 'Aquatic'){
        color2 = palette[6];
    } else if(pFamily2 == 'Musky'){
        color2 = palette[7];
    } else if(pFamily2 == 'Fruity'){
        color2 = palette[8];
    } else if(pFamily2 == 'Spicy'){
        color2 = palette[9];
    } else if(pFamily2 == 'Gourmand'){
        color2 = palette[10];
    } 
  

    


}




   