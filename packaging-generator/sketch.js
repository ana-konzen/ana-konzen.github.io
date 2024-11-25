let data;
let inc = 0.1;
let cols, rows;
let scl = 10;
let strokeW = 10;
let color1, color2;
let circleSize;
let colorSelect;
let colorSelect2;
let cnv;
let bleed;
let opacity;
let seed;

let environment = document.getElementById("environment");
let freshcont = document.getElementById("perfumeFreshness");
let randomline = document.getElementById("randomline");
let line1pos = document.getElementById("line1pos");
let line2pos = document.getElementById("line2pos");
let strongcont = document.getElementById("perfumeStrength");
let hearrate = document.getElementById("hearrate");
let family = document.getElementById("family");

let productName = document.getElementById("name");
let dotSize;
let seedCaption;
let indexSlider,
  seedSlider,
  xSlider,
  xSlider2,
  ySlider,
  ySlider2,
  lightSlider,
  strengthSlider,
  soundSlider,
  heartSlider,
  freshSlider;
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
let myPalettes = [darkPalette, dimPalette, brightPalette];
let palette = [];
let zoff = 0;
let flowfield;

function setup() {
  angleMode(DEGREES);
  cnv = createCanvas(450, 750, WEBGL);

  seedSlider = createSlider(-200, 200, 0, 10);
  seed = seedSlider.value();
  seedCaption = createDiv();
  seedSlider.parent(randomline);
  seedCaption.parent(randomline);

  xSlider = createSlider(-200, 100, -50, 1);
  ySlider = createSlider(-100, 200, 50, 1);
  let xcaption1 = createDiv("<span></span><span>x position</span><span></span>");
  let ycaption1 = createDiv("<span></span><span>y position</span><span></span>");
  xSlider.parent(line1pos);
  xcaption1.parent(line1pos);
  ySlider.parent(line1pos);
  ycaption1.parent(line1pos);

  xSlider2 = createSlider(-200, 100, -50, 1);
  ySlider2 = createSlider(-200, 100, -50, 1);
  let xcaption2 = createDiv("<span></span><span>x position</span><span></span>");
  let ycaption2 = createDiv("<span></span><span>y position</span><span></span>");
  xSlider2.parent(line2pos);
  xcaption2.parent(line2pos);
  ySlider2.parent(line2pos);
  ycaption2.parent(line2pos);

  strengthSlider = createSlider(0, 100, 50, 0);
  let strongCaption = createDiv("<span>delicate</span><span>strong</span>");
  strengthSlider.parent(strongcont);
  strongCaption.parent(strongcont);

  freshSlider = createSlider(1, 10, 5.5, 0);
  let freshCaption = createDiv("<span>not fresh</span><span>very fresh</span>");
  freshSlider.parent(freshcont);
  freshCaption.parent(freshcont);

  soundSlider = createSlider(10, 30, 20);
  lightSlider = createSlider(0, 2, 1, 1);

  let soundCaption = createDiv("<span>Quiet</span><span>Loud</span>");
  let lightCaption = createDiv("<span>Dark</span><span>&nbsp Dim</span><span>Bright</span>");

  soundSlider.parent(environment);
  soundCaption.parent(environment);
  lightSlider.parent(environment);
  lightCaption.parent(environment);

  heartSlider = createSlider(60, 130, 95, 1);
  let heartCaption = createDiv("<span>slow(relaxing)</span><span>fast(energetic)</span>");
  heartSlider.parent(hearrate);
  heartCaption.parent(hearrate);

  colorIndex = createSelect();
  colorIndex2 = createSelect();

  selectOptions(colorIndex);
  selectOptions(colorIndex2);

  colorIndex2.selected(4);

  colorIndex.parent(family);
  colorIndex2.parent(family);

  positionCanvas();
  brush.load();
  seedSlider.input(valuechanged);
  xSlider.input(valuechanged);
  xSlider2.input(valuechanged);
  ySlider.input(valuechanged);
  ySlider2.input(valuechanged);
  strengthSlider.input(valuechanged);
  lightSlider.input(valuechanged);
  heartSlider.input(valuechanged);
  soundSlider.input(valuechanged);
  freshSlider.input(valuechanged);
  colorIndex.input(valuechanged);
  colorIndex2.input(valuechanged);

  // valuechanged();
  let downb = createButton("Download Label");
  let clearb = createButton("Reset");
  clearb.addClass("clearb");
  downb.addClass("downloadb");
  downb.parent(buttoncont);
  clearb.parent(buttoncont);
  downb.mousePressed(downloadCanvas);
  clearb.mousePressed(clearFunction);

  noLoop();
}

function valuechanged() {
  redraw();
}

function clearFunction() {
  strengthSlider.value(50);
  soundSlider.value(20);
  xSlider.value(-50);
  xSlider2.value(-50);
  ySlider.value(50);
  ySlider2.value(-50);
  seedSlider.value(0);
  freshSlider.value(5.5);
  lightSlider.value(1);
  heartSlider.value(95);

  redraw();
}

function downloadCanvas() {
  saveCanvas("Replica_Label", "png");
}

function windowResized() {
  positionCanvas();
}

function draw() {
  // background('#faf8f1');
  clear();
  brush.noField();
  seed = seedSlider.value();
  brush.seed(seed);
  randomSeed(seed);
  console.log(seedCaption);
  seedCaption.html("<span></span><span>Current seed: " + seed + "</span><span></span>");

  console.log(palette);

  palette = myPalettes[lightSlider.value()];

  console.log(palette);

  console.log(palette[colorIndex.value()]);

  color1 = palette[colorIndex.value()];
  color2 = palette[colorIndex2.value()];

  let xoffset = xSlider.value();
  let xoffset2 = xSlider2.value();

  let yoffset = ySlider.value();
  let yoffset2 = ySlider2.value();

  let strength = strengthSlider.value();

  let strokeW = map(strength, 0, 100, 10, 50);
  let opacity = map(strength, 0, 100, 20, 100);

  let dotSize = soundSlider.value();

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
  let points = myLine.genPol(xpos, ypos);

  let freshness = floor(map(freshSlider.value(), 1, 10, 1, 7));

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
  let lineLength = map(heartSlider.value(), 60, 130, 10, 130);
  let myLines = new brush.Plot("curve");
  myLines.addSegment(30, lineLength, 5);
  myLines.endPlot(0, 2);
  brush.set("rotring", color1, strokeW / 2);
  for (let i = 0; i < points2.vertices.length; i += freshness) {
    brush.plot(myLines, points2.vertices[i].x, points2.vertices[i].y, 1);
  }
}

function positionCanvas() {
  var x = windowWidth / 2 - width / 2;
  var y = windowHeight / 2 - height / 2;
  cnv.position(x, y);
}

function selectOptions(select) {
  select.option("Woody", 0);
  select.option("Ambery", 1);
  select.option("Chypre", 2);
  select.option("Fougere", 3);
  select.option("Citrus", 4);
  select.option("Floral", 5);
  select.option("Aquatic", 6);
  select.option("Musky", 7);
  select.option("Fruity", 8);
  select.option("Spicy", 9);
  select.option("Gourmand", 10);
}
