/**
 * =============================================================================
 * MODUL RENDER PACELATHON (CONTOH DIALOG INTERAKTIF)
 * =============================================================================
 */

import { DIALOG_DATA } from "../data/dialogData.js";

export const RenderDialog = {
  activeScenarioId: DIALOG_DATA[0].id,
  showAllTranslations: false,

  init() {
    this.renderScenarioSelectors();
    this.renderCurrentScenario();
    this.bindGlobalControls();
  },

  renderScenarioSelectors() {
    const container = document.getElementById("dialogScenarioSelector");
    if (!container) return;

    container.innerHTML = DIALOG_DATA.map((sc, idx) => {
      const isActive = sc.id === this.activeScenarioId ? "active" : "";
      return `
        <button class="scenario-pill ${isActive}" data-scenario-id="${sc.id}">
          <span>${idx + 1}.</span> ${sc.judul}
        </button>
      `;
    }).join("");

    container.querySelectorAll(".scenario-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        container.querySelectorAll(".scenario-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.activeScenarioId = pill.getAttribute("data-scenario-id");
        this.renderCurrentScenario();
      });
    });
  },

  renderCurrentScenario() {
    const scenario = DIALOG_DATA.find(s => s.id === this.activeScenarioId) || DIALOG_DATA[0];
    
    // Update info bar skenario
    const titleElem = document.getElementById("scenarioCurrentTitle");
    const descElem = document.getElementById("scenarioCurrentDesc");
    const ragamElem = document.getElementById("scenarioCurrentRagam");
    
    if (titleElem) titleElem.textContent = `${scenario.judul} (${scenario.latar})`;
    if (descElem) descElem.textContent = scenario.katerangan;
    if (ragamElem) ragamElem.textContent = `Tataran Utama: ${scenario.unggahUngguhUtama}`;

    // Render Balon Percakapan
    const stageContainer = document.getElementById("dialogConversationStage");
    if (!stageContainer) return;

    stageContainer.innerHTML = scenario.dialogs.map((d, index) => {
      const isRight = d.posisi === "right" ? "right" : "left";
      const isTranslationShown = this.showAllTranslations ? "show" : "";

      return `
        <div class="dialog-bubble-row ${isRight}">
          <div class="dialog-avatar-wrap">
            <img src="${d.avatar}" alt="${d.tokoh}" class="dialog-avatar-img" />
            <span class="dialog-speaker-name">${d.tokoh}</span>
          </div>

          <div class="dialog-speech-box">
            <div class="speech-header">
              <span class="speech-ragam-badge">${d.ragam}</span>
              <button class="btn-peek-translation" data-index="${index}">
                ${this.showAllTranslations ? "Tutup Terjemahan" : "Deleng Terjemahan"}
              </button>
            </div>
            
            <div class="speech-jawa-text">
              "${d.teksJawa}"
            </div>

            <div class="speech-translation-area ${isTranslationShown}" id="trans-${index}">
              <strong>Terjemahan Indonesia:</strong> "${d.tegese}"
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Bind tombol toggle per-balon dialog
    stageContainer.querySelectorAll(".btn-peek-translation").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-index");
        const transBox = document.getElementById(`trans-${idx}`);
        if (transBox) {
          const isOpen = transBox.classList.toggle("show");
          btn.textContent = isOpen ? "Tutup Terjemahan" : "Deleng Terjemahan";
        }
      });
    });
  },

  bindGlobalControls() {
    const btnGlobal = document.getElementById("btnToggleAllTranslations");
    if (btnGlobal) {
      btnGlobal.addEventListener("click", () => {
        this.showAllTranslations = !this.showAllTranslations;
        btnGlobal.textContent = this.showAllTranslations 
          ? "Tutup Kabeh Terjemahan" 
          : "Tampilake Kabeh Terjemahan";
        
        // Toggle semua kotak terjemahan di layar
        document.querySelectorAll(".speech-translation-area").forEach(area => {
          area.classList.toggle("show", this.showAllTranslations);
        });

        document.querySelectorAll(".btn-peek-translation").forEach(btn => {
          btn.textContent = this.showAllTranslations ? "Tutup Terjemahan" : "Deleng Terjemahan";
        });
      });
    }
  }
};
