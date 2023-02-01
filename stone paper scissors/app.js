let gameArray = ["stone", "paper", "scissor"]

let score = 0
let scoreText = document.querySelector(".score")
let whoWin = document.querySelector(".who-win")



function butt(player) {
    let ans = ""
    let computer = gameArray[(Math.floor(Math.random() * 3))];
    console.log("computer:" + computer)
    console.log("player:" + player)
    if (computer == player) {
        ans = "TIE"
        console.log("TIE")
    } else if ((player == "stone" && computer == "scissor")) {
        ans = "YOU WIN"
        console.log("player wins");
        score += 1
    } else if (player == "scissor" && computer == "paper") {
        ans = "YOU WIN"
        console.log("player wins");
        score += 1
    } else if (player == "paper" && computer == "stone") {
        ans = "YOU WIN"
        console.log("player wins");
        score += 1
    } else {
        ans = "YOU LOST"
        console.log("YOU LOST")
    }
    scoreText.innerHTML = score
    gameOver(player, computer, ans)
}

function gameOver(x, y, z) {

    
    document.querySelector(".main").innerHTML = `<div class="game-over">
<div>
    <div style="margin-bottom:20px; font-size:10px">YOU PICKED</div>
    <button class="style style2 ${x}" style="cursor:default;"><img src="${x}.png" alt=""></button>
</div>
<div>
    <div class="who-win">${z}</div>
    <div class="who-win" style="font-size: 25px;">AGAINST PC</div>
    <button class="try-again-2" onclick="tryAgain2()">PLAY AGAIN</button>
</div>
<div>
    <div style="margin-bottom:20px; font-size:10px">PC PICKED</div>

    <button class="style style2 ${y}" style="cursor:default;"><img src="${y}.png" alt=""></button>
</div>
</div>
`
    let num = 0
    giveBorder = document.querySelectorAll(".style2")
    giveBorder[num].classList.remove("win-border")
    if (z == "YOU WIN") {
        num = 0;
        giveBorder[1].style.boxShadow = "none"
    } else if (z == "YOU LOST") {
        num = 1
        giveBorder[0].style.boxShadow = "none"

    } else if (z == "TIE") {
        giveBorder[0].style.boxShadow = "none"
        giveBorder[1].style.boxShadow = "none"

    }
    giveBorder[num].classList.add("win-border")


}


function tryAgain1() {
    
    scoreText.innerHTML = 0;
    score = 0;
}

function tryAgain2() {
    document.querySelector(".game-over").innerHTML = ""
    document.querySelector(".main").innerHTML = ` <div>
    <button class="scissor style" onclick="butt('scissor')"><img src="scissor.png" alt=""></button>
    <button class="stone style" onclick="butt('stone')"><img src="stone.png" alt=""></button></div>
<img src="line.png" alt="" class="line img1">
<img src="line.png" alt="" class="line img2">
<img src="line.png" alt="" class="line img3">
<div>
    <button class="paper style paper-margin" onclick="butt('paper')"><img src="paper.png" alt=""></button>
</div>


<div class="try-again-1" onclick="tryAgain1()">Try Again</div>
    `
}

function rules() {
    document.querySelector(".rules-popup").classList.toggle("rules-show")
}

function cross() {
    document.querySelector(".rules-popup").classList.toggle("rules-show")
}