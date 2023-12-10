let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
//this is computer choice here..
const genCompChoice=()=>{
  const option=["rock","paper","scissors"];
  const randomNumber=Math.floor(Math.random()*3);
  return option[randomNumber];
};
//drow game
const drawGame=()=>{
  msg.innerHTML="game was draw Play Again.";

};
const showWinner=(userWin,userchoice,computerchoice)=>{
  if(userWin){
    userscore++;
    userscorePara.innerHTML=userscore;
    msg.innerText=`You win! ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor="green"
  }else{
    compscore++;
    compscorePara.innerHTML=compscore;
    msg.innerText=`You lose! ${computerchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
  }
}
//this is user choice here print here
const playGame=(userchoice)=>{
  console.log("user choice = ",userchoice);
  const computerchoice=genCompChoice();
  console.log("computer choice = ",computerchoice);
  //this is the logic of the game
  if(userchoice===computerchoice){
    drawGame();
    
  }else{
    let userWin=true;
    if(userchoice==="rock"){
      computerchoice==="scissors" ? false :true
        
      }else if(userchoice==="paper"){
       userWin= computerchoice==="rock" ? false :true
      }else{
        userWin= computerchoice==="paper" ? false :true
      }
      showWinner(userWin,userchoice,computerchoice);

  }
};




choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    let userchoice=choice.getAttribute("id");//who choice you click and access
   console.log("hello you click this",userchoice);
   playGame(userchoice);
});
});