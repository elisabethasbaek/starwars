function listOfSpecies(){

    let url = new URLSearchParams(window.location.search);

    let page = url.get("page") ? url.get("page") : 1;
    let nextPage, prevPage;
        
    let nextLink = document.querySelector(".speciesDetails .nextLink");
    let previousLink = document.querySelector(".speciesDetails .previousLink");

    fetch(`https://swapi.dev/api/species?page=${page}`)
        .then(res => res.json())
        .then(function(data){

            let pages = Math.ceil(data.count / 10);

            nextPage = page >= pages ? pages : parseInt(page) + 1;
            prevPage = page <= 1 ? 1 : parseInt(page) - 1;

            nextLink.href = `?page=${(nextPage)}`;
            previousLink.href = `?page=${(prevPage)}`;
            
            if(page >= pages){
                nextLink.remove();
            }

            if(page == 1){
                previousLink.remove();
            }

            /* species template: */
            let species = document.querySelector("#species");
            /* species list container in main: */
            let speciesList = document.querySelector(".speciesList");

            data.results.forEach(function(result) {
                let array = result.url.split("/");
                let id = array[array.length -2];

                let clone = species.content.cloneNode(true);
                clone.querySelector(".species").innerText = result.name;
                clone.querySelector(".species").href = `/species-sheet.html?id=${id}`;

                speciesList.appendChild(clone);
            })
        });

}

export default listOfSpecies;