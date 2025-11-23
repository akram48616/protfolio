// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    navToggle.classList.remove("active");
  }
});

// Simple front-end-only form handler
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Thanks for reaching out! This form currently works on the front-end only. Connect it to a backend (e.g., Spring Boot or a form service) to actually send messages.";
  formStatus.style.color = "#9ca3af";

  contactForm.reset();
});

// Scroll reveal for sections
const animatedSections = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

animatedSections.forEach((el) => observer.observe(el));
