var attempt=0;
var win=false;
var comOutcome="";
let choiceTracker=[];
let winLoss=[];

function random() {
	
	event.preventDefault();
	
	attempt=attempt+1;
	
	if(attempt<6 && win==false){
		
		var lowerCase=document.getElementById("gesture").value;
		choiceTracker.push(" "+lowerCase);
		var userGesture=lowerCase.toLowerCase();
		
		document.getElementById("comChoose").innerHTML="Here's what the computer chose!";
		
		var comGestureRoll=Math.random();
		
		while(comGestureRoll<=0.33 && comOutcome=="Rock") {
			var comGestureRoll=Math.random();
		}
		
		while(comGestureRoll>=0.34 && comGestureRoll<=0.66 && comOutcome=="Paper") {
			var comGestureRoll=Math.random();
		}
		
		while(comGestureRoll>=67 && comOutcome=="Scissors") {
			var comGestureRoll=Math.random();
		}
		
		
		if (comGestureRoll<=0.33) {
			comOutcome="Rock";
			
			if (userGesture=="rock"){
				var outcome="It's a draw!";
				winLoss.push(" Draw");
			}
			else if (userGesture=="paper"){
				var outcome="You win!";
				win=true;
				winLoss.push(" Win");
			}
			else if (userGesture=="scissors"){
				var outcome="You lose!";
				winLoss.push(" Loss");
			}
			else {
				var outcome="Oops, wrong input! Try again.";
				attempt=attempt-1;
			}
			
		}
		else if(comGestureRoll>=0.34 && comGestureRoll<=0.66) {
			comOutcome="Paper";
			
			if (userGesture=="rock"){
				var outcome="You lose!";
				winLoss.push(" Loss");
			}
			else if (userGesture=="paper"){
				var outcome="It's a draw!";
				winLoss.push(" Draw");
			}
			else if (userGesture=="scissors"){
				var outcome="You win!";
				win=true;
				winLoss.push(" Win");
			}
			else {
				var outcome="Oops, wrong input! Try again.";
				attempt=attempt-1;
			}
		}
		else {
			comOutcome="Scissors";
			
			if (userGesture=="rock"){
				var outcome="You win!";
				win=true;
				winLoss.push(" Win");
			}
			else if (userGesture=="paper"){
				var outcome="You lose!";
				winLoss.push(" Loss");
			}
			else if (userGesture=="scissors"){
				var outcome="It's a draw!";
				winLoss.push(" Draw");
			}
			else {
				var outcome="Oops, wrong input! Try again.";
				attempt=attempt-1;
			}
		}
		
		document.getElementById("computer").innerHTML=comOutcome;
		
		if (win==false){			
			document.getElementById("outcome").innerHTML=outcome;
		}
		else {
			document.getElementById("outcome").innerHTML=outcome+"<br>Your play history is: "+winLoss+".<br>And your guesses were: "+choiceTracker+".";
		}
		
	}
	else{
		
		document.getElementById("comChoose").innerHTML="Sorry, refresh the page to play again.";
		
		document.getElementById("computer").innerHTML="";
		
		document.getElementById("outcome").innerHTML="Your play history is: "+winLoss+".<br>And your guesses were: "+choiceTracker+".";
		
	}
	
}