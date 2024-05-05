let userScore=0;
let computerScore=0;

let choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');

let userScorePoint=document.querySelector('#user-score');
let computerScorePoint=document.querySelector('#computer-score');

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);


  })


});

const generateComputerChoice=()=>{
  const options=["rock","paper","scissor"];
  const randIndex=Math.floor(Math.random()*3);
  return options[randIndex];

};

const showWinner=(userWin,userChoice,computerChoice)=>{
  if(userWin){
    userScore++;
    userScorePoint.innerText=userScore;
    msg.innerText=`You Win!, Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor='green';
  }else{
    computerScore++;
    computerScorePoint.innerText=computerScore;   
     msg.innerText=`You lose. ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor='red';

  }
};


const drawGame=()=>{
  msg.innerText=`The game was draw.`;

  msg.style.backgroundColor='black';

}

const playGame=(userChoice)=>{
  // console.log("User choice =",userChoice);
  const computerChoice=generateComputerChoice();
  // console.log("Computer choice =",computerChoice);

  if(userChoice===computerChoice){
      drawGame();
  }else{
    let userWin=true;
    if(userChoice==='rock'){
      userWin=computerChoice==='paper' ? false :true;
      
    }else if(userChoice==='paper'){
      userWin=computerChoice==='scissor'? false:true;
    }else{
      userWin=computerChoice==='rock'?false:true;
    }
    showWinner(userWin,userChoice,computerChoice);
  }
};

