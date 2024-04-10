let proCont = document.getElementById("proCont");
let abCont = document.getElementById("abCont");
let conCont = document.getElementById("conCont");

let imageCont = document.getElementById("imageCont");


let projects = document.getElementById("projects");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

let mainheader = document.getElementById("main-header");




let dwidth = 400;
let dmargin = 50;
let cmargin = 10;

for (let i = 0; i < 10; i++){
   



    // // newDiv.classList.add("thumbnail");
    // newDiv.style.width = dwidth + "px";
    // newDiv.style.height = dwidth + "px";

    // let caption = document.createElement("div");
    // caption.classList.add("caption");
    // caption.style.width = dwidth + "px";

    // let divider = document.createElement("div");
    // divider.classList.add("divider");

    // if(i == 0){
    //     newDiv.style.left = dmargin + "px";
    //     caption.style.left = dmargin + 5 + "px";
    //     divider.style.left = dmargin + dwidth + dmargin/2 - 1 + "px";

    // }else{
    // newDiv.style.left = (dwidth + dmargin) * i + dmargin + "px";
    // caption.style.left = (dwidth + dmargin) * i + dmargin + 5 + "px";
    // divider.style.left = (dwidth + dmargin) * i + dmargin + dwidth + dmargin/2 - 1 + "px";

    // }

   
    
    // proCont.appendChild(newDiv);
    // proCont.appendChild(caption);


}

projects.addEventListener('click', function (){
    proCont.classList.toggle("appearFlex");
    proCont.classList.toggle("disappear");
    conCont.classList.remove("appear");
    abCont.classList.remove("appear");
})

about.addEventListener('click', function (){
    abCont.classList.toggle("appear");
    proCont.classList.remove("appearFlex");
    proCont.classList.add("disappear");
    conCont.classList.remove("appear"); 
    })

contact.addEventListener('click', function (){
    conCont.classList.toggle("appear");
    proCont.classList.remove("appearFlex");
    proCont.classList.add("disappear");
    abCont.classList.remove("appear"); 
    })

// let thumbnails = document.querySelectorAll(".thumbnail");
let captions = document.querySelectorAll(".caption");


// thumbnails[0].style.backgroundImage = "url('malba.png')";
// captions[0].innerHTML = "MALBA | Generative Identity | 2023";

// thumbnails[1].style.backgroundImage = "url('illustration.png')";
// captions[1].innerHTML = "Washington Post | Editorial Illustration | 2024";

// thumbnails[2].style.backgroundImage = "url('loop.png')";
// captions[2].innerHTML = "Loop App | UX Design | 2023";

// thumbnails[1].addEventListener('click', function (){
//     window.location.href = '/illustration/refinement';
// })

mainheader.addEventListener('click', function (){
    // window.location.href = '/';

    conCont.classList.remove("appear");
    proCont.classList.remove("appearFlex");
    proCont.classList.add("disappear");
    abCont.classList.remove("appear"); 
})



let sheetID = "16wZNDkizJMnJvf4PR2OirHUE4kDR7FGTUMPBwTJ1oP8";   
let tabName = 'Sheet1';
let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`;


getData(opensheet_url);

async function getData(myData) {
    const response = await fetch(myData);
    const data = await response.json();
    let allTags = [];

    for (let dp of data){
        allTags.push(dp.Tag1);
        allTags.push(dp.Tag2);
        allTags.push(dp.Tag3);

        let newDiv = document.createElement("div");
        newDiv.classList.add("imageCont");
    
        let caption = document.createElement("div");
        caption.classList.add('titles');
        caption.innerHTML = dp.Client;
    
        let imagee = document.createElement("div");
        imagee.classList.add('images');
        console.log(dp.Main_Image);
      
        imagee.style.backgroundImage = "url('" + dp.Main_Image + "')";
        

        let tagContainer = document.createElement("div");
        tagContainer.classList.add('tags');

        let tag1 = document.createElement("div");
        tag1.innerHTML = dp.Tag1;

        

        tagContainer.appendChild(tag1);

        if(dp.Tag2 != "None"){
            let tag2 = document.createElement("div");
            tag2.innerHTML = dp.Tag2;
            tagContainer.appendChild(tag2);
            if(dp.Tag3 != "None"){
                let tag3 = document.createElement("div");
                tag3.innerHTML = dp.Tag3;
                tagContainer.appendChild(tag3);
            }
        }
    
        newDiv.appendChild(imagee);
        newDiv.appendChild(tagContainer);
        // newDiv.appendChild(caption);
        imageCont.appendChild(newDiv);
        
    }


    let myTags = allTags.filter((value, index) => allTags.indexOf(value) === index);

    myTags.splice(myTags.indexOf('None'), 1);

    let myImages = document.querySelectorAll('.imageCont');
    let taggedImages = document.querySelectorAll('.tags div');
    console.log(taggedImages);
    console.log(myImages);

    for (let tgimg of taggedImages){
        console.log(tgimg.innerHTML);

    }

  

    for (let tag of myTags){
        let newTag = document.createElement('div');
        newTag.innerHTML = tag;
        newTag.classList.add('active');
        tagCont.appendChild(newTag);

        newTag.addEventListener('click', function() {
            if( newTag.classList.contains('active')){
                newTag.classList.remove('active');
                newTag.classList.add('inactive');
                for (let image of myImages){
                    let tagss = image.children[1].children;
                    for (let tg of tagss){
                        if (tg.innerHTML == tag){
                            image.style.display = 'none';
                        }
                    }
                }
            } else {
                newTag.classList.add('active');
                newTag.classList.remove('inactive');
                for (let image of myImages){
                    let tagss = image.children[1].children;
                    for (let tg of tagss){
                        if (tg.innerHTML == tag){
                            image.style.display = 'flex';
                        }
                    }
                }
                
            }
       
        })

    }

    

}

