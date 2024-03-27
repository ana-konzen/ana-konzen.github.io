
let canvasArray = [];
let myContainer = document.getElementById('myContainer');
let buttonContainer = document.getElementById('buttonContainer');

let artCanvas;


getText('/words');
  async function getText(file) {
      let x = await fetch(file);
      let y = await x.json();
    console.log(y.artworks.length);

    let myp5 = new p5(s, myContainer);
    myp5.tryy = "i tried";
    myp5.allData = y;
    console.log(myIndex);
    myIndex.push(y.artworks.length-1);
    console.log(myIndex);





  





     for(let i = 0; i < y.artworks.length; i++){
      console.log(y.artworks[i].id);
    let myButton = document.createElement("BUTTON");

      let buttonName = document.createTextNode(y.artworks[i].id);

    myButton.appendChild(buttonName);
    buttonContainer.appendChild(myButton);
    myButton.classList.add("artistButton");

    myButton.addEventListener('click', function() {
      console.log(i);
      artCanvas = new p5(s);
    artCanvas.randomNumber = 40;

    artCanvas.allData = y;
 myIndex.push(i);
    console.log(myIndex);





    })
    
    ;


     }

     let clearButton = document.createElement("BUTTON");

     let clearbuttonName = document.createTextNode("Clear");
    clearButton.appendChild(clearbuttonName);



    document.body.appendChild(clearButton);

    clearButton.addEventListener('click', function() {

new p5(clearLayer);
myIndex = [];



    });

    let darkButton = document.createElement("BUTTON");
    let darkName = document.createTextNode("Dark Mode");
    darkButton.appendChild(darkName);
    document.body.appendChild(darkButton);


    





// let allButtons = document.querySelectorAll(".artistButton");
// for(let i = 0; i < y.artworks.length; i++){
// console.log(allButtons[i]);}

// allButtons[1].addEventListener('click', function() {
//   console.log(0);
//   let myp5 = new p5(s, myContainer);
//   myp5.tryy = "i tried";
//   myp5.allData = y;
//   myp5.myIndex = 1;


// });
    
    }



 new p5(loadImage);

