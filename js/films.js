fetch("https://swapi.dev/api/films")
    .then(res => res.json())
    .then(function(data){

        /* film template: */
        let film = document.querySelector("#film");
        /* film list container in main: */
        let filmList = document.querySelector(".filmList");

        data.results.forEach(function(result) {
            let array = result.url.split("/");
            let id = array[array.length -2];

            let clone = film.content.cloneNode(true);
            clone.querySelector(".film").innerText = result.title;
            clone.querySelector(".film").href = `/film-sheet.html?id=${id}`;

            filmList.appendChild(clone);
        })
    });