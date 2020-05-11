var bg = document.getElementById("bg")
var textbg = document.getElementById("textbg")

document.body.addEventListener("click", onclick);

function onclick() {
  newbg1 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbg2 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbgtext1 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbgtext2 = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
  newbgtext3 = "#" + (Math.random()*0xFFFFFF<<0).toString(16)
  
  if(newbg1.length<7 || newbg2.length<7||newbgtext3.length<7||newbgtext1.length<7||newbgtext2.length<7)
    onclick();
  
  bg.style.background = "linear-gradient(-45deg," + newbg1 +"," + newbg2 + ") 200% 200% no-repeat";
}