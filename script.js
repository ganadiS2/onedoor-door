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
          <div>05. l i