/**
 * =============================================================================
 * MODUL PROGRESS TRACKER (LOCALSTORAGE)
 * =============================================================================
 * Menyimpan data skor kuis, game pasangan kata, dan bintang capaian siswa
 * secara lokal di browser tanpa perlu registrasi atau login.
 * =============================================================================
 */

const STORAGE_KEYS = {
  STARS: "unggah_ungguh_stars",
  QUIZ_SCORE: "unggah_ungguh_quiz_score",
  QUIZ_TOTAL: "unggah_ungguh_quiz_total",
  MATCH_DONE: "unggah_ungguh_match_done",
  PROJECTOR_MODE: "unggah_ungguh_projector_mode"
};

export const ProgressTracker = {
  getStars() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.STARS) || "0", 10);
  },

  addStars(count) {
    const current = this.getStars();
    const updated = Math.min(10, current + count); // Max 10 bintang
    localStorage.setItem(STORAGE_KEYS.STARS, updated.toString());
    this.updateUI();
    return updated;
  },

  saveQuizResult(score, total) {
    localStorage.setItem(STORAGE_KEYS.QUIZ_SCORE, score.toString());
    localStorage.setItem(STORAGE_KEYS.QUIZ_TOTAL, total.toString());
    // Tambah 1 bintang untuk tiap jawaban benar (maksimal 5 dari kuis)
    this.addStars(score);
    this.updateUI();
  },

  getQuizResult() {
    const score = localStorage.getItem(STORAGE_KEYS.QUIZ_SCORE);
    const total = localStorage.getItem(STORAGE_KEYS.QUIZ_TOTAL);
    if (score !== null && total !== null) {
      return { score: parseInt(score, 10), total: parseInt(total, 10) };
    }
    return null;
  },

  saveMatchCompleted() {
    localStorage.setItem(STORAGE_KEYS.MATCH_DONE, "true");
    // Tambah 3 bintang saat berhasil mencocokkan semua kata
    this.addStars(3);
    this.updateUI();
  },

  isMatchCompleted() {
    return localStorage.getItem(STORAGE_KEYS.MATCH_DONE) === "true";
  },

  resetProgress() {
    localStorage.removeItem(STORAGE_KEYS.STARS);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_SCORE);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_TOTAL);
    localStorage.removeItem(STORAGE_KEYS.MATCH_DONE);
    this.updateUI();
  },

  isProjectorMode() {
    return localStorage.getItem(STORAGE_KEYS.PROJECTOR_MODE) === "true";
  },

  setProjectorMode(enabled) {
    localStorage.setItem(STORAGE_KEYS.PROJECTOR_MODE, enabled ? "true" : "false");
    document.body.classList.toggle("projector-mode", enabled);
    const btn = document.getElementById("btnProjectorToggle");
    if (btn) {
      btn.classList.toggle("active", enabled);
      btn.setAttribute("aria-pressed", enabled ? "true" : "false");
    }
  },

  updateUI() {
    const stars = this.getStars();
    
    // Update bintang di header
    const starCountHeader = document.getElementById("headerStarCount");
    if (starCountHeader) {
      starCountHeader.textContent = stars;
    }

    // Update halaman ringkasan progres
    const starCountProgress = document.getElementById("progressStarCount");
    if (starCountProgress) {
      starCountProgress.textContent = stars;
    }

    const quizResult = this.getQuizResult();
    const quizScoreElem = document.getElementById("progressQuizScore");
    if (quizScoreElem) {
      if (quizResult) {
        quizScoreElem.textContent = `${quizResult.score} / ${quizResult.total}`;
      } else {
        quizScoreElem.textContent = "Dereng (Belum)";
      }
    }

    const matchDone = this.isMatchCompleted();
    const matchStatusElem = document.getElementById("progressMatchStatus");
    if (matchStatusElem) {
      matchStatusElem.textContent = matchDone ? "Rampung (Selesai)" : "Dereng (Belum)";
    }

    // Gelar Kehormatan Siswa
    const badgeTitleElem = document.getElementById("progressBadgeTitle");
    const badgeDescElem = document.getElementById("progressBadgeDesc");
    if (badgeTitleElem && badgeDescElem) {
      if (stars >= 8) {
        badgeTitleElem.textContent = "🏆 Pinter Basa Utama (Tingkat Ahli)";
        badgeDescElem.textContent = "Hebat sanget! Sampeyan wis nguwasani tata krama unggah-ungguh basa Jawa kanthi jempolan.";
      } else if (stars >= 4) {
        badgeTitleElem.textContent = "⭐ Juru Basa Madya (Tingkat Menengah)";
        badgeDescElem.textContent = "Sae sanget! Terusna sinau lan latihan supaya tambah lancar lan trapsila.";
      } else {
        badgeTitleElem.textContent = "🌱 Siswa Taruna (Tingkat Pemula)";
        badgeDescElem.textContent = "Ayo waca materi lan garap latihan supaya pikantuk bintang pakurmatan!";
      }
    }
  }
};
