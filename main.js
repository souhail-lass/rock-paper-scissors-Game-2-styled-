let buttons = document.querySelectorAll(".pic");
let pScore = 0, cScore = 0;
document.querySelector('.replay').addEventListener('click', ()=>{
	pScore=0;cScore=0;
	document.getElementById("pS").innerHTML = '0';
	document.getElementById("cS").innerHTML = '0';
});
buttons.forEach((button) =>
button.addEventListener("click", (e) => {
	const list = ["ROCK", "PAPER", "SCISSORS"];
	let cChoice = list[Math.floor(Math.random() * list.length)];
	if (pScore < 5 && cScore < 5 ) {
		document.querySelector(".pChoice").innerHTML = `<img style="width:80px;height:80px;" src=${document.getElementById(e.target.id).src} />`;
		document.querySelector(".cChoice").innerHTML = `<img style="width:80px;height:80px;" src=${document.getElementById(cChoice).src} />`;
	};
	startGame(e.target.id, cChoice, pScore, cScore);
}));
const startGame = (p,c, ps, cs) => {
	let result = document.querySelector(".results");
	console.log(p,c)
	if (ps < 5 && cs < 5) {
		switch (true) {
      		case c == p:
        		result.innerHTML = "IT'S A TIE ! GO NEXT !";
        		break;
      		case c == "ROCK" && p == "SCISSORS":
        		cScore++;
				result.innerHTML = "COMPUTER WON THIS ROUND !";
        		break;
      		case c == "PAPER" && p == "ROCK":
        		cScore++;
				result.innerHTML = "COMPUTER WON THIS ROUND !";
        		break;
      		case c == "SCISSORS" && p == "PAPER":
        		cScore++;
				result.innerHTML = "COMPUTER WON THIS ROUND !";
        		break;
      		default:
        		pScore++;
				result.innerHTML = "YOU WON THIS ROUND !";
    	}
		document.getElementById("pS").innerHTML = `${pScore}`;
		document.getElementById("cS").innerHTML = `${cScore}`;
	} else { pScore==5?result.innerHTML="GGS YOU WON THE GAME BRO !": result.innerHTML="YOU LOST NIGGA !" };
};