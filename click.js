//declare samecolor() here
function samecolor(){
  let doc = document;
  let divs = doc.querySelectorAll("#samecolor div");

  divs[0].style.backgroundColor = "#883344";
  divs[1].style.backgroundColor = "#883344";
  divs[2].style.backgroundColor = "#883344";
  divs[3].style.backgroundColor = "#883344";

  divs[0].style.opacity = 0.2;
  divs[1].style.opacity = 0.4;
  divs[2].style.opacity = 0.8;
  divs[3].style.opacity = 1;
}
//declare diffcolor() here
function diffcolor(){
  let doc = document;
  let divs2 = doc.querySelectorAll("#diffcolor div");

  divs2[0].style.backgroundColor = "#006400";
  divs2[1].style.backgroundColor = "#B8860B";
  divs2[2].style.backgroundColor = "#006400";
  divs2[3].style.backgroundColor = "#B8860B";
  divs2[4].style.backgroundColor = "#006400";
  divs2[5].style.backgroundColor = "#B8860B";
  divs2[6].style.backgroundColor = "#006400";
  divs2[7].style.backgroundColor = "#B8860B";
}
