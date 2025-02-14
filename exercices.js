/**
 * Code de base, ne pas modifier
 */

// Définition
const boutonVoyageHTML = document.querySelector(".btn-voyage");
const localisationEpoqueHTML = document.querySelector(".localisation_epoque");
const listeArtefactHTML = document.querySelector(".liste_artefacts");
const formChoixEpoqueHtml = document.querySelector(".form__choix_epoque");
const formRechercheArtefact = document.querySelector(".form__recherche_artefact");

const epoques = {
  romaine: "Romaine",
  medievale: "Médievale",
  jurassique: "Jurassique",
};

const creerLesChoixEpoque = (epoques) => {
  const selectHtml = formChoixEpoqueHtml.querySelector("select");
  Object.entries(epoques).forEach(([id_epoque, nom_epoque]) => {
    const option = document.createElement("option");
    option.value = id_epoque;
    option.text = nom_epoque;
    selectHtml.appendChild(option);
  });
};

function generationNombreAleatoireEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const afficherDestination = (nomEpoque) =>
  (localisationEpoqueHTML.textContent = nomEpoque);

Execution
formChoixEpoqueHtml.addEventListener("submit", (event) => {
  event.preventDefault();
  const epoque = new FormData(formChoixEpoqueHtml).get("epoque");

  if (!epoque) {
    alert("Choisie une époque de voyage temporel Chronos !");
    return;
  }

  quandEpoqueChoisie(epoque);
});

formRechercheArtefact.addEventListener("submit", (event) => {
  event.preventDefault();
  const artefact = new FormData(formRechercheArtefact).get("artefact");
  quandRechercheArtefact(artefact);
});

const afficherRechercheArtefact = ({ artefact, epoque, success = true }) => {
  const li = document.createElement("li");
  li.textContent = `${success ? "✅" : "❌"} ${artefact} (Epoque ${epoque})`;
  listeArtefactHTML.appendChild(li);
};

/**
 * Votre partie commence ici, la partie modifiable par vos soins
 */
let nomEpoqueActuelle;

creerLesChoixEpoque(epoques);

// Fonction appelée plus haut quand le formulaire de voyage temporel est soumis
// et qu'une époque de destination du voyage temporel a été choisi
function quandEpoqueChoisie(nomEpoque) {
  nomEpoqueActuelle = nomEpoque;
  // Utilisation de votre fonction voyagerTemps
}

// Fonction appelée plus haut quand le formulaire de recherche d'artefact est soumis
function quandRechercheArtefact(artefact) {
  // Utilisation de votre fonction collecterArtefact
}

// exercice 01

/**
 * Fonction permettant de voyager dans le temps via des passages temporels (tempo-passerelles).
 * @param {string} destination - Époque d'arrivée choisie par le voyageur.
 * @param {Function} callback - Fonction exécutée une fois le voyage terminé.
 */
function voyagerTemps(destination, callback) {
  // Affiche l'indicateur de voyage en cours
  document.querySelector('.voyage_en_cours').style.display = "block";
  
  // Cache l'affichage de la localisation temporelle actuelle
  document.querySelector('.localisation_epoque').style.display = "none";
  
  // Simule la durée du voyage à l'aide d'un délai aléatoire
  setTimeout(() => {
    callback(destination); // Appelle la fonction indiquant que le voyage est terminé
  }, generationNombreAleatoireEntre(1000, 3000)); // Délai aléatoire entre 1 et 3 secondes
}

/**
 * Fonction exécutée une fois le voyage terminé, affichant un message d'arrivée.
 * @param {string} destination - Époque d'arrivée après le voyage.
 */
function vousEtesArrive(destination) {
  // Cache l'indicateur de voyage en cours
  document.querySelector('.voyage_en_cours').style.display = "none";

  // Réaffiche la localisation temporelle et met à jour son texte avec l'époque d'arrivée
  document.querySelector('.localisation_epoque').style.display = "block";
  document.querySelector('.localisation_epoque').textContent = destination;
}

// Ajoute un écouteur d'événements sur le bouton de voyage temporel
boutonVoyageHTML.addEventListener("click", () => {
  // Récupère l'époque sélectionnée dans la liste déroulante et déclenche le voyage
  voyagerTemps(document.querySelector('option:checked').textContent, vousEtesArrive);
});
