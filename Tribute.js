// Theme toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "☀ Toggle Theme";
  } else {
    themeToggle.textContent = "🌙 Toggle Theme";
  }
});
