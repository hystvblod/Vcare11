window.addEventListener("DOMContentLoaded", () => {
  // 1. Appliquer le style choisi depuis le localStorage
  const savedStyle = localStorage.getItem("style");
  if (savedStyle) {
    const link = document.querySelector('link[rel="stylesheet"]');
    if (link) link.href = "css/" + savedStyle;  // Applique le style stocké
  }

  // 2. Rediriger vers etatdujour.html si l’option autoHumeur est activée
  const surPageAccueil = location.pathname.endsWith("index.html") || location.pathname.endsWith("/");
  if (surPageAccueil && localStorage.getItem("autoHumeur") === "true") {
    window.location.href = "etatdujour.html";  // Redirige vers etatdujour.html si l'option est activée
  }

  // 3. Affichage console pour debug : prénom stocké
  const prenom = localStorage.getItem("prenom");
  if (prenom) console.log("👋 Bienvenue " + prenom + " !");  // Affiche le prénom si présent
});

// 4. Fonction utilitaire : permet d’accéder au prénom depuis d’autres scripts
function getPrenom() {
  return localStorage.getItem("prenom") || "";  // Renvoie le prénom stocké, ou une chaîne vide
}
