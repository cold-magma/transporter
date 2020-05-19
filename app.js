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
  
  if(newbg1.length<7 || newbg2.length<7||newbgtext1.length<7||newbgtext2.length<7)
    onclick();
  if(newbg1 == newbg2 || newbgtext2==newbgtext1 || newbg1 == newbgtext1 || newbg1 == newbgtext2 || newbg2 == newbgtext1 || newbg2 == newbgtext2)
    onclick();
  if (similar(getRGB(newbg1),getRGB(newbg2)) ||
  similar(getRGB(newbgtext1),getRGB(newbgtext2))||
  similar(getRGB(newbgtext2),getRGB(newbg2))||
  similar(getRGB(newbgtext1),getRGB(newbg1))){
    onclick();
  }
 
  inv.style.opacity="1";
  setTimeout(function() {
    bg.style.background = "linear-gradient(-45deg," + newbg1 +"," + newbg2 + ")";
    inv.style.opacity="0";
    bg.style.backgroundSize = "200% 200%";
    bg.style.backgroundRepeat = "no-repeat";
    textbg.style.background = "linear-gradient(-45deg," + newbgtext1 +"," + newbgtext2 + "," + newbgtext1 + ")";
    textbg.style.backgroundSize = "200% 200%";
    textbg.style.backgroundRepeat = "no-repeat";
    textbg.style.webkitBackgroundClip = "text";
    textbg.style.webkitTextFillColor= "transparent";
  }, 500);
}
function getRGB(color) {
  color = parseInt(color.substring(1),16);
  r=color>>16;
  g=(color - (r<<16))>>8;
  b = color - (r<<16) -(g<<8);
  return [r,g,b];
}
function similar([r1,g1,b1],[r2,g2,b2]){
  return Math.abs(r1-r2)+Math.abs(g1-g2)+Math.abs(b1-b2)<50;
}