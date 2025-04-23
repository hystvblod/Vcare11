// chatbotloader.js
document.addEventListener("DOMContentLoaded", function () {
  // Vérifie si on est bien sur la page chatbot.html
  if (window.location.pathname.includes("chatbot.html")) {
    const isPremium = localStorage.getItem("vcare_premium") === "true";

    const script = document.createElement("script");
    script.src = isPremium
      ? "js/chatbot_premium.js"
      : "js/chatbot_basique.js";

    script.onload = () => {
      console.log("🤖 Chatbot chargé avec succès !");

      // Définit la fonction globale attendue par chatbot.html
      if (isPremium && typeof getChatbotPremiumResponse === "function") {
        window.getChatbotResponse = getChatbotPremiumResponse;
      } else if (!isPremium && typeof getChatbotBasiqueResponse === "function") {
        window.getChatbotResponse = getChatbotBasiqueResponse;
      }

      if (typeof initChatbot === "function") {
        initChatbot(); // Optionnel : si définie dans le fichier chargé
      }
    };

    script.onerror = () => {
      console.error("❌ Erreur lors du chargement du chatbot.");
    };

    document.head.appendChild(script);
  }
});
