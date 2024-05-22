
// in time event there are two parts:
// 1. set interval.  (clearinterval)
// 2. set timeout.(cleartimeout)

function startclock() {
    intervalId = setInterval(setTime,1000);
}
function stopclock() {
    clearInterval(intervalId);
}
function setTime() {
    var date = new Date();
    document.getElementById(divtime).innerHTML = date;
}
setTime();



