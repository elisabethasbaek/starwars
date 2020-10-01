let url = new URLSearchParams(window.location.search);

if (url.has("id")) {

    fetch(`http://swapi.dev/api/films/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {

            /* title: */
            document.querySelector("title").innerText = data.title + " | Star Wars API";

            /* name: */
            document.querySelector(".detailsFilms__name").innerText = data.title;

            /* opening crawl: */
            document.querySelector(".detailsFilms__description").innerText = data.opening_crawl;

            /* Episode ID: */
            document.querySelector(".detailsFilms__episode").innerText = data.episode_id;

            /* director: */
            document.querySelector(".detailsFilms__director").innerText = data.director;

            /* producer: */
            document.querySelector(".detailsFilms__producer").innerText = data.producer;

            /* release date: */
            document.querySelector(".detailsFilms__release").innerText = data.release_date;

            /* characters: */
            if(data.characters.length){
                data.characters.forEach(function(character){
                    fetch(character)
                        .then(res => res.json())
                        .then(function(data) { 
                            let peopleTemplate = document.querySelector("#details__people");
                            let peopleList = document.querySelector(".detailsFilms__people");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = peopleTemplate.content.cloneNode(true);
                            clone.querySelector(".details__people").innerText = data.name;
                            clone.querySelector(".details__people").href = `/people-sheet.html?id=${id}`;
                            
                            peopleList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__people").remove();
                document.querySelector("#details__people").remove();
            }

            /* planets: */
            if(data.planets.length){
                data.planets.forEach(function(planet){
                    fetch(planet)
                        .then(res => res.json())
                        .then(function(data) { 
                            let planetTemplate = document.querySelector("#details__planets");
                            let planetList = document.querySelector(".detailsFilms__planets");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = planetTemplate.content.cloneNode(true);
                            clone.querySelector(".details__planet").innerText = data.name;
                            clone.querySelector(".details__planet").href = `/planet-sheet.html?id=${id}`;
                            
                            planetList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__planet").remove();
                document.querySelector("#details__planet").remove();
            }

            /* starships: */
            if(data.starships.length){
                data.starships.forEach(function(starship){
                    fetch(starship)
                        .then(res => res.json())
                        .then(function(data) { 
                            let starshipTemplate = document.querySelector("#details__starships");
                            let starshipList = document.querySelector(".detailsFilms__starships");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = starshipTemplate.content.cloneNode(true);
                            clone.querySelector(".details__starship").innerText = data.name;
                            clone.querySelector(".details__starship").href = `/starships-sheet.html?id=${id}`;
                            
                            starshipList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__starship").remove();
                document.querySelector("#details__starship").remove();
            }

            /* vehicles: */
            if(data.vehicles.length){
                data.vehicles.forEach(function(vehicle){
                    fetch(vehicle)
                        .then(res => res.json())
                        .then(function(data) { 
                            let vehicleTemplate = document.querySelector("#details__vehicles");
                            let vehicleList = document.querySelector(".detailsFilms__vehicles");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = vehicleTemplate.content.cloneNode(true);
                            clone.querySelector(".details__vehicle").innerText = data.name;
                            clone.querySelector(".details__vehicle").href = `/vehicle-sheet.html?id=${id}`;
                            
                            vehicleList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__vehicle").remove();
                document.querySelector("#details__vehicle").remove();
            }

            /* species: */
            if(data.species.length){
                data.species.forEach(function(speci){
                    fetch(speci)
                        .then(res => res.json())
                        .then(function(data) { 
                            let speciesTemplate = document.querySelector("#details__species");
                            let speciesList = document.querySelector(".detailsFilms__species");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = speciesTemplate.content.cloneNode(true);
                            clone.querySelector(".details__species").innerText = data.name;
                            clone.querySelector(".details__species").href = `/species-sheet.html?id=${id}`;
                            
                            speciesList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__species").remove();
                document.querySelector("#details__species").remove();
            }

    }) /* end of .then in fetch */

} /* end of if-statement */