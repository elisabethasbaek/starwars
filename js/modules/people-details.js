function peopleDetails(){

    let url = new URLSearchParams(window.location.search);

    if (url.has("id")) {
        fetch("https://swapi.dev/api/people/" + url.get("id"))
            .then(res => res.json())
            .then(function(data) {
                /* name: */
                document.querySelector(".detailsPeople__name").innerText = data.name;

                /* hommeworld: */
                document.querySelector(".detailsPeople__homeworld").innerText = data.species.name;

                /* films: */
                data.types.forEach(function(type) {
                    document.querySelector(".detailsPeople__films").innerHTML += `<li>${type.type.name}</li>`;
                })

                /* vehicles: */
                data.abilities.forEach(function(ability) {
                    document.querySelector(".detailsPeople__vehicles").innerHTML += `<li>${ability.ability.name}</li>`;
                })

                /* starships: */
                data.types.forEach(function(type) {
                    document.querySelector(".detailsPeople__starships").innerHTML += `<li>${type.type.name}</li>`;
                })
            })
    }

}

export default peopleDetails;






















