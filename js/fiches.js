fetch("data/fiches.json")
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("fiche-select");
    const titre = document.getElementById("fiche-titre");
    const description = document.getElementById("fiche-description");
    const conseils = document.getElementById("fiche-conseils");
    const exemples = document.getElementById("fiche-exemples");
    const pas = document.getElementById("fiche-pas");
    const reactions = document.getElementById("fiche-reactions");

    // Remplir le menu déroulant avec les titres
    data.forEach((fiche, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = fiche.titre || `Fiche ${index + 1}`;
      select.appendChild(option);
    });

    // Afficher le contenu quand une fiche est choisie
    select.addEventListener("change", () => {
      const selectedIndex = select.value;

      // Réinitialiser tous les champs
      titre.textContent = "";
      description.textContent = "";
      conseils.innerHTML = "";
      exemples.innerHTML = "";
      pas.innerHTML = "";
      reactions.innerHTML = "";

      if (selectedIndex === "") return;

      const fiche = data[selectedIndex];

      // Sécuriser les affichages même si certaines clés sont absentes
      titre.textContent = fiche.titre || "Sans titre";
      description.textContent = fiche.description || "Aucune description disponible.";

      (fiche.conseils || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        conseils.appendChild(li);
      });

      (fiche.exemples || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        exemples.appendChild(li);
      });

      (fiche.ce_n_est_pas || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        pas.appendChild(li);
      });

      (fiche.exemples_de_reaction_saine || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        reactions.appendChild(li);
      });
    });
  })
  .catch((err) => {
    console.error("Erreur chargement fiches.json :", err);
    alert("Impossible de charger les fiches pratiques. Vérifie que le fichier JSON est bien à sa place.");
  });
