/**
 * =============================================================================
 * APP.JS: TITIK MASUK UTAMA (ENTRY POINT) APLIKASI
 * =============================================================================
 */

import { Navigation } from "./modules/navigation.js";
import { RenderMateri } from "./modules/renderMateri.js";
import { RenderDialog } from "./modules/renderDialog.js";
import { RenderVideo } from "./modules/renderVideo.js";
import { ExerciseQuiz } from "./modules/exerciseQuiz.js";
import { ExerciseMatch } from "./modules/exerciseMatch.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Navigasi SPA (Beranda, Materi, Pacelathon, Praktik Tutur, Gladhen)
  Navigation.init();

  // 2. Inisialisasi Modul Konten & Latihan Interaktif
  RenderMateri.init();
  RenderDialog.init();
  RenderVideo.init();
  ExerciseQuiz.init();
  ExerciseMatch.init();



  // 4. Bind Sub-Tab Gladhen (Kuis Situasi vs Pasang Tembung)
  const gladhenTypeButtons = document.querySelectorAll(".exercise-type-btn");
  gladhenTypeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      gladhenTypeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tabTarget = btn.getAttribute("data-exercise-tab");
      const quizPane = document.getElementById("quizViewPane");
      const matchPane = document.getElementById("matchViewPane");

      if (tabTarget === "quiz") {
        quizPane?.classList.add("active");
        matchPane?.classList.remove("active");
      } else if (tabTarget === "match") {
        quizPane?.classList.remove("active");
        matchPane?.classList.add("active");
      }
    });
  });
});
