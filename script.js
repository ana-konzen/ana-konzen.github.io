const art = document.getElementById("art");
const caption = document.getElementById("caption");


let myImages = ["parrot.jpeg", "schiele.jpeg", "lepage.jpeg"];

let currentImage = myImages[0];
art.src = currentImage;


document.addEventListener('keydown', function(event) {
   
    if (event.key === 'Enter' || event.key === 'Return') {
     
      if (currentImage === myImages[0]) {
        currentImage = myImages[1];
        art.style.width = "auto";
        art.style.height = "95vh";
        art.style.top = "25px";
        art.style.right = "20vw";

        prompts[0].innerHTML = "the hair clasp";
        prompts[2].innerHTML = "the woman's hand";
        prompts[3].innerHTML = "the stockings";


        caption.style.top = "calc(95vh + 10px)";
        caption.style.right = "calc(20vw + (95vh/1.308) + 10px)";
        caption.innerHTML = "Egon Schiele, <span class='italic'>Seated Woman, Back View</span>, 1917";

      } 
      else if (currentImage === myImages[1]){
        currentImage = myImages[2];
        art.style.width = "55vw";
        art.style.height = "auto";
        art.style.top = "50px";
     
        art.style.right = "8vw";

        prompts[0].innerHTML = "the archangel";
        prompts[2].innerHTML = "the woman's face";
        prompts[3].innerHTML = "the woman's left hand";

        caption.style.top = "calc((55vw/1.109) + 60px)";
        caption.style.right = "8vw";
        caption.innerHTML = "Jules Bastien-Lepage, <span class='italic'>Joan of Arc</span>, 1879";
        
      }
      else {currentImage = myImages[0];
        art.style.width = "65vw";
        art.style.height = "auto";
        art.style.top = "70px";
        art.style.right = "5vw";
        prompts[0].innerHTML = "the parrot";
        prompts[2].innerHTML = "the woman's face";
        prompts[3].innerHTML = "the coat rack";


        caption.style.right = "5vw";
        caption.style.top = "calc((65vw/1.485) + 80px)";
        caption.innerHTML = "Gustave Courbet, <span class='italic'>Woman with a Parrot</span>, 1866";

    }
      
   
      art.src = currentImage;
    }
  });