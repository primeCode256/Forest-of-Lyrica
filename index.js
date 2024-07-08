//The game variables
var num1 = Math.floor(Math.random() *100 + 1);
var num2 = Math.floor(Math.random() * 100 + 1)
console.log("Num1: " + num1);
console.log("Num2: " + num2);
var score = "";
var player = "";
var timer = "";
var guessesMade = 0;
var guessesRemaining = 10;
var PlayersInput = 0
var total = num1*num2;
var timeLeft = 30
var countdownTimer;

//the input and output field

var input = document.querySelector("#input");
var output = document.querySelector("#output");
var played = document.querySelector("#played");


//The button 
var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
button.style.cursor = "pointer";

//Listen for the enter key
window.addEventListener("keydown", keydownHandler, false);
function keydownHandler(event)
{
    if(event.keycode === 13)
    {
        validateInput();
    }
    
}

function clickHandler()
{
    validateInput();
}



function validateInput()
{
  PlayersInput = parseInt(input.value);
  if(isNaN(PlayersInput))
  {
      output.innerHTML = "Please enter a number";
  }
  else 
  {
      playGame();
  }
}


output.innerHTML = "What is " + num1 + " Multiplied by " + num2;




function messageUpdate()
{
   
    player = guessesMade + "/" + guessesRemaining 
    played.innerHTML = "plays: " + player

}

function startCountdown()
{
    document.getElementById("timer").textContent = timeLeft;
    countdownTimer = setInterval(function (){
        timeLeft--;
        if(timeLeft >= 0){
            document.getElementById("timer").textContent =  "Timer:" + timeLeft + "s";
        }else{

            clearInterval(countdownTimer);
            document.getElementById("output").textContent = "time's up, the correct answer is " + total;
            
                
        }
    }, 1000);
}



function playGame()
{
   

    if(PlayersInput === num1*num2 && timeLeft!=0)
    {
        output.innerHTML = "Great job! You are a genius!!";
        guessesMade + 1;
        messageUpdate();
        
            
    
    }
    else if(PlayersInput!==total && timeLeft!=0)
    {
    
            output.innerHTML = "What is " + num1 + " Multiplied by " + num2+ "<br>"+ "You got it wrong try again";
        
        
        messageUpdate();
       

    }
}


    
   

