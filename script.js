let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Generate Computer Options
const generateCompOption = () => {
    
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

//Draw function
const draw = () => {
    msg.innerText = "Game Draw. Play again";
    msg.style.backgroundColor = "#ff5400";
};

//Winner Check function
const checkWinner = (userWin, userOption, compOption) => {
    
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userOption} beats ${compOption}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compOption} beats your ${userOption}`;
        msg.style.backgroundColor = "red";
    }
};

//Conditions
const playGame = (userOption) => {

    const compOption = generateCompOption(); 

    if(userOption === compOption){
        //Draw
        draw();
    }
    else{
        let userWin = true;

        if(userOption === "stone"){
            //paper, scissors
            
            if(compOption === "paper"){
                userWin=false;
            }
            else{
                userWin=true;
            }

        }
        else if(userOption === "paper"){
            //scissors, stone
            
            if(compOption === "scissors"){
                userWin=false;
            }
            else{
                userWin=true;
            }

        }
        else{
            //stone, paper
    
            if(compOption === "stone"){
                userWin=false;
            }
            else{
                userWin=true;
            }

        }
        checkWinner(userWin, userOption, compOption);

    }

};

//Get options from User
options.forEach((option) => {

    option.addEventListener("click", () => {

     const userOption = option.getAttribute("id");
     playGame(userOption);

    });
});

checkWinner(userWin, userOption, compOption);
