const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.2}s`;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.3 }
);

cards.forEach(card => observer.observe(card));

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => {
      if (!res.ok) throw new Error("header.html not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("header").innerHTML = html;

      // Toggle menu AFTER header loads
      const toggle = document.getElementById("menuToggle");
      const nav = document.getElementById("navLinks");

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
      }

      // Dynamic hero text (optional)
      const body = document.body;
      if (body.dataset.title) {
        document.getElementById("heroTitle").textContent = body.dataset.title;
      }
      if (body.dataset.subtitle) {
        document.getElementById("heroSubtitle").textContent = body.dataset.subtitle;
      }
    })
    .catch(err => console.error(err.message));
});

