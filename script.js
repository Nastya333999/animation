let speedBtn = document.getElementsByClassName("speed-animation"); 
for (let i = 0; i < speedBtn.length; i++) {
    speedBtn[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

    });
}

let activeLink = document.getElementsByClassName("speed-btn");
for (let i = 0; i < activeLink.length; i++) {
    activeLink[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active-link");
        current[0].className = current[0].className.replace(" active-link", "");
        this.className += " active-link";

    });
}

function myFunction(){
    let btnStart = document.querySelector("#start"); 
    let btnPosition = document.querySelector(".start");
    let astronaut = document.querySelector(".astronaut")
    
    if (btnStart.innerText == "START"){
        btnStart.innerText = "TMG";
        btnStart.className = "white"; 
        btnPosition.setAttribute("style","background-color:transparent;  ");  
        

        astronaut.classList.add("astronaut-size");
        if ( btnStart.className == "white"){
            btnStart.classList.add ("size"); 
        }
    } else {
        btnStart.innerText === "START"
    }
}

let container = document.querySelector(".button-container"); 
container.onclick = function close (){
    container.style.display = "none";  
    setTimeout(myFunction, 800);
}

let btnPlay = document.querySelector(".btn-play");

let txtSize = document.querySelector(".size");
let astronautSize = document.querySelector(".astronaut-size");

function play (){
    if( two.classList.contains("active")|| speedBtn.id("two")){
        txtSize.style.webkitAnimationDuration  = "8s"; 
        astronautSize.style.animationDuration = " 8s";
    } else 
    if (free.classList.contains("active")|| speedBtn.id("free")){
        txtSize.style.transition = "6s";
        astronautSize.style.animationDuration = "6s";
    } else
    if (four.classList.contains("active")|| speedBtn.id("four")){
        txtSize.style.transition = "5s";
        astronautSize.style.animationDuration = "5s";
    } else
    if (five.classList.contains("active")){
        txtSize.style.transition = "1s";
        astronautSize.style.animation = "1s";
    } 
};

let two = document.querySelector("#two")
let free = document.querySelector("#free")
let four = document.querySelector("#four")
let five = document.querySelector("#five")