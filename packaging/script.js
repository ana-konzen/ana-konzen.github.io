let options = document.getElementById('options');

for (let i = 0; i < 4; i ++){
    let newSquare =  document.createElement('div');
    newSquare.classList.add('littlesquare');
    options.appendChild(newSquare);

    if (i == 2 || i == 3){
        newSquare.style.top = 50 + "px";
    } else {
        newSquare.style.top = 0 + "px";
    }

    if (i % 2 != 0){
        newSquare.style.left = 50 + "px";
    } else {
        newSquare.style.left = 0 + "px";
    }

    newSquare.addEventListener('click', function () {

        if (i == 2 || i == 3){
            productName.style.top = "auto";
            productName.style.bottom = "-10px";
            console.log("test");
        } else {
            productName.style.top = "-10px";
            console.log("test4");

        }
        if (i % 2 != 0){
            productName.style.left = "auto";
            productName.style.right = "20px";
            productName.style.textAlign = 'right';
            console.log("test2");

        } else if (i % 2 == 0) {
            productName.style.left = "20px";
            productName.style.textAlign = 'left';
            console.log("test3");

        }





    });
    
}