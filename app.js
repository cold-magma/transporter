var bg = document.getElementById("bg");
var textbg = document.getElementById("textbg");

bg.addEventListener("click", onclick);

function onclick() {
  newbg1 = "#" + (Math.random*0xFFFFF<<0).toString(16);
 newbg2 = "#" + (Math.random*0xFFFFF<<0).toString(16);
  newbgtext1 = "#" + (Math.random*0xFFFFF<<0).toString(16);
  newbgtext2 = "#" + (Math.random*0xFFFFF<<0).toString(16);
  newbgtext3 = "#" + (Math.random*0xFFFFF<<0).toString(16)
  
  if(newbg1<7 || newbg2<7||newbgtext3<7||newbgtext1<7||newbgtext2<7)
    onclick();
  
  bg.style.background = linear-gradient(-45deg, newbg1, newbg2);
  
  textbg.style.background = linear-gradient(to right,newbgtext1, newbgtext2, newbgtext3);
}