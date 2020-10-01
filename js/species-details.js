let url = new URLSearchParams(window.location.search);

if (url.has("id")) {

    fetch(`http://swapi.dev/api/species/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {

            /* title: */
            document.querySelector("title").innerText = data.name + " | Star Wars API";

            /* name: */
            document.querySelector(".detailsSpecies__name").innerText = data.name;

            /* model: */
            document.querySelector(".detailsVehicles__model").innerText = data.model;

            /* manufacturer: */
            document.querySelector(".detailsVehicles__manufacturer").innerText = data.manufacturer;

            /* vehicle class: */
            document.querySelector(".detailsVehicles__vehicleClass").innerText = data.vehicle_class;

            /* films: */
            data.films.forEach(function(film){
                fetch(film)
                    .then(res => res.json())
                    .then(function(data) { 
                        let filmTemplate = document.querySelector("#details__films");
                        let filmList = document.querySelector(".detailsVehicles__films");

                        let array = data.url.split("/");
                        let id = array[array.length - 2];

                        let clone = filmTemplate.content.cloneNode(true);
                        clone.querySelector(".details__film").innerText = data.title;
                        clone.querySelector(".details__film").href = `/film-sheet.html?id=${id}`;
                        
                        filmList.appendChild(clone);
                    }) 
            })

            /* films: */
            data.films.forEach(function(film){
                fetch(film)
                    .then(res => res.json())
                    .then(function(data) { 
                        let filmTemplate = document.querySelector("#details__films");
                        let filmList = document.querySelector(".detailsPlanets__films");

                        let array = data.url.split("/");
                        let id = array[array.length - 2];

                        let clone = filmTemplate.content.cloneNode(true);
                        clone.querySelector(".details__film").innerText = data.title;
                        clone.querySelector(".details__film").href = `/film-sheet.html?id=${id}`;
                        
                        filmList.appendChild(clone);
                    }) 
            })

        }) /* end of .then in fetch */

} /* end of if-statement */