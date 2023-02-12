let typed = new Typed(".auto-input", {
    strings: ["WELCOME....!!!"], 
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let icon = document.getElementById("moon");
let sun = '<span><i class="bi bi-brightness-high"></i></span>';
let bright = '<span><i class="bi bi-moon"></i></span>';
let turn = document.getElementById("switch");
let clicker = document.querySelector(".click");
let container = document.querySelector(".container");

turn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    // if(document.body.classList.contains("dark-theme")){
    //     icon.innerHTML = sun
    //     turn.style.color = 'white'
    // } else{
    //     // icon.style.color = 'black'
    //     icon.innerHTML = bright
    // }
}    
clicker.addEventListener("click", function(){
    // container.classList.add('active')
    

})