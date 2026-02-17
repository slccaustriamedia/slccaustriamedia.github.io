document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const button = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#site-menu");

  if (!header || !button || !menu) return;

  const setExpanded = (expanded) => {
    button.setAttribute("aria-expanded", String(expanded));
    header.classList.toggle("nav-open", expanded);
  };

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    setExpanded(!expanded);
  });

  // Close menu after tapping a link (nice on mobile)
  menu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) setExpanded(false);
  });

  // Safety: if user rotates / resizes to desktop, ensure menu isn't stuck hidden
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setExpanded(false);
  });
});
