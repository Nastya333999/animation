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

let buttonContainer = document.querySelector("#button-container");
let btnPlay = document.querySelector("#btn-play"); // кнопка проигрывания


let txtSize = document.querySelector("#size");
let astronautSize = document.querySelector("#astronaut-size"); 

let link = document.getElementsByTagName('a')
for ( let i=0; i<link.length; i++){
    link[i].addEventListener('click', play);
}

function play(){
    if ( link[0].contains('active-link') ){
        txtSize.style.transition ="7s"; 
        astronautSize.style.animation = "moving 2s ease 0.00001s 1 normal forwards";
        buttonContainer.style.display = "none";
        myFunction()
    }
    if ( link[1].contains('active-link') ){
        txtSize.style.transition = "5s"; 
        astronautSize.style.animation = "moving 1.5s ease 0.00001s 1 normal forwards";
        buttonContainer.style.display = "none";
        myFunction()
    }
    if ( link[2].contains('active-link') ){
        txtSize.style.transition = "2s"; 
        astronautSize.style.animation = "moving 1s ease 0.00001s 1 normal forwards";
        buttonContainer.style.display = "none";
        myFunction()
    }
    if ( link[3].contains('active-link') ){
        txtSize.style.transition = "0.5s"; 
        astronautSize.style.animation = "moving 0.05s ease 0.00001s 1 normal forwards";
        buttonContainer.style.display = "none";
        myFunction()
    }
    if ( link[4].contains('active-link') ){
        txtSize.style.transition = "0.05s"; 
        astronautSize.style.animation = "moving 0.005s ease 0.00001s 1 normal forwards";
        buttonContainer.style.display = "none";
        myFunction()
    }
}













// let speedOne = document.querySelector("#link-one");
// let speedTwo = document.querySelector("#link-two");
// let speedFre = document.querySelector("#link-fre");
// let speedFour = document.querySelector("#link-four");
// let speedfive = document.querySelector("#link-five");
