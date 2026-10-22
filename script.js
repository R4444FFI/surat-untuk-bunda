const petalSymbols = ["✿", "❀", "✾"];
const hero = document.querySelector(".hero");

if (hero) {
  for (let i = 0; i < 17; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.setAttribute("aria-hidden", "true");
    petal.textContent = petalSymbols[i % petalSymbols.length];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${11 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * -22}s`;
    petal.style.fontSize = `${12 + Math.random() * 15}px`;
    hero.append(petal);
  }
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const surpriseButton = document.getElementById("surpriseButton");
if (surpriseButton) {
  surpriseButton.addEventListener("click", () => {
    const message = document.getElementById("surpriseMessage");
    message.hidden = !message.hidden;
    surpriseButton.textContent = message.hidden ? "Klik untuk kejutan kecil ✨" : "Kirim peluk dari sini 🤗";

    if (!message.hidden) {
      const colors = ["#f2d394", "#e8c6e9", "#fff", "#d59bc9", "#c1a6ec"];
      for (let i = 0; i < 90; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.setAttribute("aria-hidden", "true");
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.backgroundColor = colors[i % colors.length];
        piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
        piece.style.animationDelay = `${Math.random() * 0.8}s`;
        document.body.append(piece);
        window.setTimeout(() => piece.remove(), 4300);
      }
    }
  });
}
