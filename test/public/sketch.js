

const loadImage = function(p){

  
  p.button = p.select('#submit');
  p.imageInput = p.select('#myFile');




  p.setup = function() {
// console.log(button);

  // console.log(select('#myImage').src);
  p.imageInput.changed(analyzeImage);

  p.button.mousePressed(analyzeThis);

  }

  function analyzeThis(){

    let firstName = p.select('#artistName').value();
    let lastName = p.select('#lastName').value();
    let errorMessage = p.select('#errorMessage');
  
  
    if(!p.imageInput.elt.files[0] || !firstName || !lastName){
      console.log("error");
  
      errorMessage.style('display', 'block');
    }else{
  
      errorMessage.style('display', 'none');
  
  
    // console.log(analyzeImage());
  //  let p.myData = analyzeImage();
  //  console.log(p.myData);
  
  let imgResult;
  
  
  if(myImage.src.includes('data:image/png;base64,')){
  imgResult = myImage.src.replace('data:image/png;base64,','');
  } else if(myImage.src.includes('data:image/jpeg;base64,')){
  imgResult = myImage.src.replace('data:image/jpeg;base64,','');
  }
  
  
  console.log(imgResult);
  
  
  
  
  
    let data = {
      id: firstName + " " + lastName,
      base64: imgResult
    }
  
    console.log(data);
  
    p.httpPost('/analyze/', data, 'json', dataPosted, postErr);
  }
  
  function dataPosted(result){
    console.log(result);
    
    p.select('#submit').elt.innerText = "Loading...";
    setTimeout(() => {
    location.reload();
    p.select('#submit').elt.innerText = "Submit";
  
    }, 10000);
  
  }
  
  }
  
  function postErr(err){
    console.log(err);
  }
  
  
  
  
  function analyzeImage() {
    // let myImage = select("#myImage");
    console.log(myImage);
    let data;
    var file = p.imageInput.elt.files[0];
    var reader = new FileReader();
    let imgResult;
    // let data;
    // console.log(imgResult);
    reader.onloadend = function() {
  
  
        myImage.src = reader.result;
    
  
  
    // httpPost('/analyze/', 'json', dataPosted, postErr);
  
  
    }
  
  
    reader.readAsDataURL(file);
  
    console.log(myImage.src);
   
  
  
  
  }
}





const clearLayer = function(p) {
  p.font;

  p.preload = function() {
    p.font = p.loadFont('AlteHaasGroteskBold.ttf');
  }

  p.setup = function() {

    p.cnv = p.createCanvas(1400, 800, p.WEBGL);



    positionCanvas(p);



  }

  p.windowResized = function () {
    positionCanvas(p);
  }

  p.draw = function() {

    p.background("white");

    p.translate(-p.width/2,-p.height/2 + 50);

    p.fill("black");
    p.textFont(p.font);



  p.push(); 

  p.textSize(100);
  p.text('flash art', 130, 200);

  p.pop();



  }


}

myIndex = [];


const s = function(p) {

            // console.log(p.myIndex);

            p.randomNumber = 50;



            p.myData;
            p.allData;

            p.circular, p.organic, p.sharp, p.textBool, p.linear, p.rectangular, p.geometric;
            p.avantgarde, p.radical, p.minimalist, p.constrained, p.classic, p.expressionist, p.maximalist, p.chaotic;

            p.sum = 0;  
            p.absSum = 0;

            p.palette;
            p.keywords;
            p.colors;
            p.shapes;
            p.styles;
            p.artist;
            p.contrast;
            p.scores = [];
            p.cnv;
            p.darkMode = false;

            brush.instance(p);



            p.preload = function() {
              p.font = p.loadFont('AlteHaasGroteskBold.ttf');
              // p.allData = p.loadJSON('/words');
              p.afinn = p.loadJSON('/afinn');
            }
            
            
            p.setup = function() {



              // console.log(brush.box());

              p.frameRate(5);

              p.cnv = p.createCanvas(1400, 800, p.WEBGL);
              // cnv.position(500, 500);
              p.angleMode(p.DEGREES);

          

            

              // input = document.getElementById("file-input");
              // input.addEventListener("change", handleFiles, false);


              positionCanvas(p);
              brush.load();

          

          }

          p.windowResized = function () {
            positionCanvas(p);
          }

          p.draw = function () {

            p.randomSeed(p.randomNumber);


              p.noLoop();

              if(p.darkMode){
              p.background("black");
              }else{p.background("white");}

             
              p.translate(-p.width/2,-p.height/2 + 50);
              
              
              if(p.darkMode){
              p.fill("white");

              }
              else {
              p.fill("black");

              }

              p.textFont(p.font);



            p.push(); 

            p.textSize(100);
            p.text('flash art', 130, 200);

            p.pop();

            console.log(myIndex)

            for(index of myIndex){
            
                  getAssets(p, index);

                  p.push();
                  p.noStroke();
                  p.noFill();

                  // createLayer(p);

                  // getAssets(p, 0);

                  createLayer(p);


                p.pop();

            }
            
              p.push();

              p.textSize(100);
              p.text('flash art', 130, 200);

              p.pop();
          
            
            


            p.push();

            

            
              
            // brush.set(p.random(brush.box()), "black", p.random(1, 4));

            p.text("analysis breakdown", 800, 100);
            p.text("artist", 810, 120);
            p.text(p.artist, 820, 140);
            p.text("color", 810, 170);

            p.push();

            p.translate(810, 180);
            for (let i = 0; i < p.palette.length; i++){
              p.fill(p.palette[i]);
              p.noStroke();
              p.rect(i * 22 + 10, 0, 20, 20);
            }

            if(p.darkMode){
              p.fill("white");
            }else{p.fill("black");}



            p.text("sentiment scale", 0, 50);

            p.translate(10, 70);

            for (let i = 0; i < p.keywords.length; i++){
              if(p.afinn[p.keywords[i]] === undefined){
                p.afinn[p.keywords[i]] = 0;m

              }
              p.text(p.keywords[i] + ": " + p.afinn[p.keywords[i]], 0, i * 20); 

            }


            p.text("sum: " + p.sum, 35, 120);

            p.text("style", -10, 150);

            p.translate(0, 170);


            for (let i = 0; i < p.styles.length; i++){
              p.text(p.styles[i], 0, i * 20); 

            }

            p.text("shapes", -10, 70);

            p.translate(0, 90);
            for (let i = 0; i < p.shapes.length; i++){
              p.text(p.shapes[i], 0, i * 20); 
            }

            p.text("contrast", -10, 50);
            p.text(p.contrast, 0, 70);





            p.pop();

            








              p.pop();



          //     setTimeout(() => {

          // p.saveCanvas();

              
          //       }, 10000);
            






          }





        







}


function positionCanvas(p = p5.instance) {
  let x = p.windowWidth /2 - (p.width/2);
  let y = 50;
  p.cnv.position(500, y);

}


   

    function getAssets(p = p5.instance, index){ 

      p.sum = 0;  
      p.absSum = 0;
  
      p.myData = p.allData.artworks[index];
        
    
      p.keywords = p.myData.keywords;

      p.scores = [];
    
    
      for (let word of p.keywords){
        if(p.afinn[word] === undefined){
          p.afinn[word] = 0;
    
        }
        console.log(word + ":" + p.afinn[word]);
    
        p.scores.push(Number(p.afinn[word]));
    
        p.sum+= Number(p.afinn[word]);
        p.absSum+= Math.abs(Number(p.afinn[word]));
    
        
    
      }
    
    
    
    
    
      p.shapes = p.myData.shape;
    
      p.contrast = p.myData.contrast[0];
    
      p.artist = p.myData.id;
    
    
      p.styles = p.myData.styles;
    
      console.log(p.shapes);
    
      p.circular = p.shapes.includes("circular");
      p.organic = p.shapes.includes("organic");
      p.sharp = p.shapes.includes("sharp");
      p.textBool = p.shapes.includes("text");
      p.linear = p.shapes.includes("linear");
      p.rectangular = p.shapes.includes("rectangular");
      p.geometric = p.shapes.includes("geometric");
    
      p.avantgarde = p.styles.includes("avant-garde");
      p.radical = p.styles.includes("radical");
      p.minimalist = p.styles.includes("minimalist");
      p.constrained = p.styles.includes("constrained");
      p.classic = p.styles.includes("classic");
      p.expressionist = p.styles.includes("expressionist");
      p.maximalist = p.styles.includes("maximalist");
      p.chaotic = p.styles.includes("chaotic");
    
    
      p.palette = p.myData.colors;
    
    }

    function createLayer(p = p5.instance){

      p.push();
    
      let numVertex = p.absSum; 
      console.log(p.absSum);
    
      let radBrushes = ["pen", "rotring", "marker2"];
      let expBrushes = ["marker", "marker2", "hatch_brush"];
    
    
      let myBrushes = ["rotring", "marker", "marker2"]; //this array will be defined by the style;
    
    
      let chaosLevel;
    
    
      let variance = stddev(p.scores, p);
    
      let myAngle = p.map(variance, 0, 25, 0, 180);
    
      console.log(variance);
    
      let chaosNumber = Math.ceil(variance); //gonna use this for something!

      brush.noField();

    
    
    
      if(variance < 2){
        chaosLevel = "in";
        // brush.noStroke();
      }else{
        chaosLevel = "out";
      }
    
      
    
      let bleed = p.map(p.sum, -25, 25, 0, 0.5); //see brush.p5 syntax for numbers
    console.log(bleed);
    p.translate(130, 150);
    
      brush.fill(p.random(p.palette), 140);
    
      console.log(p.organic, p.minimalist, p.constrained);
      if((p.organic && !p.minimalist) || (p.organic && !p.constrained)){
        brush.bleed(bleed, chaosLevel);
      }
      else{
        brush.bleed(0);
      }
    
    //  console.log(chaosNumber * numVertex);
    
      if(p.radical || p.avantgarde && !p.classic){
        brush.noFill();
        myBrushes = radBrushes;
        brush.setHatch(p.random(myBrushes), p.random(p.palette));
        brush.hatch(p.random(10,60), myAngle) 
        
      } else if(p.expressionist){
        myBrushes = expBrushes;
    
      }else{
      brush.fill(p.random(p.palette), 140);
      myBrushes = ["rotring", "marker", "marker2"];
      brush.noHatch();

      }
    
      if (p.chaotic){ brushWidth = chaosNumber * 4; }
      else if (p.minimalist || p.constrained){
        brushWidth = chaosNumber ;
      } else {
        brushWidth = chaosNumber * 2;} 
    
      brush.set(p.random(myBrushes), p.random(p.palette), brushWidth);
      console.log(chaosNumber);
    
      if((p.classic && !p.maximalist && !p.chaotic)){
        brush.noStroke();
        console.log("test");
        console.log(p.classic, p.maximalist, p.chaotic);
      } 
    
    if(p.chaotic){
      brush.field(p.random(brush.listFields()));
    } else if(p.avantgarde || p.maximalist || p.radical || p.expressionist){
      if (p.minimalist || p.constrained){
        if (p.random() < 0.3){
          brush.field(p.random(brush.listFields()));
          }
    
      }
      else {
        if (p.random() < 0.7){
      brush.field(p.random(brush.listFields()));
      }}
    
    } else if (p.minimalist || p.constrained){
      brush.noField();
    
    } else {
      brush.noField();

    }
    
    
      //defining the shape below
      switch(1e6*p.rectangular+1e5*p.circular+1e4*p.organic+1e3*p.sharp+1e2*p.textBool+1e1*p.linear+1*p.geometric){
        case(110000): 
    
          brush.beginShape(1);
            for(i = 0; i < numVertex; i++){
            brush.vertex(p.random(400), p.random(-50, 100));
            }
          brush.endShape();
    
          // brush.circle(p.random(400), p.random(-50, 100), 50);
    
    
          // console.log(1e7*rectangular+1e6*circular+1e5*organic+1e4*sharp+1e3*textBool+1e2*linear+1*geometric)
      
        break;
        case(1000100):
    
        for(i = 0; i < numVertex; i++){
            
          brush.rect(p.random(400), p.random(-50, 100), p.random(10, chaosNumber * numVertex * 5), p.random(10, chaosNumber * numVertex * 3));
    
        }
    
    
        break;
    
        case(100001): 
    
        for(i = 0; i < numVertex; i++){
    
          brush.circle(p.random(400), p.random(-50, 100), p.random(10, chaosNumber * numVertex * 3), true);
    
        }
    
        break;
    
        case(1000001):
    
        for(i = 0; i < numVertex; i++){
            
          brush.rect(p.random(400), p.random(-50, 100), p.random(10, chaosNumber * numVertex * 3), p.random(10, chaosNumber * numVertex * 3));
    
    
        }
    
         break;
    
        case(100001):
    
        brush.beginShape(1);
          for(i = 0; i < numVertex; i++){
            brush.vertex(p.random(400), p.random(-50, 100));
          }
        brush.endShape(CLOSE);
    
        break;
    
          
    
        
         default: 
          // brush.rect(10, 10, 50, 50);
    
            brush.beginShape(1);
              for(i = 0; i < numVertex; i++){
              brush.vertex(p.random(400), p.random(-50, 100));
              }
            brush.endShape(p.CLOSE);
    
      
    
          break;
        
      }
    
    
    
    p.pop();
    
      
    }
    
    function stddev(arr, p = p5.instance) {
      let avg = arr.reduce((acc, c) => acc + c, 0) / arr.length;
      let variance = arr.reduce((acc, c) => acc + (c - avg) ** 2, 0) / arr.length;
      return p.sqrt(variance);
    }
    
    
    
    

    function drawFlash(){
      p.push();
      brush.push();
    
      p.translate(100, 100);
  
  
  
      brush.beginShape(0);
  
      brush.vertex(10, 10);
      brush.vertex(50, 5);
      brush.vertex(10, 10);
      brush.vertex(10, 50);
      brush.vertex(50, 45);
      brush.vertex(10, 50);
      brush.vertex(10, 120);
  
  
      brush.endShape();
  
      brush.pop();
  
  
      brush.push();
  
      p.translate(30, 10);
  
  
  
      brush.beginShape(0);
  
      brush.vertex(10, 50);
      brush.vertex(10, 150);
      brush.vertex(50, 155);
      brush.vertex(10, 150);
  
      brush.endShape();
  
      brush.pop();
  
      p.translate(30, -30);
  
  
      brush.beginShape(0);
  
      brush.vertex(10, p.random(100, 180));
      brush.vertex(30, p.random(0, 20));
      brush.vertex(60, p.random(100, 180));
      brush.vertex(45, 70);
      brush.vertex(5, 80);
      brush.vertex(20, 80);
  
      brush.endShape();
  
      p.translate(40, -10);
  
  
      brush.beginShape(1);
  
      brush.vertex(10, 150);
      brush.vertex(70, 160);
      brush.vertex(70, 110);
      brush.vertex(20, 110);
      brush.vertex(20, 70);
      brush.vertex(60, 60);
  
      brush.endShape();
  
      p.translate(70, 20);
  
  
      brush.beginShape(0);
  
      brush.vertex(10, 160);
      brush.vertex(10, 10);
      brush.vertex(10, 60);
      brush.vertex(0, 60);
      brush.vertex(90, 80);
      brush.vertex(50, 70);
      brush.vertex(50, 10);
      brush.vertex(50, 70);
      brush.vertex(50, 160);
      brush.vertex(50, 70);
      brush.vertex(10, 60);
  
  
      brush.endShape();
  
  
      p.translate(100, 30);
  
  
  
      p.pop();
  
  }
  
  
  function drawArt(){
      p.push();
      brush.push();
  
      p.translate(390, 120);
  
  
      brush.beginShape(0);
  
      brush.vertex(10, p.random(100, 180));
      brush.vertex(30, p.random(0, -20));
      brush.vertex(60, p.random(100, 180));
      brush.vertex(35, 50);
      brush.vertex(p.random(0, -20), 60);
      brush.vertex(20, 60);
  
      brush.endShape();
  
      p.translate(60, 20);
  
  
      brush.beginShape(0);
  
      brush.vertex(10, 120);
      brush.vertex(15, -20);
      brush.vertex(p.random(60, 80), 10);
      brush.vertex(0, 45);
      brush.vertex(12, 42);
      brush.vertex(60,  p.random(100, 180));
      brush.vertex(12, 42);
  
      brush.endShape();
  
      p.translate(40, -30);
  
  
      brush.beginShape(0);
  
      brush.vertex(10, 8);
      brush.vertex(40, 15);
      brush.vertex(40, 0);
      brush.vertex(30, p.random(100, 150));
      brush.vertex(40, 15);
      brush.vertex(p.random(70, 100), 30);
      brush.vertex(40, 15);
  
  
      brush.endShape();
  
      brush.pop();
      p.pop();
  
  }