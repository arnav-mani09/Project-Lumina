document.addEventListener("DOMContentLoaded", () => {
  const aboutButton = document.querySelector(".about-us-button") as HTMLAnchorElement | null;

  if (aboutButton) {
    aboutButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "about.html";
    });
  }
});
console.log("✅ TypeScript is working on the home page!");

document.addEventListener("DOMContentLoaded", () => {
  const learnButton = document.querySelector(".learn") as HTMLAnchorElement | null;
  if (learnButton) {
    learnButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "learn.html";
    });
  }
});
console.log("✅ TypeScript is working on the home page!");

