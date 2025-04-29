// coffre.js

function ajouterSouvenir(texte) {
  if (!texte.trim()) return;

  let souvenirs = JSON.parse(localStorage.getItem("souvenirs")) || [];
  souvenirs.push({
    texte: texte,
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem("souvenirs", JSON.stringify(souvenirs));

  pluieDeConfettis();
}

function pluieDeConfettis() {
  const confettisContainer = document.createElement("div");
  confettisContainer.style.position = "fixed";
  confettisContainer.style.top = "0";
  confettisContainer.style.left = "0";
  confettisContainer.style.width = "100%";
  confettisContainer.style.height = "100%";
  confettisContainer.style.pointerEvents = "none";
  confettisContainer.style.zIndex = "9999";

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${-Math.random() * 20}px`;
    confetti.style.opacity = "0.8";
    confetti.style.borderRadius = "50%";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.animation = "descendre 3s ease-out forwards";

    confettisContainer.appendChild(confetti);
  }

  document.body.appendChild(confettisContainer);

  setTimeout(() => {
    confettisContainer.remove();
  }, 3500);
}

// Animation CSS en JS (pas besoin de fichier CSS supplémentaire)
const style = document.createElement('style');
style.textContent = `
@keyframes descendre {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
