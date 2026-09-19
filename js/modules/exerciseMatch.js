/**
 * =============================================================================
 * MODUL LATIHAN 2: PERMAINAN PASANGAN KATA (SISTEM NILAI LANGSUNG)
 * =============================================================================
 * Tanpa penyimpanan ke localStorage agar siswa bebas bermain & mencoba-coba.
 * =============================================================================
 */

import { PASANG_TEMBUNG } from "../data/latihanData.js";

export const ExerciseMatch = {
  selectedNgokoId: null,
  selectedKramaId: null,
  matchedPairs: new Set(),
  mistakeCount: 0,
  activeItems: [],

  init() {
    this.selectedNgokoId = null;
    this.selectedKramaId = null;
    this.matchedPairs.clear();
    this.mistakeCount = 0;
    // Gunakan 6 pasangan kata
    this.activeItems = [...PASANG_TEMBUNG].slice(0, 6);
    this.renderBoard();
  },

  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  renderBoard() {
    const container = document.getElementById("matchGameBoardContainer");
    if (!container) return;

    const shuffledNgoko = this.shuffle(this.activeItems);
    const shuffledKrama = this.shuffle(this.activeItems);

    container.innerHTML = `
      <div class="match-instructions">
        <div class="match-instructions-text">
          Klik 1 tembung <strong>Ngoko</strong> ing kolom kiwa, banjur klik pasangan tembung <strong>Krama</strong>-ne ing kolom tengen!
        </div>
        <div class="match-score-badge">
          Kasil Dicocokake: <strong id="matchCountLabel">${this.matchedPairs.size} / ${this.activeItems.length}</strong>
        </div>
      </div>

      <div class="match-columns-grid">
        <!-- Kolom Ngoko -->
        <div class="match-col-ngoko">
          <div class="match-column-header">Ragam Ngoko</div>
          <div class="match-cards-list" id="colNgokoList">
            ${shuffledNgoko.map(item => `
              <div class="match-card" data-role="ngoko" data-id="${item.id}" id="card-ngoko-${item.id}">
                ${item.ngoko}
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Kolom Krama -->
        <div class="match-col-krama">
          <div class="match-column-header">Ragam Krama</div>
          <div class="match-cards-list" id="colKramaList">
            ${shuffledKrama.map(item => `
              <div class="match-card" data-role="krama" data-id="${item.id}" id="card-krama-${item.id}">
                ${item.krama}
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn btn-secondary" id="btnRestartMatch">
          Acak & Mulai Maneh (Reset)
        </button>
      </div>

      <!-- Layar Kemenangan & Nilai Pasangan -->
      <div class="match-success-overlay" id="matchSuccessOverlay">
        <img src="assets/illustrations/mascot-bagong.svg" alt="Bagong Sukses" style="width: 130px; margin-bottom: 1.25rem;" />
        <h3 class="match-success-title">Linuwih! Kabeh Pasangan Wis Trep!</h3>
        <p style="font-size: 1.05rem; color: var(--c-text-muted); margin-bottom: 1.5rem;" id="matchSummaryText">
          Sampeyan kasil nyocokake kabeh 6 pasangan tembung Ngoko lan Krama.
        </p>

        <!-- Kotak Nilai Pasangan -->
        <div style="background: var(--c-cream-card); border: 2px solid var(--c-emas-border); border-radius: var(--radius-lg); padding: 1.5rem; max-width: 380px; margin: 0 auto 2rem; box-shadow: var(--c-card-shadow);">
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--c-text-muted); text-transform: uppercase; margin-bottom: 0.25rem;">
            Biji / Nilai Pasang Tembung
          </div>
          <div style="font-family: var(--font-title); font-size: 3.5rem; font-weight: 700; color: var(--c-lumut); line-height: 1; margin-bottom: 0.5rem;" id="matchFinalScore">
            100
          </div>
          <div style="font-size: 0.9rem; color: var(--c-sogan-dark); font-weight: 600;" id="matchMistakeText">
            Kabeh pasangan dicocokake kanthi bener!
          </div>
        </div>

        <div>
          <button class="btn btn-primary" id="btnPlayAgainMatch">
            Main Maneh (Coba Maneh)
          </button>
        </div>
      </div>
    `;

    this.bindCardEvents();

    document.getElementById("btnRestartMatch")?.addEventListener("click", () => this.init());
    document.getElementById("btnPlayAgainMatch")?.addEventListener("click", () => this.init());
  },

  bindCardEvents() {
    document.querySelectorAll('[data-role="ngoko"]').forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (this.matchedPairs.has(id)) return;

        document.querySelectorAll('[data-role="ngoko"]').forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedNgokoId = id;

        if (this.selectedKramaId) {
          this.checkMatch();
        }
      });
    });

    document.querySelectorAll('[data-role="krama"]').forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (this.matchedPairs.has(id)) return;

        document.querySelectorAll('[data-role="krama"]').forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedKramaId = id;

        if (this.selectedNgokoId) {
          this.checkMatch();
        }
      });
    });
  },

  checkMatch() {
    const ngokoCard = document.getElementById(`card-ngoko-${this.selectedNgokoId}`);
    const kramaCard = document.getElementById(`card-krama-${this.selectedKramaId}`);

    if (this.selectedNgokoId === this.selectedKramaId) {
      // COCOK!
      const matchedId = this.selectedNgokoId;
      this.matchedPairs.add(matchedId);

      ngokoCard.classList.remove("selected");
      kramaCard.classList.remove("selected");
      ngokoCard.classList.add("matched");
      kramaCard.classList.add("matched");

      this.selectedNgokoId = null;
      this.selectedKramaId = null;

      const countLabel = document.getElementById("matchCountLabel");
      if (countLabel) {
        countLabel.textContent = `${this.matchedPairs.size} / ${this.activeItems.length}`;
      }

      // Selesai semua
      if (this.matchedPairs.size === this.activeItems.length) {
        const scoreCalc = Math.max(50, 100 - (this.mistakeCount * 10));
        
        const successOverlay = document.getElementById("matchSuccessOverlay");
        const finalScoreElem = document.getElementById("matchFinalScore");
        const mistakeElem = document.getElementById("matchMistakeText");

        if (finalScoreElem) finalScoreElem.textContent = scoreCalc;
        if (mistakeElem) {
          mistakeElem.textContent = this.mistakeCount === 0
            ? "Leres sanget tanpa ana kaluputan!"
            : `Kasil rampung kanthi ${this.mistakeCount} kali salah nyoba.`;
        }

        if (successOverlay) {
          successOverlay.classList.add("show");
          successOverlay.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // SALAH
      this.mistakeCount += 1;
      ngokoCard.classList.add("shake-wrong");
      kramaCard.classList.add("shake-wrong");

      setTimeout(() => {
        ngokoCard.classList.remove("shake-wrong", "selected");
        kramaCard.classList.remove("shake-wrong", "selected");
        this.selectedNgokoId = null;
        this.selectedKramaId = null;
      }, 500);
    }
  }
};
