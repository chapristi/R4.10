const path = "https://geo.api.gouv.fr";
const regList = document.getElementById("regions");
const dptList = document.getElementById("departements");
const cityList = document.getElementById("villes");
const cityDetails = document.getElementById("cityDetails");



/**
 * Affichage des infos de la commune survolée
 * @param {*} e
 */
const displayInfo = (e) => {
  //Maj du contenu
  const elt = e.target;
  cityDetails.innerHTML = `<h2 class="border-b-2 border-gray-500  ">${
    elt.innerText
  }</h2><p class="text-sm text-gray-500">Population : ${elt.getAttribute(
    "elt-population"
  )}<br>Surface : ${elt.getAttribute("elt-surface")}</p>`;

  //Positionnement
  cityDetails.style.left =
    e.target.offsetLeft + e.target.offsetWidth - cityDetails.offsetWidth + "px";
  cityDetails.style.top = e.target.offsetTop - 10 + "px";
  cityDetails.style.display = "block";
};


const fetchApi = async (url) => {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
      }
      return await response.json();
  } catch (error) {
      console.error("Erreur API :", error);
      return null;
  }
};


document.addEventListener("DOMContentLoaded",async()=>{

  let regions  = await fetchApi(path + "/regions")

  if (regions && regions.length > 0){

    for (region of regions){
      console.log(region)
      let el = document.createElement('li')
      el.className = "py-2 cursor-pointer hover:bg-gray-200"

      el.innerText = region.code+ " : " + region.nom
      el.setAttribute("data-id", region.code);
      regList.appendChild(el)
    }
    
  }

  regList.addEventListener("click", async  (e)=>{

    let idReg = e.target.dataset.id;
    let departements  = await fetchApi(path + "/regions/" +  idReg+  "/departements")
    dptList.innerHTML = ""
    for (departement of departements ){
      let el = document.createElement('li')
      el.className = "py-2 cursor-pointer hover:bg-gray-200"

      el.innerText = departement.code+ " : " + departement.nom
      el.setAttribute("data-id", departement.code);
      dptList.appendChild(el)

    }


  })

  dptList.addEventListener("click",async (e)=>{
    let idDept = e.target.dataset.id;
    let  villes  = await fetchApi(path + "/departements/" +  idDept+  "/communes?fields=code,nom,population,surface")
    cityList.innerHTML = ""

    for (ville of villes ){
      let el = document.createElement('li')
      el.className = "py-2 cursor-pointer hover:bg-gray-200"

      el.innerText = ville.nom
      el.setAttribute("data-id", ville.code);
      el.setAttribute("elt-surface", ville.surface);
      el.setAttribute("elt-population",ville.population)
      cityList.appendChild(el)

    }

  })

  cityList.addEventListener("mouseover",(e)=>{
    displayInfo(e)

  })

})
