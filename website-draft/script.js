let proCont = document.getElementById("proCont");
let abCont = document.getElementById("abCont");
let conCont = document.getElementById("conCont");

let imageCont = document.getElementById("imageCont");


let projects = document.getElementById("projects");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

let mainheader = document.getElementById("main-header");

let proText =  document.getElementById("text");

let proPage = document.getElementById("proPage");

proPage.style.display = 'none';

let proHeader = document.getElementById("header");

let proLink = document.getElementById("proLink");

let linkButton = document.getElementById("linkButton");


let client = document.getElementById("client");
let year = document.getElementById("year");
let medium = document.getElementById("medium");

let tDesc = document.getElementById("tDesc");



let proImages = document.getElementById("proImages");



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
proPage.style.display = 'none';


})

about.addEventListener('click', function (){
    abCont.classList.toggle("appear");
    proCont.classList.remove("appearFlex");
    proCont.classList.add("disappear");
    conCont.classList.remove("appear"); 
proPage.style.display = 'none';

    })

contact.addEventListener('click', function (){
    conCont.classList.toggle("appear");
    proCont.classList.remove("appearFlex");
    proCont.classList.add("disappear");
    abCont.classList.remove("appear"); 
proPage.style.display = 'none';

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
proText.innerHTML = data[0].Text;

    for (let dp of data){
        allTags.push(dp.Tag1);
        allTags.push(dp.Tag2);
        allTags.push(dp.Tag3);

        let newDiv = document.createElement("div");
        newDiv.classList.add("imageCont");
    
        let caption = document.createElement("div");
        caption.classList.add('titles');
        // caption.innerHTML = dp.Client;

      
    
        let imagee = document.createElement("div");
        imagee.classList.add('images');
        imagee.setAttribute('data-descr', dp.Header);
        console.log(dp.Main_Image);
      
        imagee.style.backgroundImage = "url('" + dp.Main_Image + "')";

        let imgName = document.createElement("div");
        imgName.classList.add('imageName');
        // imgName.innerHTML = dp.Client;


        imagee.addEventListener('mousedown', function (){
            tDesc.innerHTML = "";
            // console.log(dp.Client);
            proPage.style.display = 'flex';
            proCont.classList.remove("appearFlex");
            proCont.classList.add("disappear");
            proHeader.innerHTML = dp.Header;
            if(dp.Text == undefined) {
                proText.innerHTML = '';
            } else {
            proText.innerHTML = dp.Text;

            }

            if(dp.Link === '0') {
                proLink.style.display = 'none';

            } else {
                proLink.style.display = 'block';

            proLink.href = dp.Link;
            linkButton.innerHTML = dp.LinkName;


            }

            console.log(dp.LinkPrototype);
            

            year.innerHTML = dp.Year;
            medium.innerHTML = dp.Medium;

            let imgArr = dp.Images.split(' ');
            console.log(imgArr);
            proImages.innerHTML = '';
            for (let img of imgArr){
            proImages.innerHTML += '<img src="' + img + '">';
            }

            let dtag1 = document.createElement("div");
            dtag1.innerHTML = dp.Tag1;
            tDesc.appendChild(dtag1);

            if(dp.Tag2 != "None"){
                let dtag2 = document.createElement("div");
                dtag2.innerHTML = dp.Tag2;
                tDesc.appendChild(dtag2);
                if(dp.Tag3 != "None"){
                    let dtag3 = document.createElement("div");
                    dtag3.innerHTML = dp.Tag3;
                    tDesc.appendChild(dtag3);
                }
            }

            

        })
        

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
        // newDiv.appendChild(imgName);
        newDiv.appendChild(tagContainer);
        // newDiv.appendChild(caption);
        imageCont.appendChild(newDiv);

        
    }




    let myImages = document.querySelectorAll('.imageCont');
    console.log(myImages);

  

   

    

}

