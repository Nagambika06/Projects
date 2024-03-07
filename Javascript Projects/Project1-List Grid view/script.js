let months=document.getElementsByClassName("month");
function listView(){
  for(let i=0;i<months.length;i++){
    months[i].style.width="100%";
    // months[i].style.textAlign="center";
  }
}

function gridView(){
  for(let i=0;i<months.length;i++){
    months[i].style.width="50%";
  }
}