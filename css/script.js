(() => {
  // Header shadow on scroll (safe + lightweight)
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => header.classList.toggle("scrolled", window.scrollY > 0),
      { passive: true }
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");

    if (!hamburgerBtn || !mobileMenu || !closeBtn) return;

    const openMenu = () => {
      mobileMenu.classList.add("show");
      document.body.classList.add("menu-open");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      mobileMenu.setAttribute("aria-hidden", "false");
    };

    const closeMenu = () => {
      mobileMenu.classList.remove("show");
      document.body.classList.remove("menu-open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");

      // Reset dropdowns
      document.querySelectorAll(".mobile-dropdown.open").forEach((el) => el.classList.remove("open"));
      document
        .querySelectorAll(".mobile-dropdown-toggle[aria-expanded='true']")
        .forEach((el) => el.setAttribute("aria-expanded", "false"));
    };

    hamburgerBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("show")) closeMenu();
    });

    document.querySelectorAll(".mobile-dropdown-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");

      toggle.addEventListener("click", (e) => {
        e.preventDefault(); // avoids jump-to-top for href="#"
        const parent = toggle.closest(".mobile-dropdown");
        if (!parent) return;

        const isOpen = parent.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    });
  });
})();
