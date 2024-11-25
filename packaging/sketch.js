let data;
let inc = 0.1;
let cols, rows;
let scl = 10;
let strokeW = 10;
let color1, color2;
let circleSize;
let cnv;
let bleed;

let infoArray = [];

let selectIndex;

let opacity;
let productName = document.getElementById("name");
let dotSize;
let randomline = document.getElementById("randomline");
let line1pos = document.getElementById("line1pos");
let line2pos = document.getElementById("line2pos");
let changeproduct = document.getElementById("changeproduct");
let buttoncont = document.getElementById("buttoncont");
let buttons = document.getElementById("buttons");

let seedCaption;

let indexValue, seedValue, xValue, yValue, x2Value, y2Value;

let pName, pStrength, pNotes, pFamily1, pFamily2, pFresh, pLight, pSound, pHeart, pInside, pSillage;
let indexSlider, seedSlider, xSlider, xSlider2, ySlider, ySlider2;
let darkPalette = [
  "#392217",
  "#9E3900",
  "#6A7021",
  "#245705",
  "#827D0A",
  "#7A0367",
  "#08424F",
  "#6E5525",
  "#9C0F29",
  "#880D0D",
  "#301404",
];
let dimPalette = [
  "#84513B",
  "#C55F33",
  "#8D9632",
  "#4A9D2D",
  "#B6AF09",
  "#AA2B96",
  "#258DA4",
  "#AE8943",
  "#CF324E",
  "#C21313",
  "#612D22",
];
let brightPalette = [
  "#B77457",
  "#FD996E",
  "#CFDA57",
  "#C0DC92",
  "#E2DA08",
  "#FA82E7",
  "#68E3FF",
  "#F7DBA6",
  "#FF6B86",
  "#EF1313",
  "#C69D8C",
];
let palette = [];
let zoff = 0;
let flowfield;

let svgPath;

function preload() {
  let sheetID = "1F9hk_1pmr8dlvLzMMr3BTQb1xVvZquNtT06hwHnaBlA";
  let tabName = "Sheet1";
  let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`;
  data = loadJSON(opensheet_url);
}

function setup() {
  console.log(data[0].Product);

  let keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    let array = [];
    infoArray.push(array);
  }

  angleMode(DEGREES);
  cnv = createCanvas(450, 750, WEBGL);
  // indexSlider = createSlider(0, keys.length - 1, 0, 1);
  // indexSlider.parent(changeproduct);

  selectIndex = createSelect();
  selectOptions(selectIndex, keys);
  indexValue = selectIndex.value();
  selectIndex.parent(changeproduct);

  seedValue = data[indexValue].Seed;
  xValue = data[indexValue].Line1X;
  yValue = data[indexValue].Line1Y;

  x2Value = data[indexValue].Line2X;
  y2Value = data[indexValue].Line2Y;

  seedSlider = createSlider(-200, 200, 0, 10);
  seedSlider.value(seedValue);
  seed = seedSlider.value();
  seedCaption = createDiv();
  seedSlider.parent(randomline);
  seedCaption.parent(randomline);

  xSlider = createSlider(-200, 100, -50, 1);
  ySlider = createSlider(-100, 200, 50, 1);
  let xcaption1 = createDiv("<span></span><span>x position</span><span></span>");
  let ycaption1 = createDiv("<span></span><span>y position</span><span></span>");
  xSlider.parent(line1pos);
  xSlider.value(xValue);
  xcaption1.parent(line1pos);
  ySlider.parent(line1pos);
  ySlider.value(yValue);
  ycaption1.parent(line1pos);

  xSlider2 = createSlider(-200, 100, -50, 1);
  ySlider2 = createSlider(-200, 100, -50, 1);
  let xcaption2 = createDiv("<span></span><span>x position</span><span></span>");
  let ycaption2 = createDiv("<span></span><span>y position</span><span></span>");
  xSlider2.parent(line2pos);
  xSlider2.value(x2Value);
  xcaption2.parent(line2pos);
  ySlider2.parent(line2pos);
  ySlider2.value(y2Value);
  ycaption2.parent(line2pos);

  positionCanvas();
  brush.load();

  // indexSlider.input(indexChanged);
  selectIndex.input(indexChanged);
  seedSlider.input(valuechanged);
  xSlider.input(valuechanged);
  xSlider2.input(valuechanged);
  ySlider.input(valuechanged);
  ySlider2.input(valuechanged);
  // valuechanged();
  let downb = createButton("Download Label");
  let saveb = createButton("Save Design");
  let resetb = createButton("Reset Design");
  downb.addClass("downloadb");
  saveb.parent(buttons);
  resetb.parent(buttons);

  downb.parent(buttoncont);

  saveb.mousePressed(saveDesign);
  resetb.mousePressed(resetDesign);

  downb.mousePressed(downloadCanvas);
  noLoop();
}

function indexChanged() {
  indexValue = selectIndex.value();

  seedValue = data[indexValue].Seed;
  seedSlider.value(seedValue);

  xValue = data[indexValue].Line1X;
  xSlider.value(xValue);
  yValue = data[indexValue].Line1Y;
  ySlider.value(yValue);

  x2Value = data[indexValue].Line2X;
  xSlider2.value(x2Value);
  y2Value = data[indexValue].Line2Y;
  ySlider2.value(y2Value);

  redraw();
}

function valuechanged() {
  redraw();
}

function saveDesign() {
  if (infoArray[selectIndex.value()].length === 0) {
    infoArray[selectIndex.value()].push(seedSlider.value());
    infoArray[selectIndex.value()].push(xSlider.value());
    infoArray[selectIndex.value()].push(ySlider.value());
    infoArray[selectIndex.value()].push(xSlider2.value());
    infoArray[selectIndex.value()].push(ySlider2.value());
  } else {
    infoArray[selectIndex.value()][0] = seedSlider.value();
    infoArray[selectIndex.value()][1] = xSlider.value();
    infoArray[selectIndex.value()][2] = ySlider.value();
    infoArray[selectIndex.value()][3] = xSlider2.value();
    infoArray[selectIndex.value()][4] = ySlider2.value();
  }

  console.log(infoArray[selectIndex.value()]);
}

function resetDesign() {
  if (infoArray[selectIndex.value()].length === 0) {
    seedValue = data[indexValue].Seed;
    seedSlider.value(seedValue);

    xValue = data[indexValue].Line1X;
    xSlider.value(xValue);
    yValue = data[indexValue].Line1Y;
    ySlider.value(yValue);

    x2Value = data[indexValue].Line2X;
    xSlider2.value(x2Value);
    y2Value = data[indexValue].Line2Y;
    ySlider2.value(y2Value);
  } else {
    console.log(infoArray[selectIndex.value()]);
    seedSlider.value(infoArray[selectIndex.value()][0]);
    xSlider.value(infoArray[selectIndex.value()][1]);
    ySlider.value(infoArray[selectIndex.value()][2]);
    xSlider2.value(infoArray[selectIndex.value()][3]);
    ySlider2.value(infoArray[selectIndex.value()][4]);
  }
  redraw();
}

function downloadCanvas() {
  saveCanvas(data[indexValue].Product, "png");
}

function windowResized() {
  positionCanvas();
}

function draw() {
  clear();
  brush.noField();
  let index = selectIndex.value();
  analyzeData(index);

  let seed = seedSlider.value();
  seedCaption.html("<span></span><span>Current seed: " + seed + "</span><span></span>");
  brush.seed(seed);
  randomSeed(seed);

  productName.innerHTML = pName;

  let xoffset = xSlider.value();
  let xoffset2 = xSlider2.value();

  let yoffset = ySlider.value();
  let yoffset2 = ySlider2.value();

  fill("black");
  noStroke();
  scale(1.3);

  brush.set("rotring", color1, strokeW);

  ang1 = random(180);
  ang2 = random(180);
  ang3 = random(180);

  ang4 = random(180);
  ang5 = random(180);
  ang6 = random(180);

  let myLine = new brush.Plot("curve");
  myLine.addSegment(ang1, random(100, 200), strokeW / 2);
  myLine.addSegment(ang2, random(100, 200), strokeW / 2);
  myLine.addSegment(ang3, random(100, 200), strokeW / 2);
  myLine.endPlot(90, 20);

  brush.set("rotring", color1, strokeW);
  xpos = random(50, 100) + xoffset;
  ypos = random(200, 300) + yoffset;
  brush.plot(myLine, xpos, ypos, 1);
  console.log(myLine);
  let points = myLine.genPol(xpos, ypos);

  let freshness = floor(map(pFresh, 1, 10, 1, 7));

  xpos = random(100) + xoffset2;
  ypos = random(50) + yoffset2;

  let myLine2 = new brush.Plot("curve");
  myLine2.addSegment(ang4, random(100, 200), strokeW / 2);
  myLine2.addSegment(ang5, random(100, 200), strokeW / 2);
  myLine2.addSegment(ang6, random(100, 200), strokeW / 2);
  brush.set("rotring", color2, strokeW);
  brush.plot(myLine2, xpos, ypos, 1);

  let points2 = myLine2.genPol(xpos, ypos);

  let myDot = new brush.Plot("curve");
  myDot.addSegment(ang1, 1, dotSize);
  myDot.endPlot(ang1, dotSize / 2);
  for (let i = 1; i < points.vertices.length + 1; i += freshness) {
    brush.plot(
      myDot,
      points.vertices[points.vertices.length - i].x + 25,
      points.vertices[points.vertices.length - i].y - 25,
      1
    );
  }
  let lineLength = map(pHeart, 60, 130, 10, 130);
  let myLines = new brush.Plot("curve");
  myLines.addSegment(30, lineLength, 5);
  myLines.endPlot(0, 2);
  brush.set("rotring", color1, strokeW / 2);
  for (let i = 0; i < points2.vertices.length; i += freshness) {
    brush.plot(myLines, points2.vertices[i].x, points2.vertices[i].y, 1);
  }

  createSVG(points2.vertices, xpos, ypos);
}

function positionCanvas() {
  const x = windowWidth / 2 - width / 2;
  const y = windowHeight / 2 - height / 2;
  cnv.position(x, y);
}

function createSVG(points, xpos, ypos) {
  console.log(points);
  let dAtt = `M${points[0].x},${points[0].y} `;
  for (let i = 1; i < points.length; i++) {
    let point = points[i];
    dAtt += `L${point.x},${point.y} `;
  }
  console.log(dAtt);

  const textPath = select("#textPath");
  textPath.attribute("d", dAtt);
  textPath.attribute("transform", `translate(${width / 2 - strokeW / 2}, ${height / 2})`);
  select("#productName").html(pName.toLowerCase());
}

function selectOptions(select, keys) {
  for (let i = 0; i < keys.length; i++) {
    select.option(data[i].Product, i);
  }
}

function analyzeData(index) {
  let product = data[index];

  seedValue = product.Seed;
  xValue = product.Line1X;
  yValue = product.Line1Y;

  x2Value = product.Line2X;
  y2Value = product.Line2Y;

  pName = product.Product;
  pFamily1 = product["Olfactive (Primary)"];
  pFamily2 = product["Olfactive (Secondary)"];
  pStrength = product.Strength;
  pNotes = Number(product["Number of Fragrance Notes"]);
  pFresh = Number(product.Freshness);
  pLight = product["Light Level"];
  pHeart = Number(product["Heart Rate (BPM)"]);
  pSound = product["Environmental Sound"];

  if (pStrength == "Strong") {
    strokeW = 50;
    opacity = 100;
  } else if (pStrength == "Moderate") {
    strokeW = 25;
    opacity = 50;
  } else if (pStrength == "Delicate") {
    strokeW = 10;
    opacity = 20;
  }

  if (pSillage == "Strong") {
    bleed = 0.4;
  } else if (pSillage == "Moderate") {
    bleed = 0.25;
  } else if (pSillage == "Delicate") {
    bleed = 0.0001;
  }

  if (pSound == "Loud") {
    circleSize = 80;
    dotSize = 20;
  } else if (pSound == "Moderate") {
    circleSize = 50;
    dotSize = 15;
  } else if (pSound == "Quiet") {
    circleSize = 20;
    dotSize = 10;
  }

  if (pLight == "Bright") {
    palette = brightPalette;
  } else if (pLight == "Dim") {
    palette = dimPalette;
  } else if (pLight == "Dark") {
    palette = darkPalette;
  }

  if (pFamily1 == "Woody") {
    color1 = palette[0];
  } else if (pFamily1 == "Ambery") {
    color1 = palette[1];
  } else if (pFamily1 == "Chypre") {
    color1 = palette[2];
  } else if (pFamily1 == "Fougere") {
    color1 = palette[3];
  } else if (pFamily1 == "Citrus") {
    color1 = palette[4];
  } else if (pFamily1 == "Floral") {
    color1 = palette[5];
  } else if (pFamily1 == "Aquatic") {
    color1 = palette[6];
  } else if (pFamily1 == "Musky") {
    color1 = palette[7];
  } else if (pFamily1 == "Fruity") {
    color1 = palette[8];
  } else if (pFamily1 == "Spicy") {
    color1 = palette[9];
  } else if (pFamily1 == "Gourmand") {
    color1 = palette[10];
  }

  if (pFamily2 == "Woody") {
    color2 = palette[0];
  } else if (pFamily2 == "Ambery") {
    color2 = palette[1];
  } else if (pFamily2 == "Chypre") {
    color2 = palette[2];
  } else if (pFamily2 == "Fougere") {
    color2 = palette[3];
  } else if (pFamily2 == "Citrus") {
    color2 = palette[4];
  } else if (pFamily2 == "Floral") {
    color2 = palette[5];
  } else if (pFamily2 == "Aquatic") {
    color2 = palette[6];
  } else if (pFamily2 == "Musky") {
    color2 = palette[7];
  } else if (pFamily2 == "Fruity") {
    color2 = palette[8];
  } else if (pFamily2 == "Spicy") {
    color2 = palette[9];
  } else if (pFamily2 == "Gourmand") {
    color2 = palette[10];
  }
}
