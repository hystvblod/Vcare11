document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("humeur-du-jour");
  const messageEl = document.getElementById("humeur-message");

  const messages = {
    joyeux: "🌞 Tu es joyeux·se aujourd’hui, profites-en à fond !",
    calme: "🌿 Une belle journée paisible s’annonce.",
    triste: "💧 La tristesse fait partie du voyage. Prends soin de toi.",
    anxieux: "😰 Tu ressens de l’anxiété. Respire, tu n’es pas seul·e.",
    fatigue: "😴 Ton corps a besoin de douceur aujourd’hui.",
    colere: "🔥 La colère est là. Canalise-la avec bienveillance.",
    neutre: "🌀 Tu es dans un état neutre. Ni haut ni bas, juste toi.",
    vide: "🤍 Tu ressens un vide intérieur… C’est difficile, mais tu n’es pas seul·e. On va traverser ça ensemble."
  };

  if (selectEl && messageEl) {
    selectEl.addEventListener("change", () => {
      const humeur = selectEl.value;
      messageEl.textContent = messages[humeur] || "🧠 Comment te sens-tu aujourd’hui ?";
    });
  }
});
