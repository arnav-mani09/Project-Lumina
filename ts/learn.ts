document.addEventListener('DOMContentLoaded', () => {
  const navigateButton = document.querySelector(".home") as HTMLButtonElement;

  if (navigateButton) {
    navigateButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "index.html"; // Or any other URL
    });
  }
});
console.log("✅ TypeScript is working on the learn page!");