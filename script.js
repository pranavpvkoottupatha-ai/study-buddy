// ============================================
// STUDY BUDDY V2
// ============================================


// ============================================
// DATA
// ============================================

const subjectsData = {

  Maths: {
    icon: "📐",
    description: "Numbers, algebra and geometry",

    chapters: [
      {
        name: "Number Systems",
        description: "Learn about different types of numbers."
      },
      {
        name: "Polynomials",
        description: "Learn polynomial expressions and operations."
      },
      {
        name: "Coordinate Geometry",
        description: "Learn points and coordinates."
      },
      {
        name: "Linear Equations",
        description: "Practice equations with variables."
      },
      {
        name: "Triangles",
        description: "Learn triangle properties and theorems."
      }
    ]
  },


  Physics: {
    icon: "⚡",
    description: "Motion, force and energy",

    chapters: [
      {
        name: "Motion",
        description: "Learn distance, displacement, speed and velocity."
      },
      {
        name: "Force and Laws of Motion",
        description: "Understand force and Newton's laws."
      },
      {
        name: "Gravitation",
        description: "Learn about gravity and gravitational force."
      },
      {
        name: "Work and Energy",
        description: "Understand work, energy and power."
      },
      {
        name: "Sound",
        description: "Learn how sound is produced and travels."
      }
    ]
  },


  Chemistry: {
    icon: "🧪",
    description: "Matter, atoms and reactions",

    chapters: [
      {
        name: "Matter Around Us",
        description: "Learn about states and properties of matter."
      },
      {
        name: "Atoms and Molecules",
        description: "Learn about atoms, molecules and formulas."
      },
      {
        name: "Structure of Atom",
        description: "Understand electrons, protons and neutrons."
      },
      {
        name: "Chemical Reactions",
        description: "Introduction to chemical changes."
      }
    ]
  },


  Biology: {
    icon: "🧬",
    description: "Life, cells and organisms",

    chapters: [
      {
        name: "The Fundamental Unit of Life",
        description: "Learn about cells and their structures."
      },
      {
        name: "Tissues",
        description: "Learn about plant and animal tissues."
      },
      {
        name: "Diversity in Living Organisms",
        description: "Learn how living organisms are classified."
      },
      {
        name: "Why Do We Fall Ill?",
        description: "Learn basic concepts of health and disease."
      }
    ]
  },


  "Social Science": {
    icon: "🌍",
    description: "History, geography and society",

    chapters: [
      {
        name: "India: Size and Location",
        description: "Learn about India's geographical location."
      },
      {
        name: "Physical Features of India",
        description: "Explore India's major physical divisions."
      },
      {
        name: "Climate",
        description: "Learn about India's climate."
      },
      {
        name: "Democracy",
        description: "Understand basic ideas of democracy."
      },
      {
        name: "Constitutional Design",
        description: "Learn why constitutions are important."
      }
    ]
  },


  English: {
    icon: "📖",
    description: "Grammar, writing and literature",

    chapters: [
      {
        name: "Grammar",
        description: "Practice important grammar concepts."
      },
      {
        name: "Reading Comprehension",
        description: "Improve reading and understanding."
      },
      {
        name: "Writing Skills",
        description: "Practice different forms of writing."
      },
      {
        name: "Literature",
        description: "Read and understand literary texts."
      }
    ]
  }

};


// ============================================
// ELEMENTS
// ============================================

const subjectsElement =
  document.getElementById("subjects");

const chapterSection =
  document.getElementById("chapterSection");

const chapterDetails =
  document.getElementById("chapterDetails");

const quizSection =
  document.getElementById("quizSection");

const chaptersElement =
  document.getElementById("chapters");

const chapterTitle =
  document.getElementById("chapterTitle");

const selectedChapterTitle =
  document.getElementById("selectedChapterTitle");

const chapterDescription =
  document.getElementById("chapterDescription");

const chapterNotes =
  document.getElementById("chapterNotes");

const searchInput =
  document.getElementById("searchInput");


// ============================================
// APP STATE
// ============================================

let selectedSubject = null;
let selectedChapter = null;

let currentQuiz = [];
let currentQuestion = 0;
let quizScore = 0;

let timerInterval = null;
let timeLeft = 25 * 60;

let totalStudySeconds =
  Number(localStorage.getItem("studySeconds")) || 0;

let completedChapters =
  JSON.parse(
    localStorage.getItem("completedChapters") || "[]"
  );


// ============================================
// STUDENT SETUP
// ============================================

const studentName =
  document.getElementById("studentName");

const classSelect =
  document.getElementById("classSelect");

const studentGreeting =
  document.getElementById("studentGreeting");

const saveStudentBtn =
  document.getElementById("saveStudentBtn");

const studentMessage =
  document.getElementById("studentMessage");


studentName.value =
  localStorage.getItem("studentName") || "";

classSelect.value =
  localStorage.getItem("studentClass") || "9";


function updateGreeting() {

  const name =
    localStorage.getItem("studentName");

  if (name && name.trim() !== "") {
    studentGreeting.textContent = name;
  } else {
    studentGreeting.textContent = "Student";
  }

}


updateGreeting();


saveStudentBtn.addEventListener("click", () => {

  const name =
    studentName.value.trim();

  const studentClass =
    classSelect.value;

  if (name === "") {

    studentMessage.textContent =
      "⚠️ Please enter your name.";

    return;
  }

  localStorage.setItem(
    "studentName",
    name
  );

  localStorage.setItem(
    "studentClass",
    studentClass
  );

  updateGreeting();

  studentMessage.textContent =
    "✅ Student details saved!";

  setTimeout(() => {
    studentMessage.textContent = "";
  }, 2500);

});


// ============================================
// DARK MODE
// ============================================

const darkModeBtn =
  document.getElementById("darkModeBtn");


darkModeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const dark =
    document.body.classList.contains("dark");

  localStorage.setItem(
    "darkMode",
    dark ? "on" : "off"
  );

  darkModeBtn.textContent =
    dark ? "☀️" : "🌙";

});


if (
  localStorage.getItem("darkMode") === "on"
) {

  document.body.classList.add("dark");

  darkModeBtn.textContent = "☀️";

}


// ============================================
// SHOW SUBJECTS
// ============================================

function showSubjects() {

  subjectsElement.innerHTML = "";

  Object.entries(subjectsData).forEach(
    ([subject, data]) => {

      const card =
        document.createElement("button");

      card.className = "subject-card";

      card.dataset.subject = subject;

      card.innerHTML = `
        <span>${data.icon}</span>
        <strong>${subject}</strong>
        <small>${data.description}</small>
      `;

      card.addEventListener(
        "click",
        () => showChapters(subject)
      );

      subjectsElement.appendChild(card);

    }
  );

  document.getElementById(
    "subjectCount"
  ).textContent =
    Object.keys(subjectsData).length;

}


showSubjects();


// ============================================
// SHOW CHAPTERS
// ============================================

function showChapters(subject) {

  selectedSubject = subject;

  selectedChapter = null;

  chapterTitle.textContent =
    `${subjectsData[subject].icon} ${subject} Chapters`;

  chaptersElement.innerHTML = "";

  subjectsData[subject].chapters.forEach(
    (chapter, index) => {

      const card =
        document.createElement("button");

      const chapterKey =
        `${subject}-${index}`;

      const isCompleted =
        completedChapters.includes(chapterKey);

      card.className =
        "chapter-card" +
        (isCompleted ? " completed" : "");

      card.innerHTML = `
        <h3>
          ${index + 1}. ${chapter.name}
        </h3>

        <p>
          ${chapter.description}
        </p>

        ${
          isCompleted
          ? `<span class="completed-badge">
               ✅ Completed
             </span>`
          : ""
        }
      `;

      card.addEventListener(
        "click",
        () => showChapterDetails(
          subject,
          index
        )
      );

      chaptersElement.appendChild(card);

    }
  );

  chapterSection.classList.remove("hidden");

  chapterDetails.classList.add("hidden");

  quizSection.classList.add("hidden");

  window.scrollTo({
    top: chapterSection.offsetTop - 15,
    behavior: "smooth"
  });

}


// ============================================
// SHOW CHAPTER DETAILS
// ============================================

function showChapterDetails(
  subject,
  chapterIndex
) {

  selectedSubject = subject;

  selectedChapter = chapterIndex;

  const chapter =
    subjectsData[subject].chapters[chapterIndex];

  selectedChapterTitle.textContent =
    `📖 ${chapter.name}`;

  chapterDescription.textContent =
    chapter.description;

  const noteKey =
    `notes-${subject}-${chapterIndex}`;

  chapterNotes.value =
    localStorage.getItem(noteKey) || "";

  chapterDetails.classList.remove(
    "hidden"
  );

  quizSection.classList.add(
    "hidden"
  );

  window.scrollTo({
    top: chapterDetails.offsetTop - 15,
    behavior: "smooth"
  });

}


// ============================================
// SAVE CHAPTER NOTES
// ============================================

const saveChapterNotesBtn =
  document.getElementById(
    "saveChapterNotesBtn"
  );

const chapterNoteMessage =
  document.getElementById(
    "chapterNoteMessage"
  );


saveChapterNotesBtn.addEventListener(
  "click",
  () => {

    if (
      selectedSubject === null ||
      selectedChapter === null
    ) {
      return;
    }

    const noteKey =
      `notes-${selectedSubject}-${selectedChapter}`;

    localStorage.setItem(
      noteKey,
      chapterNotes.value
    );

    chapterNoteMessage.textContent =
      "✅ Chapter notes saved!";

    setTimeout(() => {

      chapterNoteMessage.textContent = "";

    }, 2500);

  }
);


// ============================================
// MARK CHAPTER COMPLETE
// ============================================

const completeChapterBtn =
  document.getElementById(
    "completeChapterBtn"
  );


completeChapterBtn.addEventListener(
  "click",
  () => {

    if (
      selectedSubject === null ||
      selectedChapter === null
    ) {
      return;
    }

    const chapterKey =
      `${selectedSubject}-${selectedChapter}`;

    if (
      !completedChapters.includes(
        chapterKey
      )
    ) {

      completedChapters.push(
        chapterKey
      );

      localStorage.setItem(
        "completedChapters",
        JSON.stringify(
          completedChapters
        )
      );

    }

    updateProgress();

    showChapters(selectedSubject);

    alert(
      "🎉 Chapter marked as completed!"
    );

  }
);


// ============================================
// CHAPTER QUIZ DATABASE
// ============================================

const quizDatabase = {

  "Maths-0": [
    {
      question:
        "Which number is irrational?",
      answers: [
        "2",
        "3",
        "√2",
        "4"
      ],
      correct: "√2"
    },

    {
      question:
        "Which number is a natural number?",
      answers: [
        "-2",
        "0",
        "5",
        "√2"
      ],
      correct: "5"
    }
  ],


  "Physics-0": [
    {
      question:
        "Which quantity describes how fast an object moves?",
      answers: [
        "Mass",
        "Speed",
        "Force",
        "Density"
      ],
      correct: "Speed"
    },

    {
      question:
        "The SI unit of speed is:",
      answers: [
        "Newton",
        "Joule",
        "m/s",
        "Watt"
      ],
      correct: "m/s"
    }
  ],


  "Chemistry-1": [
    {
      question:
        "What is the smallest unit of an element?",
      answers: [
        "Atom",
        "Cell",
        "Tissue",
        "Organ"
      ],
      correct: "Atom"
    },

    {
      question:
        "Water is represented by:",
      answers: [
        "CO₂",
        "O₂",
        "H₂O",
        "NaCl"
      ],
      correct: "H₂O"
    }
  ],


  "Biology-0": [
    {
      question:
        "The basic unit of life is:",
      answers: [
        "Tissue",
        "Cell",
        "Organ",
        "Organ system"
      ],
      correct: "Cell"
    },

    {
      question:
        "Which structure controls many cell activities?",
      answers: [
        "Nucleus",
        "Cell wall",
        "Vacuole",
        "Cytoplasm"
      ],
      correct: "Nucleus"
    }
  ],


  "Social Science-0": [
    {
      question:
        "India is located in which continent?",
      answers: [
        "Europe",
        "Asia",
        "Africa",
        "Australia"
      ],
      correct: "Asia"
    },

    {
      question:
        "India lies mainly in which hemisphere?",
      answers: [
        "Northern Hemisphere",
        "Southern Hemisphere",
        "Western Hemisphere",
        "None"
      ],
      correct: "Northern Hemisphere"
    }
  ],


  "English-0": [
    {
      question:
        "Which word is a noun?",
      answers: [
        "Run",
        "Beautiful",
        "School",
        "Quickly"
      ],
      correct: "School"
    },

    {
      question:
        "Which word is a verb?",
      answers: [
        "Run",
        "Blue",
        "Book",
        "Happy"
      ],
      correct: "Run"
    }
  ]

};


// ============================================
// START QUIZ
// ============================================

const startChapterQuizBtn =
  document.getElementById(
    "startChapterQuizBtn"
  );


startChapterQuizBtn.addEventListener(
  "click",
  () => {

    const quizKey =
      `${selectedSubject}-${selectedChapter}`;

    currentQuiz =
      quizDatabase[quizKey] || [

        {
          question:
            "What is the best way to learn?",
          answers: [
            "Never practice",
            "Practice regularly",
            "Never revise",
            "Give up"
          ],
          correct:
            "Practice regularly"
        },

        {
          question:
            "What should you do after learning a topic?",
          answers: [
            "Forget it",
            "Practice and revise",
            "Stop studying",
            "Avoid questions"
          ],
          correct:
            "Practice and revise"
        }

      ];

    currentQuestion = 0;

    quizScore = 0;

    quizSection.classList.remove(
      "hidden"
    );

    showQuizQuestion();

    window.scrollTo({
      top: quizSection.offsetTop - 15,
      behavior: "smooth"
    });

  }
);


// ============================================
// SHOW QUIZ QUESTION
// ============================================

function showQuizQuestion() {

  const question =
    currentQuiz[currentQuestion];

  document.getElementById(
    "quizProgress"
  ).textContent =
    `Question ${currentQuestion + 1} of ${currentQuiz.length}`;

  document.getElementById(
    "question"
  ).textContent =
    question.question;

  const answers =
    document.getElementById("answers");

  answers.innerHTML = "";

  document.getElementById(
    "quizResult"
  ).textContent = "";

  question.answers.forEach(
    answer => {

      const button =
        document.createElement("button");

      button.className =
        "answer-btn";

      button.textContent =
        answer;

      button.addEventListener(
        "click",
        () => checkQuizAnswer(
          answer,
          button
        )
      );

      answers.appendChild(button);

    }
  );

}


// ============================================
// CHECK QUIZ ANSWER
// ============================================

function checkQuizAnswer(
  answer,
  clickedButton
) {

  const correct =
    currentQuiz[currentQuestion].correct;

  const buttons =
    document.querySelectorAll(
      ".answer-btn"
    );

  buttons.forEach(
    button => {
      button.disabled = true;
    }
  );

  if (answer === correct) {

    quizScore++;

    clickedButton.classList.add(
      "correct"
    );

  } else {

    clickedButton.classList.add(
      "wrong"
    );

    buttons.forEach(
      button => {

        if (
          button.textContent === correct
        ) {

          button.classList.add(
            "correct"
          );

        }

      }
    );

  }

  setTimeout(() => {

    currentQuestion++;

    if (
      currentQuestion <
      currentQuiz.length
    ) {

      showQuizQuestion();

    } else {

      finishQuiz();

    }

  }, 700);

}


// ============================================
// FINISH QUIZ
// ============================================

function finishQuiz() {

  document.getElementById(
    "quizProgress"
  ).textContent =
    "🎉 Quiz Complete";

  document.getElementById(
    "question"
  ).textContent =
    `You scored ${quizScore}/${currentQuiz.length}`;

  document.getElementById(
    "answers"
  ).innerHTML = "";

  const percentage =
    Math.round(
      (quizScore / currentQuiz.length) * 100
    );

  document.getElementById(
    "quizResult"
  ).textContent =
    `Your score: ${percentage}% 🏆`;

  document.getElementById(
    "quizScore"
  ).textContent =
    `${quizScore}/${currentQuiz.length}`;

  updateProgress();

}


// ============================================
// SEARCH
// ============================================

searchInput.addEventListener(
  "input",
  () => {

    const search =
      searchInput.value
        .toLowerCase()
        .trim();

    if (search === "") {

      showSubjects();

      return;

    }

    subjectsElement.innerHTML = "";

    let found = false;

    Object.entries(subjectsData)
      .forEach(
        ([subject, data]) => {

          const subjectMatches =
            subject
              .toLowerCase()
              .includes(search);

          const matchingChapters =
            data.chapters.filter(
              chapter =>
                chapter.name
                  .toLowerCase()
                  .includes(search)
            );

          if (
            subjectMatches ||
            matchingChapters.length > 0
          ) {

            found = true;

            const card =
              document.createElement("button");

            card.className =
              "subject-card";

            card.innerHTML = `
              <span>${data.icon}</span>

              <strong>${subject}</strong>

              <small>
                ${
                  matchingChapters.length
                } matching chapter(s)
              </small>
            `;

            card.addEventListener(
              "click",
              () => showChapters(subject)
            );

            subjectsElement.appendChild(
              card
            );

          }

        }
      );

    if (!found) {

      subjectsElement.innerHTML = `
        <div class="panel">
          🔎 No subjects or chapters found.
        </div>
      `;

    }

  }
);


// ============================================
// HOME BUTTON
// =================================
