document.addEventListener("DOMContentLoaded", () => {
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });
});
