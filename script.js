let proCont = document.getElementById("proCont");
let abCont = document.getElementById("abCont");
let conCont = document.getElementById("conCont");

let projects = document.getElementById("projects");
let about = document.getElementById("about");
let contact = document.getElementById("contact");




let dwidth = 400;
let dmargin = 50;
let cmargin = 10;

for (let i = 0; i < 10; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("thumbnail");
    newDiv.style.width = dwidth + "px";
    newDiv.style.height = dwidth + "px";

    let caption = document.createElement("div");
    caption.classList.add("caption");
    caption.style.width = dwidth + "px";

    let divider = document.createElement("div");
    divider.classList.add("divider");

    if(i == 0){
        newDiv.style.left = dmargin + "px";
        caption.style.left = dmargin + 5 + "px";
        divider.style.left = dmargin + dwidth + dmargin/2 - 1 + "px";

    }else{
    newDiv.style.left = (dwidth + dmargin) * i + dmargin + "px";
    caption.style.left = (dwidth + dmargin) * i + dmargin + 5 + "px";
    divider.style.left = (dwidth + dmargin) * i + dmargin + dwidth + dmargin/2 - 1 + "px";

    }

    let dividerH = 100;
    caption.style.top = dwidth + 50 + cmargin + "px";
    divider.style.top = dwidth/2 + 50 - dividerH/2 + "px";
    divider.style.height = dividerH + "px";
    caption.innerHTML = "lorem ipsum";
    
    proCont.appendChild(newDiv);
    proCont.appendChild(caption);
    proCont.appendChild(divider);


}

projects.addEventListener('click', function (){
proCont.classList.toggle("appear");
conCont.classList.remove("appear");
abCont.classList.remove("appear");



})

about.addEventListener('click', function (){
    abCont.classList.toggle("appear");
    proCont.classList.remove("appear");
    conCont.classList.remove("appear"); 
    })

contact.addEventListener('click', function (){
    conCont.classList.toggle("appear");
    proCont.classList.remove("appear");
    abCont.classList.remove("appear"); 
    })

let thumbnails = document.querySelectorAll(".thumbnail");
let captions = document.querySelectorAll(".caption");


thumbnails[0].style.backgroundImage = "url('malba.png')";
captions[0].innerHTML = "MALBA | Generative Identity | 2023";

thumbnails[1].style.backgroundImage = "url('illustration.png')";
captions[1].innerHTML = "Washington Post | Editorial Illustration | 2024";

thumbnails[2].style.backgroundImage = "url('loop.png')";
captions[2].innerHTML = "Loop App | UX Design | 2023";

thumbnails[1].addEventListener('click', function (){
    window.location.href = '/illustration/refinement';
})

