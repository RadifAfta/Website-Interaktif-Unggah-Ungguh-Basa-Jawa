/**
 * =============================================================================
 * MODUL NAVIGASI APLIKASI (SPA ROUTING RINGAN)
 * =============================================================================
 */

export const Navigation = {
  init() {
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Klik pada navigasi menu header
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        this.navigateTo(targetId);
      });
    });

    // Tombol jump action (misal "Mulai Sinau" di Hero)
    document.querySelectorAll("[data-navigate]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute("data-navigate");
        this.navigateTo(targetId);
      });
    });

    // Deteksi hash URL saat pertama kali dibuka (misal: #materi)
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash && document.getElementById(currentHash)) {
      this.navigateTo(currentHash);
    } else {
      this.navigateTo("beranda");
    }

    window.addEventListener("popstate", () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && document.getElementById(hash)) {
        this.navigateTo(hash, false);
      }
    });
  },

  navigateTo(targetId, updateHistory = true) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll(".app-section");
    sections.forEach(sec => sec.classList.remove("active"));

    // Hentikan pemutaran video jika pengguna berpindah halaman
    document.querySelectorAll("video").forEach(v => {
      if (!v.paused) v.pause();
    });

    // Tampilkan section yang dipilih
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Perbarui status menu aktif
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      if (link.getAttribute("data-target") === targetId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Scroll mulus ke atas
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update URL hash
    if (updateHistory) {
      window.history.pushState(null, "", `#${targetId}`);
    }
  }
};
