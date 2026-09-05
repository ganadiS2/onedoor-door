/* ==================================================
   ONEDOOR :DOOR v2.0
   ================================================== */


/* ================= PAGE NAVIGATION ================= */

const pages = document.querySelectorAll(".page");

function showPage(pageName) {

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageName);

  if (target) {
    target.classList.add("active");
  }

  closeMobileMenu();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  updatePageTitle(pageName);
}


function updatePageTitle(pageName) {

  const titles = {
    home: "ONEDOOR :DOOR",
    members: "MEMBERS — ONEDOOR :DOOR",
    song: "SONG — ONEDOOR :DOOR",
    quiz: "QUIZ — ONEDOOR :DOOR",
    archive: "ARCHIVE — ONEDOOR :DOOR",
    birthday: "BIRTHDAY — ONEDOOR :DOOR",
    mydoor: "MY DOOR — ONEDOOR :DOOR"
  };

  document.title = titles[pageName] || "ONEDOOR :DOOR";
}


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton) {

  menuButton.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}


function closeMobileMenu() {

  if (!mobileNav || !menuButton) return;

  mobileNav.classList.remove("open");
  menuButton.classList.remove("active");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );
}


/* ================= HOME SCROLL ================= */

function scrollToToday() {

  const home = document.getElementById("home");

  if (!home) return;

  const today = document.getElementById("today");

  if (today) {

    today.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


/* ================= MEMBERS / MY DOOR ================= */

const memberStorageKey = "onedoorSelectedMember";

function selectMember(member) {

  localStorage.setItem(
    memberStorageKey,
    member
  );

  updateMyDoor();

  showPage("mydoor");
}


function updateMyDoor() {

  const selectedMember =
    localStorage.getItem(memberStorageKey);

  const memberElement =
    document.getElementById("selectedMember");

  const messageElement =
    document.getElementById("mydoorMessage");

  if (!memberElement || !messageElement) return;

  if (selectedMember) {

    memberElement.textContent =
      selectedMember;

    messageElement.textContent =
      `${selectedMember}와 함께하는 나만의 문이 열렸어요.`;

  } else {

    memberElement.textContent =
      "아직 선택하지 않았어요.";

    messageElement.textContent =
      "MEMBERS에서 좋아하는 멤버를 선택해보세요.";

  }

}


/* ================= SONG ================= */

const songs = [
  {
    title: "One and Only",
    description: "오늘의 문을 여는 첫 번째 노래."
  },
  {
    title: "But I Like You",
    description: "가볍게 시작하고 싶은 날의 노래."
  },
  {
    title: "Serenade",
    description: "조금 더 따뜻한 분위기가 필요한 날."
  },
  {
    title: "Earth, Wind & Fire",
    description: "기분을 확 끌어올리고 싶은 날."
  },
  {
    title: "Nice Guy",
    description: "오늘은 조금 자신감 있게."
  },
  {
    title: "Dangerous",
    description: "에너지 넘치는 하루를 위한 선택."
  },
  {
    title: "123-78",
    description: "리듬에 맞춰 문을 열어보세요."
  },
  {
    title: "Call Me",
    description: "조용히 음악을 즐기고 싶은 날."
  }
];


let currentSongIndex = 0;


function pickSong() {

  let nextIndex;

  do {
    nextIndex =
      Math.floor(
        Math.random() * songs.length
      );
  } while (
    songs.length > 1 &&
    nextIndex === currentSongIndex
  );

  currentSongIndex = nextIndex;

  const song = songs[currentSongIndex];

  const title =
    document.getElementById("songTitle");

  const description =
    document.getElementById("songDescription");

  const number =
    document.getElementById("songNumber");

  if (title) {
    title.textContent = song.title;
  }

  if (description) {
    description.textContent =
      song.description;
  }

  if (number) {

    number.textContent =
      String(currentSongIndex + 1).padStart(2, "0")
      + " / "
      + String(songs.length).padStart(2, "0");

  }

}


/* ================= QUIZ ================= */

const quizQuestions = [
  {
    question: "BOYNEXTDOOR의 공식 팬덤명은?",
    answers: [
      "ONEDOOR",
      "BND",
      "DOOR",
      "NEXTDOOR"
    ],
    correct: 0
  },

  {
    question: "BOYNEXTDOOR는 몇 명의 멤버로 구성되어 있을까요?",
    answers: [
      "4명",
      "5명",
      "6명",
      "7명"
    ],
    correct: 2
  },

  {
    question: "다음 중 BOYNEXTDOOR의 멤버가 아닌 사람은?",
    answers: [
      "성호",
      "리우",
      "태산",
      "민호"
    ],
    correct: 3
  },

  {
    question: "다음 중 BOYNEXTDOOR의 곡은?",
    answers: [
      "One and Only",
      "ONE MORE TIME",
      "Door Open",
      "My BOY"
    ],
    correct: 0
  },

  {
    question: "ONEDOOR :DOOR에서 멤버를 선택하면 저장되는 공간은?",
    answers: [
      "ARCHIVE",
      "MY DOOR",
      "SONG",
      "BIRTHDAY"
    ],
    correct: 1
  }
];


let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;


function loadQuiz() {

  const question =
    quizQuestions[quizIndex];

  const questionElement =
    document.getElementById("quizQuestion");

  const answersElement =
    document.getElementById("quizAnswers");

  const progressElement =
    document.getElementById("quizProgress");

  const progressFill =
    document.getElementById("progressFill");

  if (
    !questionElement ||
    !answersElement
  ) return;


  questionElement.textContent =
    question.question;


  answersElement.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "quiz-answer";

      button.innerHTML = `
        <span class="answer-number">
          ${String.fromCharCode(65 + index)}
        </span>
        <span>${answer}</span>
      `;

      button.addEventListener(
        "click",
        () => answerQuiz(index)
      );

      answersElement.appendChild(button);

    }
  );


  if (progressElement) {

    progressElement.textContent =
      `QUESTION ${String(quizIndex + 1).padStart(2, "0")} / ${String(quizQuestions.length).padStart(2, "0")}`;

  }


  if (progressFill) {

    const percent =
      ((quizIndex + 1) / quizQuestions.length) * 100;

    progressFill.style.width =
      `${percent}%`;

  }

}


function answerQuiz(selectedIndex) {

  if (quizAnswered) return;

  quizAnswered = true;

  const question =
    quizQuestions[quizIndex];

  const answerButtons =
    document.querySelectorAll(".quiz-answer");

  answerButtons.forEach(
    (button, index) => {

      button.disabled = true;

      if (index === question.correct) {
        button.classList.add("correct");
      }

      if (
        index === selectedIndex &&
        selectedIndex !== question.correct
      ) {
        button.classList.add("wrong");
      }

    }
  );


  if (
    selectedIndex === question.correct
  ) {
    quizScore++;
  }


  setTimeout(() => {

    quizIndex++;

    quizAnswered = false;

    if (
      quizIndex >= quizQuestions.length
    ) {
      showQuizResult();
    } else {
      loadQuiz();
    }

  }, 750);

}


function showQuizResult() {

  const content =
    document.getElementById("quizContent");

  const result =
    document.getElementById("quizResult");

  const score =
    document.getElementById("quizScore");

  const resultText =
    document.getElementById("quizResultText");


  if (content) {
    content.classList.add("hidden");
  }

  if (result) {
    result.classList.remove("hidden");
  }

  if (score) {

    score.textContent =
      `${quizScore} / ${quizQuestions.length}`;

  }


  if (resultText) {

    if (quizScore === 5) {

      resultText.textContent =
        "완벽해요. 원도어력 MAX!";

    } else if (quizScore >= 3) {

      resultText.textContent =
        "꽤 잘 알고 있네요. 조금만 더!";

    } else {

      resultText.textContent =
        "다시 한 번 도전해보세요!";

    }

  }

}


function restartQuiz() {

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;

  const content =
    document.getElementById("quizContent");

  const result =
    document.getElementById("quizResult");


  if (content) {
    content.classList.remove("hidden");
  }

  if (result) {
    result.classList.add("hidden");
  }

  loadQuiz();

}


/* ================= BIRTHDAY ================= */

const birthdays = [
  {
    name: "성호",
    month: 9,
    day: 4
  },
  {
    name: "리우",
    month: 10,
    day: 22
  },
  {
    name: "재현",
    month: 12,
    day: 4
  },
  {
    name: "태산",
    month: 8,
    day: 10
  },
  {
    name: "이한",
    month: 10,
    day: 20
  },
  {
    name: "운학",
    month: 11,
    day: 29
  }
];


function getNextBirthday() {

  const now = new Date();

  let candidates =
    birthdays.map(person => {

      let year =
        now.getFullYear();

      let date =
        new Date(
          year,
          person.month - 1,
          person.day,
          0,
          0,
          0
        );

      if (date < now) {
        date =
          new Date(
            year + 1,
            person.month - 1,
            person.day,
            0,
            0,
            0
          );
      }

      return {
        ...person,
        date
      };

    });


  candidates.sort(
    (a, b) =>
      a.date.getTime() -
      b.date.getTime()
  );


  return candidates[0];
}


function updateBirthday() {

  const next =
    getNextBirthday();

  const now =
    new Date();

  const difference =
    next.date.getTime() -
    now.getTime();


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        difference %
        (1000 * 60 * 60 * 24)
      ) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (
        difference %
        (1000 * 60 * 60)
      ) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (
        difference %
        (1000 * 60)
      ) /
      1000
    );


  setText(
    "days",
    String(days).padStart(2, "0")
  );

  setText(
    "hours",
    String(hours).padStart(2, "0")
  );

  setText(
    "minutes",
    String(minutes).padStart(2, "0")
  );

  setText(
    "seconds",
    String(seconds).padStart(2, "0")
  );


  setText(
    "birthdayMember",
    next.name
  );

  setText(
    "birthdayDate",
    `${String(next.month).padStart(2, "0")}.${String(next.day).padStart(2, "0")}`
  );


  const homeCountdown =
    document.getElementById(
      "homeCountdown"
    );

  if (homeCountdown) {

    homeCountdown.textContent =
      `D-${days}`;

  }

}


function setText(id, value) {

  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = value;
  }

}


/* ================= INITIALIZE ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateMyDoor();

    loadQuiz();

    updateBirthday();

    pickSong();

    setInterval(
      updateBirthday,
      1000
    );

  }
);
