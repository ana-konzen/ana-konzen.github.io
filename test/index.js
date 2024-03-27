import * as fs from 'fs';
import express, { Router } from 'express';
import OpenAI from "openai";

import serverless from "serverless-http";


let myResponses;
const openai = new OpenAI();

let app = express();

const router = Router();

let server = app.listen(4000, listening);


import bodyParser from 'body-parser';


function listening() {

    console.log('listening ....');
}

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/words', sendWords);

function sendWords(request, response) {
    response.send(words);
}


app.get('/afinn', sendAfinn);

function sendAfinn(request, response) {
    response.send(afinn);

}



let imagesData = fs.readFileSync("images.json");
let images =  JSON.parse(imagesData);

// console.log(images.images);

app.post('/analyze', analyzeThis);

let artwork;


function analyzeThis(request, response){
    // console.log(request.body);

   

     images.images.push(request.body);

    console.log(images.images);


fs.writeFile("images.json", JSON.stringify(images, null, 2), imageSucess);


let newImage = images.images[images.images.length-1];
console.log(newImage.id.replace(" ", ""));

let artworks = words.artworks;
// words.artworks2.push({
//     test: "test,"
// })

let myImage = newImage.base64;


let obj = artworks.find(o => o.id === newImage.id);

if(!obj){
    let art = {};
    words.artworks.push(art);
    let artIndex = words.artworks.indexOf(art);
    // console.log(artIndex);
    artwork = words.artworks[artIndex];
    artwork["id"] = newImage.id;}
 else{
    let artIndex = artworks.indexOf(obj);
    artwork = words.artworks[artIndex];
    }


myResponses = [];
for (let myQuestion of myQuestions){
    main(myQuestion, myImage);
}


    
    let reply = {
        msg: "thanks"
    }

    response.send(reply);

}





export const handler = serverless(app);



function imageSucess(){
    console.log("success!");
}


function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer.from(bitmap).toString('base64');
}

let hannahBlack = base64_encode('image.png');
let vanGogh = base64_encode('starry.jpeg');
let klara = base64_encode('klara.jpg');
let basquiat = base64_encode('basquiat.jpeg');


let keywords = [];
let colors = [];
let shape = [];
let styles = [];
let contrast = [];


let keywordLength = 6;
let colorLength = 5;
let shapeLength = 2;
let styleLength = 3;
let contrastLength = 1;

let artworkID; //should we add or replace data





let myQuestions = [
    "How would you describe the feelings caused by this artwork? The keywords have to be in the AFINN sentiment analysis list of words. Don't say surprise. Give me " + keywordLength + " keywords in lowercase.",
    "Give me an estimate of the main colors in this image, in hex code. Give me " + colorLength + " keywords",
    "Out of the following words, which " + shapeLength + " describe this image better? circular, organic, sharp, text, linear, rectangular, geometric. Give me " + shapeLength + " keywords in lowercase",
    "Out of the following words, which " + styleLength + "describe the image better in terms of art style and mood? avant-garde, radical, minimalist, constrained, classic, expressionist, chaotic, maximalist. Give me " + styleLength + " keywords in lowercase",
    "Does this image have low or high contrast? Answer with either 'high' or 'low', lowercase."
    
]

// console.log(myQuestions[0]);

let reply;




let data = fs.readFileSync("words.json");
let afinndata = fs.readFileSync("AFINN.json");



let words = JSON.parse(data);



let afinn = JSON.parse(afinndata);








// if(myImage == hannahBlack){

//  artwork = words.artworks[0];
//  artwork["id"] = "Hannah Black";

// } else if (myImage == vanGogh){
//     let obj = artworks.find(o => o.id === 'van Gogh');
//     if(!obj){
//     let art = {};
//     words.artworks.push(art);
//     let artIndex = words.artworks.indexOf(art);
//     // console.log(artIndex);
//     artwork = words.artworks[artIndex];}
//     else{
//     let artIndex = artworks.indexOf(obj);
//     artwork = words.artworks[artIndex];
//     artwork["id"] = "van Gogh";}

//     // artwork["test"] = "test";
//     // console.log(artwork);
// }else if (myImage == klara){
//     let obj = artworks.find(o => o.id === 'Klara');
//     if(!obj){
//         let art = {};
//         words.artworks.push(art);
//         let artIndex = words.artworks.indexOf(art);
//         // console.log(artIndex);
//         artwork = words.artworks[artIndex];
//         artwork["id"] = "Klara";}
//         else{
//         let artIndex = artworks.indexOf(obj);
//         artwork = words.artworks[artIndex];
//         }

// }else if (myImage == basquiat){
//     let obj = artworks.find(o => o.id === 'Basquiat');
//     if(!obj){
//         let art = {};
//         words.artworks.push(art);
//         let artIndex = words.artworks.indexOf(art);
//         // console.log(artIndex);
//         artwork = words.artworks[artIndex];
//         artwork["id"] = "Basquiat";}
//         else{
//         let artIndex = artworks.indexOf(obj);
//         artwork = words.artworks[artIndex];
//         }}

// console.log(words.artworks.indexOf(artwork2))

// console.log(artwork);

// let artwork3 = words.artworks[2];
// artwork3["keywords"] = "test2";
// if(myTest){
// // words.artworks.push(artwork3);
// }
// console.log(artwork1);
// console.log(artwork2);
// console.log(words);


// words.artworks[0]["keywords"] = "test";
// console.log(words.artworks[0]);
// console.log(words["artworks"].push) ;

// fs.writeFile("words.json", JSON.stringify(words, null, 2), sucesss);
// function sucesss(){
//     console.log("hi");
// }

// let reply;

// let myArray = ["hi", "how"];

// words["hi"] = myArray;

// let data2 = JSON.stringify(words, null, 2);
// console.log(data);

// fs.writeFile('words.json', data2, finished);
// function finished(err){
//     console.log('all set');
// }




// for (let myQuestion of myQuestions){
//     main(myQuestion, myImage);
// }

async function main(question, image) {
    let fullReply = "I'm sorry";
    let errorMessage = "I'm sorry";
    while(fullReply.match(errorMessage) != null){
    const completion = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        max_tokens: 1024,
        messages: [
        {
            "role": "system",
            "content": "You will be provided with an image and a question related to the image, always answer in a specfic number of keywords, which will be provided to you, separated by a blank space."
            },
          {
            role: "user",
            content: [
              { type: "text", text: question},
              {
                type: "image_url",
                image_url: {
                  "url": "data:image/jpeg;base64," + String(image),
                  detail: "high",
    
                },
              },
            ],
          },
        ],
      });
fullReply = completion.choices[0].message.content;
reply = fullReply.split(' ');
console.log("fullReply " + fullReply);
}
// reply = completion.choices[0].message.content;

//   replyString.push(completion.choices[0].message.content.split(' '));
console.log("reply " + reply);

myResponses.push(reply);
console.log("reply2 " + myResponses);

if (myResponses.length == myQuestions.length){

    for (let response of myResponses){

    if (response.length == keywordLength){

        keywords = response; 
        console.log("this is my response " + keywords);
        artwork["keywords"] = keywords;

    }
   else if (response.length == shapeLength){

        shape = response; 
        artwork["shape"] = shape;
        console.log("this is my response " + shape);
    } 
    else if (response.length == colorLength){

        colors = response; 
        artwork["colors"] = colors;
        console.log("this is my response " + colors);
    } 
    else if (response.length == styleLength){

        styles = response; 
        artwork["styles"] = styles;
        console.log("this is my response " + styles);
    }
    else if (response.length == contrastLength){

        contrast = response; 
        artwork["contrast"] = contrast;
        console.log("this is my response " + contrast);
    }

    
 }

 console.log("data " + artwork);

//  let keywords = myResponses[0]; 

//  let colors = myResponses[1]; 

//  let shape = myResponses[2]; 


//  words["keywords"] = keywords;


//  words["colors"] = colors;

//  words["shape"] = shape;


    let data = JSON.stringify(words, null, 2);
    console.log("data " + data);

fs.writeFile('words.json', data, finished);



}

// return reply;
// console.log(replyString);

// for (const type of reply){
//     console.log(type);

//     // words["color"] = word;

//     // let data = JSON.stringify(words, null, 2);
//     // console.log(data);

// // fs.writeFile('words.json', data, finished);


// }

    // let data = JSON.stringify(reply, null, 2);

// fs.writeFile('words.json', completion.choices[0].message.content, finished);



function finished(err){
    console.log('all set');
}


}












