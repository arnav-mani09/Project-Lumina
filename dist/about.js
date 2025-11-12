"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const navigateButton = document.querySelector('.home');
    if (navigateButton) {
        navigateButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
console.log("✅ TypeScript is working on the about page!");
//# sourceMappingURL=about.js.map