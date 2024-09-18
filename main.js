function randint(min, max) {
    min = Math.ceil(min);  // Rounds up to the nearest whole number
    max = Math.floor(max); // Rounds down to the nearest whole number
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  }

let rockp= document.querySelector(".rockp")
let paperp = document.querySelector(".paperp")
let scissorp = document.querySelector(".scissorp")

let rockcomp = document.querySelector(".rockc")
let papercomp = document.querySelector(".paperc")
let scissorcomp = document.querySelector(".scissorc")

let scoretext = document.querySelector(".scoretext")
let playerscorevalue = document.querySelector(".player-score-value")
let computerscorevalue = document.querySelector(".computer-score-value")

function computer(){

value = randint(1,3);

if(value == 1){
    comp = "rock";
    rockcomp.style.border = "white 5px solid" 
    papercomp.style.border = "3px solid black" 
    scissorcomp.style.border = "3px solid black" 
}
if(value == 2){
    comp = "paper"
    papercomp.style.border = "white 5px solid" 
    scissorcomp.style.border = "3px solid black" 
    rockcomp.style.border = "3px solid black" 
}
if(value == 3){
    comp = "scissor"
    scissorcomp.style.border = "white 5px solid" 
    papercomp.style.border = "3px solid black" 
    rockcomp.style.border = "3px solid black" 
}

}




function check(){
    rockp.addEventListener("click",rock)
    paperp.addEventListener("click",paper)
    scissorp.addEventListener("click",scissor)

}

function game(){

    if(player == "rock"){
    computer()

        if(comp == "rock"){
            scoretext.innerText = " Its a Draw"
            scoretext.style.backgroundColor = "rgba(255, 0, 234, 0.5)"
            player = null

        }

        else if(comp == "paper"){
            scoretext.innerText = "Paper wraps Rock"
            computerscore++
            computerscorevalue.innerText = String(computerscore)
            scoretext.style.backgroundColor = "rgba(255 ,0 ,0 ,0.5)"
            player = null

        }

        else if(comp == "scissor"){
            scoretext.innerText = "Rock breaks Scissor"
            playerscore++
            playerscorevalue.innerText = String(playerscore)
            scoretext.style.backgroundColor = "rgba(0, 255, 0, 0.5)"

            player = null

        }

        
    }
    else if(player == "paper"){
    computer()

        if(comp == "rock"){
            scoretext.innerText = "Paper wraps rock"
            playerscore++
            playerscorevalue.innerText = String(playerscore)
            scoretext.style.backgroundColor = "rgba(0, 255, 0, 0.5)"

            player = null
        }

    
        else if(comp == "paper"){
            scoretext.innerText = " Its a Draw"

            scoretext.style.backgroundColor = "rgba(255, 0, 234, 0.5)"

            player = null
        }

        else if(comp == "scissor"){
            scoretext.innerText = "Scissor cuts Paper"
            computerscore++
            computerscorevalue.innerText = String(computerscore)
            scoretext.style.backgroundColor = "rgba(255, 0, 0, 0.5)"

            player = null

        }
        
    }

    else if(player == "scissor"){
    computer()

        if(comp == "rock"){
            scoretext.innerText = "Rock breaks Scissor"
            computerscore++
            computerscorevalue.innerText = String(computerscore)
            scoretext.style.backgroundColor = "rgba(255,0,0,0.5)"

            player = null
        }

        else if(comp == "paper"){
            scoretext.innerText = "Scissor cuts Paper"
            playerscore++
            playerscorevalue.innerText = String(playerscore)
            scoretext.style.backgroundColor = "rgba(0,255,0,0.5)"

            player = null
        }

        else if(comp == "scissor"){
            scoretext.innerText = " Its a Draw"
            scoretext.style.backgroundColor = "rgba(255, 0, 234, 0.5)"

            player = null

        }
    }
    
}

player = null
playerscore = 0
computerscore = 0



rockp.addEventListener("click", () => {player = "rock";game()})
paperp.addEventListener("click", () => {player = "paper";game()})
scissorp.addEventListener("click", () => {player = "scissor";game()})


game()

