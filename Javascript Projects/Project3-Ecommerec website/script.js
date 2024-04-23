let list=document.querySelector('#list');
let menu=document.querySelector('#menu');

menu.addEventListener('click',()=>{
  if(list.style.display==='none'){
    list.style.display='block';
  }else{
    list.style.display='none';
  }

});