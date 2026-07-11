export const NAVBAR_HEIGHT = 55;

export function scrollToSection(target) {
  const el = document.getElementById(target);
  if (!el) return;

  const top =
    el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

  window.scrollTo({ top, behavior: "smooth" });
  history.pushState(null, "", `#${target}`);
}