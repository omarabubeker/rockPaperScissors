let computerChoice = document.getElementById("computerchoice")
let userChoice = document.getElementById("userchoice")
let result = document.getElementById("result")
let buttons = document.querySelectorAll(".btn")



//rpsArr = ["rock", "paper", "scissor"]

for(let i = 0; i <= buttons.length; i++) {

    buttons[i].addEventListener("click", checkWinner );
    console.log(i)
}

function checkWinner(event) {
    const choice = event.target
    console.log(choice.innerHTML);
    userChoice.innerHTML = choice.innerHTML

    let randomNum = buttons[Math.floor(Math.random() * buttons.length)]
    console.log(randomNum)
    computerChoice.innerHTML = randomNum.innerHTML

    if (userChoice.innerHTML == computerChoice.innerHTML) {
        result.textContent = "Its a draw!"
        console.log(result)
    }

    else if (userChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Scissor")
    {
        result.textContent = "You win!"
    }

    else if (userChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Paper")
    {
        result.textContent = "You lose!"
    }

    else if (userChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Scissor")
    {
        result.textContent = "You lose!"
    }

    else if (userChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Rock")
    {
        result.textContent = "You win!"
    }

    else if (userChoice.innerHTML == "Scissor" && computerChoice.innerHTML == "Paper")
    {
        result.textContent = "You win!"
    }

    else if (userChoice.innerHTML == "Scissor" && computerChoice.innerHTML == "Rock")
    {
        result.textContent = "You lose!"
    }


    
   /*  if (userChoice.innerHTML == buttons[0]) {
        result.textContent = "Its a draw!"
        console.log(result)
    } */

}
