// Fichier : detente.js
// Mini-jeu de détente : bulles à éclater (version gratuite)

let currentGame = "bulles";

function startGame(name) {
  currentGame = name;
  initGame();
}

function initGame() {
  if (currentGame === "bulles") {
    initBubbleGame();
  }
  // Jeux premium ou autres à venir (V2)
}

function initBubbleGame() {
  const canvas = document.getElementById("canvasDetente");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let bubbles = [];

  class Bubble {
    constructor() {
      this.radius = Math.random() * 40 + 20;
      this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
      this.y = canvas.height + this.radius;
      this.speed = Math.random() * 1 + 0.5;
      this.color = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 150)}, 255, 0.5)`;
      this.popped = false;
    }

    update() {
      this.y -= this.speed;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    isClicked(mouseX, mouseY) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      return Math.sqrt(dx * dx + dy * dy) < this.radius;
    }
  }

  function createBubbles() {
    if (bubbles.length < 20) {
      bubbles.push(new Bubble());
    }
  }

  function handleBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createBubbles();
    bubbles.forEach((bubble, index) => {
      bubble.update();
      bubble.draw();
      if (bubble.y + bubble.radius < 0 || bubble.popped) {
        bubbles.splice(index, 1);
      }
    });
  }

  function animate() {
    handleBubbles();
    requestAnimationFrame(animate);
  }

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    bubbles.forEach((bubble) => {
      if (bubble.isClicked(mouseX, mouseY)) {
        bubble.popped = true;
        playPopSound();
      }
    });
  });

  function playPopSound() {
    const audio = new Audio("media/sons/pop.mp3");
    audio.volume = 0.2;
    audio.play();
  }

  animate();
}

// Démarrage automatique au chargement si canvas présent
window.addEventListener("load", () => {
  if (document.getElementById("canvasDetente")) {
    initGame();
  }
});
