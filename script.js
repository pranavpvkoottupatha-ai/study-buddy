// ==========================================
// STUDY BUDDY - CLASS-WISE LESSON SYSTEM
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ---------- CLASS-WISE LESSON DATABASE ----------

  const lessons = {

    "8": {
      Maths: [
        ["Rational Numbers", "Learn rational numbers, their properties and operations."],
        ["Linear Equations in One Variable", "Solve simple linear equations in one variable."],
        ["Understanding Quadrilaterals", "Learn different types of quadrilaterals and their properties."],
        ["Data Handling", "Learn how to collect, represent and interpret data."],
        ["Squares and Square Roots", "Learn squares, square roots and related methods."],
        ["Cubes and Cube Roots", "Learn cubes and cube roots."],
        ["Comparing Quantities", "Learn percentages, profit, loss and discounts."],
        ["Algebraic Expressions", "Learn expressions, terms, coefficients and operations."]
      ],

      Physics: [
        ["Force and Pressure", "Learn about force, pressure and their effects."],
        ["Friction", "Understand friction and factors affecting friction."],
        ["Sound", "Learn how sound is produced and travels."],
        ["Light", "Study reflection and basic properties of light."],
        ["Stars and the Solar System", "Explore stars, planets and the solar system."]
      ],

      Chemistry: [
        ["Coal and Petroleum", "Learn about fossil fuels and their uses."],
        ["Combustion and Flame", "Study combustion and different types of flames."],
        ["Synthetic Fibres and Plastics", "Learn about synthetic materials and plastics."]
      ],

      Biology: [
        ["Crop Production and Management", "Learn how crops are grown and managed."],
        ["Microorganisms", "Study useful and harmful microorganisms."],
        ["Cell Structure and Functions", "Learn the basic structure and functions of cells."],
        ["Reproduction in Animals", "Learn the basic process of reproduction in animals."]
      ],

      "Social Science": [
        ["Resources", "Learn about natural, human-made and human resources."],
        ["The Indian Constitution", "Understand the basic ideas of the Indian Constitution."],
        ["Understanding Secularism", "Learn the meaning and importance of secularism."],
        ["From Trade to Territory", "Study the expansion of British power in India."],
        ["The Revolt of 1857", "Learn about the causes and events of the Revolt of 1857."]
      ],

      English: [
        ["Reading Comprehension", "Improve your reading and understanding skills."],
        ["Grammar", "Learn important English grammar rules."],
        ["Tenses", "Learn present, past and future tenses."],
        ["Writing Skills", "Practice letters, paragraphs and other forms of writing."]
      ]
    },


    // ==========================================
    // CLASS 9
    // ==========================================

    "9": {
      Maths: [
        ["Number Systems", "Learn rational and irrational numbers and their properties."],
        ["Polynomials", "Learn polynomials, terms, coefficients, zeros and operations."],
        ["Coordinate Geometry", "Learn coordinates, axes and plotting points."],
        ["Linear Equations in Two Variables", "Understand and represent linear equations in two variables."],
        ["Euclid's Geometry", "Learn the basic ideas and axioms of Euclidean geometry."],
        ["Lines and Angles", "Study different types of angles and angle relationships."],
        ["Triangles", "Learn congruence and properties of triangles."],
        ["Quadrilaterals", "Study properties of parallelograms and other quadrilaterals."],
        ["Circles", "Learn important terms and properties related to circles."],
        ["Heron's Formula", "Calculate the area of triangles using Heron's formula."],
        ["Surface Areas and Volumes", "Calculate surface areas and volumes of common solids."],
        ["Statistics", "Learn collection, presentation and interpretation of data."],
        ["Probability", "Understand basic probability and simple experiments."]
      ],

      Physics: [
        ["Motion", "Learn distance, displacement, speed, velocity and acceleration."],
        ["Force and Laws of Motion", "Study Newton's laws of motion and their applications."],
        ["Gravitation", "Learn gravitational force, mass, weight and free fall."],
        ["Work and Energy", "Understand work, energy and power."],
        ["Sound", "Study production, propagation and characteristics of sound."]
      ],

      Chemistry: [
        ["Matter in Our Surroundings", "Learn the physical nature and states of matter."],
        ["Is Matter Around Us Pure?", "Study mixtures, solutions and separation methods."],
        ["Atoms and Molecules", "Learn atoms, molecules and chemical formulas."],
        ["Structure of the Atom", "Understand electrons, protons, neutrons and atomic structure."]
      ],

      Biology: [
        ["The Fundamental Unit of Life", "Study cells and their structures."],
        ["Tissues", "Learn plant and animal tissues."],
        ["Diversity in Living Organisms", "Study classification and diversity of organisms."],
        ["Why Do We Fall Ill?", "Learn about health, diseases and prevention."],
        ["Natural Resources", "Understand air, water, soil and natural resources."]
      ],

      "Social Science": [
        ["India – Size and Location", "Study India's location, size and geographical extent."],
        ["Physical Features of India", "Learn about mountains, plains, plateaus and other physical divisions."],
        ["Drainage", "Study India's river systems and drainage patterns."],
        ["Climate", "Learn about India's climate and monsoon system."],
        ["Democracy in the Contemporary World", "Understand important ideas about democracy."],
        ["What is Democracy? Why Democracy?", "Learn the meaning and importance of democracy."],
        ["People as Resource", "Understand the role of people in economic development."],
        ["Poverty as a Challenge", "Study poverty and related issues in India."]
      ],

      English: [
        ["The Fun They Had", "Read and understand the story and its themes."],
        ["The Sound of Music", "Study the prose lessons and important ideas."],
        ["The Little Girl", "Explore the story, characters and themes."],
        ["A Truly Beautiful Mind", "Study the lesson and understand its key ideas."],
        ["Grammar", "Practice tenses, modals, reported speech and other grammar topics."],
        ["Writing Skills", "Practice descriptive writing, diary entries and other formats."]
      ]
    },


    // ==========================================
    // CLASS 10
    // ==========================================

    "10": {
      Maths: [
        ["Real Numbers", "Study Euclid's division algorithm and real numbers."],
        ["Polynomials", "Learn zeros of polynomials and relationships between coefficients and zeros."],
        ["Pair of Linear Equations", "Solve pairs of linear equations in two variables."],
        ["Quadratic Equations", "Learn methods for solving quadratic equations."],
        ["Arithmetic Progressions", "Study sequences, nth terms and sums."],
        ["Triangles", "Learn similarity and important theorems of triangles."],
        ["Coordinate Geometry", "Use coordinate geometry to calculate distances and areas."],
        ["Introduction to Trigonometry", "Learn trigonometric ratios and identities."],
        ["Circles", "Study tangents and properties of circles."],
        ["Areas Related to Circles", "Calculate areas and perimeters involving circles."],
        ["Surface Areas and Volumes", "Solve problems involving 3D shapes."],
        ["Statistics", "Calculate and interpret statistical measures."],
        ["Probability", "Solve basic probability problems."]
      ],

      Physics: [
        ["Light – Reflection and Refraction", "Study reflection, refraction, mirrors and lenses."],
        ["The Human Eye and the Colourful World", "Learn about the human eye and optical phenomena."],
        ["Electricity", "Study electric current, voltage, resistance and circuits."],
        ["Magnetic Effects of Electric Current", "Learn about magnetic fields and electromagnetic effects."],
        ["Sources of Energy", "Compare different sources of energy and their uses."]
      ],

      Chemistry: [
        ["Chemical Reactions and Equations", "Learn how chemical reactions are represented and balanced."],
        ["Acids, Bases and Salts", "Study properties and uses of acids, bases and salts."],
        ["Metals and Non-metals", "Compare properties and reactions of metals and non-metals."],
        ["Carbon and Its Compounds", "Study carbon compounds and their properties."],
        ["Periodic Classification of Elements", "Understand the periodic table and trends."]
      ],

      Biology: [
        ["Life Processes", "Study nutrition, respiration, transportation and excretion."],
        ["Control and Coordination", "Learn how organisms coordinate their activities."],
        ["How Do Organisms Reproduce?", "Study reproduction in organisms."],
        ["Heredity", "Learn basic concepts of heredity and variation."],
        ["Our Environment", "Study ecosystems, food chains and environmental balance."]
      ],

      "Social Science": [
        ["Resources and Development", "Study resources, development and resource planning."],
        ["Forest and Wildlife Resources", "Learn about biodiversity and conservation."],
        ["Water Resources", "Study water availability, conservation and management."],
        ["Agriculture", "Learn about farming and major crops."],
        ["Manufacturing Industries", "Study major industries and their importance."],
        ["Power Sharing", "Understand different forms of power sharing."],
        ["Federalism", "Learn about federal government systems."],
        ["Political Parties", "Study the role and functions of political parties."],
        ["Development", "Understand different ideas and measures of development."],
        ["Sectors of the Indian Economy", "Study primary, secondary and tertiary sectors."]
      ],

      English: [
        ["A Letter to God", "Study the story, characters and important themes."],
        ["Nelson Mandela", "Learn about the lesson and its central ideas."],
        ["Two Stories About Flying", "Read and understand both stories."],
        ["From the Diary of Anne Frank", "Study the diary entry and its themes."],
        ["Grammar", "Practice important Class 10 grammar topics."],
        ["Writing Skills", "Practice formal letters, analytical paragraphs and other formats."]
      ]
    }
  };


  // ==========================================
  // ELEMENTS
  // ==========================================

  const classSelect = document.getElementById("classSelect");
  const subjectsElement = document.getElementById("subjects");
  const chapterSection = document.getElementById("chapterSection");
  const chaptersElement = document.getElementById("chapters");
  const chapterTitle = document.getElementById("chapterTitle");

  const chapterDetails = document.getElementById("chapterDetails");
  const selectedChapterTitle = document.getElementById("selectedChapterTitle");
  const chapterDescription = document.getElementById("chapterDescription");
  const chapterNotes = document.getElementById("chapterNotes");

  const saveChapterNotesBtn =
    document.getElementById("saveChapterNotesBtn");

  const completeChapterBtn =
    document.getElementById("completeChapterBtn");

  const chapterNoteMessage =
    document.getElementById("chapterNoteMessage");

  let selectedSubject = "";
  let selectedChapter = null;


  // ==========================================
  // SHOW SUBJECTS
  // ==========================================

  function showSubjects() {

    if (!classSelect || !subjectsElement) return;

    const selectedClass = classSelect.value;

    subjectsElement.innerHTML = "";

    if (!lessons[selectedClass]) {
      subjectsElement.innerHTML =
        "<p>Please select your class.</p>";
      return;
    }

    const classLessons = lessons[selectedClass];

    Object.keys(classLessons).forEach(subject => {

      const card = document.createElement("button");

      card.className = "subject-card";

      card.innerHTML = `
        <h3>${getSubjectIcon(subject)} ${subject}</h3>
        <p>${classLessons[subject].length} lessons</p>
      `;

      card.addEventListener("click", () => {
        showChapters(subject);
      });

      subjectsElement.appendChild(card);
    });

    // Close old chapter/details screens
    if (chapterSection) {
      chapterSection.classList.add("hidden");
    }

    if (chapterDetails) {
      chapterDetails.classList.add("hidden");
    }
  }


  // ==========================================
  // SUBJECT ICON
  // ==========================================

  function getSubjectIcon(subject) {

    const icons = {
      Maths: "📐",
      Physics: "⚡",
      Chemistry: "🧪",
      Biology: "🧬",
      "Social Science": "🌍",
      English: "📚"
    };

    return icons[subject] || "📖";
  }


  // ==========================================
  // SHOW CHAPTERS
  // ==========================================

  function showChapters(subject) {

    const selectedClass = classSelect.value;

    selectedSubject = subject;
    selectedChapter = null;

    const subjectLessons =
      lessons[selectedClass][subject];

    chapterTitle.textContent =
      `${getSubjectIcon(subject)} ${subject} — Class ${selectedClass}`;

    chaptersElement.innerHTML = "";

    subjectLessons.forEach((lesson, index) => {

      const button = document.createElement("button");

      button.className = "chapter-card";

      button.innerHTML = `
        <span class="chapter-number">
          ${index + 1}
        </span>

        <span class="chapter-info">
          <strong>${lesson[0]}</strong>
          <small>${lesson[1]}</small>
        </span>

        <span>➜</span>
      `;

      button.addEventListener("click", () => {
        showLesson(index);
      });

      chaptersElement.appendChild(button);
    });

    chapterSection.classList.remove("hidden");

    window.scrollTo({
      top: chapterSection.offsetTop - 20,
      behavior: "smooth"
    });
  }


  // ==========================================
  // SHOW LESSON
  // ==========================================

  function showLesson(index) {

    const selectedClass = classSelect.value;

    const lesson =
      lessons[selectedClass][selectedSubject][index];

    selectedChapter = index;

    selectedChapterTitle.textContent =
      `📖 ${lesson[0]}`;

    chapterDescription.textContent =
      lesson[1];

    // Load saved notes
    const noteKey =
      `studyBuddyNotes_${selectedClass}_${selectedSubject}_${index}`;

    chapterNotes.value =
      localStorage.getItem(noteKey) || "";

    chapterNoteMessage.textContent = "";

    chapterDetails.classList.remove("hidden");

    window.scrollTo({
      top: chapterDetails.offsetTop - 20,
      behavior: "smooth"
    });
  }


  // ==========================================
  // SAVE NOTES
  // ==========================================

  if (saveChapterNotesBtn) {

    saveChapterNotesBtn.addEventListener("click", () => {

      if (selectedChapter === null) return;

      const selectedClass = classSelect.value;

      const noteKey =
        `studyBuddyNotes_${selectedClass}_${selectedSubject}_${selectedChapter}`;

      localStorage.setItem(
        noteKey,
        chapterNotes.value
      );

      chapterNoteMessage.textContent =
        "✅ Notes saved successfully!";
    });
  }


  // ==========================================
  // MARK LESSON COMPLETE
  // ==========================================

  if (completeChapterBtn) {

    completeChapterBtn.addEventListener("click", () => {

      if (selectedChapter === null) return;

      const selectedClass = classSelect.value;

      const completeKey =
        `studyBuddyComplete_${selectedClass}_${selectedSubject}_${selectedChapter}`;

      localStorage.setItem(
        completeKey,
        "completed"
      );

      completeChapterBtn.textContent =
        "✅ Lesson Completed";

      completeChapterBtn.disabled = true;
    });
  }


  // ==========================================
  // BACK TO SUBJECTS
  // ==========================================

  const backToSubjectsBtn =
    document.getElementById("backToSubjectsBtn");

  if (backToSubjectsBtn) {

    backToSubjectsBtn.addEventListener("click", () => {

      chapterSection.classList.add("hidden");

      if (chapterDetails) {
        chapterDetails.classList.add("hidden");
      }

      window.scrollTo({
        top: subjectsElement.offsetTop - 20,
        behavior: "smooth"
      });
    });
  }


  // ==========================================
  // BACK TO CHAPTERS
  // ==========================================

  const backToChaptersBtn =
    document.getElementById("backToChaptersBtn");

  if (backToChaptersBtn) {

    backToChaptersBtn.addEventListener("click", () => {

      chapterDetails.classList.add("hidden");

      window.scrollTo({
        top: chapterSection.offsetTop - 20,
        behavior: "smooth"
      });
    });
  }


  // ==========================================
  // CLASS CHANGE
  // ==========================================

  if (classSelect) {

    classSelect.addEventListener("change", () => {

      localStorage.setItem(
        "studyBuddyClass",
        classSelect.value
      );

      showSubjects();
    });
  }


  // ==========================================
  // LOAD SAVED CLASS
  // ==========================================

  const savedClass =
    localStorage.getItem("studyBuddyClass");

  if (savedClass && lessons[savedClass]) {

    classSelect.value = savedClass;

  } else {

    // Default Class 9
    classSelect.value = "9";
  }


  // ==========================================
  // START
  // ==========================================

  showSubjects();

});
