

var content = `Q. agar hume note pad me kohi line comment karake likhani hogi to kya kare?.(shortcut)
Q. jaise hum html code brawzer par run kar rahe he vaise kya hum console par kar sakate he.
Q. Agar humne tag/markup close nahi kiya to console jise vo terminate ho ayega kya.
    - tag end nahi kiya to , kya hum neasted tag use kar sakate he?
Q. what is static page?
Q. agar br end tag nahi kiya to o kitane space dega.(kya sabke liye space dega )
Q.front end sabhi language ke liye same hota he kya.
Q. some perticular sentance highlight karana hoga to kya kare (kbt)
Q. url ka name kaise change kare.
Q.Agar muze text ke pahile ka nam headline bada dena he par text box uske agehi ana chahiye.
Q. how to add multiple vedio with autoplay.
Q.how to play one time one audio <means autoplay/suffex> 
Q. what is valiadation.<java script>
Q. hum male or female me radio button ka istemal karake one tik karate he par muze thik kiya 
  he usko untik karana he to kya kare?<javascript> 
Q. C# atrributes and HTML attributes.
Q. multiple html pages run karu shakato ka.
Q.css sampalyavar maha vitarn chi site banavane.
Q. select me muze na phila district select karana he , bad me talika and then village.
Q. what is virus <it like a software > - jab hum while loop me infinite condition denge tab o cpu
   me bahut jyada jagah lega that ia like a virus. 
Q. what are the difference between attribute value selector / id selector /.class selector.
Q.  what is difference between javascript and ECMA Script.
Q. .net core and .net 8 par project banake dekhana.
Q. docker and kubernets - search it (use for  container support cicde pipeline ke liye master )
Q. learn react after join company.
Q. what is difference between Asp.net and Asp.net core?
Q. servers: kestrel,IIS, HTTP.sys
Q. services: HTTP API'S,SignalR,grpc
Q.what are extentions.
Q. in .net core we can see new feature/version of c#,ASP.NET,MVC,Entity Framework etc.
Q. how e give icon for our page title.
Q. hum inline and external javascript yek hi time pe use kar sakate he kya?
Q.how we get horizantal line in script body, or some br space.
Q.how to solve substr deprecated warning.
Q.`;
var shortText = content.substring(0, 100);
document.getElementById('paragraph').innerHTML = shortText + '<a href="#">Read more.....</a>';

var ww = 'ganesh dotNet developer';
var result = ww.replace("dotNet", "java");
/*alter(result);*/
document.write(result + '<br>');

var rr = 'ganesh is a good person . GANESH stay in pune but GANESH is from solapur , ok ganesh bye';
var solution = rr.replace("ganesh", "suraj");
document.write(solution +'<br>');
var solution = rr.replace(/ganesh/g, "suraj");
document.write(solution + '<br>');
var solution = rr.replace(/ganesh/gi, "suraj");
document.write(solution +'<br>');