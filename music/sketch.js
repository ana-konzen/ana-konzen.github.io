let sound;
let amp;
let fft, fft2;
let y;
let shift = 0;
let x;
let ang; 
let size, size2;
let min;
let bass, treble, mid, lowMid, highMid, sprinkles, line, low;
let bassHist = [];
let trebleHist = [];
let sprinHist = [];
let midHist = [];
let highHist = [];
let lowHist = [];
let lineHist = [];
let averages, averages2;




function preload(){

  sound = loadSound('baby.mp3');


}

function setup() {
  let cnv = createCanvas(393, 752);
  // frameRate(10);

  angleMode(DEGREES);
  background(248,246,240);
  let cnvx = (windowWidth - width) / 2;
  let cnvy = (windowHeight - height) / 2;
  cnv.position(cnvx, cnvy);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT(0.1, 1024);
  fft2 = new p5.FFT(0.8, 1024);

  amp = new p5.Amplitude();

  let button = createButton('clear canvas');
  button.position(windowWidth/2 - 40, cnvy + height + 10);

  button.mousePressed(() => {
    clear();
  background(248,246,240);

  });
  


}

function draw(){
  // noStroke();
// fill(10, 70, 155);
// rect(0,0, 50, 50);
  if (sound.isPlaying()) {

fft.analyze();
fft2.analyze();
// bass = fft.getEnergy("bass");
// treble = fft.getEnergy("treble");
// highMid = fft.getEnergy("highMid");
lowMid = fft.getEnergy("lowMid");
mid = fft.getEnergy("mid");
let level = amp.getLevel();
averages = fft.logAverages(fft.getOctaveBands(12, 15));
averages2 = fft2.logAverages(fft.getOctaveBands(12, 15));
bass = averages[18];
console.log(averages);
treble = averages[102];
highMid = averages[117];
sprinkles = averages[120];
line = averages2[113];
low=averages[3];
console.log(bass);


noStroke();



bassHist.push(bass);
trebleHist.push(treble);
highHist.push(highMid);
sprinHist.push(sprinkles);
lineHist.push(line);
lowHist.push(low);



  

push();
min = 100;

x = map(max(min, bass), min, 255, width/2, width);
y = map(max(min, bassHist[0]), min, 255, height/3, 0);
ang = map(mid, 0, 255, 0, 360);

translate((x + shift)%width, (y + shift)%height/2);

size =  map(bass, 0, 255, 0, 30);
rotate(ang);
fill(255, bass/1.5, bass/2);

rect(0, 0, size, size);


pop();



if(bassHist.length > 50){
  bassHist.splice(0,1);
}

push();

min = 50;

x = map(max(min, averages[100]), min, 255, 0, width);
y = map(max(min, trebleHist[0]), min, 255, height, height/1.5);
ang = map(mid, 0, 255, 0, 360);
console.log(treble);

translate((x + shift)%(width - 120), height + (y - shift - height)%(height/2 + 10));

size =  map(treble, 0, 255, 0, 30);
rotate(ang);
fill(10, mid/3, treble);

ellipse(0, 0, size, size);

shift += 0.3;



pop();

if(trebleHist.length > 50){
  trebleHist.splice(0,1);
}

push();

min = 0;

x = map(max(min, highMid), min, 255, 0, width);
y = map(max(min, highHist[10]), min, 255, 0, height/1.5);
ang = map(mid, 0, 255, 0, 360);

translate(x, y);

size =  map(highMid, 0, 255, 0, 60);
size2 =  map(highMid, 0, 255, 0, 40);
rotate(ang);
fill(50, highMid, mid/3);

rect(0, 0, size, size2);


pop();

if(highHist.length > 50){
  highHist.splice(0,1);
}


push();

min = 0;

x = map(max(min, line), min, 255, width/6, width - width/6);
y = map(max(min, lineHist[10]), min, 255, 0, height/3);
ang = map(line, 0, 255, 0, 360);

translate(x, (y + shift)%(height/2 + 200));

size =  map(line, 0, 255, 0, 100);
// rotate(ang);
fill(line*4, 230, line*2);

rect(0, 0, size, size);


pop();

if(lineHist.length > 50){
  lineHist.splice(0,1);
}

push();

min = 0;

x = map(max(min, low), min, 255, width/3, width);
y = map(max(min, lowHist[20]), min, 255, height, height/2);
ang = map(low, 0, 255, 0, 360);

translate(x, height + (y - shift - height)%(height/2));

size =  map(low, 0, 255, 0, 100);
size =  map(lowHist[20], 0, 255, 0, 100);
rotate(ang);
fill(low*1.5, low/2, low);

rect(0, 0, size, size2);


pop();

if(lowHist.length > 50){
  lowHist.splice(0,1);
}


push();

min = 10;

x = map(max(min, sprinHist[20]), min, 255, width/3, width);
y = map(max(min, sprinHist[10]), min, 255, height/4, height - 100);
ang = map(mid, 0, 255, 0, 360);

translate(x, y);

size =  map(averages[120], 0, 255, 0, 20);
rotate(ang);
fill(255);

ellipse(0, 0, size, size);


pop();



if(sprinHist.length > 50){
  sprinHist.splice(0,1);
}

}

}

function togglePlay() {
  s = sound;
  if (s.isPlaying() ){
      s.pause();

  } else {
      s.play();
  }
}