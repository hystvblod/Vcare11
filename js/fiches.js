fetch("data/fiches.json")
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("fiche-select");
    const titre = document.getElementById("fiche-titre");
    const description = document.getElementById("fiche-description");
    const conseils = document.getElementById("fiche-conseils");

    // Remplir le menu déroulant avec les titres
    data.forEach((fiche, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = fiche.titre;
      select.appendChild(option);
    });

    // Afficher le contenu quand une fiche est choisie
    select.addEventListener("change", () => {
      const selectedIndex = select.value;
      if (selectedIndex === "") {
        titre.textContent = "";
        description.textContent = "";
        conseils.innerHTML = "";
        return;
      }

      const fiche = data[selectedIndex];
      titre.textContent = fiche.titre;
      description.textContent = fiche.description;
      conseils.innerHTML = "";
      fiche.conseils.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        conseils.appendChild(li);
      });
    });
  })
  .catch((err) => {
    console.error("Erreur chargement fiches.json", err);
  });
