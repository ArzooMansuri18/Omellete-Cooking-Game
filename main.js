
let eggAdded = false;
let saltAdded = false;
let whisked = false;
let panPlaced = false;
let oilAdded = false;

let startScreen = document.querySelector("#startScreen");
let levelScreen = document.querySelector("#levelScreen");
let loadingScreen = document.querySelector("#loadingScreen");
let bowlScene = document.querySelector("#bowlScene");
let panScene = document.querySelector("#panScene");
let finalScene = document.querySelector("#finalScene");

function showLevelScreen(){
    startScreen.classList.remove("active");
    levelScreen.classList.add("active");
}

function showLoadingScreen(){
    levelScreen.classList.remove("active");
    loadingScreen.classList.add("active"); 

    setTimeout(() => {
       showBowlScene();
    }, 1000);
    
}

function showBowlScene(){
    loadingScreen.classList.remove("active");
    bowlScene.classList.add("active");
}

function addEgg(){
    eggAdded = true;

    document.querySelector("#bowlImage").src = "assets/Egg-on-bowl.jpg";

    document.querySelector("#instructionText").innerText = "Now tap on salt";

    document.querySelector("#egg").classList.add("disabled");
}

function addSalt(){
    if(!eggAdded)
    return;

    saltAdded = true;

    document.querySelector("#bowlImage").src = "assets/Egg-with-salt.png";

    document.querySelector("#instructionText").innerText = "Now tap on whisk";

    document.querySelector("#salt").classList.add("disabled");
}

function mixEgg(){
    if(!saltAdded)
    return;

    whisked = true;

    document.querySelector("#bowlImage").src = "assets/Whisked-egg.jpg";

    document.querySelector("#instructionText").innerText = "Mixture ready";

    document.querySelector("#whisk").classList.add("disabled");

    document.querySelector("#nextToPan").style.display = "inline-block";
}

function showPanScene(){
    bowlScene.classList.remove("active");
    panScene.classList.add("active");
}

function putPanOnStove(){
    panPlaced = true;

    document.querySelector("#stoveImage").src = "assets/Pan-on-gas.png";

    document.querySelector("#panInstruction").innerText = "Now tap on oil";

    document.querySelector("#panImage").classList.add("disabled");
}

function addOil(){
    if(!panPlaced) 
    return;

    oilAdded = true;

    document.querySelector("#stoveImage").src = "assets/Oil-spilling.jpg";

    document.querySelector("#panInstruction").innerText = "Now tap on mixture";

    document.querySelector("#oil-img").classList.add("disabled");
}

function pourMixture(){
    if(!oilAdded)
    return;

    document.querySelector("#stoveImage").src = "assets/Egg-pan.jpg"
    document.querySelector("#panInstruction").innerText = "Wait for a moment...";
    document.querySelector("#egg-on-bowl").classList.add("disabled");

    setTimeout(() => {
        panScene.classList.remove("active");
        finalScene.classList.add("active");

        startCountdown();
    }, 1500);
}

function startCountdown(){
    let count = 3;
    let countdown = document.querySelector("#countdown");

    let timer = setInterval(() => {
        count--;
        countdown.innerText = count;

        if(count === 0){
            clearInterval(timer);

            countdown.style.display = "none";

            document.querySelector("#omelettePlate").style.display = "block";

            document.querySelector("#readyText").style.display = "block";
        }
    }, 1000);
}
