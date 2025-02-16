document.addEventListener("DOMContentLoaded", (event) => {

    const martine_stories = document.getElementById('martine-stories');

    let element4 = martine_stories.children[4]

    let li1 = document.createElement('li');
    li1.textContent = "Martine au Lycée"

    let li2 = document.createElement('li');
    li2.textContent = "Martine est morte";

    martine_stories.insertBefore(li1, element4);
    martine_stories.append(li2);
})