const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelector(".sidebar");

toggleBtn.addEventListener("click" , function(){
    links.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click" , function(){
    links.classList.remove("show-sidebar")
})

