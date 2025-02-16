document.addEventListener('DOMContentLoaded',()=>{

    let browser = document.getElementById('browsers');

    let nouvelleLigne =   browser.insertRow(2)

    let nouvelleCellule1 = nouvelleLigne.insertCell(0);
    let nouvelleCellule2 = nouvelleLigne.insertCell(1);
    let nouvelleCellule3 = nouvelleLigne.insertCell(2);


    nouvelleCellule1.appendChild(document.createTextNode("Saffari"));
    nouvelleCellule2.appendChild( document.createTextNode("Apple"));
    nouvelleCellule3.appendChild(document.createTextNode("25,10 %"));




})