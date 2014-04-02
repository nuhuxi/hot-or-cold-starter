
$(document).ready(function(){
	/* there are two states that the game can be in:

	1 - A game is underway
		-the code is in a loop that gets the next guess and determines whether the guess is:
		hot - within 10 numbers of the random number
		hotter - within 10 numbers, closer to the number and on the same side of the number than the last guess.
		warm - the guess is within 25 of the number
		warmer - closer than warm on the same side of the number
	2 - A game is not underway
	



	*/
	var gameStillOn = new Boolean(0);
	var randomNumber = Math.floor((Math.random()*100)+1);
	var numGuesses = 0;
	do {
		$("#guessButton").click(function(){
			var inputString = $("#userGuess").val();
			var inputNumber = parseInt(inputString);
			var isItDecimal = inputString.indexOf(".");
		

			
				/*Increment the number of guesses*/
				numGuesses=+1;

				/* make sure the guess is in the range of possible numbers*/
				validateNumber(isItDecimal, inputNumber);

				/* generate a random number*/


	} while gameStillOn;

	});
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	function validateNumber(isItDecimal,inputNumber){
  		if (isItDecimal==-1) {
			if(!isNaN(inputNumber) && inputNumber!==''){
					if(inputNumber > 0 && inputNumber < 100){
						console.log('Good number!,' + 'inputNumber=' + inputNumber);
					} else{
						invalidInput();
					}
			}
			else{
				console.log(isNaN(inputNumber));
				invalidInput();
			}
		}else{
			invalidInput();
		}
		/* will I need something here to reset variables i the number inst valid?*/
  	};

  	function invalidInput(){
  		alert("Enter a number between 0 and 99 - Decimal point is not allowed!");
  	};


});


