/* =================================
   PAGE NAVIGATION
================================= */


function showPage(pageId) {

  document.querySelectorAll(".page").forEach(page => {

    page.classList.remove("active");

  });


  const target =
    document.getElementById(pageId);


  if (target) {

    target.classList.add("active");

  }


  document
    .querySelector(".nav")
    .classList.remove("open");


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}



/* =================================
   MOBILE MENU
================================= */


function toggleMenu() {

  document
    .querySelector(".nav")
    .classList.toggle("open");

}



/* =================================
   MY DOOR
================================= */


function selectMember(member) {

  localStorage.setItem(
    "myDoorMember",
    member
  );


  updateMyDoor();


  showPage("mydoor");

}


function updateMyDoor() {

  const savedMember =
    localStorage.getItem("myDoorMember");


  const memberTitle =
    document.getElementById("myMember");


  const memberText =
    document.getElementById("myMemberText");


  if (savedMember) {

    memberTitle.textContent =
      savedMember;


    memberText.textContent =
      `당신이 선택한 MY DOOR는 ${savedMember}입니다. 🚪`;

  }

}


updateMyDoor();



/* =================================
   TODAY'S SONG
================================= */


const songs = [

  {
    title: "돌아버리겠다",

    message:
      "오늘은 조금 신나게 시작해볼까요?"
  },


  {
    title: "One and Only",

    message:
      "오늘의 기분을 조금 더 끌어올려봐요."
  },


  {
    title: "Serenade",

    message:
      "오늘은 조금 여유롭게 음악을 들어봐요."
  },


  {
    title: "Earth, Wind & Fire",

    message:
      "오늘은 에너지 충전하는 날!"
  },


  {
    title: "But Sometimes",

    message:
      "조용히 음악에 집중하고 싶은 날."
  },


  {
    title: "Nice Guy",

    message:
      "오늘 하루도 가볍게 시작해봅시다."
  },


  {
    title: "오늘의 RANDOM DOOR",

    message:
      "어떤 노래든 오늘의 플레이리스트가 됩니다."
  }

];



function randomSong() {

  const randomIndex =
    Math.floor(
      Math.random() * songs.length
    );


  const song =
    songs[randomIndex];


  document
    .getElementById("songTitle")
    .textContent =
    song.title;


  document
    .getElementById("songMessage")
    .textContent =
    song.message;

}



/* =================================
   ONEDOOR QUIZ
================================= */


const quizData = [

  {

    question:
      "새로운 보넥도 콘텐츠가 올라왔다!",

    answers: [

      "바로 본다 👀",

      "알림부터 확인한다",

      "나중에 본다",

      "일단 저장한다"

    ]

  },


  {

    question:
      "덕질할 때 가장 좋아하는 것은?",

    answers: [

      "음악 🎵",

      "무대 🎤",

      "사진 📸",

      "콘텐츠 📺"

    ]

  },


  {

    question:
      "콘텐츠 하나를 보기 시작했는데...",

    answers: [

      "하나만 보고 끝!",

      "몇 개 더 본다",

      "계속 보게 된다",

      "시간이 사라졌다"

    ]

  },


  {

    question:
      "새 앨범이 나왔다!",

    answers: [

      "전곡 바로 듣기",

      "타이틀부터 듣기",

      "앨범 정보부터 확인",

      "일단 너무 좋음"

    ]

  },


  {

    question:
      "원도어에게 가장 중요한 것은?",

    answers: [

      "좋은 음악",

      "좋은 무대",

      "좋은 콘텐츠",

      "보넥도를 좋아하는 마음 💙"

    ]

  }

];


let currentQuestion = 0;

let score = 0;



function startQuiz() {

  currentQuestion = 0;

  score = 0;


  document
    .getElementById("quizStart")
    .classList.add("hidden");


  document
    .getElementById("quizResult")
    .classList.add("hidden");


  document
    .getElementById("quizArea")
    .classList.remove("hidden");


  showQuestion();

}



function showQuestion() {

  const data =
    quizData[currentQuestion];


  document
    .getElementById("questionNumber")
    .textContent =
    `${currentQuestion + 1} / ${quizData.length}`;


  document
    .getElementById("question")
    .textContent =
    data.question;


  const answers =
    document.getElementById("answers");


  answers.innerHTML = "";


  data.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");


      button.className =
        "answer";


      button.textContent =
        answer;


      button.onclick =
        function() {

          selectAnswer(index);

        };


      answers.appendChild(button);

    }
  );

}



function selectAnswer(index) {

  score +=
    (index + 1) * 5;


  currentQuestion++;


  if (
    currentQuestion <
    quizData.length
  ) {

    showQuestion();

  }

  else {

    showResult();

  }

}



function showResult() {

  document
    .getElementById("quizArea")
    .classList.add("hidden");


  document
    .getElementById("quizResult")
    .classList.remove("hidden");


  document
    .getElementById("resultScore")
    .textContent =
    `${score} POINTS`;


  let title;

  let message;


  if (score >= 90) {

    title =
      "💎 원도어 고인물";

    message =
      "당신의 원도어력이 상당합니다.";

  }


  else if (score >= 65) {

    title =
      "💙 찐 원도어";

    message =
      "보넥도를 향한 마음이 느껴집니다.";

  }


  else if (score >= 40) {

    title =
      "🚪 성장 중인 원도어";

    message =
      "앞으로 더 많은 문을 열어봅시다.";

  }


  else {

    title =
      "🌱 새싹 원도어";

    message =
      "이제부터 천천히 알아가면 되죠!";

  }


  document
    .getElementById("resultTitle")
    .textContent =
    title;


  document
    .getElementById("resultMessage")
    .textContent =
    message;

}



/* =================================
   BIRTHDAY D-DAY
================================= */


function calculateDday(
  month,
  day,
  elementId
) {

  const today =
    new Date();


  let birthday =
    new Date(
      today.getFullYear(),
      month - 1,
      day
    );


  if (birthday < today) {

    birthday =
      new Date(
        today.getFullYear() + 1,
        month - 1,
        day
      );

  }


  const difference =
    birthday.getTime() -
    today.getTime();


  const days =
    Math.ceil(
      difference /
      (1000 * 60 * 60 * 24)
    );


  const element =
    document.getElementById(elementId);


  if (days === 0) {

    element.textContent =
      "TODAY 🎂";

  }

  else {

    element.textContent =
      `D-${days}`;

  }

}



function updateBirthdays() {

  calculateDday(
    9,
    4,
    "dday-sungho"
  );


  calculateDday(
    10,
    22,
    "dday-riwoo"
  );


  calculateDday(
    12,
    4,
    "dday-jaehyun"
  );


  calculateDday(
    8,
    10,
    "dday-taesan"
  );


  calculateDday(
    10,
    20,
    "dday-leehan"
  );


  calculateDday(
    11,
    29,
    "dday-woonhak"
  );

}


updateBirthdays();