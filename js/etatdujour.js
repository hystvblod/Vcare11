// etatdujour.js – Gère la sélection d’humeur et génère message + suggestion

document.addEventListener("DOMContentLoaded", () => {
  const humeurSelect = document.getElementById("humeur-select");
  const vbotMessage = document.getElementById("vbot-message");
  const suggestionJour = document.getElementById("suggestion-jour");

  humeurSelect.addEventListener("change", () => {
    const humeur = humeurSelect.value;
    const messages = {
      joyeux: "Garde cette belle énergie, elle est précieuse ✨",
      calme: "Un peu de sérénité… c’est précieux, savoure-la 🌿",
      triste: "C’est OK d’être triste. Tu as le droit de ralentir aujourd’hui 💙",
      anxieux: "Essaie de respirer lentement… Tu es en sécurité ici 🤲",
      fatigue: "Ton corps a besoin de repos. Écoute-le doucement 🛌",
      colere: "Ta colère est une information. Respire avant d’agir 🔥",
      neutre: "Parfois, rien de spécial… et c’est OK aussi 🌀",
      vide: "Ce vide intérieur n’est pas une fin. C’est un appel à se reconnecter 🤍"
    };

    const suggestions = {
      joyeux: "Pourquoi ne pas partager cette joie avec quelqu’un ? 💬",
      calme: "Un moment de lecture ou une balade pourrait prolonger ce calme 📖🚶",
      triste: "Un thé chaud, une couverture, un film doux ? Tu mérites du réconfort 🍵",
      anxieux: "Fais une pause respiration ou écoute un son apaisant 🎧",
      fatigue: "Allège ton planning, un petit rien peut suffire aujourd’hui ⏳",
      colere: "Bouge ton corps : marche rapide, étirements, shake off 🥊",
      neutre: "Un petit geste spontané ? Une surprise, une nouveauté 🍀",
      vide: "Essaie d’écrire une phrase libre ou d’explorer tes besoins profonds ✍️"
    };

    vbotMessage.textContent = messages[humeur] || "Choisis ton humeur pour recevoir un message 🤗";
    suggestionJour.textContent = suggestions[humeur] || "Une suggestion apparaîtra ici selon ton humeur du jour.";
  });
});

function saveEtatDuJour() {
  const humeur = document.getElementById("humeur-select").value;
  const positif = document.getElementById("positive-thought").value;

  if (!humeur) {
    alert("Merci de sélectionner une humeur.");
    return;
  }

  const data = {
    date: new Date().toLocaleDateString("fr-FR"),
    humeur: humeur,
    positif: positif
  };

  // Sauvegarde locale (peut être étendue plus tard)
  let historique = JSON.parse(localStorage.getItem("etatDuJour")) || [];
  historique.push(data);
  localStorage.setItem("etatDuJour", JSON.stringify(historique));

  alert("État du jour enregistré !");
}
