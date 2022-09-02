let img=document.querySelector('.image img');
let container=document.querySelector('.container');
function chosseImage(image) {
    img.src=image;
    console.log(image);
}

function color(color) {
    container.style.background=color;
}