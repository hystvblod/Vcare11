// badges.js

function gagnerBadge(nomBadge) {
  // Charger les badges existants
  let badgesGagnes = JSON.parse(localStorage.getItem("badgesGagnes")) || [];

  // Si le badge n'est pas encore gagné
  if (!badgesGagnes.includes(nomBadge)) {
    badgesGagnes.push(nomBadge);
    localStorage.setItem("badgesGagnes", JSON.stringify(badgesGagnes));

    // Animation douce d'affichage
    afficherBadge(nomBadge);

    // Son de gain de badge
    const sonBadge = new Audio("media/sons/badge_gain.mp3");
    sonBadge.play();
  }
}

function afficherBadge(nomBadge) {
  const badgePopup = document.createElement("div");
  badgePopup.className = "badge-popup";
  badgePopup.textContent = "🎖️ Nouveau badge : " + nomBadge + " !";

  badgePopup.style.position = "fixed";
  badgePopup.style.top = "20px";
  badgePopup.style.right = "20px";
  badgePopup.style.background = "#5bb0a7";
  badgePopup.style.color = "white";
  badgePopup.style.padding = "1rem 1.5rem";
  badgePopup.style.borderRadius = "1rem";
  badgePopup.style.fontSize = "1rem";
  badgePopup.style.zIndex = "9999";
  badgePopup.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  badgePopup.style.opacity = "0";
  badgePopup.style.transition = "opacity 0.5s ease";

  document.body.appendChild(badgePopup);

  setTimeout(() => {
    badgePopup.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    badgePopup.style.opacity = "0";
    setTimeout(() => badgePopup.remove(), 500);
  }, 4000);
}
