//event bubbling 

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// })

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of list){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

///// ******TO DO APP*********////
// let  btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let iteam = document.createElement("li");
//     iteam.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");

//     iteam.appendChild(delBtn);
//     ul.appendChild(iteam);
//     inp.value = "";
// });

// //event bubbling deleting

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listIteam = event.target.parentElement;
//         listIteam.remove();
//         console.log(listIteam);
//         console.log("delete");
//     } else {
//         console.log("don't delete")
//     }
    
// })

// // let delBtns = document.querySelector(".delete");
// // for(delBtn of delBtns){
// //     delBtns.addEventListener("click",function(){
// //         let par = this.parentElement;
// //         console.log(par);
// //         par.remove();
// //     });
// // }



//setting up project

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Game start on keypress
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

// Function to flash the button
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// Level Up function
function levelUp() {

    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    // Random button select
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);

    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level: ",level);

    // let idx = level - 1;

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout (levelUp,1000) ;
        }
        console.log("same value");
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level} <b> press any key to restart`
        document.querySelector("body").style.backgroundColor = "red";
        
        setTimeout( function (){
            
            document.querySelector("body").style.backgroundColorcolor = "white";
        },250)
        reset();
    }
}

// Handle button press
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id"); 
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1)
}

// Use for...of loop
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}