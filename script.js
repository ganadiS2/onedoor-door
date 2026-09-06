/* ==================================================
   ONEDOOR :DOOR v2.1
   ================================================== */


/* ================= PAGE ================= */

function showPage(pageName) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageName);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  closeMobileMenu();

  if (pageName === "birthday") {
    updateBirthday();
  }

  if (pageName === "mydoor") {
    updateMyDoor();
  }
}


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton) {

  menuButton.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}


function closeMobileMenu() {

  if (!mobileNav || !menuButton) return;

  mobileNav.classList.remove("open");

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );
}


/* ================= HOME ================= */

function scrollToToday() {

  const today = document.getElementById("today");

  if (today) {
    today.scrollIntoView({
      behavior: "smooth"
    });
  }

}


/* ================= MEMBERS ================= */

const MEMBER_KEY = "onedoorSelectedMember";

function selectMember(name) {

  localStorage.setItem(
    MEMBER_KEY,
    name
  );

  updateMyDoor();

  alert(
    `${name}이(가) MY DOOR의 주인으로 저장됐어요! 🚪`
  );

  showPage("mydoor");
}


function updateMyDoor() {

  const selectedMember =
    document.getElementById("selectedMember");

  const message =
    document.getElementById("mydoorMessage");

  if (!selectedMember || !message) return;

  const saved =
    localStorage.getItem(MEMBER_KEY);

  if (!saved) {

    selectedMember.textContent =
      "아직 선택하지 않았어요.";

    message.textContent =
      "MEMBERS에서 좋아하는 멤버를 선택해보세요.";

    return;
  }

  selectedMember.textContent =
    saved;

  message.textContent =
    `${saved}와 함께하는 나만의 DOOR.`;
}


/* ================= SONG ================= */

/*
  공식 디스코그래피 기준으로 정리한
  BOYNEXTDOOR 발매곡 목록.

  Live Ver. / Instrumental 등은 제외하고
  일반 발매곡과 일본어/영어 버전을 포함.
*/

const songs = [

  /* WHO! */
  {
    title: "But I Like You",
    description: "BOYNEXTDOOR의 시작을 연 첫 번째 이야기."
  },
  {
    title: "One and Only",
    description: "당당하게 나만의 방식으로 문을 열어보는 노래."
  },
  {
    title: "Serenade",
    description: "좋아하는 마음을 솔직하게 꺼내놓는 순간."
  },

  /* WHY.. */
  {
    title: "Crying",
    description: "청춘의 감정을 조금 더 깊게 들여다보는 노래."
  },
  {
    title: "But Sometimes",
    description: "복잡한 마음을 솔직하게 풀어낸 이야기."
  },
  {
    title: "ABCDLOVE",
    description: "사랑을 장난스럽고 귀엽게 표현한 노래."
  },

  /* HOW? */
  {
    title: "OUR",
    description: "우리라는 관계를 바라보는 따뜻한 이야기."
  },
  {
    title: "Amnesia",
    description: "잊고 싶은 기억과 남아 있는 감정."
  },
  {
    title: "So let's go see the stars",
    description: "별을 보러 가고 싶은 밤에 어울리는 노래."
  },
  {
    title: "Earth, Wind & Fire",
    description: "BOYNEXTDOOR의 에너지로 가득한 대표곡."
  },
  {
    title: "l i f e i s c o o l",
    description: "조금은 느긋하게 하루를 보내고 싶은 날."
  },
  {
    title: "Dear. My Darling",
    description: "소중한 사람에게 건네는 다정한 이야기."
  },
  {
    title: "Earth, Wind & Fire (English Ver.)",
    description: "Earth, Wind & Fire의 English Ver."
  },

  /* AND, */
  {
    title: "One and Only (Japanese Ver.)",
    description: "One and Only Japanese Ver."
  },
  {
    title: "Earth, Wind & Fire (Japanese Ver.)",
    description: "Earth, Wind & Fire Japanese Ver."
  },
  {
    title: "But Sometimes (Japanese Ver.)",
    description: "But Sometimes Japanese Ver."
  },
  {
    title: "GOOD DAY",
    description: "오늘을 조금 더 좋은 날로 만들어주는 노래."
  },

  /* 19.99 */
  {
    title: "Dangerous",
    description: "강렬한 에너지로 분위기를 바꾸고 싶은 날."
  },
  {
    title: "Gonna Be A Rock",
    description: "청춘의 자유로운 에너지를 담은 노래."
  },
  {
    title: "Nice Guy",
    description: "유쾌하고 자신감 있는 매력으로 가득한 노래."
  },
  {
    title: "20",
    description: "스무 살을 앞둔 청춘의 감정을 담은 노래."
  },
  {
    title: "Call Me",
    description: "보고 싶은 사람에게 먼저 연락하고 싶은 날."
  },
  {
    title: "Nice Guy (English Ver.)",
    description: "Nice Guy English Ver."
  },

  /* 2025 single */
  {
    title: "IF I SAY, I LOVE YOU",
    description: "좋아한다는 말을 솔직하게 전하고 싶은 날."
  },

  {
    title: "오늘만 I LOVE YOU (Japanese Ver.)",
    description: "오늘만 I LOVE YOU Japanese Ver."
  },

  /* No Genre */
  {
    title: "123-78",
    description: "No Genre의 시작을 알리는 트랙."
  },
  {
    title: "I Feel Good",
    description: "기분을 확 끌어올리고 싶은 날."
  },
  {
    title: "Step By Step",
    description: "천천히라도 앞으로 나아가는 이야기."
  },
  {
    title: "Is That True?",
    description: "복잡한 관계 속에서 진짜 마음을 묻는 노래."
  },
  {
    title: "Next Mistake",
    description: "실수와 청춘의 이야기를 담은 노래."
  },
  {
    title: "I Feel Good (English Ver.)",
    description: "I Feel Good English Ver."
  },

  /* BOYLIFE */
  {
    title: "Count To Love",
    description: "BOYLIFE의 일본 오리지널 타이틀곡."
  },
  {
    title: "I Feel Good (Japanese Ver.)",
    description: "I Feel Good Japanese Ver."
  },
  {
    title: "Nice Guy (Japanese Ver.)",
    description: "Nice Guy Japanese Ver."
  },
  {
    title: "Dangerous (Japanese Ver.)",
    description: "Dangerous Japanese Ver."
  },

  /* The Action */
  {
    title: "Live In Paris",
    description: "The Action의 첫 번째 트랙."
  },
  {
    title: "Hollywood Action",
    description: "영화처럼 강렬한 순간을 담은 노래."
  },
  {
    title: "JAM!",
    description: "신나게 분위기를 즐기고 싶은 날."
  },
  {
    title: "Bathroom",
    description: "The Action 수록곡."
  },
  {
    title: "As Time Goes By",
    description: "시간이 흘러도 남는 마음에 관한 이야기."
  },

  /* HOME */
  {
    title: "06070",
    description: "BOYNEXTDOOR 1st Studio Album HOME의 시작."
  },
  {
    title: "VIRAL",
    description: "HOME에 수록된 강렬한 에너지의 트랙."
  },
  {
    title: "ddok ddok ddok",
    description: "톡톡 튀는 매력이 느껴지는 HOME 수록곡."
  },
  {
    title: "ADIOS!",
    description: "시원하게 작별을 말하고 싶은 순간."
  },
  {
    title: "Upside Down",
    description: "일상을 뒤집어 보는 듯한 HOME 수록곡."
  },
  {
    title: "DIVE",
    description: "망설이지 않고 뛰어들고 싶은 순간."
  },
  {
    title: "Forever You",
    description: "오래도록 함께하고 싶은 마음을 담은 노래."
  },
  {
    title: "I Wonder",
    description: "궁금하고 복잡한 마음을 들여다보는 노래."
  },
  {
    title: "I Wonder, Always",
    description: "HOME CD Only 수록곡."
  },

  /* Latest */
  {
    title: "SAY CHEESE!",
    description: "카메라 앞에서 웃어버리고 싶은 순간."
  },
  {
    title: "Boom Boom Boom",
    description: "2026년 공개된 BOYNEXTDOOR의 최신 일본 디지털 싱글."
  }

];


let lastSongIndex = -1;


function pickSong() {

  if (songs.length === 0) return;

  let index;

  do {
    index =
      Math.floor(Math.random() * songs.length);
  } while (
    songs.length > 1 &&
    index === lastSongIndex
  );

  lastSongIndex = index;

  const song = songs[index];

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

    const current =
      String(index + 1).padStart(2, "0");

    number.textContent =
      `${current} / ${songs.length}`;
  }

}


/* ================= ARCHIVE ================= */

const archiveContent = {

  beginning: `
    <p class="section-label">01 / BEGINNING</p>
    <h2>OPEN THE DOOR</h2>
    <p class="detail-sub">
      BOYNEXTDOOR의 여정을 작은 타임라인으로 만나보세요.
    </p>

    <div class="timeline">

      <div class="timeline-item">
        <strong>2023.05.30</strong>
        <span>1st Single 『WHO!』</span>
      </div>

      <div class="timeline-item">
        <strong>2023.09.04</strong>
        <span>1st EP 『WHY..』</span>
      </div>

      <div class="timeline-item">
        <strong>2024.04.15</strong>
        <span>2nd EP 『HOW?』</span>
      </div>

      <div class="timeline-item">
        <strong>2024.07.10</strong>
        <span>JP 1st Single 『AND,』</span>
      </div>

      <div class="timeline-item">
        <strong>2024.09.09</strong>
        <span>3rd EP 『19.99』</span>
      </div>

      <div class="timeline-item">
        <strong>2025.05.13</strong>
        <span>4th EP 『No Genre』</span>
      </div>

      <div class="timeline-item">
        <strong>2025.10.20</strong>
        <span>5th EP 『The Action』</span>
      </div>

      <div class="timeline-item">
        <strong>2026.06.08</strong>
        <span>1st Studio Album 『HOME』</span>
      </div>

      <div class="timeline-item">
        <strong>2026.08.18</strong>
        <span>JP 2nd Digital Single 『Boom Boom Boom』</span>
      </div>

    </div>
  `,


  music: `
    <p class="section-label">02 / MUSIC</p>
    <h2>OUR PLAYLIST</h2>
    <p class="detail-sub">
      지금까지 발매된 BOYNEXTDOOR의 음악을 앨범별로 정리했어요.
    </p>

    <div class="album-list">

      <details class="album">
        <summary>WHO! — 2023.05.30</summary>
        <div class="track-list">
          <div>01. But I Like You</div>
          <div>02. One and Only</div>
          <div>03. Serenade</div>
        </div>
      </details>

      <details class="album">
        <summary>WHY.. — 2023.09.04</summary>
        <div class="track-list">
          <div>01. But I Like You</div>
          <div>02. One and Only</div>
          <div>03. Serenade</div>
          <div>04. Crying</div>
          <div>05. But Sometimes</div>
          <div>06. ABCDLOVE</div>
        </div>
      </details>

      <details class="album">
        <summary>HOW? — 2024.04.15</summary>
        <div class="track-list">
          <div>01. OUR</div>
          <div>02. Amnesia</div>
          <div>03. So let's go see the stars</div>
          <div>04. Earth, Wind & Fire</div>
          <div>05. l i f e i s c o o l</div>
          <div>06. Dear. My Darling</div>
          <div>07. Earth, Wind & Fire (English Ver.)</div>
        </div>
      </details>

      <details class="album">
        <summary>AND, — 2024.07.10</summary>
        <div class="track-list">
          <div>01. One and Only (Japanese Ver.)</div>
          <div>02. Earth, Wind & Fire (Japanese Ver.)</div>
          <div>03. But Sometimes (Japanese Ver.)</div>
          <div>04. GOOD DAY</div>
        </div>
      </details>

      <details class="album">
        <summary>19.99 — 2024.09.09</summary>
        <div class="track-list">
          <div>01. Dangerous</div>
          <div>02. Gonna Be A Rock</div>
          <div>03. SKIT</div>
          <div>04. Nice Guy</div>
          <div>05. 20</div>
          <div>06. Call Me</div>
          <div>07. Nice Guy (English Ver.)</div>
        </div>
      </details>

      <details class="album">
        <summary>No Genre — 2025.05.13</summary>
        <div class="track-list">
          <div>01. 123-78</div>
          <div>02. I Feel Good</div>
          <div>03. Step By Step</div>
          <div>04. Is That True?</div>
          <div>05. Next Mistake</div>
          <div>06. IF I SAY, I LOVE YOU</div>
          <div>07. I Feel Good (English Ver.)</div>
        </div>
      </details>

      <details class="album">
        <summary>BOYLIFE — 2025.08.20</summary>
        <div class="track-list">
          <div>01. Count To Love</div>
          <div>02. I Feel Good (Japanese Ver.)</div>
          <div>03. Nice Guy (Japanese Ver.)</div>
          <div>04. Dangerous (Japanese Ver.)</div>
        </div>
      </details>

      <details class="album">
        <summary>The Action — 2025.10.20</summary>
        <div class="track-list">
          <div>01. Live In Paris</div>
          <div>02. Hollywood Action</div>
          <div>03. JAM!</div>
          <div>04. Bathroom</div>
          <div>05. As Time Goes By</div>
        </div>
      </details>

      <details class="album">
        <summary>HOME — 2026.06.08</summary>
        <div class="track-list">
          <div>01. 06070</div>
          <div>02. VIRAL</div>
          <div>03. ddok ddok ddok</div>
          <div>04. ADIOS!</div>
          <div>05. Upside Down</div>
          <div>06. DIVE</div>
          <div>07. Forever You</div>
          <div>08. I Wonder</div>
          <div>09. I Wonder, Always (CD Only)</div>
        </div>
      </details>

    </div>
  `,


  moment: `
    <p class="section-label">03 / MOMENT</p>
    <h2>ONEDOOR MOMENTS</h2>
    <p class="detail-sub">
      나에게 특별했던 BOYNEXTDOOR의 순간을 이 브라우저에 남겨보세요.
    </p>

    <div class="memory-form">

      <input
        id="memoryTitle"
        type="text"
        maxlength="40"
        placeholder="기억의 제목"
      >

      <textarea
        id="memoryText"
        maxlength="300"
        placeholder="어떤 순간이었나요?"
      ></textarea>

      <button onclick="saveMemory()">
        SAVE MEMORY
      </button>

    </div>

    <div id="savedMemory"></div>
  `,


  next: `
    <p class="section-label">04 / NEXT</p>
    <h2>MORE TO COME</h2>

    <p class="detail-sub">
      ONEDOOR :DOOR는 계속 열려 있어요.
    </p>

    <div class="timeline">

      <div class="timeline-item">
        <strong>02.1</strong>
        <span>전체 발매곡 랜덤 추천 + ARCHIVE 활성화</span>
      </div>

      <div class="timeline-item">
        <strong>NEXT</strong>
        <span>MEMBERS 기능 확장</span>
      </div>

      <div class="timeline-item">
        <strong>NEXT</strong>
        <span>QUIZ 콘텐츠 확장</span>
      </div>

      <div class="timeline-item">
        <strong>NEXT</strong>
        <span>MY DOOR 개인화</span>
      </div>

    </div>
  `

};


function openArchive(type) {

  const detail =
    document.getElementById("archiveDetail");

  const content =
    document.getElementById("archiveContent");

  if (!detail || !content) return;

  content.innerHTML =
    archiveContent[type] || "";

  detail.classList.remove("hidden");

  if (type === "moment") {
    loadMemory();
  }

  detail.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


function closeArchive() {

  const detail =
    document.getElementById("archiveDetail");

  if (detail) {
    detail.classList.add("hidden");
  }

}


/* ================= MEMORY ================= */

const MEMORY_KEY =
  "onedoorDoorMemory";


function saveMemory() {

  const title =
    document.getElementById("memoryTitle");

  const text =
    document.getElementById("memoryText");

  if (!title || !text) return;

  const titleValue =
    title.value.trim();

  const textValue =
    text.value.trim();

  if (!titleValue || !textValue) {

    alert(
      "제목과 내용을 모두 적어주세요!"
    );

    return;
  }

  const memory = {
    title: titleValue,
    text: textValue,
    date: new Date().toLocaleDateString("ko-KR")
  };

  localStorage.setItem(
    MEMORY_KEY,
    JSON.stringify(memory)
  );

  title.value = "";
  text.value = "";

  loadMemory();

}


function loadMemory() {

  const container =
    document.getElementById("savedMemory");

  if (!container) return;

  const saved =
    localStorage.getItem(MEMORY_KEY);

  if (!saved) {

    container.innerHTML = "";

    return;
  }

  const memory =
    JSON.parse(saved);

  container.innerHTML = `
    <div class="saved-memory">
      <strong>${escapeHTML(memory.title)}</strong>
      <p>${escapeHTML(memory.text)}</p>
      <small>${escapeHTML(memory.date)}</small>
    </div>
  `;
}


function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* ================= BIRTHDAY ================= */

const members = [
  {
    name: "SUNGHO",
    korean: "성호",
    month: 9,
    day: 4
  },
  {
    name: "TAESAN",
    korean: "태산",
    month: 8,
    day: 10
  },
  {
    name: "LEEHAN",
    korean: "이한",
    month: 10,
    day: 20
  },
  {
    name: "RIWOO",
    korean: "리우",
    month: 10,
    day: 22
  },
  {
    name: "WOONHAK",
    korean: "운학",
    month: 11,
    day: 29
  },
  {
    name: "JAEHYUN",
    korean: "재현",
    month: 12,
    day: 4
  }
];


function getNextBirthday() {

  const now = new Date();

  let next = null;
  let nextMember = null;

  members.forEach(member => {

    let year = now.getFullYear();

    let birthday =
      new Date(
        year,
        member.month - 1,
        member.day,
        0,
        0,
        0
      );

    if (birthday <= now) {
      birthday =
        new Date(
          year + 1,
          member.month - 1,
          member.day,
          0,
          0,
          0
        );
    }

    if (!next || birthday < next) {
      next = birthday;
      nextMember = member;
    }

  });

  return {
    date: next,
    member: nextMember
  };
}


function updateBirthday() {

  const result =
    getNextBirthday();

  if (!result.member) return;

  const member =
    document.getElementById("birthdayMember");

  const date =
    document.getElementById("birthdayDate");

  const days =
    document.getElementById("days");

  const hours =
    document.getElementById("hours");

  const minutes =
    document.getElementById("minutes");

  const seconds =
    document.getElementById("seconds");

  const home =
    document.getElementById("homeCountdown");


  const now = new Date();

  const difference =
    result.date - now;

  const totalSeconds =
    Math.max(
      0,
      Math.floor(difference / 1000)
    );

  const d =
    Math.floor(
      totalSeconds / 86400
    );

  const h =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );

  const m =
    Math.floor(
      (totalSeconds % 3600) / 60
    );

  const s =
    totalSeconds % 60;


  if (member) {
    member.textContent =
      result.member.name;
  }

  if (date) {
    date.textContent =
      `${String(result.member.month).padStart(2,"0")}.${String(result.member.day).padStart(2,"0")}`;
  }

  if (days) {
    days.textContent = d;
  }

  if (hours) {
    hours.textContent =
      String(h).padStart(2,"0");
  }

  if (minutes) {
    minutes.textContent =
      String(m).padStart(2,"0");
  }

  if (seconds) {
    seconds.textContent =
      String(s).padStart(2,"0");
  }

  if (home) {
    home.textContent =
      `D-${d}`;
  }

}


/* ================= QUIZ ================= */

const quizData = [

  {
    question:
      "BOYNEXTDOOR의 공식 팬덤명은?",
    answers: [
      "ONEDOOR",
      "NEXT",
      "DOOR",
      "BND"
    ],
    correct: 0
  },

  {
    question:
      "BOYNEXTDOOR의 멤버 수는?",
    answers: [
      "5명",
      "6명",
      "7명",
      "8명"
    ],
    correct: 1
  },

  {
    question:
      "BOYNEXTDOOR의 데뷔 싱글은?",
    answers: [
      "WHY..",
      "HOW?",
      "WHO!",
      "19.99"
    ],
    correct: 2
  },

  {
    question:
      "다음 중 BOYNEXTDOOR의 멤버가 아닌 사람은?",
    answers: [
      "태산",
      "이한",
      "운학",
      "성찬"
    ],
    correct: 3
  },

  {
    question:
      "2026년 발매된 BOYNEXTDOOR의 첫 정규 앨범은?",
    answers: [
      "HOME",
      "The Action",
      "No Genre",
      "BOYLIFE"
    ],
    correct: 0
  }

];


let quizIndex = 0;
let quizScore = 0;


function loadQuiz() {

  const question =
    document.getElementById("quizQuestion");

  const answers =
    document.getElementById("quizAnswers");

  const progress =
    document.getElementById("quizProgress");

  const fill =
    document.getElementById("progressFill");

  if (!question || !answers) return;


  if (quizIndex >= quizData.length) {

    showQuizResult();

    return;
  }


  const current =
    quizData[quizIndex];


  question.textContent =
    current.question;

  progress.textContent =
    `QUESTION ${String(quizIndex + 1).padStart(2,"0")} / ${quizData.length}`;

  fill.style.width =
    `${((quizIndex + 1) / quizData.length) * 100}%`;


  answers.innerHTML = "";


  current.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.className =
        "quiz-answer";

      button.textContent =
        answer;

      button.addEventListener(
        "click",
        () => answerQuiz(index)
      );

      answers.appendChild(button);

    }
  );

}


function answerQuiz(answerIndex) {

  const current =
    quizData[quizIndex];

  if (
    answerIndex === current.correct
  ) {
    quizScore++;
  }

  quizIndex++;

  setTimeout(
    loadQuiz,
    180
  );

}


function showQuizResult() {

  const content =
    document.getElementById("quizContent");

  const result =
    document.getElementById("quizResult");

  const score =
    document.getElementById("quizScore");

  const text =
    document.getElementById("quizResultText");


  if (!content || !result) return;

  content.classList.add("hidden");

  result.classList.remove("hidden");

  score.textContent =
    `${quizScore} / ${quizData.length}`;


  if (quizScore === 5) {

    text.textContent =
      "완벽한 원도어! 🚪";

  } else if (quizScore >= 3) {

    text.textContent =
      "꽤 제대로 알고 있는데요?";

  } else {

    text.textContent =
      "다시 한 번 도전해보세요!";

  }

}


function restartQuiz() {

  quizIndex = 0;
  quizScore = 0;

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


/* ================= INITIALIZE ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateMyDoor();

    updateBirthday();

    loadQuiz();

    pickSong();

  }
);


setInterval(
  updateBirthday,
  1000
);
