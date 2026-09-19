/**
 * =============================================================================
 * MODUL LATIHAN 1: KUIS PILIHAN GANDA INTERAKTIF (SISTEM NILAI LANGSUNG)
 * =============================================================================
 * Tanpa penyimpanan ke localStorage agar siswa bebas mencoba & bereksplorasi.
 * Menghitung nilai skala 0 - 100 secara langsung per sesi latihan.
 * =============================================================================
 */

import { KUIS_PILIHAN_GANDA } from "../data/latihanData.js";

export const ExerciseQuiz = {
  currentIndex: 0,
  correctCount: 0,
  wrongCount: 0,
  isAnswered: false,

  init() {
    this.currentIndex = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.isAnswered = false;
    this.renderQuestion();
  },

  renderQuestion() {
    const container = document.getElementById("quizCardContainer");
    if (!container) return;

    const total = KUIS_PILIHAN_GANDA.length;

    // Jika seluruh soal telah selesai
    if (this.currentIndex >= total) {
      this.renderScoreCard();
      return;
    }

    const currentQuiz = KUIS_PILIHAN_GANDA[this.currentIndex];
    const progressPercent = ((this.currentIndex + 1) / total) * 100;
    const currentScore = Math.round((this.correctCount / total) * 100);
    this.isAnswered = false;

    const letters = ["A", "B", "C", "D"];
    const optionsHtml = currentQuiz.opsi.map((opsiText, idx) => `
      <button class="quiz-option-btn" data-index="${idx}">
        <span class="quiz-option-letter">${letters[idx]}</span>
        <span class="quiz-option-text">${opsiText}</span>
      </button>
    `).join("");

    container.innerHTML = `
      <div class="quiz-progress-bar-wrap">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-meta-info" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
        <span class="quiz-step-count" style="font-weight: 700; color: var(--c-bata); background: var(--c-bata-surface); padding: 0.35rem 0.85rem; border-radius: var(--radius-full); font-size: 0.85rem;">
          Pitakon ${this.currentIndex + 1} saka ${total}
        </span>
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--c-sogan-dark); display: flex; gap: 1rem;">
          <span style="color: var(--c-lumut);">Bener: ${this.correctCount}</span>
          <span style="color: var(--c-bata);">Luput: ${this.wrongCount}</span>
        </div>
      </div>

      <div class="quiz-context-box">
        <strong>Situasi:</strong> ${currentQuiz.konteks}
      </div>

      <h3 class="quiz-question-text">${currentQuiz.pitakon}</h3>

      <div class="quiz-options-list" id="quizOptionsList">
        ${optionsHtml}
      </div>

      <!-- Kotak Ulasan / Feedback Instan -->
      <div class="quiz-feedback-card" id="quizFeedbackBox">
        <img src="assets/illustrations/mascot-bagong.svg" alt="Maskot" class="feedback-mascot-icon" id="feedbackMascotImg" />
        <div class="feedback-content">
          <h5 id="feedbackTitle">Status</h5>
          <p id="feedbackExplanation">Katrangan...</p>
          <button class="btn btn-primary btn-next-quiz" id="btnNextQuiz">
            ${this.currentIndex + 1 === total ? "Deleng Biji Pungkasan &rarr;" : "Pitakon Sabanjure &rarr;"}
          </button>
        </div>
      </div>
    `;

    // Event listener opsi jawaban
    container.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.isAnswered) return;
        const selectedIndex = parseInt(btn.getAttribute("data-index"), 10);
        this.handleAnswer(selectedIndex, currentQuiz);
      });
    });
  },

  handleAnswer(selectedIndex, currentQuiz) {
    this.isAnswered = true;
    const isCorrect = selectedIndex === currentQuiz.kunci;

    if (isCorrect) {
      this.correctCount += 1;
    } else {
      this.wrongCount += 1;
    }

    // Tampilkan styling pada opsi
    const optionButtons = document.querySelectorAll(".quiz-option-btn");
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === currentQuiz.kunci) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add("wrong");
      }
    });

    // Tampilkan umpan balik
    const feedbackBox = document.getElementById("quizFeedbackBox");
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackExp = document.getElementById("feedbackExplanation");

    if (feedbackBox && feedbackTitle && feedbackExp) {
      feedbackBox.className = `quiz-feedback-card show ${isCorrect ? "is-correct" : "is-wrong"}`;
      feedbackTitle.textContent = isCorrect 
        ? "Bener Banget! (Leres Sanget)" 
        : "Durung Pas (Cobi Dipuntiti Malih)";
      feedbackExp.textContent = isCorrect ? currentQuiz.katranganBener : currentQuiz.katranganSalah;
    }

    // Tombol Lanjut
    const btnNext = document.getElementById("btnNextQuiz");
    if (btnNext) {
      btnNext.addEventListener("click", () => {
        this.currentIndex += 1;
        this.renderQuestion();
      });
    }
  },

  // Kartu Nilai Hasil Akhir Kuis
  renderScoreCard() {
    const container = document.getElementById("quizCardContainer");
    if (!container) return;

    const total = KUIS_PILIHAN_GANDA.length;
    const finalScore = Math.round((this.correctCount / total) * 100);

    let predikat = "";
    let evaluasi = "";
    let colorTheme = "var(--c-lumut)";

    if (finalScore === 100) {
      predikat = "Linuwih! (Sempurna)";
      evaluasi = "Hebat sanget! Sampeyan wis paham kabeh paugeran unggah-ungguh basa Jawa kanthi trep.";
      colorTheme = "var(--c-lumut)";
    } else if (finalScore >= 80) {
      predikat = "Sae Sanget! (Sangat Baik)";
      evaluasi = "Pinter! Mung sithik sing kurang trep, sampeyan wis mangerteni kahanan basa kanthi becik.";
      colorTheme = "var(--c-emas-dark)";
    } else if (finalScore >= 60) {
      predikat = "Cukup Sae (Cukup)";
      evaluasi = "Lumayan sae! Ayo coba baleni maneh supaya pikantuk nilai 100.";
      colorTheme = "var(--c-amber)";
    } else {
      predikat = "Perlu Sinau Malih";
      evaluasi = "Aja semplah (putus asa)! Ayo waca maneh materi unggah-ungguh basa Jawa, banjur coba baleni latihan iki.";
      colorTheme = "var(--c-bata)";
    }

    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <img src="assets/illustrations/mascot-bagong.svg" alt="Bagong Hasil Kuis" style="width: 130px; margin-bottom: 1.25rem;" />
        
        <h3 style="font-size: 1.75rem; color: var(--c-sogan-dark); margin-bottom: 0.25rem;">
          Hasil Gladhen Kuis Situasi
        </h3>
        <p style="color: var(--c-text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">
          ${evaluasi}
        </p>

        <!-- Kotak Papan Nilai Angka -->
        <div style="background: var(--c-cream-card); border: 2px solid var(--c-emas-border); border-radius: var(--radius-lg); padding: 1.75rem; max-width: 420px; margin: 0 auto 2rem; box-shadow: var(--c-card-shadow);">
          <div style="font-size: 0.9rem; font-weight: 700; color: var(--c-text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
            Biji / Nilai Pungkasan
          </div>
          <div style="font-family: var(--font-title); font-size: 4rem; font-weight: 700; line-height: 1; color: ${colorTheme}; margin-bottom: 0.5rem;">
            ${finalScore}
          </div>
          <div style="display: inline-block; padding: 0.35rem 1rem; border-radius: var(--radius-full); background: #FFF; border: 1px solid var(--c-border); font-weight: 700; color: var(--c-sogan); font-size: 0.95rem; margin-bottom: 1rem;">
            ${predikat}
          </div>
          
          <div style="display: flex; justify-content: space-around; border-top: 1px dashed var(--c-border); padding-top: 1rem; font-size: 0.9rem;">
            <div>
              <span style="color: var(--c-text-muted);">Jawaban Bener:</span>
              <strong style="display: block; color: var(--c-lumut); font-size: 1.15rem;">${this.correctCount} soal</strong>
            </div>
            <div>
              <span style="color: var(--c-text-muted);">Jawaban Luput:</span>
              <strong style="display: block; color: var(--c-bata); font-size: 1.15rem;">${this.wrongCount} soal</strong>
            </div>
          </div>
        </div>

        <!-- Tombol Aksi Coba Ulang -->
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-primary" id="btnRestartQuizDirect">
            Coba Baleni Kuis (Reset)
          </button>
          <button class="btn btn-secondary" id="btnGoToMatchDirect">
            Coba Pasangaken Tembung &rarr;
          </button>
        </div>
      </div>
    `;

    // Tombol Ulangi Kuis Langsung (Reset ke Soal 1 tanpa simpan)
    document.getElementById("btnRestartQuizDirect")?.addEventListener("click", () => {
      this.init();
    });

    document.getElementById("btnGoToMatchDirect")?.addEventListener("click", () => {
      document.querySelector('[data-exercise-tab="match"]')?.click();
    });
  }
};
