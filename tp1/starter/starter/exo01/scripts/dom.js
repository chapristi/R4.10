document.addEventListener("DOMContentLoaded", (event) => {
    const div = document.createElement("div");
    div.id = "divTP1";


    const text1 = document.createTextNode("Le ");
    div.appendChild(text1);

    const strong1 = document.createElement("strong");
    strong1.textContent = "World Wide Web Consortium";
    div.appendChild(strong1);

    const text2 = document.createTextNode(", abrégé par le sigle ");
    div.appendChild(text2);

    const strong2 = document.createElement("strong");
    strong2.textContent = "W3C";
    div.appendChild(strong2);

    const text3 = document.createTextNode(", est un ");
    div.appendChild(text3);

    const a1 = document.createElement("a");
    a1.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
    a1.title = "Organisme de normalisation";
    a1.textContent = "organisme de standardisation";
    div.appendChild(a1);

    const text4 = document.createTextNode(" à but non-lucratif chargé de promouvoir la compatibilité des technologies du ");
    div.appendChild(text4);

    const a2 = document.createElement("a");
    a2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
    a2.title = "World Wide Web";
    a2.textContent = "World Wide Web";
    div.appendChild(a2);

    document.body.appendChild(div);




})
