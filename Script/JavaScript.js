function btnclick() {
    alert('we call external javaScript file');
}
/*document.getElementById('btn1').onclick = alert('hello ganesh pawar');*/
document.getElementById('btn1').onclick = btnclick;