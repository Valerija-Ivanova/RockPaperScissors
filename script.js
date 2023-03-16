function random() {
	
	event.preventDefault();
	
	var userGesture=document.getElementById("gesture").value;
	
	var comGestureRoll=Math.random();
	
	if (comGestureRoll<=0.33) {
		comGestureRoll="Rock";
		
		if (userGesture=="Rock" || userGesture=="rock"){
			var outcome="It's a draw!";
		}
		else if (userGesture=="Paper" || userGesture=="paper"){
			var outcome="You win!";
		}
		else if (userGesture=="Scissors" || userGesture=="scissors"){
			var outcome="You lose!";
		}
		else {
			var outcome="Oops, wrong input! Try again.";
		}
		
	}
	else if(comGestureRoll>=0.34 && comGestureRoll<=0.66) {
		comGestureRoll="Paper";
		
		if (userGesture=="Rock" || userGesture=="rock"){
			var outcome="You lose!";
		}
		else if (userGesture=="Paper" || userGesture=="paper"){
			var outcome="It's a draw!";
		}
		else if (userGesture=="Scissors" || userGesture=="scissors"){
			var outcome="You win!";
		}
		else {
			var outcome="Oops, wrong input! Try again.";
		}
	}
	else {
		comGestureRoll="Scissors";
		
		if (userGesture=="Rock" || userGesture=="rock"){
			var outcome="You win!";
		}
		else if (userGesture=="Paper" || userGesture=="paper"){
			var outcome="You lose!";
		}
		else if (userGesture=="Scissors" || userGesture=="scissors"){
			var outcome="It's a draw!";
		}
		else {
			var outcome="Oops, wrong input! Try again.";
		}
	} 
	
	document.getElementById("computer").innerHTML=comGestureRoll;
	
	document.getElementById("outcome").innerHTML=outcome;
	
}