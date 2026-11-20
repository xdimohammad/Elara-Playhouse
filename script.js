// ELARA PLAYHOUSE — WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Explore Our Games button
  const exploreButton = document.querySelector(
    '.hero a[href="#games"], a[href="#games"].btn'
  );

  if (exploreButton) {
    exploreButton.addEventListener("click", () => {
      document.querySelector("#games")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // Footer year
  const yearElement = document.querySelector("#currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
