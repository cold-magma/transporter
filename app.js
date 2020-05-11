var bg = document.getElementById("bg");
var inv = document.getElementById("inv");
var textbg = document.getElementById("textbg");

inv.style.opacity="0";
document.body.addEventListener("click", onclick);

function onclick() {
  newbg1 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbg2 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbgtext1 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbgtext2 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbgtext3 = "#" + (Math.random()*0xFFFFFF<<0).toString(16)
  
  if(newbg1.length<7 || newbg2.length<7||newbgtext3.length<7||newbgtext1.length<7||newbgtext2.length<7)
    onclick();
   if(newbg1 == newbg2)
    onclick();
 
  inv.style.opacity="1";
  setTimeout(function() {bg.style.background = "linear-gradient(-45deg," + newbg1 +"," + newbg2 + ")";
  inv.style.opacity="0";
  bg.style.backgroundSize = "200% 200%";
  bg.style.backgroundRepeat = "no-repeat";}, 2000);
  
}