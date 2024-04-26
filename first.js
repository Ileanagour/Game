let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () =>{
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundColor = "gray";
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win";
        msg.style.backgroundColor = "Green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "Red";
    }
    };

const playgame = (userchoice) => {
//Generate computer choice
const compchoice = gencompchoice(); 

if(userchoice === compchoice) {
    drawgame();
} else {
    let userwin = true;
    if(userchoice === "rock"){
    userwin = compchoice === "paper" ? false : true;
} else if(userchoice === "paper"){
    userwin = compchoice === "scissors" ? false : true;
} else {
    userwin = compchoice === "Rock" ? false : true;
}
showwinner(userwin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});