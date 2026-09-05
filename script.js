/* ==================================================
   ONEDOOR :DOOR v2.0
   ================================================== */


/* ================= RESET ================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "DM Sans", sans-serif;
  background: #f4fbfd;
  color: #172027;
  line-height: 1.5;
  overflow-x: hidden;
}

button {
  font: inherit;
  color: inherit;
  border: 0;
  background: none;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}


/* ================= VARIABLES ================= */

:root {
  --bg: #f4fbfd;
  --blue: #61b6ca;
  --blue-dark: #3e98ae;
  --blue-light: #dff3f8;
  --black: #172027;
  --gray: #66737a;
  --line: #cbdce1;
  --white: #ffffff;
}


/* ================= HEADER ================= */

.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(244, 251, 253, 0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(203, 220, 225, 0.8);
}

.header-inner {
  width: min(1180px, calc(100% - 40px));
  height: 76px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* LOGO */

.logo {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.8px;
}

.logo strong {
  font-weight: 700;
}

.logo-mark {
  width: 21px;
  height: 25px;

  border: 2.5px solid var(--black);
  display: inline-block;

  position: relative;
}

.logo-mark::after {
  content: "";
  position: absolute;

  width: 5px;
  height: 5px;

  right: 2px;
  top: 8px;

  background: var(--blue);
}


/* DESKTOP NAV */

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.desktop-nav button {
  padding: 10px 12px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;

  transition: 0.2s ease;
}

.desktop-nav button:hover {
  color: var(--blue-dark);
}


/* MOBILE MENU BUTTON */

.menu-button {
  display: none;

  width: 42px;
  height: 42px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  border: 1px solid var(--line);
  border-radius: 50%;
}

.menu-button span {
  width: 17px;
  height: 1.5px;
  background: var(--black);

  transition: 0.25s ease;
}

.menu-button.active span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.menu-button.active span:nth-child(2) {
  opacity: 0;
}

.menu-button.active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}


/* MOBILE NAV */

.mobile-nav {
  display: none;
}


/* ================= PAGE SYSTEM ================= */

main {
  padding-top: 76px;
}

.page {
  display: none;
  min-height: calc(100vh - 76px);
}

.page.active {
  display: block;
}


/* ================= HERO ================= */

.hero {
  min-height: calc(100vh - 76px);

  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 46px 0 38px;
}

.hero-top,
.hero-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  letter-spacing: 1.2px;
  color: var(--gray);
}

.hero-content {
  padding: 70px 0;
}

.eyebrow,
.section-label {
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.8px;
  color: var(--gray);
}

.hero h1 {
  margin-top: 24px;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(78px, 13vw, 190px);
  line-height: 0.82;
  letter-spacing: -7px;
  font-weight: 700;
}

.hero h1 span {
  display: block;
  color: var(--blue);
  margin-left: 7vw;
}

.hero-copy {
  margin-top: 50px;

  font-size: 17px;
  line-height: 1.65;
}

.primary-button {
  margin-top: 27px;

  min-height: 48px;
  padding: 0 21px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  background: var(--black);
  color: var(--white);

  border-radius: 999px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.7px;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-3px);
  background: var(--blue-dark);
}

.primary-button span {
  font-size: 17px;
}

.scroll-line {
  display: block;
  width: 100px;
  height: 1px;
  background: var(--line);
}


/* ================= SECTIONS ================= */

.section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 130px 0;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 50px;
}

.section-heading.simple {
  margin-bottom: 45px;
}

.section-heading h2 {
  margin-top: 15px;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 0.98;
  letter-spacing: -3px;
}

.section-heading h2 span {
  color: var(--blue-dark);
}

.section-note {
  color: var(--gray);
  font-size: 13px;
  line-height: 1.7;
  text-align: right;
}


/* ================= TODAY CARDS ================= */

.today-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-card {
  min-height: 390px;

  padding: 25px;

  position: relative;
  overflow: hidden;

  text-align: left;

  border: 1px solid var(--line);
  border-radius: 18px;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 18px 40px rgba(35, 74, 82, 0.09);
}

.song-feature {
  background: #dff3f8;
}

.birthday-feature {
  background: #ffffff;
}

.quiz-feature {
  background: #eaf7fa;
}

.feature-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}

.feature-icon {
  margin-top: 65px;

  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(23, 32, 39, 0.22);
  border-radius: 50%;

  font-size: 24px;
}

.feature-label {
  margin-top: 28px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.3px;
}

.feature-card h3 {
  margin-top: 7px;

  font-size: 25px;
  letter-spacing: -1px;
}

.feature-description {
  margin-top: 10px;

  color: var(--gray);
  font-size: 13px;
  line-height: 1.6;
}

.feature-arrow {
  position: absolute;
  right: 25px;
  bottom: 22px;

  font-size: 25px;
}

.mini-dday {
  margin-top: 14px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--blue-dark);
}


/* ================= DOOR MENU ================= */

.door-menu {
  padding-top: 20px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.menu-card {
  min-height: 130px;

  padding: 25px;

  display: grid;
  grid-template-columns: 50px 1fr 30px;
  align-items: center;

  text-align: left;

  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 15px;

  transition: 0.2s ease;
}

.menu-card:hover {
  background: var(--blue-light);
  transform: translateX(5px);
}

.menu-number {
  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  color: var(--gray);
}

.menu-card strong {
  font-family: "Space Grotesk", sans-serif;
  font-size: 19px;
  letter-spacing: -0.4px;
}

.menu-card p {
  margin-top: 3px;

  font-size: 12px;
  color: var(--gray);
}

.menu-arrow {
  font-size: 23px;
}


/* ================= CLOSING ================= */

.closing-section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;

  padding: 130px 0 160px;
}

.closing-section h2 {
  margin-top: 15px;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(52px, 8vw, 100px);
  line-height: 0.95;
  letter-spacing: -4px;
}

.closing-section h2 span {
  color: var(--blue-dark);
}

.outline-button {
  margin-top: 35px;

  min-height: 48px;
  padding: 0 22px;

  border: 1px solid var(--black);
  border-radius: 999px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.7px;

  transition: 0.2s ease;
}

.outline-button:hover {
  background: var(--black);
  color: var(--white);
}


/* ================= INNER PAGE HERO ================= */

.page-hero {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;

  padding: 120px 0 70px;
}

.page-hero h1 {
  margin-top: 20px;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(65px, 10vw, 130px);
  line-height: 0.86;
  letter-spacing: -5px;
}

.page-hero h1 span {
  color: var(--blue-dark);
}

.page-hero p:last-child {
  margin-top: 30px;

  color: var(--gray);
  font-size: 14px;
  line-height: 1.7;
}

.page-hero.centered {
  text-align: center;
}

.page-hero.centered p:last-child {
  margin-left: auto;
  margin-right: auto;
}


/* ================= MEMBERS ================= */

.members-grid {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.member-card {
  min-height: 330px;

  padding: 24px;

  position: relative;
  overflow: hidden;

  text-align: left;

  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 18px;

  transition: 0.25s ease;
}

.member-card:hover {
  transform: translateY(-7px);
  background: var(--blue-light);
}

.member-number {
  position: absolute;
  top: 24px;
  right: 24px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  color: var(--gray);
}

.member-symbol {
  width: 78px;
  height: 78px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--line);
  border-radius: 50%;

  font-family: "Space Grotesk", sans-serif;
  font-size: 28px;
  font-weight: 700;

  color: var(--blue-dark);
}

.member-card strong {
  display: block;

  margin-top: 65px;

  font-size: 30px;
  letter-spacing: -1.5px;
}

.member-card small {
  display: block;

  margin-top: 2px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--gray);
}

.member-birthday {
  position: absolute;
  bottom: 24px;
  right: 24px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  color: var(--gray);
}

.member-hint {
  width: min(1180px, calc(100% - 40px));
  margin: 25px auto 120px;

  padding: 16px 18px;

  background: var(--blue-light);
  border-radius: 10px;

  font-size: 12px;
  color: var(--gray);
}

.member-hint span {
  margin-right: 10px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--blue-dark);
}


/* ================= SONG ================= */

.song-box {
  width: min(700px, calc(100% - 40px));
  margin: 20px auto 140px;

  padding: 55px;

  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 22px;

  text-align: center;
}

.song-decoration {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 25px;
  border-bottom: 1px solid var(--line);

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--gray);
}

.song-decoration span:first-child {
  font-size: 30px;
  color: var(--blue-dark);
}

.song-label {
  margin-top: 70px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: var(--gray);
}

.song-box h2 {
  margin-top: 15px;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(38px, 7vw, 65px);
  line-height: 1;
  letter-spacing: -3px;
}

.song-box > p:not(.song-label) {
  margin-top: 17px;

  color: var(--gray);
  font-size: 13px;
}

.song-meta {
  margin-top: 45px;

  display: flex;
  justify-content: space-between;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  color: var(--gray);
}


/* ================= QUIZ ================= */

.quiz-box {
  width: min(760px, calc(100% - 40px));
  margin: 15px auto 140px;

  padding: 42px;

  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 20px;
}

.quiz-progress > span {
  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--gray);
}

.progress-bar {
  width: 100%;
  height: 4px;

  margin-top: 12px;

  background: var(--blue-light);
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  width: 20%;
  height: 100%;

  background: var(--blue-dark);

  transition: width 0.3s ease;
}

.quiz-category {
  margin-top: 65px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: var(--blue-dark);
}

.quiz-box h2 {
  margin-top: 12px;

  font-size: clamp(25px, 4vw, 37px);
  letter-spacing: -1.3px;
}

.quiz-answers {
  margin-top: 35px;

  display: grid;
  gap: 9px;
}

.quiz-answer {
  width: 100%;

  padding: 17px 18px;

  display: flex;
  align-items: center;
  gap: 13px;

  text-align: left;

  border: 1px solid var(--line);
  border-radius: 10px;

  font-size: 14px;

  transition: 0.2s ease;
}

.quiz-answer:hover {
  border-color: var(--blue-dark);
  background: var(--blue-light);
}

.answer-number {
  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: var(--blue-light);

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
}

.quiz-answer.correct {
  background: #dff3e7;
  border-color: #8bc9a2;
}

.quiz-answer.wrong {
  background: #f8e5e5;
  border-color: #d99a9a;
}

.quiz-result {
  text-align: center;
  padding: 45px 0 10px;
}

.quiz-result strong {
  display: block;

  margin-top: 10px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 80px;
  line-height: 1;
  color: var(--blue-dark);
}

.quiz-result h2 {
  margin-top: 15px;
}


/* ================= ARCHIVE ================= */

.archive-grid {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto 140px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.archive-card {
  min-height: 340px;

  padding: 28px;

  position: relative;

  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 18px;

  transition: 0.2s ease;
}

.archive-card:hover {
  transform: translateY(-5px);
  background: var(--blue-light);
}

.archive-date {
  position: absolute;
  right: 25px;
  top: 25px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  color: var(--gray);
}

.archive-icon {
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--line);
  border-radius: 50%;

  font-size: 25px;
  color: var(--blue-dark);
}

.archive-category {
  margin-top: 65px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: var(--gray);
}

.archive-card h2 {
  margin-top: 8px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 27px;
  letter-spacing: -1px;
}

.archive-card > p:last-child {
  margin-top: 9px;

  color: var(--gray);
  font-size: 13px;
}


/* ================= BIRTHDAY ================= */

.birthday-box {
  width: min(820px, calc(100% - 40px));
  margin: 10px auto 140px;

  padding: 55px;

  text-align: center;

  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 22px;
}

.birthday-label {
  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: var(--gray);
}

.birthday-box h2 {
  margin-top: 12px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 55px;
  letter-spacing: -2px;
}

.birthday-box > p:nth-child(3) {
  margin-top: 3px;
  color: var(--blue-dark);
}

.countdown {
  margin-top: 55px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.countdown div {
  padding: 25px 10px;
  border-right: 1px solid var(--line);
}

.countdown div:last-child {
  border-right: 0;
}

.countdown strong {
  display: block;

  font-family: "Space Grotesk", sans-serif;
  font-size: 38px;
}

.countdown span {
  display: block;

  margin-top: 5px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 8px;
  letter-spacing: 1px;
  color: var(--gray);
}

.birthday-list {
  margin-top: 35px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.birthday-list div {
  padding: 13px;

  display: flex;
  justify-content: space-between;

  border: 1px solid var(--line);
  border-radius: 8px;

  font-size: 12px;
}

.birthday-list strong {
  font-family: "Space Grotesk", sans-serif;
}


/* ================= MY DOOR ================= */

.mydoor-box {
  width: min(700px, calc(100% - 40px));
  margin: 15px auto 40px;

  padding: 70px 40px;

  text-align: center;

  background: var(--blue-light);
  border: 1px solid var(--line);
  border-radius: 22px;
}

.mydoor-mark {
  display: flex;
  justify-content: center;
}

.mydoor-mark .logo-mark {
  width: 55px;
  height: 65px;

  border-width: 4px;
}

.mydoor-label {
  margin-top: 45px;

  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--gray);
}

.mydoor-box h2 {
  margin-top: 12px;

  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(38px, 7vw, 65px);
  letter-spacing: -3px;
}

.mydoor-box > p:nth-of-type(2) {
  margin-top: 12px;

  color: var(--gray);
  font-size: 13px;
}

.mydoor-note {
  width: min(700px, calc(100% - 40px));
  margin: 0 auto 140px;

  font-size: 11px;
  color: var(--gray);
  text-align: center;
}

.mydoor-note span {
  margin-right: 8px;

  font-family: "Space Grotesk", sans-serif;
  color: var(--blue-dark);
}


/* ================= FOOTER ================= */

.footer {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;

  padding: 45px 0 30px;

  border-top: 1px solid var(--line);
}

.footer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.footer-logo {
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 700;
}

.footer-top p {
  margin-top: 6px;

  font-size: 11px;
  color: var(--gray);
}

.footer-top button {
  font-family: "Space Grotesk", sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
}

.footer-bottom {
  margin-top: 55px;

  display: flex;
  justify-content: space-between;

  font-family: "Space Grotesk", sans-serif;
  font-size: 9px;
  letter-spacing: 1px;
  color: var(--gray);
}


/* ================= UTILITIES ================= */

.hidden {
  display: none !important;
}


/* ================= TABLET ================= */

@media (max-width: 900px) {

  .desktop-nav {
    display: none;
  }

  .menu-button {
    display: flex;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;

    max-height: 0;
    overflow: hidden;

    background: var(--bg);

    transition: max-height 0.35s ease;
  }

  .mobile-nav.open {
    max-height: 500px;
    border-top: 1px solid var(--line);
  }

  .mobile-nav button {
    width: calc(100% - 40px);
    margin: 0 auto;

    padding: 18px 0;

    display: flex;
    align-items: center;
    gap: 20px;

    text-align: left;

    border-bottom: 1px solid var(--line);

    font-family: "Space Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 600;
  }

  .mobile-nav button span {
    width: 25px;

    font-size: 9px;
    color: var(--gray);
  }

  .today-grid {
    grid-template-columns: 1fr 1fr;
  }

  .quiz-feature {
    grid-column: 1 / -1;
    min-height: 280px;
  }

  .members-grid {
    grid-template-columns: 1fr 1fr;
  }

}


/* ================= MOBILE ================= */

@media (max-width: 600px) {

  .header-inner {
    width: calc(100% - 28px);
    height: 64px;
  }

  .logo {
    font-size: 17px;
    gap: 7px;
  }

  .logo-mark {
    width: 18px;
    height: 22px;
  }

  main {
    padding-top: 64px;
  }

  .page {
    min-height: calc(100vh - 64px);
  }


  /* HERO */

  .hero {
    width: calc(100% - 28px);
    min-height: calc(100vh - 64px);

    padding: 28px 0 24px;
  }

  .hero-top {
    font-size: 8px;
  }

  .hero-content {
    padding: 40px 0;
  }

  .hero h1 {
    margin-top: 18px;

    font-size: clamp(65px, 19vw, 105px);
    letter-spacing: -4px;
  }

  .hero h1 span {
    margin-left: 0;
  }

  .hero-copy {
    margin-top: 35px;
    font-size: 15px;
  }

  .primary-button {
    min-height: 46px;
    padding: 0 18px;
    font-size: 10px;
  }

  .hero-bottom {
    font-size: 8px;
  }

  .scroll-line {
    width: 60px;
  }


  /* SECTIONS */

  .section {
    width: calc(100% - 28px);
    padding: 85px 0;
  }

  .section-heading {
    display: block;
    margin-bottom: 30px;
  }

  .section-heading h2 {
    margin-top: 12px;

    font-size: 43px;
    letter-spacing: -2px;
  }

  .section-note {
    margin-top: 20px;
    text-align: left;
    font-size: 12px;
  }


  /* TODAY */

  .today-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .feature-card {
    min-height: 245px;
    padding: 21px;
  }

  .feature-icon {
    margin-top: 27px;

    width: 45px;
    height: 45px;

    font-size: 20px;
  }

  .feature-label {
    margin-top: 17px;
  }

  .feature-card h3 {
    font-size: 22px;
  }

  .feature-description {
    font-size: 12px;
  }

  .feature-arrow {
    right: 21px;
    bottom: 19px;
  }

  .quiz-feature {
    min-height: 245px;
  }


  /* MENU */

  .door-menu {
    padding-top: 0;
  }

  .menu-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .menu-card {
    min-height: 92px;
    padding: 19px;

    grid-template-columns: 38px 1fr 25px;
  }

  .menu-card strong {
    font-size: 16px;
  }


  /* CLOSING */

  .closing-section {
    width: calc(100% - 28px);
    padding: 85px 0 110px;
  }

  .closing-section h2 {
    font-size: 55px;
    letter-spacing: -3px;
  }


  /* PAGE HERO */

  .page-hero {
    width: calc(100% - 28px);
    padding: 85px 0 45px;
  }

  .page-hero h1 {
    font-size: 63px;
    letter-spacing: -3px;
  }

  .page-hero p:last-child {
    font-size: 13px;
  }


  /* MEMBERS */

  .members-grid {
    width: calc(100% - 28px);
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .member-card {
    min-height: 250px;
    padding: 17px;
  }

  .member-symbol {
    width: 55px;
    height: 55px;
    font-size: 21px;
  }

  .member-card strong {
    margin-top: 48px;
    font-size: 23px;
  }

  .member-card small {
    font-size: 8px;
  }

  .member-number,
  .member-birthday {
    font-size: 8px;
  }

  .member-number {
    top: 17px;
    right: 17px;
  }

  .member-birthday {
    bottom: 17px;
    right: 17px;
  }

  .member-hint {
    width: calc(100% - 28px);
    margin-bottom: 85px;
    font-size: 10px;
  }


  /* SONG */

  .song-box {
    width: calc(100% - 28px);
    margin-bottom: 90px;

    padding: 30px 21px;
  }

  .song-label {
    margin-top: 45px;
  }

  .song-box h2 {
    font-size: 43px;
  }

  .song-meta {
    margin-top: 30px;
  }


  /* QUIZ */

  .quiz-box {
    width: calc(100% - 28px);
    margin-bottom: 90px;

    padding: 25px 20px;
  }

  .quiz-category {
    margin-top: 45px;
  }

  .quiz-box h2 {
    font-size: 25px;
  }

  .quiz-answer {
    padding: 14px;
    font-size: 12px;
  }

  .quiz-result strong {
    font-size: 65px;
  }


  /* ARCHIVE */

  .archive-grid {
    width: calc(100% - 28px);

    grid-template-columns: 1fr;
    gap: 9px;

    margin-bottom: 90px;
  }

  .archive-card {
    min-height: 260px;
    padding: 22px;
  }

  .archive-category {
    margin-top: 50px;
  }

  .archive-card h2 {
    font-size: 23px;
  }


  /* BIRTHDAY */

  .birthday-box {
    width: calc(100% - 28px);

    padding: 30px 17px;
    margin-bottom: 90px;
  }

  .birthday-box h2 {
    font-size: 45px;
  }

  .countdown {
    margin-top: 40px;
  }

  .countdown div {
    padding: 17px 3px;
  }

  .countdown strong {
    font-size: 24px;
  }

  .countdown span {
    font-size: 6px;
  }

  .birthday-list {
    grid-template-columns: 1fr 1fr;
  }

  .birthday-list div {
    font-size: 10px;
    padding: 10px;
  }


  /* MY DOOR */

  .mydoor-box {
    width: calc(100% - 28px);

    padding: 55px 20px;
    margin-bottom: 25px;
  }

  .mydoor-box h2 {
    font-size: 45px;
  }

  .mydoor-note {
    width: calc(100% - 28px);
    margin-bottom: 90px;
  }


  /* FOOTER */

  .footer {
    width: calc(100% - 28px);
    padding-top: 30px;
  }

  .footer-logo {
    font-size: 15px;
  }

  .footer-top p {
    font-size: 9px;
  }

  .footer-top button {
    font-size: 8px;
  }

  .footer-bottom {
    margin-top: 35px;
    font-size: 7px;
  }

}


/* ================= SMALL MOBILE ================= */

@media (max-width: 380px) {

  .hero h1 {
    font-size: 62px;
  }

  .page-hero h1 {
    font-size: 55px;
  }

  .members-grid {
    grid-template-columns: 1fr;
  }

  .member-card {
    min-height: 220px;
  }

}
