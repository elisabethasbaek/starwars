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

            /* homeworld: */
            fetch(`https://swapi.dev/api/planets/${url.get("id")}`)
                .then(res => res.json())
                .then(function(data) {
                    let array = data.url.split("/");
                    let id = array[array.length - 2];

                    document.querySelector(".detailsSpecies__homeworld").innerText = data.name;
                    document.querySelector(".detailsSpecies__homeworld").href = `/planet-sheet.html?id=${id}`;
                })

            /* people: */
            if(data.people.length){
            data.people.forEach(function(person){
                fetch(person)
                    .then(res => res.json())
                    .then(function(data) { 
                        let peopleTemplate = document.querySelector("#details__people");
                        let peopleList = document.querySelector(".detailsSpecies__people");

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

        /* films: */
        data.films.forEach(function(film){
            fetch(film)
                .then(res => res.json())
                .then(function(data) { 
                    let filmTemplate = document.querySelector("#details__films");
                    let filmList = document.querySelector(".detailsSpecies__films");

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