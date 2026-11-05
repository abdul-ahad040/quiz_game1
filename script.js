let questions = [
    {   question: "What is JavaScript?",
        options: [ "Database", "Programming language", "Operating system", "Browser" ],
        correctAnswer: "Programming language"
    },

    {
        question: "What does HTML stand for?",
        options: [ "Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    
{
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    correctAnswer: "var"
},
{
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "##"],
    correctAnswer: "//"
},
{
    question: "Which method is used to print something in the console?",
    options: ["console.print()", "print()", "console.log()", "document.write()"],
    correctAnswer: "console.log()"
},
{
    question: "Which data type represents true or false?",
    options: ["String", "Number", "Boolean", "Array"],
    correctAnswer: "Boolean"
},
{
    question: "Which operator checks both value and data type?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "==="
},
{
    question: "Which method adds an element at the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: "push()"
},
{
    question: "Which loop executes while a condition is true?",
    options: ["if", "switch", "while", "break"],
    correctAnswer: "while"
},
{
    question: "Which method selects an HTML element using its ID?",
    options: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "createElement()"],
    correctAnswer: "getElementById()"
}

];
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
function showQuestion(){
    selectedAnswer = null;
    let questionElement = document.getElementById('question');
    let optionsElement = document.getElementById('options');

    let current = questions[currentQuestion];

   questionElement.innerText = current.question;
    optionsElement.innerHTML = "";

   
    current.options.forEach(function(option){
        let button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", function(){
            selectedAnswer = option;
            button.style.backgroundColor = 'rgb(8, 69, 139)';
            button.style.color = '#f9f6f6';

        })
        optionsElement.appendChild(button);
    });
}
showQuestion();


function checkAnswer(){
    if(selectedAnswer === questions[currentQuestion].correctAnswer){
        score++;
    }
    
};
let nextButton = document.getElementById('next-btn');
nextButton.addEventListener("click", function(){
   
   
    if (selectedAnswer === null) {

    alert("Please select an answer!");
    return;
}
 checkAnswer();
    currentQuestion++;
    selectedAnswer = null;
    if(currentQuestion < questions.length){
        showQuestion();
       
    }
    else{
        showResult();
    }
});

function showResult() {

    let quizBox = document.getElementById("quiz-box");
    let result = document.getElementById("result");

    quizBox.style.display = "none";

    result.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
`;


}
