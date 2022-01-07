const header = document.querySelector('.start.container');

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#2F4F4F";
 } else {
     header.style.backgroundColor = "transparent";
 }
});