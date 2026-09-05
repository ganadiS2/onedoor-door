/* ==================================================
   ONEDOOR :DOOR
   script.js — v3.0
   ================================================== */


/* ==================================================
   PAGE NAVIGATION
   ================================================== */

function showPage(pageName) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageName);

  if (target) {
    target.classList.add("active");
  }

  // 모바일 메뉴 닫기
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenu) {
    mobileMenu.classList.remove("open");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* ==================================================
   MOBILE MENU
   ================================================== */

function toggleMobileMenu() {

  const mobileMenu =
    document.getElementById("mobileMenu");

  if (!mobileMenu) return;

  mobileMenu.classList.toggle("open");
}


/* ==================================================
   HOME → TODAY
   ================================================== */

function scrollToToday() {

  const today =
    document.getElementById("today");

  if (!today) return;

  today.scrollIntoView({
    behavior: "smooth"
  });
}


/* ==================================================
   MEMBER DATA
   ================================================== */

const members = [

  {
    name: "성호",
    birthday: "09.04"
  },

  {
    name: "리우",
    birthday: "10.22"
  },

  {
    name: "재현",
    birthday: "12.04"
  },

  {
    name: "태산",
    birthday: "08.10"
  },

  {
    name: "이한",
    birthday: "10.20"
  },

  {
    name: "운학",
    birthday: "11.29"
  }

];


/* ==================================================
   MY DOOR
   ================================================== */

const memberStorageKey =
  "onedoorSelectedMember";


function selectMember(memberName) {

  localStorage.setItem(
    memberStorageKey,
    memberName
  );

  updateMyDoor();

  updateHome();

  showPage("mydoor");
}


function updateMyDoor() {

  const selectedMember =
    localStorage.getItem(
      memberStorageKey
    );

  const memberName =
    document.getElementById(
      "selectedMemberName"
    );

  const memberMessage =
    document.getElementById(
      "selectedMemberMessage"
    );

  if (!selectedMember) {

    if (memberName) {
      memberName.textContent =
        "아직 멤버를 선택하지 않았어요.";
    }

    if (memberMessage) {
      memberMessage.textContent =
        "MEMBERS에서 좋아하는 멤버를 선택해보세요.";
    }

    return;
  }

  if (memberName) {
    memberName.textContent =
      selectedMember;
  }

  if (memberMessage) {
    memberMessage.textContent =
      `${selectedMember}의 DOOR가 열렸어요.`;
  }
}


/* ==================================================
   SONG DATA
   ================================================== */

const songs = [

  {
    title: "One and Only",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "But I Like You",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "Serenade",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "Earth, Wind & Fire",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "Nice Guy",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "Dangerous",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "123-78",
    description: "오늘의 ONEDOOR 추천곡"
  },

  {
    title: "Call Me",
    description: "오늘의 ONEDOOR 추천곡"
  }

];


let currentSongIndex = 0;


function pickSong() {

  currentSongIndex =
    Math.floor(
      Math.random() * songs.length
    );

  const song =
    songs[currentSongIndex];

  const songTitle =
    document.getElementById(
      "randomSongTitle"
    );

  const songDescription =
    document.getElementById(
      "randomSongDescription"
    );

  if (songTitle) {
    songTitle.textContent =
      song.title;
  }

  if (songDescription) {
    songDescription.textContent =
      song.description;
  }

  updateHome();
}


/* ==================================================
   QUIZ
   ================================================== */

const quizData = [

  {
    question:
      "BOYNEXTDOOR의 멤버는 몇 명일까요?",

    options: [
      "4명",
      "5명",
      "6명",
      "7명"
    ],

    answer: 2
  },

  {
    question:
      "BOYNEXTDOOR의 데뷔일은?",

    options: [
      "2022년 5월 30일",
      "2023년 5월 30일",
      "2023년 6월 1일",
      "2024년 5월 30일"
    ],

    answer: 1
  },

  {
    question:
      "BOYNEXTDOOR의 팬덤명은?",

    options: [
      "ONEDOOR",
      "BND",
      "DOOR",
      "NEXT"
    ],

    answer: 0
  },

  {
    question:
      "다음 중 BOYNEXTDOOR의 멤버가 아닌 사람은?",

    options: [
      "성호",
      "태산",
      "이한",
      "민규"
    ],

    answer: 3
  },

  {
    question:
      "BOYNEXTDOOR의 첫 번째 싱글 앨범은?",

    options: [
      "WHO!",
      "HOW?",
      "19.99",
      "WHY.."
    ],

    answer: 0
  }

];


let currentQuiz = 0;
let quizScore = 0;


function loadQuiz() {

  const question =
    document.getElementById(
      "quizQuestion"
    );

  const options =
    document.getElementById(
      "quizOptions"
    );

  const result =
    document.getElementById(
      "quizResult"
    );

  if (!question || !options) return;

  if (result) {
    result.textContent = "";
  }

  const quiz =
    quizData[currentQuiz];

  question.textContent =
    quiz.question;

  options.innerHTML = "";

  quiz.options.forEach(
    (option, index) => {

      const button =
        document.createElement("button");

      button.textContent =
        option;

      button.className =
        "quiz-option";

      button.addEventListener(
        "click",
        () => checkAnswer(index)
      );

      options.appendChild(button);

    }
  );
}


function checkAnswer(selectedIndex) {

  const quiz =
    quizData[currentQuiz];

  const options =
    document.querySelectorAll(
      ".quiz-option"
    );

  options.forEach(button => {
    button.disabled = true;
  });

  if (selectedIndex === quiz.answer) {
    quizScore++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {

    setTimeout(() => {
      loadQuiz();
    }, 600);

  } else {

    showQuizResult();

  }
}


function showQuizResult() {

  const question =
    document.getElementById(
      "quizQuestion"
    );

  const options =
    document.getElementById(
      "quizOptions"
    );

  const result =
    document.getElementById(
      "quizResult"
    );

  if (question) {
    question.textContent =
      "QUIZ COMPLETE!";
  }

  if (options) {
    options.innerHTML = "";
  }

  if (result) {

    result.textContent =
      `${quizScore} / ${quizData.length} 정답!`;

  }
}


function resetQuiz() {

  currentQuiz = 0;
  quizScore = 0;

  loadQuiz();
}


/* ==================================================
   BIRTHDAY
   ================================================== */

function getNextBirthday() {

  const today =
    new Date();

  const currentYear =
    today.getFullYear();

  let upcoming = null;


  members.forEach(member => {

    const [month, day] =
      member.birthday
        .split(".")
        .map(Number);

    let birthday =
      new Date(
        currentYear,
        month - 1,
        day
      );

    if (birthday < today) {

      birthday =
        new Date(
          currentYear + 1,
          month - 1,
          day
        );

    }

    if (
      !upcoming ||
      birthday < upcoming.date
    ) {

      upcoming = {
        name: member.name,
        month,
        day,
        date: birthday
      };

    }

  });

  return upcoming;
}


function updateBirthday() {

  const birthday =
    getNextBirthday();

  if (!birthday) return;


  const member =
    document.getElementById(
      "birthdayMember"
    );

  const date =
    document.getElementById(
      "birthdayDate"
    );

  const countdown =
    document.getElementById(
      "birthdayCountdown"
    );


  if (member) {
    member.textContent =
      birthday.name;
  }

  if (date) {

    date.textContent =
      `${String(birthday.month).padStart(2, "0")}.${String(birthday.day).padStart(2, "0")}`;

  }


  if (countdown) {

    const now =
      new Date();

    const difference =
      birthday.date - now;

    const days =
      Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
      );

    countdown.textContent =
      `D-${days}`;

  }
}


/* ==================================================
   v3.0 HOME UPDATE
   ================================================== */

function updateHome() {


  /* ---------- TODAY'S SONG ---------- */

  const homeSongTitle =
    document.getElementById(
      "homeSongTitle"
    );

  const homeSongDescription =
    document.getElementById(
      "homeSongDescription"
    );

  const currentSong =
    songs[currentSongIndex];


  if (
    homeSongTitle &&
    currentSong
  ) {

    homeSongTitle.textContent =
      currentSong.title;

  }


  if (
    homeSongDescription &&
    currentSong
  ) {

    homeSongDescription.textContent =
      currentSong.description;

  }


  /* ---------- NEXT BIRTHDAY ---------- */

  const nextBirthday =
    getNextBirthday();


  const homeBirthdayMember =
    document.getElementById(
      "homeBirthdayMember"
    );

  const homeBirthdayDate =
    document.getElementById(
      "homeBirthdayDate"
    );

  const homeCountdown =
    document.getElementById(
      "homeCountdown"
    );


  if (nextBirthday) {

    if (homeBirthdayMember) {

      homeBirthdayMember.textContent =
        nextBirthday.name;

    }


    if (homeBirthdayDate) {

      homeBirthdayDate.textContent =
        `${String(nextBirthday.month).padStart(2, "0")}.${String(nextBirthday.day).padStart(2, "0")} birthday`;

    }


    if (homeCountdown) {

      const now =
        new Date();

      const difference =
        nextBirthday.date - now;

      const days =
        Math.ceil(
          difference /
          (1000 * 60 * 60 * 24)
        );

      homeCountdown.textContent =
        `D-${days}`;

    }

  }


  /* ---------- YOUR DOOR ---------- */

  const selectedMember =
    localStorage.getItem(
      memberStorageKey
    );


  const homeSelectedMember =
    document.getElementById(
      "homeSelectedMember"
    );

  const homeMyDoorMessage =
    document.getElementById(
      "homeMyDoorMessage"
    );


  if (selectedMember) {

    if (homeSelectedMember) {

      homeSelectedMember.textContent =
        `${selectedMember}'s DOOR`;

    }


    if (homeMyDoorMessage) {

      homeMyDoorMessage.textContent =
        `${selectedMember}와 함께하는 나만의 문이 열려 있어요.`;

    }

  } else {

    if (homeSelectedMember) {

      homeSelectedMember.textContent =
        "아직 당신의 DOOR가 없어요.";

    }


    if (homeMyDoorMessage) {

      homeMyDoorMessage.innerHTML =
        "좋아하는 멤버를 선택하고<br>나만의 문을 열어보세요.";

    }

  }

}


/* ==================================================
   INITIALIZE
   ================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateMyDoor();

    loadQuiz();

    updateBirthday();

    pickSong();

    updateHome();

  }
);