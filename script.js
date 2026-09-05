:root {
  --black: #182126;
  --blue: #4e9eb0;
  --blue-light: #eaf5f7;
  --gray: #718087;
  --light: #f5f7f7;
  --line: #dce3e5;
  --white: #ffffff;
  --radius: 24px;
}

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
  color: var(--black);
  background: var(--white);
  line-height: 1.5;
}

button {
  font: inherit;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
}

button:focus-visible {
  outline: 3px solid var(--blue);
  outline-offset: 3px;
}


/* ================= HEADER ================= */

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  max-width: 1180px;
  margin: auto;
  height: 78px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -1px;
}

.logo strong {
  color: var(--blue);
}

.logo-door {
  width: 30px;
  height: 30px;
  border: 2px solid var(--black);
  display: grid;
  place-items: center;
  font-size: 22px;
}

.menu-button {
  display: none;
  width: 42px;
  height: 42px;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.menu-button span {
  display: block;
  width: 27px;
  height: 2px;
  background: var(--black);
}

.nav {
  display: flex;
  gap: 28px;
}

.nav button {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: color .2s;
}

.nav button:hover {
  color: var(--blue);
}


/* ================= COMMON ================= */

.page {
  display: none;
  min-height: 70vh;
}

.page.active {
  display: block;
}

.section {
  max-width: 1180px;
  margin: auto;
  padding: 100px 30px;
}

.section-label {
  color: var(--blue);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 13px;
}

.page-header {
  max-width: 700px;
  padding: 90px 30px 50px;
  margin: auto;
}

.page-header h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(42px, 7vw, 78px);
  line-height: .98;
  letter-spacing: -4px;
  margin-bottom: 22px;
}

.page-header p {
  color: var(--gray);
  font-size: 16px;
}

.back-home {
  display: block;
  max-width: 1180px;
  margin: 70px auto 100px;
  padding: 0 30px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
}

.back-home:hover {
  color: var(--blue);
}


/* ================= HERO ================= */

.hero {
  max-width: 1180px;
  margin: auto;
  padding: 150px 30px 130px;
  text-align: center;
}

.hero-label {
  color: var(--blue);
  font-weight: 700;
  letter-spacing: 4px;
  font-size: 15px;
  margin-bottom: 32px;
}

.hero h1 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(75px, 14vw, 175px);
  line-height: .82;
  letter-spacing: -9px;
}

.hero h1 span {
  color: var(--blue);
}

.hero-description {
  margin-top: 45px;
  color: var(--gray);
  font-size: 19px;
  line-height: 1.8;
}

.primary-button {
  margin-top: 38px;
  background: var(--black);
  color: white;
  padding: 20px 35px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .5px;
  transition: transform .2s, background .2s;
}

.primary-button:hover {
  transform: translateY(-3px);
  background: var(--blue);
}

.primary-button.small {
  padding: 16px 24px;
  font-size: 12px;
  margin-top: 25px;
}


/* ================= TODAY ================= */

.today {
  background: var(--light);
  max-width: none;
  padding-left: max(30px, calc((100vw - 1120px) / 2));
  padding-right: max(30px, calc((100vw - 1120px) / 2));
}

.today h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(42px, 6vw, 70px);
  line-height: 1;
  letter-spacing: -4px;
  margin-bottom: 55px;
}

.today-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.feature-card {
  position: relative;
  min-height: 360px;
  padding: 30px;
  border-radius: var(--radius);
  background: white;
  border: 1px solid var(--line);
  overflow: hidden;
  transition: transform .25s, box-shadow .25s;
}

.feature-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 50px rgba(24,33,38,.09);
}

.card-number {
  font-size: 12px;
  color: var(--gray);
}

.card-icon {
  margin-top: 55px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 42px;
}

.card-small-title {
  margin-top: 15px;
  color: var(--blue);
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
}

.feature-card h3 {
  margin-top: 7px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 30px;
  letter-spacing: -1px;
}

.feature-card p {
  margin-top: 13px;
  color: var(--gray);
}

.card-arrow {
  position: absolute;
  right: 30px;
  bottom: 27px;
  font-size: 25px;
}

.countdown-mini {
  margin-top: 20px;
  display: inline-block;
  padding: 6px 11px;
  background: var(--blue-light);
  color: var(--blue);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
}


/* ================= DOOR MENU ================= */

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.menu-card {
  position: relative;
  min-height: 230px;
  text-align: left;
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: white;
  transition: all .25s;
}

.menu-card:hover {
  background: var(--black);
  color: white;
  transform: translateY(-5px);
}

.menu-number {
  display: block;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 50px;
}

.menu-title {
  display: block;
  font-family: "Space Grotesk", sans-serif;
  font-size: 27px;
  font-weight: 700;
}

.menu-description {
  display: block;
  margin-top: 6px;
  color: var(--gray);
}

.menu-card:hover .menu-description {
  color: #c4d1d5;
}

.menu-arrow {
  position: absolute;
  right: 28px;
  bottom: 25px;
  font-size: 24px;
}


/* ================= MEMBERS ================= */

.member-grid {
  max-width: 1120px;
  margin: auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.member-card {
  min-height: 300px;
  padding: 28px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--light);
  text-align: left;
  transition: .25s;
}

.member-card:hover {
  transform: translateY(-6px);
  background: var(--blue-light);
}

.member-symbol {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--black);
  color: white;
  display: grid;
  place-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  margin-bottom: 55px;
}

.member-card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 32px;
  letter-spacing: -1px;
}

.member-card p {
  margin-top: 5px;
  color: var(--gray);
}

.member-select {
  margin-top: 20px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}


/* ================= MY DOOR ================= */

.mydoor-box {
  max-width: 850px;
  margin: 0 auto;
  padding: 30px;
  border-radius: var(--radius);
  background: var(--light);
  border: 1px solid var(--line);
}

.mydoor-top {
  display: flex;
  justify-content: space-between;
  color: var(--gray);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.favorite-display {
  min-height: 350px;
  display: grid;
  place-items: center;
  text-align: center;
}

.favorite-empty .big-door {
  font-size: 80px;
  margin-bottom: 15px;
}

.favorite-empty h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 25px;
}

.favorite-empty p {
  color: var(--gray);
  margin-top: 7px;
}

.favorite-member {
  text-align: center;
}

.favorite-member .member-symbol {
  margin: 0 auto 20px;
  width: 100px;
  height: 100px;
  font-size: 34px;
}

.favorite-member h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 48px;
}

.favorite-member p {
  color: var(--gray);
}

.secondary-button {
  display: block;
  margin: auto;
  padding: 17px 25px;
  border: 1px solid var(--black);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
}

.secondary-button:hover {
  background: var(--black);
  color: white;
}


/* ================= SONG ================= */

.song-feature {
  max-width: 850px;
  margin: 0 auto;
  padding: 55px;
  display: flex;
  align-items: center;
  gap: 60px;
  border-radius: var(--radius);
  background: var(--light);
}

.vinyl {
  flex: 0 0 250px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: var(--black);
  display: grid;
  place-items: center;
  box-shadow: 0 15px 30px rgba(0,0,0,.15);
}

.vinyl-center {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: var(--blue);
  color: white;
  display: grid;
  place-items: center;
  font-size: 25px;
}

.song-label {
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.song-info h3 {
  margin-top: 10px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 42px;
  letter-spacing: -2px;
}

.song-info p {
  margin-top: 10px;
  color: var(--gray);
}

.song-note {
  max-width: 850px;
  margin: 20px auto;
  color: var(--gray);
  font-size: 11px;
}


/* ================= BIRTHDAY ================= */

.birthday-list {
  max-width: 850px;
  margin: auto;
  display: grid;
  gap: 12px;
}

.birthday-card {
  padding: 25px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: white;
}

.birthday-symbol {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--blue-light);
  color: var(--blue);
  font-weight: 700;
}

.birthday-name {
  flex: 1;
}

.birthday-name h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 21px;
}

.birthday-name p {
  color: var(--gray);
  font-size: 12px;
}

.dday {
  color: var(--blue);
  font-weight: 700;
}


/* ================= QUIZ ================= */

.quiz-box,
.quiz-result {
  max-width: 750px;
  margin: auto;
  padding: 45px;
  border-radius: var(--radius);
  background: var(--light);
}

.quiz-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  color: var(--gray);
}

.progress-line {
  flex: 1;
  height: 4px;
  background: var(--line);
}

#progressBar {
  width: 20%;
  height: 100%;
  background: var(--blue);
  transition: width .3s;
}

.quiz-box h3 {
  margin-top: 55px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 31px;
  line-height: 1.25;
}

.answers {
  margin-top: 30px;
  display: grid;
  gap: 10px;
}

.answer-button {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 14px;
  text-align: left;
  background: white;
  transition: .2s;
}

.answer-button:hover {
  border-color: var(--blue);
  color: var(--blue);
  transform: translateX(4px);
}

.quiz-result {
  display: none;
  text-align: center;
}

.result-score {
  margin: 25px 0;
  font-family: "Space Grotesk", sans-serif;
  font-size: 90px;
  line-height: 1;
}

.result-score small {
  font-size: 20px;
  color: var(--gray);
}

.quiz-result h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 30px;
}

.quiz-result p {
  margin-top: 10px;
  color: var(--gray);
}


/* ================= ARCHIVE ================= */

.archive-grid {
  max-width: 1120px;
  margin: auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.archive-card {
  min-height: 350px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--light);
}

.archive-card > span {
  color: var(--blue);
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 700;
}

.archive-symbol {
  margin-top: 55px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 60px;
  color: var(--blue);
}

.archive-card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 27px;
}

.archive-card p {
  color: var(--gray);
  margin-top: 8px;
}

.archive-card button {
  margin-top: 20px;
  color: var(--blue);
  font-size: 12px;
  font-weight: 700;
}

.archive-message {
  max-width: 1120px;
  margin: 25px auto 0;
  padding: 18px 30px;
  color: var(--gray);
  font-size: 13px;
  display: none;
}


/* ================= FOOTER ================= */

.footer {
  position: relative;
  padding: 65px 30px;
  text-align: center;
  border-top: 1px solid var(--line);
}

.footer-logo {
  font-family: "Space Grotesk", sans-serif;
  font-size: 23px;
  font-weight: 700;
}

.footer p {
  margin-top: 10px;
  color: var(--gray);
  font-size: 12px;
}

.top-button {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: 1px solid var(--line);
  border-radius: 50%;
  font-size: 22px;
}


/* ================= MOBILE ================= */

@media (max-width: 760px) {

  .header-inner {
    height: 70px;
    padding: 0 20px;
  }

  .logo {
    font-size: 18px;
  }

  .logo-door {
    width: 27px;
    height: 27px;
  }

  .menu-button {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px;
    background: white;
    border-bottom: 1px solid var(--line);
    display: none;
    flex-direction: column;
    gap: 0;
  }

  .nav.open {
    display: flex;
  }

  .nav button {
    padding: 16px 5px;
    text-align: left;
    border-bottom: 1px solid var(--line);
  }

  .hero {
    padding: 115px 20px 100px;
  }

  .hero-label {
    font-size: 12px;
    letter-spacing: 2.5px;
  }

  .hero h1 {
    font-size: clamp(65px, 20vw, 100px);
    letter-spacing: -5px;
  }

  .hero-description {
    font-size: 16px;
  }

  .primary-button {
    width: 100%;
    max-width: 320px;
  }

  .section {
    padding: 70px 20px;
  }

  .today {
    padding-left: 20px;
    padding-right: 20px;
  }

  .today h2 {
    font-size: 48px;
    letter-spacing: -3px;
    margin-bottom: 35px;
  }

  .today-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    min-height: 275px;
  }

  .card-icon {
    margin-top: 30px;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .menu-card {
    min-height: 180px;
  }

  .menu-number {
    margin-bottom: 35px;
  }

  .page-header {
    padding: 70px 20px 40px;
  }

  .page-header h2 {
    font-size: 53px;
    letter-spacing: -3px;
  }

  .member-grid {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    gap: 10px;
  }

  .member-card {
    min-height: 240px;
    padding: 20px;
  }

  .member-symbol {
    width: 55px;
    height: 55px;
    margin-bottom: 35px;
  }

  .member-card h3 {
    font-size: 25px;
  }

  .member-select {
    font-size: 10px;
  }

  .mydoor-box {
    margin: 0 20px;
    padding: 20px;
  }

  .favorite-display {
    min-height: 280px;
  }

  .song-feature {
    margin: 0 20px;
    padding: 30px;
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .vinyl {
    width: 190px;
    height: 190px;
    flex-basis: 190px;
  }

  .song-info h3 {
    font-size: 34px;
  }

  .birthday-list {
    margin: 0 20px;
  }

  .birthday-card {
    padding: 18px;
  }

  .birthday-symbol {
    width: 45px;
    height: 45px;
  }

  .birthday-name h3 {
    font-size: 17px;
  }

  .dday {
    font-size: 13px;
  }

  .quiz-box,
  .quiz-result {
    margin: 0 20px;
    padding: 25px;
  }

  .quiz-box h3 {
    margin-top: 40px;
    font-size: 25px;
  }

  .archive-grid {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  .archive-card {
    min-height: 280px;
  }

  .back-home {
    margin: 55px 20px 70px;
    padding: 0;
  }

  .footer {
    padding: 55px 20px;
  }

  .top-button {
    position: static;
    transform: none;
    margin-top: 25px;
  }
}
