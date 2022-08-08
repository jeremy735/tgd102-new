
//       漢堡點擊事件

const hamBar = document.querySelector("a.hamBar");
hamBar.addEventListener("click", function(e){
    e.preventDefault();
const nav = document.querySelector("section.nav");
   
    nav.classList.toggle("nav_show")
});
