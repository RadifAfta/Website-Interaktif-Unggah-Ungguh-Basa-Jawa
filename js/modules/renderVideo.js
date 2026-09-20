/**
 * =============================================================================
 * MODUL RENDER VIDEO: PRAKTIK TUTUR UNGGAH-UNGGUH BASA JAWA
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
            <p>Browser sampeyan ora nyengkuyung pemutar video HTML5. Mangga download file video ing <a href="${video.src}">kene</a>.</p>
          </video>
        </div>

        <div class="video-card-body">
          <div class="video-card-header">
            <span class="video-num-badge">${video.nomor}</span>
            <div class="video-title-group">
              <h3 class="video-card-title">${video.judul}</h3>
              <span class="video-category-tag" style="color: ${video.badgeColor}; background: ${video.badgeBg}; border: 1px solid ${video.badgeBorder};">
                ${video.ragamBasa}
              </span>
            </div>
          </div>

          <p class="video-card-desc">
            ${video.deskripsi}
          </p>

          <div class="video-keypoints-box">
            <h5 class="video-keypoints-title">Bab kang Kudu Digatekake:</h5>
            <ul class="video-keypoints-list">
              ${video.poinPenting.map(p => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        </div>
      </article>
    `).join("");
  },

  bindEvents(container) {
    const videos = container.querySelectorAll("video");

    // Pause other videos when one video plays
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
