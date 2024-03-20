let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
// let lines = document.getElementById("lines");
let button0 = document.getElementById("button0");
let linemulti = document.getElementById("linemulti");
let multi = document.getElementById("multi");

let bnone = document.getElementById("bnone");
// let lnone = document.getElementById("lnone");

let buttons = document.querySelectorAll("button:not(.exception)");

let bfrida = document.querySelectorAll(".bfrida");
let bdiego = document.querySelectorAll(".bdiego");

let menu = document.getElementById("menu");

let maskbuttons = document.querySelectorAll(".maskbuttons");
let backbuttons = document.querySelectorAll(".backbuttons");


let frida = document.getElementById("frida");
let diego = document.getElementById("diego");


let bwhite = document.getElementById("bwhite");
let lwhite = document.getElementById("lwhite");

let transparent = document.getElementById("transparent");


let animate = document.getElementById("animate");

let bblack = document.getElementById("bblack");

let lblack = document.getElementById("black");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");

let image = document.querySelectorAll(".image");

let mySVG = document.getElementById("mySVG");

let pathM = document.getElementById("pathM");
let pathA = document.getElementById("pathA");
let pathL = document.getElementById("pathL");
let pathB = document.getElementById("pathB");
let pathA2 = document.getElementById("pathA2");

let paths = document.querySelectorAll("rect");


let r = document.querySelector(":root");

let tarsila = document.getElementById("tarsila");
let berni = document.getElementById("berni");
let lam = document.getElementById("lam");



let grid = document.getElementById("grid");

let squares = document.querySelectorAll(".square");

let letters = document.querySelectorAll(".letter");

let btarsila = document.querySelectorAll(".btarsila");

let bberni = document.querySelectorAll(".bberni");

let blam = document.querySelectorAll(".blam");


let art = document.querySelectorAll(".art");

let poster = document.getElementById("poster");

let lines = document.querySelectorAll(".line");



let squareM = squares[0];
let squareA = squares[1];
let squareL = squares[2];
let squareB = squares[3];
let squareA2 = squares[4];


let letterM = letters[0];
let letterA = letters[1];
let letterL = letters[2];
let letterB = letters[3];
let letterA2 = letters[4];




let blue = "#2B3C7E";
let yellow = "#EEBE46";
let red = "#AF3034";
let green = "#036848";
let lightblue = "#6CA8D9";
let white = "rgb(255, 243, 228)";
let black = "black";




let lineM = lines[0];

let lineA = lines[1];

let lineL = lines[2];

let lineB = lines[3];

let lineA2 = lines[4];





let maxDist = 200;
let minAng = Math.PI/3;
let maxY = grid.offsetHeight - squareM.offsetWidth - 100;
let maxX = grid.offsetWidth - squareM.offsetWidth;



let minWeight = 100;
let maxWeight = 160;

let lineWeight;
let minDist = lineWeight;
let wOffset = lineWeight;
let letterOffset = 0;


let palette = [blue, lightblue, red, yellow, green];


// for(let square of squares){
//   square.classList.add("no");
// }

for(let arts of art){
  arts.classList.add("clippy");
}

randomPosition();
multiFunction();
// randomizeAll();


let myInterval;

let linesBack = getComputedStyle(lineM);

console.log(linesBack.backgroundColor);

animate.onclick = function(){if(!myInterval){
  if(getComputedStyle(lineM).backgroundColor == "rgba(0, 0, 0, 0)"){
    myInterval = setInterval(function(){
      randomPosition();
    }, 1000);
    animate.innerHTML = "Pause";}
    else {myInterval = setInterval(function(){
      randomPosition();
      multiFunction();
    }, 1000);}

animate.innerHTML = "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='5' height='14' fill='black'/><rect x='9' width='5' height='14' fill='black'/></svg>";}
else{
  clearInterval(myInterval);
myInterval = null;
animate.innerHTML = "<svg width='14' height='16' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M14 8L0.5 15.7942L0.5 0.205771L14 8Z' fill='black'/> </svg>";
}
}












// squareM.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA.style.fontSize = Math.random() * 50 + 60 + "px";
// squareL.style.fontSize = Math.random() * 50 + 60 + "px";
// squareB.style.fontSize = Math.random() * 50 + 60 + "px";
// squareA2.style.fontSize = Math.random() * 50 + 60 + "px";



// lineA2.classList.add("no");



multi.addEventListener("click", multiFunction);
bwhite.addEventListener("click", bwhiteFunction);

lblack.addEventListener("click", blackFunction);
beige.addEventListener("click", beigeFunction);

blackback.addEventListener("click", blackbackFunction);



bblack.addEventListener("click", bblackFunction);
lwhite.addEventListener("click", lwhiteFunction);

button0.addEventListener("click", randomPosition);
// poster.addEventListener("click", randomPosition);
// grid.addEventListener("click", randomPosition);



// transparent.addEventListener("click", transparentFunction);






for(let button of btarsila){
  button.addEventListener("click", tarsilaFunction);
  }

for(let button of bberni){
  button.addEventListener("click", berniFunction);
  }

for(let button of blam){
    button.addEventListener("click", lamFunction);
    }

for(let button of bfrida){
  button.addEventListener("click", fridaFunction);
  }

for(let button of bdiego){
  button.addEventListener("click", diegoFunction);
  }
  
for(let button of maskbuttons){
button.addEventListener("click", addMask);
}

for(let button of backbuttons){
  button.addEventListener("click", removeMask);
  }

// bmask.addEventListener("click", unmaskFunction);

hideColor.addEventListener("click", hideColorFunction);
hidePlayer.addEventListener("click", hidePlayerFunction);



bnone.addEventListener("click", noneFunction);
// lnone.addEventListener("click", lnoneFunction);


for(let button of buttons){
button.addEventListener("click", randomPosition);


}






// let randomColor = palette[Math.floor(Math.random() * palette.length)];





    


// button6.onclick = function width(){
//     lineA.style.height = Math.random() * 10 + 1 + "px";
// lineL.style.height = Math.random() * 10 + 1 + "px";
// lineB.style.height = Math.random() * 10 + 1 + "px";
// lineA2.style.height = Math.random() * 10 + 1 + "px";
// lineM.style.height = Math.random() * 10 + 1 + "px";}


function swapFunction(){

}


function randomAngle(){
  let max = Math.PI/2;
  let min = -Math.PI/2;
  return Math.random() * (max - min) + min;
};

function randomLength(){
  let maxLength = maxDist;
  let minLength = minDist;
  return  Math.random() * (maxLength - minLength) + minLength;
};

function getValidPoint(posX, posY, ang0, limX){
  let distP = randomLength(); 
  let angP = randomAngle() - ang0; // Choose random rotation angle so that x increases

  let posyP = posY + (distP * Math.sin(angP + ang0));
  let posxP = posX + (distP * Math.cos(angP + ang0));
  
  // rotate keeping a 45 degree space
  while((posyP < 0) || (posyP > maxY) || (posxP > limX) || (posxP < 0) || Math.abs(angP) > Math.PI - minAng) {
    
    angP = randomAngle() - ang0;
    distP = randomLength();
    
    posyP = posY + (distP * Math.sin(angP + ang0));
    posxP = posX + (distP * Math.cos(angP + ang0));
  };
  return [angP, distP, posxP, posyP]
}

function randomPosition(){

  lineWeight = Math.random() * (maxWeight - minWeight) + minWeight;

  minDist = lineWeight;
  wOffset = lineWeight;

  r.style.setProperty("--lineWeight", lineWeight + "px");
  
  for(let square of squares) {
    square.style.fontSize = lineWeight - (lineWeight / 6) + "px";
    }



  let xM = Math.random() * (maxX - 3*minDist);
  let yM = Math.random() * maxY;
  let angT = 0;



  squareM.style.left = xM + "px";

  squareM.style.top = yM + "px";

    
  let [angA, distA, posxA, posyA] = getValidPoint(xM, yM, angT, maxX - 3*minDist);

  let yA = 0;
  let xA = distA-letterOffset;
  angT += angA;

  letterA.style.transform = "rotate(" + (-angT) + "rad)";
  squareA.style.left = xA + "px";
  squareA.style.top = yA + "px";

  // imageM.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-xM) + "px) translateY(" + (-yM) + "px)";
  // imageM.style.left = (100) + "px";
  // imageM.style.top = (50) + "px";





  let [angL, distL, posxL, posyL] = getValidPoint(posxA, posyA, angT, maxX - 2*minDist);

  let yL = 0;
  let xL = distL-letterOffset;
  angT += angL;


  letterL.style.transform = "rotate(" + (-angT) + "rad)";
  squareL.style.left = xL + "px";
  squareL.style.top = yL + "px";

  // imageA.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxA) + "px) translateY(" + (-posyA) + "px)";


  let [angB, distB, posxB, posyB] = getValidPoint(posxL, posyL, angT, maxX - 1*minDist);

  
  let yB = 0;
  let xB = distB-letterOffset;
  angT += angB;
  
  letterB.style.transform = "rotate(" + (-angT) + "rad)";
  squareB.style.left = xB + "px";
  squareB.style.top = yB + "px";

  // imageL.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxL) + "px) translateY(" + (-posyL) + "px)";


  let [angA2, distA2, posxA2, posyA2] = getValidPoint(posxB, posyB, angT, maxX - 0*minDist);

  
  let yA2 = 0;
  let xA2 = distA2-letterOffset;
  angT += angA2;

  letterA2.style.transform = "rotate(" + (-angT) + "rad)";
  squareA2.style.left = xA2 + "px";
  squareA2.style.top = yA2 + "px";

  // imageB.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxB) + "px) translateY(" + (-posyB) + "px)";


  let [angM, distM, posxM, posyM] = getValidPoint(posxA2, posyA2, angT, maxX + 1*minDist);


  angT += angM;

  // imageA2.style.transform = "rotate(" + (-angT) + "rad) translateX(" + (-posxA2) + "px) translateY(" + (-posyA2) + "px)";


  
  lineM.style.transform = "rotate(" + angA + "rad)";
  lineM.style.width = distA + wOffset + "px";


  
  lineA.style.transform = " rotate(" + angL + "rad)";
  lineA.style.width = distL + wOffset + "px";

  lineL.style.transform = " rotate(" + angB + "rad)";
  lineL.style.width = distB + wOffset + "px";
  
  lineB.style.transform = " rotate(" + angA2 + "rad)";
  lineB.style.width = distA2 + wOffset + "px";
  
  lineA2.style.transform = " rotate(" + angM + "rad)";
  lineA2.style.width = distM + wOffset + "px";



  let randomScale = Math.random() * 0.3 + 1;


// grid.style.transform = "scale(" + randomScale + ")";

  let widthM = distA + wOffset;
  let angleM = (lineWeight/2 + xM) + "px " + (lineWeight/2 + yM) + "px";
pathM.style.x = xM;
  pathM.style.y = yM;
  pathM.style.width =  widthM;
  pathM.style.transformOrigin = angleM;
  pathM.style.transform = " rotate(" + (angA) + "rad)";


  let widthA = distL + wOffset;
  let xpA = posxA;
  let ypA = posyA;
  let angleA = (lineWeight/2 + posxA) + "px " + (lineWeight/2 + posyA) + "px";

  pathA.style.x =  xpA;
  pathA.style.y =  ypA;
  pathA.style.width = widthA;
  pathA.style.transformOrigin = angleA;
  pathA.style.transform = " rotate(" + (angL + angA) + "rad)";


  let widthL = distB + wOffset;
  let xpL = posxL;
  let ypL = posyL;
  let angleL = (lineWeight/2 + xpL) + "px " + (lineWeight/2 + ypL) + "px";

  pathL.style.x =  xpL;
  pathL.style.y =  ypL;
  pathL.style.width =  widthL;
  pathL.style.transformOrigin =  angleL;
  pathL.style.transform = " rotate(" + (angL + angA + angB) + "rad)";


  let widthB = distA2 + wOffset;
  let xpB = posxB;
  let ypB = posyB;
  let angleB = (lineWeight/2 + xpB) + "px " + (lineWeight/2 + ypB) + "px";

  pathB.style.x =  xpB;
  pathB.style.y =  ypB;
  pathB.style.width =  widthB;
  pathB.style.transformOrigin =  angleB;
  pathB.style.transform = " rotate(" + (angL + angA + angB + angA2) + "rad)";


  let widthA2 = distM + wOffset;
  let xpA2 = posxA2;
  let ypA2 = posyA2;
  let angleA2 = (lineWeight/2 + xpA2) + "px " + (lineWeight/2 + ypA2) + "px";

  pathA2.style.x =  xpA2;
  pathA2.style.y =  ypA2;
  pathA2.style.width =  widthA2;
  pathA2.style.transformOrigin =  angleA2;
  pathA2.style.transform = " rotate(" + (angM + angL + angA + angB + angA2) + "rad)";

console.log((pathM.getBoundingClientRect().left));

console.log(lineM.getBoundingClientRect().left - grid.getBoundingClientRect().left + mySVG.getBoundingClientRect().left);
console.log(lineM.getBoundingClientRect().top - grid.getBoundingClientRect().top);

dragLogo();

};





function blackFunction(){
  // bmask.style.display = "none";


  for(let line of lines){
    line.style.backgroundColor = "black";
      };


};




function multiFunction(){
  

  console.log(getComputedStyle(squareM).color);


 

  if(getComputedStyle(squareM).color == "rgba(0, 0, 0, 0)"){
    lineM.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
    lineA.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
    lineL.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
    lineB.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
    lineA2.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];

  }
  else{

  [letterM.style.color, lineM.style.backgroundColor] = randomColor();
  [letterA.style.color, lineA.style.backgroundColor] = randomColor();
  [letterL.style.color, lineL.style.backgroundColor] = randomColor();
  [letterB.style.color, lineB.style.backgroundColor] = randomColor();
  [letterA2.style.color, lineA2.style.backgroundColor] = randomColor();

  }
      }

function lineMulti(){
  lineM.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineA.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineL.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineB.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
  lineA2.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
}



function bwhiteFunction(){
  for(let square of letters){
    square.style.color = white;
      }; 
    };

    function bblackFunction(){
      for(let square of letters){
        square.style.color = "black";
          }; 
        };

    function lwhiteFunction(){
      for(let line of lines){
        line.style.backgroundColor = white;
          }; 



        };




function hidePlayerFunction(){
  if(getComputedStyle(menu).left == "-1px"){
  menu.style.left = "-300px";
hidePlayer.innerHTML = "colors";
hidePlayer.style.left = "-25px";
hidePlayer.style.background = "black";
hidePlayer.style.color = "rgb(243, 220, 192)";



}
  else{
    menu.style.left = "-1px";
    hidePlayer.innerHTML = "hide";
    hidePlayer.style.left = "272px";
    hidePlayer.style.background = "rgb(243, 220, 192)";
hidePlayer.style.color = "black";



  }
}


function hideColorFunction(){
  if(getComputedStyle(shape).right == "-1px"){
  shape.style.right = "-300px";
hideColor.innerHTML = "player";
hideColor.style.right = "-25px";
hideColor.style.background = "black";
hideColor.style.color = "rgb(243, 220, 192)";



}
  else{
    shape.style.right = "-1px";
    hideColor.innerHTML = "hide";
    hideColor.style.right = "272px";
    hideColor.style.background = "rgb(243, 220, 192)";
hideColor.style.color = "black";



  }
}

function removeMask(){

  for(let arts of art){
    arts.classList.remove("clippy");

  }

  info.style.color = white;


}



function addMask(){

  console.log(getComputedStyle(poster).backgroundColor)

  for(let arts of art){
    arts.classList.add("clippy");

  }

  for(let line of lines){
    line.style.backgroundColor = "transparent";
  }

  if(getComputedStyle(poster).backgroundColor == white){
  info.style.color = black;}
  else {info.style.color = white;}

}



  for(let line of squares){
    line.style.color = white;

  }




function transparentFunction() {
  for(let line of lines){
    line.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
  for(let square of letters){
    square.style.color = white;
      }; 

}

function tarsilaFunction () {

  let artists = document.querySelectorAll(".art:not(#tarsila)");

  for (let art of artists){
    art.style.opacity = 0;
  }
  tarsila.style.opacity = 100;
  info.innerHTML = "tarsila do amaral<br><span>11.10.2023 – 02.18.2024</span>"
}

function berniFunction () {
  let artists = document.querySelectorAll(".art:not(#berni)");

  for (let art of artists){
    art.style.opacity = 0;
  }
  berni.style.opacity = 100;
  info.innerHTML = "antonio berni<br><span>11.10.2023</span>"

}

function lamFunction () {
  let artists = document.querySelectorAll(".art:not(#lam)");

  for (let art of artists){
    art.style.opacity = 0;
  }
  lam.style.opacity = 100;

  bmask.style.display = "block";

  info.innerHTML = "wifredo lam<br><span>11.10.2023</span>"



}


function fridaFunction () {

  let artists = document.querySelectorAll(".art:not(#frida)");

  for (let art of artists){
    art.style.opacity = 0;
  }

  frida.style.opacity = 100;


  info.innerHTML = "frida kahlo<br><span>11.10.2023</span>"


}

function beigeFunction () {
  poster.style.background = white;
  for(let arts of art){
    if(arts.classList.contains("clippy")){
    arts.style.display = "block";

  } else { 
    arts.style.display = "none";

  }

      info.style.color = black;
}}

function blackbackFunction(){poster.style.background = black;
  for(let arts of art){
    if(arts.classList.contains("clippy")){
    arts.style.display = "block";

  } else { 
    arts.style.display = "none";

  }
      info.style.color = white;
  
}}

function diegoFunction () {
  let artists = document.querySelectorAll(".art:not(#diego)");

  for (let art of artists){
    art.style.opacity = 0;
  }
  diego.style.opacity = 100;


  info.innerHTML = "diego rivera<br><span>11.10.2023</span>"



}

function noneFunction(){
  for(let square of letters){
    if (getComputedStyle(square).color == "rgba(0, 0, 0, 0)"){
      square.style.color = black;
    }
    else{
    square.style.color = "transparent";}

      };
}

function lnoneFunction(){
  for(let line of lines){
    line.style.backgroundColor = "transparent";
      }; 
}


function randomColor(){
  palette = [lightblue, yellow, red, green, blue];

  let index1 = Math.floor(Math.random() * palette.length);
  let index2;

  if (index1 > 1){
    index2 = Math.floor(Math.random() * 2);
  }
  else {
    index2 = Math.floor(Math.random() * palette.length); 
    while(index1==index2){
      index2 = Math.floor(Math.random() * palette.length); 
    };
  };

console.log([palette[index1], palette[index2]]);

  return[palette[index1], palette[index2]]

  
}

function randomizeAll(){
  let myArtistsFunctions = [tarsilaFunction, lamFunction, berniFunction, fridaFunction, diegoFunction];
  let colorBackgroundFunctions = [beigeFunction, blackbackFunction];
  let colorLineFunctions = [blackFunction, lineMulti, multiFunction, lwhiteFunction];
  let myTextFunctions = [bwhiteFunction, bblackFunction, noneFunction];
  let myMaskFunctions = [addMask, removeMask];
  let lineFunctions = [colorLineFunctions, myArtistsFunctions];
  let backgroundFunctions = [colorBackgroundFunctions, myArtistsFunctions];

  randomPosition();

  
let backIndex = Math.floor(Math.random() * colorBackgroundFunctions.length); 
let textIndex = Math.floor(Math.random() * myTextFunctions.length);
let lineIndex = Math.floor(Math.random() * colorLineFunctions.length);

myTextFunctions[textIndex]();


if (backIndex == 0){
  lineIndex = Math.floor(Math.random() * 3)
}
else if (backIndex == 1){
  lineIndex = Math.floor(Math.random() * 3 + 1)
}

colorBackgroundFunctions[backIndex]();
colorLineFunctions[lineIndex]();










  

}





dragElement(info);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {

    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {

    e.preventDefault();

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragLogo() {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    squareM.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
   
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    
    e.preventDefault();

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;


    // set the element's new position:


grid.style.top = (grid.offsetTop - pos2) + "px";
grid.style.left = (grid.offsetLeft - pos1) + "px";

mask.style.transform = "translate(" + (grid.offsetLeft - pos1 - (grid.offsetWidth/2)) + "px, " + (grid.offsetTop - pos2) + "px)";


  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



