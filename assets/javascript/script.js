const $ = (selector) => document.querySelector(selector);
const load = () => {
    // Baseball button.
    document.getElementById('baseball').addEventListener("click", () => {
        // console.log("im the baseball btn: ");
        createBaseBall();
    });

    // Basketball button.
    document.getElementById('basketball').addEventListener("click", () => {
        // console.log("im the basketball btn: ");
        createBasketBall();
    });

    // Football button.
    document.getElementById('football').addEventListener("click", () => {
        // console.log("im the football btn: ");
    });
    // Soccer button.
    document.getElementById('soccer').addEventListener("click", () => {
        // console.log("im the soccer btn: ");
    });
    // Volleyball button.
    document.getElementById('volleyball').addEventListener("click", () => {
        // console.log("im the volleyball btn: ");
    });
    // Wrestling button.
    document.getElementById('wrestling').addEventListener("click", () => {
        // console.log("im the wrestling btn: ");
    });
};
// Game Counters.
let count = 0;
let gameCountone = 1;
let gameCountTwo = 2;
let gameCountThree = 3;
let gameCountSix = 6;
// ###### Creating Elements ######
// !!! BUTTON's !!!
// One's Button.
const onePointBtn = document.createElement('input');
// console.log("im the ones btn: ",onePointBtn);
onePointBtn.setAttribute("id", "ones_btn");
onePointBtn.setAttribute("class", "footerScore_btns disabled");
onePointBtn.setAttribute("type", "button");
onePointBtn.setAttribute("value", "One Point");
onePointBtn.style.backgroundColor = "greenyellow";
// Two's Button.
const twoPointBtn = document.createElement('input');
// console.log("im the twos btn: ",twoPointBtn);
twoPointBtn.setAttribute("id", "twos_btn");
twoPointBtn.setAttribute("class", "footerScore_btns disabled");
twoPointBtn.setAttribute("type", "button");
twoPointBtn.setAttribute("value", "Two Points");
twoPointBtn.style.backgroundColor = "greenyellow";
// Three's Button.
const threePointBtn = document.createElement('input');
// console.log("im the threes btn: ",threePointBtn);
threePointBtn.setAttribute("id", "threes_btn");
threePointBtn.setAttribute("class", "footerScore_btns disabled"); threePointBtn.setAttribute("type", "button");
threePointBtn.setAttribute("value", "Three Points");
threePointBtn.style.backgroundColor = "greenyellow";
// Six's Button.
const sixPointBtn = document.createElement('input');
// console.log("im the sixs btn: ",sixPointBtn);
sixPointBtn.setAttribute("id", "sixs_btn");
sixPointBtn.setAttribute("class", "footerScore_btns disabled");
sixPointBtn.setAttribute("type", "button");
sixPointBtn.setAttribute("value", "Six Points");
sixPointBtn.style.backgroundColor = "greenyellow";
// Home Team Button.
const homeTeamBtn = document.createElement('input');
// console.log("im the home team btn: ", homeTeamBtn);
homeTeamBtn.setAttribute("id", "homeTeam_btn");
homeTeamBtn.setAttribute("class", "footerScore_btns enabled");
homeTeamBtn.setAttribute("type", "button");
homeTeamBtn.setAttribute("value", "Home Team");
homeTeamBtn.style.marginRight = "150px";
// Away Team Button.
const awayTeamBtn = document.createElement('input');
// console.log("im the away team btn: ", awayTeamBtn);
awayTeamBtn.setAttribute("id", "awayTeam_btn");
awayTeamBtn.setAttribute("class", "footerScore_btns enabled");
awayTeamBtn.setAttribute("type", "button");
awayTeamBtn.setAttribute("value", "Away Team");
// Decrease Button.
const decreaseBtn = document.createElement('input');
console.log("im the away team btn: ", decreaseBtn);
decreaseBtn.setAttribute("id", "decrease_btn");
decreaseBtn.setAttribute("type", "button");
decreaseBtn.setAttribute("value", "Decrease Score");
decreaseBtn.style.backgroundColor = "crimson";
decreaseBtn.style.color = "ghostwhite";
decreaseBtn.style.fontSize = "45px";
// !!! DIV's !!!
// Decrease Div.
let teamsDiv = document.createElement('div');
let scoreDiv = document.createElement('div');
let decreaseDiv = document.createElement('div');
// HTML Roots.
let homeScoreRoot = document.getElementById('home_scoreRoot');
let awayScoreRoot = document.getElementById('away_scoreRoot');
let scoreBtnRoot = document.getElementById('score_btnRoot');
let awayHomeRoot = document.getElementById('awayHome_root');
let dercreaseRoot = document.getElementById('decrease_root');

// !!!!!! BASEBALL !!!!!!
const createBaseBall = () => {
    console.log("im the baseball function: ");
    let homeScore = gameCountone;
    let awayScore = gameCountone;
    // Assigning "elements" to the "div".
    teamsDiv.appendChild(homeTeamBtn);
    teamsDiv.appendChild(awayTeamBtn);
    scoreDiv.appendChild(onePointBtn);    
    // Attaching the "elements" to the "root"s.
    awayHomeRoot.appendChild(teamsDiv);
    scoreBtnRoot.appendChild(scoreDiv);
    
    homeTeamBtn.addEventListener("click", () => {
        console.log("im the home team button in the baseball")
        homeTeamBtn.classList.remove("enabled");
        homeTeamBtn.classList.add("disabled");
        onePointBtn.classList.remove("disabled");
        onePointBtn.classList.add("enabled", "home");
    });

    awayTeamBtn.addEventListener("click", () => {
        console.log("im the away team button in the baseball")
        awayTeamBtn.classList.remove("enabled");
        awayTeamBtn.classList.add("disabled");
        onePointBtn.classList.remove("disabled");
        onePointBtn.classList.add("enabled", "away");
    });

    onePointBtn.addEventListener("click", () => {
        if (onePointBtn.classList.contains("home")) {
            homeScoreRoot.innerHTML = homeScore++
            onePointBtn.classList.remove("enabled", "home");
        }
        else if (onePointBtn.classList.contains("away")) {
            awayScoreRoot.innerHTML = awayScore++
            onePointBtn.classList.remove("enabled", "away");
        }
        onePointBtn.classList.add("disabled");
    });

    homeScoreRoot.innerHTML = count;
    awayScoreRoot.innerHTML = count;
}
// !!!!!! BASKETBALL !!!!!! 
const createBasketBall=()=>{
    console.log("im the baseball function: ");
    // Assigning "elements" to the "div".
    teamsDiv.appendChild(homeTeamBtn);
    teamsDiv.appendChild(awayTeamBtn);
    scoreDiv.appendChild(onePointBtn);
    scoreDiv.appendChild(twoPointBtn);
    scoreDiv.appendChild(threePointBtn);
    decreaseDiv.appendChild(decreaseBtn);
    // Attaching the "elements" to the "root"s.
    awayHomeRoot.appendChild(teamsDiv);
    scoreBtnRoot.appendChild(scoreDiv);
    dercreaseRoot.appendChild(decreaseDiv);

    homeScoreRoot.innerHTML = count;
    awayScoreRoot.innerHTML = count
}

window.onload = load();