
// ELARA PLAYHOUSE — WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for all internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // Footer year
  const yearElement = document.querySelector("#currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
