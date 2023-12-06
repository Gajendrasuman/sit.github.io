const textElement = document.querySelector(".typing-effect");
const keywords = ["Responsive Design.", "UI/UX.", "Graphics.", "Animations.", "SEO."];

let currentKeywordIndex = 0;
let currentText = keywords[currentKeywordIndex];
let isTyping = true;

function typeText() {
  if (isTyping) {
    if (currentText.length > 0) {
      textElement.textContent += currentText.charAt(0);
      currentText = currentText.slice(1);
      setTimeout(typeText, 100); // Typing speed (adjust as needed)
    } else {
      isTyping = false;
      setTimeout(eraseText, 2000); // Pause before erasing (adjust as needed)
    }
  }
}

function eraseText() {
  if (!isTyping) {
    if (textElement.textContent.length > 0) {
      textElement.textContent = textElement.textContent.slice(0, -1);
      setTimeout(eraseText, 50); // Backspace speed (adjust as needed)
    } else {
      currentKeywordIndex = (currentKeywordIndex + 1) % keywords.length;
      currentText = keywords[currentKeywordIndex];
      isTyping = true;
      setTimeout(typeText, 1000); // Pause before typing next keyword (adjust as needed)
    }
  }
}

// Start the typing effect
setTimeout(typeText, 1000); // Initial delay before typing starts (adjust as needed)
