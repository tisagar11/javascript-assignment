function check(){
	var s=0;
	var q1 = document.quizexam.question1.value;
	var q2 = document.quizexam.question2.value;
	var q3 = document.quizexam.question3.value;
	var q4 = document.quizexam.question4.value;
	var q5 = document.quizexam.question5.value;
	var score = document.getElementById('score');
	var quizexam = document.getElementById('quizexam');

	if ( q1 == "di" ) 
		{s++}
	if ( q2 == "clear" ) 
		{s++}
	if ( q3 == "1990" ) 
		{s++}
	if ( q4 == "strong" ) 
		{s++}
	if ( q5 == "james" ) 
		{s++}

	quizexam.style.display="none";
		score.textContent='Your obtain score is ' + (s);
		
}