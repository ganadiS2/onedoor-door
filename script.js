/* ==================================================
   ONEDOOR :DOOR v3.0
   ================================================== */


/* ================= PAGE ================= */

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
}


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton) {

  menuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("open");

    const isOpen =
      mobileNav.classList.contains("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  });

}


function closeMobileMenu() {

  if (!mobileNav) return;

  mobileNav.classList.remove("open");

  if (menuButton) {
    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );
  }
}


/* ================= HOME ================= */

function scrollToToday() {

  const today =
    document.getElementById("today");

  if (!today) return;

  today.scrollIntoView({
    behavior: "smooth"
  });
}


/* ================= MEMBERS ================= */

const memberMessages = {

  "성호":
    "나만의 문에 성호가 들어왔어요.",

  "리우":
    "나만의 문에 리우가 들어왔어요.",

  "재현":
    "나만의 문에 재현이 들어왔어요.",

  "태산":
    "나만의 문에 태산이 들어왔어요.",

  "이한":
    "나만의 문에 이한이 들어왔어요.",

  "운학":
    "나만의 문에 운학이 들어왔어요."

};


function selectMember(member) {

  localStorage.setItem(
    "onedoorSelectedMember",
    member
  );

  updateMyDoor();

  showPage("mydoor");
}


function updateMyDoor() {

  const member =
    localStorage.getItem(
      "onedoorSelectedMember"
    );

  const selectedMember =
    document.getElementById("selectedMember");

  const mydoorMessage =
    document.getElementById("mydoorMessage");

  const homeSelectedMember =
    document.getElementById(
      "homeSelectedMember"
    );

  const homeMyDoorMessage =
    document.getElementById(
      "homeMyDoorMessage"
    );


  if (member) {

    if (selectedMember) {
      selectedMember.textContent = member;
    }

    if (mydoorMessage) {
      mydoorMessage.textContent =
        memberMessages[member] ||
        "나만의 문이 열렸어요.";
    }

    if (homeSelectedMember) {
      homeSelectedMember.textContent =
        member;
    }

    if (homeMyDoorMessage) {
      homeMyDoorMessage.textContent =
        "나만의 문이 열려 있어요.";
    }

  } else {

    if (selectedMember) {
      selectedMember.textContent =
        "아직 선택하지 않았어요.";
    }

    if (mydoorMessage) {
      mydoorMessage.textContent =
        "MEMBERS에서 좋아하는 멤버를 선택해보세요.";
    }

    if (homeSelectedMember) {
      homeSelectedMember.textContent =
        "아직 선택하지 않았어요";
    }

    if (homeMyDoorMessage) {
      homeMyDoorMessage.textContent =
        "좋아하는 멤버를 선택해보세요.";
    }

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
    description: "가볍게 하루를 시작하고 싶은 날."
  },

  {
    title: "Serenade",
    description: "조금 더 따뜻한 분위기가 필요한 날."
  },

  {
    title: "Earth, Wind & Fire",
    description: "에너지 충전이 필요한 날."
  },

  {
    title: "Nice Guy",
    description: "기분 좋은 자신감이 필요한 날."
  },

  {
    title: "Dangerous",
    description: "조금 색다른 분위기를 원한다면."
  },

  {
    title: "123-78",
    description: "리듬에 몸을 맡기고 싶은 날."
  },

  {
    title: "Call Me",
    description: "누군가와 이야기를 나누고 싶은 날."
  }

];


let currentSong = -1;


function pickSong() {

  let nextSong;

  do {

    nextSong =
      Math.floor(
        Math.random() * songs.length
      );

  } while (
    songs.length > 1 &&
    nextSong === currentSong
  );

  currentSong = nextSong;

  const song = songs[currentSong];

  const title =
    document.getElementById("songTitle");

  const description =
    document.getElementById(
      "songDescription"
    );

  const number =
    document.getElementById("songNumber");

  const homeTitle =
    document.getElementById(
      "homeSongTitle"
    );

  const homeDescription =
    document.getElementById(
      "homeSongDescription"
    );


  if (title) {
    title.textContent = song.title;
  }

  if (description) {
    description.textContent =
      song.description;
  }

  if (number) {
    number.textContent =
      String(currentSong + 1).padStart(2, "0") +
      " / " +
      String(songs.length).padStart(2, "0");
  }

  if (homeTitle) {
    homeTitle.textContent = song.title;
  }

  if (homeDescription) {
    homeDescription.textContent =
      song.description;
  }
}


/* ================= QUIZ ================= */

const quizData = [

  {
    question:
      "BOYNEXTDOOR의 공식 팬덤명은?",

    answers: [
      "ONEDOOR",
      "BND",
      "DOOR",
      "NEXT"
    ],

    correct: 0
  },

  {
    question:
      "BOYNEXTDOOR는 몇 명의 멤버로 구성되어 있을까?",

    answers: [
      "4명",
      "5명",
      "6명",
      "7명"
    ],

    correct: 2
  },

  {
    question:
      "다음 중 BOYNEXTDOOR의 멤버가 아닌 사람은?",

    answers: [
      "성호",
      "리우",
      "태산",
      "민준"
    ],

    correct: 3
  },

  {
    question:
      "다음 중 ONEDOOR :DOOR에 있는 메뉴는?",

    answers: [
      "MY DOOR",
      "MY ROOM",
      "MY STAR",
      "MY BND"
    ],

    correct: 0
  },

  {
    question:
      "ONEDOOR :DOOR의 콘셉트는?",

    answers: [
      "작은 카페",
      "원도어를 위한 작은 공간",
      "온라인 쇼핑몰",
      "게임 센터"
    ],

    correct: 1
  }

];


let quizIndex = 0;
let quizScoreValue = 0;


function loadQuiz() {

  const question =
    quizData[quizIndex];

  const questionElement =
    document.getElementById(
      "quizQuestion"
    );

  const answersElement =
    document.getElementById(
      "quizAnswers"
    );

  const progressElement =
    document.getElementById(
      "quizProgress"
    );

  const progressFill =
    document.getElementById(
      "progressFill"
    );


  if (!questionElement ||
      !answersElement) {
    return;
  }


  questionElement.textContent =
    question.question;


  answersElement.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "quiz-answer";

      button.textContent =
        answer;

      button.onclick = () =>
        answerQuiz(index);

      answersElement.appendChild(
        button
      );

    }
  );


  if (progressElement) {

    progressElement.textContent =
      "QUESTION " +
      String(quizIndex + 1).padStart(2, "0") +
      " / " +
      String(quizData.length).padStart(2, "0");

  }


  if (progressFill) {

    progressFill.style.width =
      ((quizIndex + 1) /
      quizData.length * 100) +
      "%";

  }

}


function answerQuiz(answerIndex) {

  if (
    answerIndex ===
    quizData[quizIndex].correct
  ) {

    quizScoreValue++;

  }


  quizIndex++;


  if (
    quizIndex >=
    quizData.length
  ) {

    showQuizResult();

  } else {

    loadQuiz();

  }

}


function showQuizResult() {

  const content =
    document.getElementById(
      "quizContent"
    );

  const result =
    document.getElementById(
      "quizResult"
    );

  const score =
    document.getElementById(
      "quizScore"
    );

  const resultText =
    document.getElementById(
      "quizResultText"
    );


  if (content) {
    content.classList.add("hidden");
  }

  if (result) {
    result.classList.remove("hidden");
  }

  if (score) {

    score.textContent =
      quizScoreValue +
      " / " +
      quizData.length;

  }


  if (resultText) {

    if (quizScoreValue === 5) {

      resultText.textContent =
        "완벽한 원도어! 🚪";

    } else if (quizScoreValue >= 3) {

      resultText.textContent =
        "꽤 잘 알고 있네요!";

    } else {

      resultText.textContent =
        "다시 한 번 도전해보세요!";

    }

  }

}


function restartQuiz() {

  quizIndex = 0;
  quizScoreValue = 0;

  const content =
    document.getElementById(
      "quizContent"
    );

  const result =
    document.getElementById(
      "quizResult"
    );


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

  let closest = null;
  let closestDate = null;


  birthdays.forEach(member => {

    let year =
      now.getFullYear();

    let date =
      new Date(
        year,
        member.month - 1,
        member.day,
        0,
        0,
        0
      );


    if (date <= now) {

      date =
        new Date(
          year + 1,
          member.month - 1,
          member.day,
          0,
          0,
          0
        );

    }


    if (
      closestDate === null ||
      date < closestDate
    ) {

      closest = member;
      closestDate = date;

    }

  });


  return {
    member: closest,
    date: closestDate
  };

}


function updateBirthday() {

  const result =
    getNextBirthday();

  if (!result.member) return;


  const now =
    new Date();

  const difference =
    result.date - now;


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      difference /
      (1000 * 60 * 60)
    ) % 24;

  const minutes =
    Math.floor(
      difference /
      (1000 * 60)
    ) % 60;

  const seconds =
    Math.floor(
      difference /
      1000
    ) % 60;


  setText(
    "days",
    String(days)
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
    result.member.name.toUpperCase()
  );


  setText(
    "birthdayDate",

    String(result.member.month)
      .padStart(2, "0") +
    "." +
    String(result.member.day)
      .padStart(2, "0")
  );


  setText(
    "homeBirthdayMember",
    result.member.name.toUpperCase()
  );


  setText(
    "homeBirthdayDate",

    String(result.member.month)
      .padStart(2, "0") +
    "." +
    String(result.member.day)
      .padStart(2, "0")
  );


  setText(
    "homeCountdown",
    "D-" + days
  );

}


function setText(id, value) {

  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = value;
  }

}


/* ================= START ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateMyDoor();

    loadQuiz();

    pickSong();

    updateBirthday();

    setInterval(
      updateBirthday,
      1000
    );

  }
);