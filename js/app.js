
$(document).ready(function(){

	$("#guessButton").click(function(){
		/*Get the user input */
		var inputString = $("#userGuess").val();
		var inputNumber = parseInt(inputString);
		var numGuesses = 0;
		var isItDecimal = inputString.indexOf(".");

		validateNumber(isItDecimal, inputNumber);

		/* generate a random number*/
		var randomNumber = Math.floor((Math.random()*100)+1);

		/* get the users input and make sure it is in the range of possible numbers*/

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

  	};

  	function invalidInput(){
  		alert("Enter a number between 0 and 99 - Decimal point is not allowed!");
  	};


});


