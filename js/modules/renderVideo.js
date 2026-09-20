/**
 * =============================================================================
 * MODUL RENDER VIDEO: TULADHA VIDEO UNGGAH-UNGGUH BASA JAWA
 * =============================================================================
 */

import { VIDEO_DATA } from "../data/videoData.js";

export const RenderVideo = {
  init() {
    const container = document.getElementById("videoCardsContainer");
    if (!container) return;

    this.render(container);
    this.bindEvents(container);
  },

  render(container) {
    container.innerHTML = VIDEO_DATA.map((video) => `
      <article class="video-card" id="${video.id}">
        <div class="video-player-wrapper">
          <video 
            controls 
            playsinline 
            preload="metadata"
            class="video-element"
            aria-label="${video.judul}">
            <source src="${video.src}" type="video/mp4" />
            <p>Browser sampeyan ora nyengkuyung pemutar video HTML5.</p>
          </video>
        </div>

        <div class="video-card-body-simple">
          <span class="video-num-badge">${video.nomor}</span>
          <h4 class="video-card-title-simple">${video.judul}</h4>
        </div>
      </article>
    `).join("");
  },

  bindEvents(container) {
    const videos = container.querySelectorAll("video");

    // Otomatis jeda video lain jika salah satu video diputar
    videos.forEach((vid) => {
      vid.addEventListener("play", () => {
        videos.forEach((otherVid) => {
          if (otherVid !== vid && !otherVid.paused) {
            otherVid.pause();
          }
        });
      });
    });
  }
};
