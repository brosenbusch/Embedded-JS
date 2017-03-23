//Declare tabletSize() here
function tabletSize(){
  let doc = document;
  let all = doc.querySelectorAll("section");
  let width = all.style.width;
  let height = all.style.height;

  all[0].style.width = String(width*0.75)+"px";
  all[0].style.height = String(height*0.75)+"px";
  all[1].style.width = String(width*0.75)+"px";
  all[1].style.height = String(height*0.75)+"px";

}
//Declare phoneSize() here
function phoneSize(){
  let doc = document;
  let all = doc.querySelectorAll("section");
  let width = section.width;
  let height = section.height;

  all[0].style.width = String(width*0.50)+"px";
  all[0].style.height = String(height*0.50)+"px";
  all[1].style.width = String(width*0.50)+"px";
  all[1].style.height = String(height*0.50)+"px";



}
