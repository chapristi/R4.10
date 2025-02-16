// On crée l'élément conteneur
var mainDiv = document.createElement("div");
mainDiv.id = "divTP3";

// On place le texte dans des objets, eux-mêmes placés dans un tableau
// Par facilité, la création des nœuds textuels se fera dans la boucle
var languages = [
  {
    t: "JavaScript",
    d: "JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.",
  },
  {
    t: "JScript",
    d: "JScript est le nom générique de plusieurs implémentations d'ECMAScript 3 créées par Microsoft.",
  },
  {
    t: "ActionScript",
    d: "ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).",
  },
  {
    t: "EX4",
    d: "ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.",
  },
];


