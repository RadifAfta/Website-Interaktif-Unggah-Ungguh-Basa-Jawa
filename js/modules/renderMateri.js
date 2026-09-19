/**
 * =============================================================================
 * MODUL RENDER MATERI UNGGAH-UNGGUH (SESUAI NASKAH KLIEN)
 * =============================================================================
 */

import { MATERI_DATA, MATERI_PENGANTAR } from "../data/materiData.js";

export const RenderMateri = {
  init() {
    this.renderPengantar();
    this.renderHomePreviews();
    this.renderCards("kabeh");
    this.bindFilterEvents();
  },

  // Render pengantar umum unggah-ungguh basa
  renderPengantar() {
    const pengantarElem = document.getElementById("materiPengantarText");
    if (pengantarElem && MATERI_PENGANTAR) {
      pengantarElem.textContent = MATERI_PENGANTAR.isi;
    }
  },

  // Render 4 kartu ringkas di Beranda (Desain Elegan Budaya Jawa)
  renderHomePreviews() {
    const previewContainer = document.getElementById("homeLevelPreviewGrid");
    if (!previewContainer) return;

    previewContainer.innerHTML = MATERI_DATA.map(materi => {
      return `
        <article class="preview-card" data-filter="${materi.id}">
          <div>
            <div class="preview-card-header">
              <span class="preview-level-num">0${materi.tingkatFormil}</span>
              <span class="preview-level-tag">Tataran ${materi.tingkatFormil}</span>
            </div>
            <h4 class="preview-card-title">${materi.nama}</h4>
            <div class="preview-card-subtitle">${materi.sebutanLiyo}</div>
            <p class="preview-card-desc">${materi.pangerten}</p>
          </div>
          <div class="preview-card-action">
            <span>Waca Materi</span>
            <span style="font-size: 1.1rem; line-height: 1;">&rarr;</span>
          </div>
        </article>
      `;
    }).join("");

    // Bind klik pada kartu preview agar langsung berpindah dan memfilter di halaman materi
    previewContainer.querySelectorAll(".preview-card").forEach(card => {
      card.addEventListener("click", () => {
        const filterId = card.getAttribute("data-filter");
        // Navigasi ke tab materi
        document.querySelector('.nav-link[data-target="materi"]')?.click();
        this.filterTo(filterId);
      });
    });
  },

  // Render kartu materi utama di halaman #materi
  renderCards(activeFilter = "kabeh") {
    const container = document.getElementById("materiCardsContainer");
    if (!container) return;

    const filtered = activeFilter === "kabeh" 
      ? MATERI_DATA 
      : MATERI_DATA.filter(m => m.id === activeFilter);

    container.innerHTML = filtered.map(materi => {
      const themeConfig = {
        "ngoko-lugu": {
          accent: "var(--c-level-ngoko-lugu)",
          bgLight: "var(--c-level-ngoko-lugu-bg)",
          border: "var(--c-level-ngoko-lugu-border)"
        },
        "ngoko-alus": {
          accent: "var(--c-level-ngoko-alus)",
          bgLight: "var(--c-level-ngoko-alus-bg)",
          border: "var(--c-level-ngoko-alus-border)"
        },
        "krama-lugu": {
          accent: "var(--c-level-krama-lugu)",
          bgLight: "var(--c-level-krama-lugu-bg)",
          border: "var(--c-level-krama-lugu-border)"
        },
        "krama-alus": {
          accent: "var(--c-level-krama-alus)",
          bgLight: "var(--c-level-krama-alus-bg)",
          border: "var(--c-level-krama-alus-border)"
        }
      }[materi.levelWarna] || {
        accent: "var(--c-sogan)",
        bgLight: "var(--c-cream-card)",
        border: "var(--c-border)"
      };

      const audienceListHtml = materi.digunakakeKanggo
        .map(item => `<li>${item}</li>`)
        .join("");

      const titikaneListHtml = materi.titikane
        ? materi.titikane.map(t => `<li>${t}</li>`).join("")
        : "";

      const vocabRowsHtml = materi.tuladhaTembung
        .map(t => `
          <tr>
            <td><strong>${t.ngoko}</strong></td>
            <td>${t.kramaLugu || '-'}</td>
            <td>${t.kramaAlus || '-'}</td>
            <td><em>${t.tegese}</em></td>
          </tr>
        `).join("");

      const sentenceHtml = materi.tuladhaUkara
        .map(s => `
          <div class="sentence-example-box">
            <div class="sentence-jawa">"${s.jawa}"</div>
            <div class="sentence-indo">Artinya: ${s.indonesia}</div>
          </div>
        `).join("");

      return `
        <article class="materi-card" style="--card-accent: ${themeConfig.accent}; --card-bg-light: ${themeConfig.bgLight}; --card-border: ${themeConfig.border};" id="${materi.id}">
          <header class="materi-card-header">
            <div class="materi-card-title-group">
              <h3>${materi.nama}</h3>
              <div class="materi-card-subtitle">Kategori: ${materi.sebutanLiyo}</div>
            </div>
            <span class="materi-badge">${materi.badgeText}</span>
          </header>

          <div class="materi-card-body">
            <!-- Kolom Kiri: Pengertian, Panganggone & Titikane -->
            <div class="materi-col-left">
              <div class="materi-intro-desc">
                ${materi.pangerten}
              </div>

              <h4 class="materi-subheading">Panganggone Basa ${materi.nama}:</h4>
              <ul class="target-audience-list">
                ${audienceListHtml}
              </ul>

              <h4 class="materi-subheading">Titikane utawa Ciri-cirine:</h4>
              <ul class="target-audience-list">
                ${titikaneListHtml}
              </ul>

              <h4 class="materi-subheading">Paugeran:</h4>
              <div class="paugeran-box">
                ${materi.paugeran}
              </div>
            </div>

            <!-- Kolom Kanan: Tabel Perubahan Kata & Contoh Kalimat -->
            <div class="materi-col-right">
              <h4 class="materi-subheading">Tuladha Owah-owahan Tembung:</h4>
              <div class="vocabulary-table-wrapper">
                <table class="vocabulary-mini-table">
                  <thead>
                    <tr>
                      <th>Ngoko</th>
                      <th>Krama Lugu</th>
                      <th>Krama Alus</th>
                      <th>Arti (ID)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${vocabRowsHtml}
                  </tbody>
                </table>
              </div>

              <h4 class="materi-subheading">Tuladha Ukara Trep:</h4>
              ${sentenceHtml}
            </div>
          </div>

          <!-- Footer Tips dari Maskot Si Bagong -->
          <footer class="materi-card-footer">
            <img src="assets/illustrations/mascot-bagong.svg" alt="Maskot Si Bagong" class="footer-mascot-face" />
            <div class="footer-mascot-text">
              <strong>Tips Si Bagong:</strong> "${materi.tipsMaskot}"
            </div>
          </footer>
        </article>
      `;
    }).join("");
  },

  bindFilterEvents() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filterVal = btn.getAttribute("data-filter");
        this.renderCards(filterVal);
      });
    });
  },

  filterTo(filterId) {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(b => {
      if (b.getAttribute("data-filter") === filterId) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
    this.renderCards(filterId);
    
    // Scroll ke elemen materi
    const elem = document.getElementById(filterId);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
};
