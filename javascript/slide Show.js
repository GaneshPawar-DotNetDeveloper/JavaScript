
var imagepath = ['images/farm.jpg', 'images/ramkrushna math logo.png', ] 
var index = 0;
function setImage() {
    changeImage();
   intervalID= setInterval(changeImage,2000);
}

function changeImage() {
    document.getElementById('poster').src = imagepath[index];
    index++;
    if (index == imagepath.length) {
        index = 0;
       
    }
}
function stopImage() {
    clearInterval(intervalID);
}