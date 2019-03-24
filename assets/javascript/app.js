$(document).ready(function() {

	//GLOBAL VAR
	var currentQ;		//Used for Displaying Currently being used Info

	var correctAnswer;	// ------------------
	var wrongAnswer;	//Score Count
	var unanswered;		// ------------------

	var answered; 		//Used as Boolean
	
						//=============
	var seconds;		//TIMER
	var time;			//=============
	
	var userChoice;		// User Input

	var text = {
		correct: "NINE-NINE!!!!!!!",
		incorrect: "Aww, wrong answer, you'll get it next time..",
		noTime: "You've got to be quicker than that!",
		done: "Wasn't too bad, now was it?",
	};

	var triviaQuestions = [
		{	
			question: "What is Captain Holt's middle name?",
			choices: ["Francis", "Jacob", "Michael", "Preston", "Craig"],
			correct: 1,
			image: "assets/images/captain holt.gif",
			answerText: "Captain Holt's full name is Raymond Jacob Holt",
		},

		{
			question: "Whats the name of Captain Holt's dog?",
			choices: ["Bingo", "Sparky", "Chedder", "Gizmo", "Buzz"],
			correct: 2,
			image: "assets/images/chedder.gif",
			answerText: "Captain Holt's dog's name is Chedder",
		},

		{
			question: "Whats the name of jake's enemy/friend that's always asking for his help but always double crosses him?",
			choices: ["Doug Judy", "Dustin Whittman", "Steven Holter", "Mark Christmas", "LeBron James"],
			correct: 0,
			image: "assets/images/doug judy.gif",
			answerText: "Doug Judy is always working an angle",
		},

		{
			question: "Which is Jake's favorite movie of all time?",
			choices: ["Rambo", "Rocky", "Die Hard", "Lethal Weapon", "Police Academy"],
			correct: 2,
			image: "assets/images/die hard.gif",
			answerText: "Yippee-kai-yay, motherf***er",
		},
		{
			question: "What is Sgt. Jeffords favorite snack?",
			choices: ["Pudding", "Cookies", "Candy", "Muffins", "Yogurt"],
			correct: 4,
			image: "assets/images/terry.gif",
			answerText: "Terry Loves Yogurt!!!",
		},
		{
			question: "What is the name of Sgt. Jeffords twin daughters?",
			choices: ["LaVerne & Shirley", "Rizzoli & Isles", "Cagney & Lacey", "Olivia & Sindy", "Catherine & Bonnie"],
			correct: 2,
			image: "assets/images/cagney & lacey.gif",
			answerText: "Sgt. Jeffords Twins Cagney & Lacey were named after Mary Beth Lacey and Chris Cagney the lead characters from the hit 1980's show Cagney & Lacey "
		},
		{
			question: "What is the name of Jakes best Friend?",
			choices: ["Charles", "Bill", "Scully", "Hitchcock", "Frank"],
			correct: 0,
			image: "assets/images/charles.gif",
			answerText: "Jake and Charles are the best of friends"
		},
		{
			question: "Who did Jake marry at the end of season 5?",
			choices: ["Amy", "Rosa", "Gina","Mary", "Sarah"],
			correct:0,
			image: "assets/images/jake & amy.gif",
			answerText: "Jake and Amy tied the knot finally"
		},
		{
			question: "What is Scullys first name?",
			choices: ["Brian", "Steven","Norm", "Aaron", "Donnie"],
			correct:2,
			image: "assets/images/scully.gif",
			answerText: "Scullys first name is Norm"

		},
		{
			question: "What kind of motorcycle does Rosa ride?",
			choices:["Harley Davidson","Indian","Kawasaki","Suzuki", "Yamaha"],
			correct:4,
			image: "assets/images/rosa.gif",
			answerText: "Rosa rides a Yamaha R1"

		},
		{
			question: "What is the Name of Gina's Daughter?",
			choices:["Breeze","Joplin","Enigma","Omina","Trixie"],
			correct:2,
			image: "assets/images/gina.gif",
			answerText: "Gina had a baby with Charles' cousin Milton Boyle and named her Enigma Boyle"
			
		},
		{
			question: "What is Hitchcock's firsr name?",
			choices: ["Alfred","Nick","Cooper","Grover","Michael"],
			correct:4,
			image: "assets/images/hitchcock.gif",
			answerText: "Hitchcocks first name is Michael"
		},
		{
			question: "Who won the Third annual Halloween Heist?",
			choices: ["Jake", "Amy","Gina","Charles","Captain Holt"],
			correct:1,
			image: "assets/images/amy.gif",
			answerText: "Amy Santiago is an amazing detective/genius"

		},
		{
			question: "Captain Holt becomes the assistant manager of what Arcade?",
			choices: ["Frank's Fun Zone","Chucky Cheese","Jungle Jims","Pinball Hall","The Up Down"],
			correct:0,
			image: "assets/images/derek.gif",
			answerText: "When Jake and Captain Holt were in witness protection. Captain Holt got a job at Frank's Fun Zone"

		},
		{
			question: "Who is Rosa currently in a relationship with?",
			choices: ["Adrian","Jocelyn","Marcus","Alicia","Tom"],
			correct:1,
			image: "assets/images/bi.gif",
			answerText: "Rosa came out as bi to Charles and is currently dating a woman"
		},
		{
			question: "What nickname did the 18th precinct give to Terry?",
			choices: ["Little Terry","Scary Terry","Ter-Bear","Terry Titties","Ebony Falcon"],
			correct:3,
			image: "assets/images/fat terry.gif",
			answerText: "Terry was much fatter at the 18th precinct and was often referred to as Terry Titties"
		},
		{
			question: "What is captain Holt's husbands name",
			choices: ["Kevin","Peter","Allen","Larry","Billy"],
			correct:0,
			image: "assets/images/kevin.gif",
			answerText: "Kevin is a Professor at Columbia University"

			
		},
		{
			question: "What counrty was terry in while he was in college?",
			choices: ["Russia","China","Japan","England","Ireland"],
			correct:2,
			image: "assets/images/puffy vest.gif",
			answerText: "Terry spent time in Japan while he was in college"

		},
		{
			question: "What 90's boy band song does Jake have the perps in the line up sing?",
			choices: ["I want it that way", "Girl Friend","I'll be the one","All I have to give","Tearin up my heart"],
			correct: 0,
			image: "assets/images/singing.gif",
			answerText:"While in the line up each perp sings a part of the song"
		},
		{
			question: "Whats the name of the adoptive son of Charles and his wife Genevieve?",
			choices: ["Aleksandr","Cheslav","Filip","Nikolaj","Igor"],
			correct:3,
			image: "assets/images/Nikolaj.gif",
			answerText: "Charles and Genevieve adopted Nikolaj from Latvia"
		}
	];

	// Hides Content at Start Up
	$("#gameArea").hide();

	// Start Button Click and Hide
	$("#startBtn").on("click", function(){
		$("#startGame").hide();
		newGame();
	});

	// Reset Button
	$("#startOverBtn").on("click", function(){
		$("#Res").hide();
		newGame();
	});

	// ======================================================
	//Function to Start Game After Initial Click
	// ======================================================
	function newGame() {
		$("#gameArea").show();
		$("#Ans").hide();
		$("#Res").hide();		
		correctAnswer = 0;
		wrongAnswer = 0;
		unanswered = 0;
		currentQ = 0;
		questions();
	}
	// ==================
	// Displays Question
	// ==================
	function questions() {
		$("#Ans").hide();
		$("#Qs").show();
		answered = true;
		// Prints Question from Array
		$(".question").html(triviaQuestions[currentQ].question);

		// -----------------------------------------
		//Loops through possible choices and appends
		// -----------------------------------------
		for (var i = 0; i <= 5; i++) {
			var list = $("<div>");
			list.text(triviaQuestions[currentQ].choices[i]);
			list.attr({"data-index": i });
			list.addClass("thisChoice");
			$(".choices").append(list);
		}

		//Calls Timer
		countdown();

		// USERCLICK
		$(".thisChoice").on("click",function(){
			userChoice = $(this).data("index");
			clearInterval(time);
			shoAnswer();
		});
	}

	// ==================
	// TIMER COUNTDOWN
	// ==================
	function countdown() {
		seconds = 20;
		$("#time").html("00:" + seconds);
		answered = true;
		//Delay of 1 sec before timer goes off
		time = setInterval(countDownSho, 1000);
	}

	// ==================
	// SHOWS TIMER
	// ==================
	function countDownSho() {
		seconds --;
		if(seconds < 10) {
			$("#time").html("00:0" + seconds);
			$("#time").css({"color": "red"});
		} else {
			$("#time").html("00:" + seconds);
			$("#time").css({"color": "#def"});
		}

		if (seconds < 1) {
			clearInterval(time);
			answered = false;
			shoAnswer();
		}
	}
	// ====================================
	// DISPLAYS ANSWER DIV
	// ====================================
	function shoAnswer() {
		$("#Qs").hide();
		$("#Res").hide();
		$("#Ans").show();
		$(".thisChoice").empty();

		var rightAnswerText = triviaQuestions[currentQ].choices[triviaQuestions[currentQ].correct];
		var rightAnswerIndex = triviaQuestions[currentQ].correct;
		console.log(rightAnswerText);
		console.log(rightAnswerIndex);
		//GIF IMG
		var gifLink = triviaQuestions[currentQ].image;
		var Giffy = $("<img>");
		Giffy.attr("Src", gifLink);
		Giffy.addClass("gifImg");
		$("#gif").html(Giffy);
		// GIF TEXT
		var gifText = triviaQuestions[currentQ].answerText;
			newCap = $("<div>");
			newCap.html(gifText);
			newCap.addClass("gifCap");
			$("#gifText").html(newCap);


		// DISPLAYS AND COUNTS USER ANSWERS/ UnANSWERS
		if ((userChoice === rightAnswerIndex) && (answered === true)) {
			correctAnswer++;
			$("#text").html(text.correct);
			$("#correctAnswer").hide();
		} else if ((userChoice !== rightAnswerIndex) && (answered === true)) {
			wrongAnswer++;
			$("#text").html(text.incorrect);
			$("#correctAnswer").show().html("The correct answer was: " + rightAnswerText);
		} else {
			unanswered++;
			$("#text").html(text.noTime);
			$("#correctAnswer").html("The correct answer was: " + rightAnswerText);
			answered = true;
		}

		//Last Answer Reveal Timer
		if (currentQ === (triviaQuestions.length-1)) {
			setTimeout(results, 10000);
		} else {
			currentQ++;
			setTimeout(questions, 10000);
		}

	}

	function results() {
		$("#Ans").hide();
		$("#Qs").hide();
		$("#Res").show();
		$("#resultText").html(text.done);
		$("#correctAnswers").html("Correct Answers: " + correctAnswer);
		$("#wrongAnswers").html("Wrong Answers: " + wrongAnswer);
		$("#unanswered").html("Didn't Answer: " + unanswered);
		$("#startOverBtn").show();
		$("#startOverBtn").html("RESTART GAME");
	}

	
});