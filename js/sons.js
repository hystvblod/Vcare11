// js/sons.js

const sons = [
  { nom: "Pluie", fichier: "pluie.mp3" },
  { nom: "Vagues", fichier: "vagues.mp3" },
  { nom: "Forêt", fichier: "foret.mp3" },
  { nom: "Vent", fichier: "vent.mp3" }
];

let audio = new Audio();
let sonActuel = null;

// Initialisation à l’ouverture de la page
window.addEventListener("DOMContentLoaded", () => {
  const liste = document.getElementById("liste-sons");
  const volumeSlider = document.getElementById("volume");
  const sonEnCours = document.getElementById("son-actuel");

  // Affichage des boutons de sons
  sons.forEach((son, index) => {
    const bouton = document.createElement("button");
    bouton.textContent = son.nom;
    bouton.classList.add("son-btn");
    bouton.addEventListener("click", () => jouerSon(index));
    liste.appendChild(bouton);
  });

  // Contrôle du volume
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  // Nom du son en cours
  function jouerSon(index) {
    const son = sons[index];
    if (sonActuel === son.fichier) {
      audio.pause();
      sonActuel = null;
      sonEnCours.textContent = "Aucun son en cours";
    } else {
      audio.src = `media/sons/${son.fichier}`;
      audio.loop = true;
      audio.volume = volumeSlider.value;
      audio.play();
      sonActuel = son.fichier;
      sonEnCours.textContent = `Son en cours : ${son.nom}`;
    }
  }
});
