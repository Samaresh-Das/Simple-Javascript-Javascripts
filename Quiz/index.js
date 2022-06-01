let quizdata = [
  {
    question: "Which framework belongs to Javascript",
    a: ".NET",
    b: "Flask",
    c: "React",
    d: "Django",
    correct: "c",
  },
  {
    question: "Which is not a programming Language",
    a: "HTML",
    b: "Python",
    c: "JAVA",
    d: "JS",
    correct: "a",
  },
  {
    question: "Which is not a framework ",
    a: "React",
    b: "Javascript",
    c: "Angular",
    d: "Django",
    correct: "b",
  },
  {
    question: "CSS stands for",
    a: "Cascading Style State",
    b: "Cascading Style Sheet",
    c: "Cascading Sheet of Style",
    d: "None",
    correct: "b",
  },
];

let quiz = document.querySelector("#quiz");
let answer = document.querySelectorAll(".answer");
let question = document.querySelector("#question");

let option_a = document.querySelector("#a_value");
let option_b = document.querySelector("#b_value");
let option_c = document.querySelector("#c_value");
let option_d = document.querySelector("#d_value");

let submitbtn = document.querySelector("#submit");

let currentQuestion = 0;
let quizScore = 0;
loadQuiz();

function loadQuiz() {
  deselect();

  question.innerHTML = quizdata[currentQuestion].question;
  option_a.innerText = quizdata[currentQuestion].a;
  option_b.innerText = quizdata[currentQuestion].b;
  option_c.innerText = quizdata[currentQuestion].c;
  option_d.innerText = quizdata[currentQuestion].d;
}

function deselect() {
  answer.forEach((answer) => (answer.checked = false));
}

submitbtn.addEventListener("click", () => {
  let selectedoption;

  answer.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer.id;
    }
  });

  if (selectedoption === quizdata[currentQuestion].correct) {
    quizScore += 1;
  }
  currentQuestion += 1;
  if (currentQuestion === quizdata.length) {
    document.querySelector(
      "#quizdiv"
    ).innerHTML = `<h1?>Your score is ${quizScore} out of ${quizdata.length}</h1?`;
  } else {
    loadQuiz();
  }
});
