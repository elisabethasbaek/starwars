let url = new URLSearchParams(window.location.search);

if (url.has("id")) {
    fetch(`http://swapi.dev/api/people/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {

            /* title: */
            document.querySelector("title").innerText = data.name + " | Star Wars API";

            /* name: */
            document.querySelector(".detailsPeople__name").innerText = data.name;

            /* species: */
            fetch(`https://swapi.dev/api/species/${url.get("id")}`)
                .then(res => res.json())
                .then(function(data) {
                    document.querySelector(".detailsPeople__species").innerText = data.name;
                })

            /* homeworld: */
            fetch(`https://swapi.dev/api/planets/${url.get("id")}`)
                .then(res => res.json())
                .then(function(data) {
                    document.querySelector(".detailsPeople__homeworld").innerText = data.name;
                })

            /* films: */
            data.films.forEach(function(film){
                fetch(film)
                    .then(res => res.json())
                    .then(function(data) { 
                        let filmTemplate = document.querySelector("#details__films");
                        let filmList = document.querySelector(".detailsPeople__films");

                        let array = data.url.split("/");
                        let id = array[array.length - 2];

                        let clone = filmTemplate.content.cloneNode(true);
                        clone.querySelector(".details__film").innerText = data.title;
                        clone.querySelector(".details__film").href = `/film-sheet.html?id=${id}`;
                        
                        filmList.appendChild(clone);
                    }) 
            })

            /* vehicles: */
            if(data.vehicles.length){
                data.vehicles.forEach(function(vehicle){
                    fetch(vehicle)
                        .then(res => res.json())
                        .then(function(data) { 
                            let vehicleTemplate = document.querySelector("#details__vehicles");
                            let vehicleList = document.querySelector(".detailsPeople__vehicles");

                            let array = data.url.split("/");
                            let id = array[array.length - 2];

                            let clone = vehicleTemplate.content.cloneNode(true);
                            clone.querySelector(".details__vehicle").innerText = data.name;
                            clone.querySelector(".details__vehicle").href = `/vehicle-sheet.html?id=${id}`;
                            
                            vehicleList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__vehicles").remove();
                document.querySelector("#details__vehicles").remove();
            }

                /* starships: */
            if(data.starships.length){
                data.starships.forEach(function(starship){
                    fetch(starship)
                        .then(res => res.json())
                        .then(function(data) { 
                            let starshipTemplate = document.querySelector("#details__starships");
                            let starshipList = document.querySelector(".detailsPeople__starships");
                            
                            let array = data.url.split("/");
                            let id = array[array.length - 2];
                            
                            let clone = starshipTemplate.content.cloneNode(true);
                            
                            clone.querySelector(".details__starship").innerText = data.name;
                            clone.querySelector(".details__starship").href = `/starship-sheet.html?id=${id}`;
                            
                            starshipList.appendChild(clone);
                        }) 
                })
            } else {
                document.querySelector(".category__starships").remove();
                document.querySelector("#details__starships").remove();
            }

        }) /* end of .then in fetch */
} /* end of if-statement */






















