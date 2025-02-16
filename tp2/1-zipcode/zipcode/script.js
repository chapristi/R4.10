document.addEventListener("DOMContentLoaded", () => {
    const zipcode = document.getElementById("zipcode");
    const city = document.getElementById("city");

    const fetchApi = async (zipcode) => {
        try {
            const response = await fetch(`http://api.zippopotam.us/FR/${zipcode}`);
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
            }
            return await response.json();
        } catch (error) {
            console.error("Erreur API :", error);
            return null;
        }
    };

    zipcode.addEventListener("change", async (e) => {
        const zipValue = e.target.value;
        console.log(zipValue);

        const response = await fetchApi(zipValue);

        city.innerHTML = ""

        
        if (response && response.places) {
            response.places.forEach((place) => {
                let element = document.createElement("option");
                element.value = place["place name"];
                element.textContent = place["place name"];
                city.appendChild(element);
            });
        }else{
            let element = document.createElement("option");
            element.value = "Erreur: Villes introuvables";
            element.textContent = "Erreur: Villes introuvables";
            city.appendChild(element);
        }
    });
});
