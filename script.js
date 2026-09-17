// ================================
// STUDY BUDDY - VERSION 1
// ================================

// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = "☀️";
    localStorage.setItem("darkMode", "on");
  } else {
    darkModeBtn.textContent = "🌙";
    localStorage.setItem("darkMode", "off");
  }
});

if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
  darkModeBtn.textContent = "☀️";
}


// NOTES

const notes = document.getElementById("notes");
const saveNotesBtn = document.getElementById("saveNotesBtn");
const saveMessage = document.getElementById("saveMessage");

notes.value = localStorage.getItem("studyNotes") || "";

saveNotesBtn.addEventListener("click", () => {
  localStorage.setItem("studyNotes", notes.value);

  saveMessage.textContent = "✅ Notes saved successfully!";

  setTimeout(() => {
    saveMessage.textContent = "";
  }, 2500);
});


// SUBJECTS

const subjectCards = document.querySelectorAll(".subject-card");

subjectCards.forEach(card => {
  card.addEventListener("click", () => {
    const subject = card.dataset.subject;

    alert(
      "📚 " + subject +
      "\n\nSubject selected!" +
      "\n\nChapter and notes features will be added in the next version."
    );
  });
});


// SEARCH

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  subjectCards.forEach(card => {
    const subjectName =
      card.dataset.subject.toLowerCase();

    if (subjectName.includes(searchText)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});


// QUIZ

const quizQuestions = [
  {
    question: "What is 12 × 5?",
    answers: ["50", "60", "70", "80"],
    correct: "60"
  },

  {
    question: "What force pulls objects toward Earth?",
    answers: [
      "Magnetism",
      "Gravity",
      "Friction",
      "Electricity"
    ],
    correct: "Gravity"
  },

  {
    question: "What is H₂O commonly called?",
    answers: [
      "Oxygen",
      "Hydrogen",
      "Water",
      "Carbon dioxide"
    ],
    correct: "Water"
  },

  {
    question: "Which organ pumps blood around the body?",
    answers: [
      "Lungs",
      "Brain",
      "Heart",
      "Stomach"
    ],
    correct: "Heart"
  },

  {
    question: "Which planet do we live on?",
    answers: [
      "Mars",
      "Earth",
      "Venus",
      "Jupiter"
    ],
    correct: "Earth"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement =
  document.getElementById("question");

const answersElement =
  document.getElementById("answers");

const startQuizBtn =
  document.getElementById("startQuizBtn");

const quizResult =
  document.getElementById("quizResult");


function startQuiz() {
  currentQuestion = 0;
  score = 0;

  startQuizBtn.style.display = "none";
  quizResult.textContent = "";

  showQuestion();
}


function showQuestion() {
  const q = quizQuestions[currentQuestion];

  questionElement.textContent =
    (currentQuestion + 1) +
    ". " +
    q.question;

  answersElement.innerHTML = "";

  q.answers.forEach(answer => {
    const button =
      document.createElement("button");

    button.textContent = answer;
    button.className = "answer-btn";

    button.addEventListener("click", () => {
      checkAnswer(answer);
    });

    answersElement.appendChild(button);
  });
}


function checkAnswer(answer) {
  const correct =
    quizQuestions[currentQuestion].correct;

  if (answer === correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}


function finishQuiz() {
  questionElement.textContent =
    "🎉 Quiz Complete!";

  answersElement.innerHTML = "";

  quizResult.textContent =
    "Your score: " +
    score +
    "/" +
    quizQuestions.length;

  startQuizBtn.style.display = "inline-block";
  startQuizBtn.textContent = "🔄 Try Again";

  document.getElementById("quizScore").textContent =
    score + "/" + quizQuestions.length;

  calculateProgress();
}


startQuizBtn.addEventListener("click", startQuiz);


// STUDY TIMER

let timeLeft = 25 * 60;
let timerInterval = null;
let totalStudySeconds = 0;

const timerDisplay =
  document.getElementById("timer");

const startTimerBtn =
  document.getElementById("startTimerBtn");

const pauseTimerBtn =
  document.getElementById("pauseTimerBtn");

const resetTimerBtn =
  document.getElementById("resetTimerBtn");


function updateTimerDisplay() {
  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  timerDisplay.textContent =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");
}


startTimerBtn.addEventListener("click", () => {
  if (timerInterval !== null) {
    return;
  }

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      totalStudySeconds++;

      updateTimerDisplay();

      const minutes =
        Math.floor(totalStudySeconds / 60);

      document.getElementById("studyMinutes")
        .textContent = minutes;

    } else {
      clearInterval(timerInterval);
      timerInterval = null;

      alert("🎉 Study session complete!");
    }
  }, 1000);
});


pauseTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});


resetTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;

  timeLeft = 25 * 60;

  updateTimerDisplay();
});


updateTimerDisplay();


// MOTIVATION

const motivations = [
  "Small progress every day becomes big progress. 🚀",

  "You don't need to be perfect. Just keep learning. 📚",

  "One chapter today can make tomorrow easier. 💪",

  "Believe in yourself and keep going! 🌟",

  "Your future self will thank you. 🧠",

  "Learn something new every day. 🔥",

  "Don't give up when it gets difficult. 💯",

  "Focus on progress, not perfection. 🎯"
];

const motivationText =
  document.getElementById("motivationText");

const motivationBtn =
  document.getElementById("motivationBtn");


motivationBtn.addEventListener("click", () => {
  const randomIndex =
    Math.floor(Math.random() * motivations.length);

  motivationText.textContent =
    motivations[randomIndex];
});


// PROGRESS

function calculateProgress() {
  let progressValue = 0;

  if (score > 0) {
    progressValue = score * 10;
  }

  if (progressValue > 100) {
    progressValue = 100;
  }

  document.getElementById("progress")
    .textContent = progressValue + "%";
    }
