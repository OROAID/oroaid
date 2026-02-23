const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// "Get Help" form (simple mailto submission)
// Replace email below with your official email.
const helpForm = document.getElementById("helpForm");
helpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(helpForm);
  const payload = Object.fromEntries(data.entries());

  const to = "youremail@domain.com";
  const subject = encodeURIComponent("OROAID Help Request");
  const body = encodeURIComponent(
    `Name: ${payload.name}\nPhone: ${payload.phone}\nLocation: ${payload.location}\nNeed: ${payload.need}\n\nMessage:\n${payload.message}`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});