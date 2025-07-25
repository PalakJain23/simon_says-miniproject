# simon_says-miniproject
Simon says mini project on Java Script



// Java script code

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
     console.log("curr level: ",level);


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




//html code 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Symon says game</title>
    <link rel ="stylesheet" href="mini-project.css" />
</head>
<body>
    <h1>Simon says Game</h1>
    <h2>Press any key to start</h2>
    <div class="btn-container">
        <div class="line-one">
            <div class="btn red" type="button" id="red">1</div>
            <div class="btn yellow" type="button" id="yellow">2</div>
        </div>

        <div class="line-two">
            <div class="btn green" type="button" id="green">3</div>
            <div class="btn purple" type="button" id="purple">4</div>
        </div>
        
    </div>
    <script src="mini-project.js"></script>
</body>
</html>


//css code-
body{
    text-align: center;
}
.btn{
    height: 200px;
    width: 200px;
    border-radius: 20%;
    border: 10px solid black;
    margin: 2.5rem;
}
.btn-container{
    display: flex;
    justify-content: center;
}

.yellow{
    background-color: #f99b45;
}
.red{
    background-color: palevioletred;
}
.green{
    background-color: grey;
}
.purple{
    background-color: #819ff9;
}

.flash {
    background-color: white;
}

.userflash {
    background-color: aqua;
}



