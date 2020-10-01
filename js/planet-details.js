let url = new URLSearchParams(window.location.search);

if (url.has("id")) {

    fetch(`http://swapi.dev/api/planets/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {

            /* title: */
            document.querySelector("title").innerText = data.name + " | Star Wars API";

            /* name: */
            document.querySelector(".detailsPlanets__name").innerText = data.name;

            /* rotation period: */
            document.querySelector(".detailsPlanets__rotation").innerText = data.rotation_period;

            /* orbital period: */
            document.querySelector(".detailsPlanets__orbital").innerText = data.orbital_period;

            /* diameter: */
            document.querySelector(".detailsPlanets__diameter").innerText = data.diameter;

            /* climate: */
            document.querySelector(".detailsPlanets__climate").innerText = data.climate;

            /* gravity: */
            document.querySelector(".detailsPlanets__gravity").innerText = data.gravity;

            /* terrain: */
            document.querySelector(".detailsPlanets__terrain").innerText = data.terrain;

            /* surface water: */
            document.querySelector(".detailsPlanets__water").innerText = data.surface_water;

            /* population: */
            document.querySelector(".detailsPlanets__population").innerText = data.population;

            /* residents: */
            if(data.residents.length){
                data.residents.forEach(function(resident){
                    fetch(resident)
                        .then(res => res.json())
                        .then(function(data) { 
                            let residentTemplate = document.querySelector("#details__residents");
                            let residentList = document.querySelector(".detailsPlanets__residents");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = residentTemplate.content.cloneNode(true);
                            clone.querySelector(".details__resident").innerText = data.name;
                            clone.querySelector(".details__resident").href = `/people-sheet.html?id=${id}`;
                            
                            residentList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__residents").remove();
                document.querySelector("#details__residents").remove();
            }

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