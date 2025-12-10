document.addEventListener("DOMContentLoaded", () => {

  /* ------ Typing effect ------ */
  const text = "Passez au niveau supérieur grâce à l’IA et au digital.";
  const typed = document.getElementById("typed-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      typed.textContent += text[i];
      i++;
      setTimeout(type, 30);
    }
  }

  setTimeout(type, 300);

  /* ------ Smooth scroll ------ */
  document.querySelectorAll("a, #contact-btn").forEach(el => {
    el.addEventListener("click", e => {
      const target = el.getAttribute("href") || "#contact";
      if (target.startsWith("#")) {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
