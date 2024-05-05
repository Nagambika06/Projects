let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll('.choice');
let userResultMsg=document.querySelector('.user-result');
let computerResultMsg=document.querySelector('.computer-result');

let finalResult=document.querySelector('.final-result');


choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    let userChoice=choice.getAttribute('id');
    // console.log(`you clicked ${userChoice}`);
    userResultMsg.innerText=`you clicked ${userChoice}`;
    playGame(userChoice);

  })

});

const drawGame=()=>{
  // console.log("The game was draw");
  finalResult.innerText='The game was draw';
  finalResult.style.backgroundColor='black';

}

const playGame=(userChoice)=>{
  let computerChoice=generateComputerChoice();
  // console.log(computerChoice);
  computerResultMsg.innerText=`Computer clicked ${computerChoice}`;


  //logic

  if(userChoice===computerChoice){
    drawGame();
  }else{

    userWin=true;
    if(userChoice==='bat'){
    userWin=computerChoice==='ball'?true:false;
    }else if(userChoice==='ball'){
      userWin=computerChoice==='bat'?false:true;
    }else if(userChoice==='stump'){
      userWin=computerChoice==='bat'?true:false;
    }

    showWinner(userWin);
  }




};

const generateComputerChoice=()=>{
  let arr=['ball','bat','stump'];
  let arrIndex=Math.floor(Math.random()*3);
  // console.log(arrIndex);
  return arr[arrIndex];


};

const showWinner=(userWin)=>{

  if(userWin){
    finalResult.innerText=`Congratulations!,You won.`;
    finalResult.style.backgroundColor='green';
  }else{
    finalResult.innerText=`Computer won. You lost, Better luck next time`;
    finalResult.style.backgroundColor='red';

  }


};