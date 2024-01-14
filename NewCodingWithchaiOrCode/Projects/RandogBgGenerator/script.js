const randomColor = function () {
    let colorText = '1234567890ABCDEF';
    let getColor = '#';


    for (let i = 0; i < 6; i++) {
        getColor += colorText[Math.floor(Math.random() * 16)];
    }
    return getColor;
}
let getId;
let startChangingColor = function(){
    if (!getId) {
        getId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

let stopChangingColor = function () {
    clearInterval(getId)
    getId = null
}


document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)