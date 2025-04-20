const text = "Welcome to My Funny Website!";
let index = 0;
let isDeleting = false;
const heading = document.getElementById("animated-heading");

function typeEffect() {
  heading.textContent = text.slice(0, index);
  if (!isDeleting) {
    index++;
    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeEffect, 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-mode");

  // Check saved mode in local storage
  if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Save mode in local storage
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("mode", "light");
    } else {
      localStorage.setItem("mode", "dark");
    }
  });
});