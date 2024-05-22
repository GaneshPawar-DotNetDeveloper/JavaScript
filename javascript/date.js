

var date = new Date();
document.write(`current datetime is : ${date} <br>`);
var v1 = date.getDate();
document.write('only date is : ' + v1 + '<br>');
var v3 = date.getFullYear();
document.write(`get full year is : ${v3} <br>`);

var v2 = date.getMonth();
document.write(`get month is : ${v2 +1} <br>`);
var months = ['jan', 'feb', 'march', 'april', 'may', 'june', 'jully', 'agust', 'sep', 'oct', 'nov', 'dec'];
document.write(` month name  is : ${months[v2]} <br>`);


 // here get month gives the wrong because its index start from 0.
/*var dbo = new Date('23/08/1999');
document.write(dbo);
*/
document.write(`date : ${v1}/ ${v2 + 1}/ ${v3} <br>`);

// get date with use of zero :

function formateDate(input) {
    var d = input.getDate();
    var m = input.getMonth() + 1;
    var y = input.getFullYear();
    if (d < 10) {
        d = '0' + d;
    }
    if (m < 10) {
        m = '0' + m;

    } 
    return `${d}/${m}/${y}`;
}
var result = formateDate(date);
document.write('format date is :' + result + '<br>');


var dob = new Date(' 3/08/1999');
document.write('date of birth : '+ dob + '<br>');



