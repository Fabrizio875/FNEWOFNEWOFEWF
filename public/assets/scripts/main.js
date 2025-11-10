document.addEventListener("DOMContentLoaded", () => {
  // Toggle tema (solo vista)
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // Login de prueba
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", () => {
      const role = document.getElementById("loginRole").value;
      const status = document.getElementById("loginStatus");
      status.textContent = "Redirigiendo...";
      if (role === "patient") {
        window.location.href = "../patient/dashboard.html";
      } else {
        window.location.href = "../psychologist/dashboard.html";
      }
    });
  }
});
