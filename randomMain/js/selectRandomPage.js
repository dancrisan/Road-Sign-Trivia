


var question_number = 0;
// var usedQuestions = localStorage["questions"];
// console.log(localStorage.length);
// var usedQuestions = [];

// usedQuestions.push(0);
// localStorage.preguantas = usedQuestions;
// console.log(localStorage.length);
// console.log(typeof(localStorage.preguantas));
// console.log(localStorage.key(1));
// for (var key in localStorage)
// {
// 	console.log(key);
// }
	// for(var i in localStorage)
	// {
	// 	// var value = localStorage[i];
	// 	console.log("hiii" + i[5]);
	// }
function QuestionsArray (numberOfQuestions) 
{
	this.length = numberOfQuestions;

   	for (var i =1; i <= numberOfQuestions; i++)
   	{
    	this[i] = ' '
   	}
 
 }

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

question = new QuestionsArray(5)

question[0] = 'q1.html'
question[1] = 'q2.html'
question[2] = 'q3.html'
question[3] = 'q4.html'
question[4] = 'q5.html'

function randomQuestion() 
{
 	question_number = getRandomNumber(0,5);
 	// localStorage.preguantas = (localStorage.preguantas).concat(question_number);
 	// console.log(localStorage.preguantas);
 	// localStorage.questions = question_number;
 	return(question[question_number])
}

function loadRandomQuestion()
{
	// for(var question_number in localStorage)
	// {
	// 	var value = localStorage[question_number];
	// 	console.log(value);
	// }

	// window.location.href = randomQuestion();
	var q = randomQuestion();
	console.log("The question_number is");
	console.log(question_number);
	localStorage.preguantas = (localStorage.preguantas).concat(question_number);
	console.log(localStorage.preguantas)
}

