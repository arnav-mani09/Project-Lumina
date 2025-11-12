"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const navigateButton = document.querySelector(".home");
    if (navigateButton) {
        navigateButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
});
console.log("✅ TypeScript is working on the learn page!");
//# sourceMappingURL=learn.js.map