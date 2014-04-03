
$(document).ready(function(){

	var randomNumber = '';
	var numGuesses = 0;
	var inputString;
	var theGuess;
	var isItDecimal;
	var lastNumberGuessed;

	resetGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- User makes a guess ---*/
	$("#guessButton").click(function(event){
		event.preventDefault();
		numGuesses++;
		$('#count').text(numGuesses);
		inputString = $('#userGuess').val();
		isItDecimal = inputString.indexOf('.');
		theGuess = parseInt(inputString);

		$('form')[0].reset();
		validateNumber(isItDecimal, theGuess);
		$('#guessList').append("<li>" + theGuess + "</li>");
		isTheGuessRight();
	});

	/*--- User wants a new game. ---*/
	$('.new').click(resetGame);

	/*--- FUNCTIONS ---*/
  	function resetGame(){
  		/*--- Reset the variables --*/
		randomNumber = '';
		numGuesses = 0;
		inputString;

		/*--- Reset the DOM ---*/
		$('#count').text(numGuesses);
		$("#guessList").find("li").remove();

		/*---Generate a new random number ---*/
		randomNumber = Math.floor((Math.random()*100)+1)
		console.log('The random number is '+ randomNumber);
	};

  	function validateNumber(isItDecimal,inputNumber){
  		if (isItDecimal==-1) {
			if(!isNaN(inputNumber) && inputNumber!==''){
					if(inputNumber > 0 && inputNumber < 101){
					} else{
						invalidInput();
					}
			}else{
				console.log(inputNumber, isNaN(inputNumber));
				invalidInput();
			}
		}else{
			invalidInput();
		}
  	};

  	function invalidInput(){
  		alert("Enter a number between 1 and 100 - Decimal point is not allowed!");
  	};

  	function isTheGuessRight(){
  		console.log('The guess is ' +theGuess);
  		console.log('The last guess was '+lastNumberGuessed);s
  		if(numGuesses===1){
  			alert('Nice first guess');
  		}


  		if(theGuess===randomNumber){
  			alert('You did it!!!!');
  			resetGame();
  		}else{
  			if(theGuess<randomNumber && lastNumberGuessed>theGuess){
  				console.log('You are getting warmer');
  			}else if(randomNumber<theGuess && theGuess<lastNumberGuessed){
  				  		console.log('You are getting warmer');
  					}else{
  						if (randomNumber<theGuess && randomNumber>lastNumberGuessed) {
  						console.log('You are getting colder')
  						}else{	
  						  console.log('You are getting colder');
  							}
  					}
  		};
});


