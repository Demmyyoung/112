document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const navOverlay = document.getElementById("nav-overlay");
  const body = document.body;

  if (menuButton && navOverlay) {
    menuButton.addEventListener("click", () => {
      navOverlay.classList.toggle("active");

      // Optional: Prevent scrolling when menu is open
      if (navOverlay.classList.contains("active")) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navOverlay.classList.remove("active");
        body.style.overflow = "";
      });
    });
  }

  // Smooth Scroll specifically for anchor links if any
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
