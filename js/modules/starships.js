function listOfStarships(){

    let url = new URLSearchParams(window.location.search);

    let page = url.get("page") ? url.get("page") : 1;
    let nextPage, prevPage;
        
    let nextLink = document.querySelector(".starshipsDetails .nextLink");
    let previousLink = document.querySelector(".starshipsDetails .previousLink");

    fetch(`https://swapi.dev/api/starships?page=${page}`)
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

            /* starships template: */
            let starships = document.querySelector("#starships");
            /* starships list container in main: */
            let starshipsList = document.querySelector(".starshipsList");

            data.results.forEach(function(result) {
                let array = result.url.split("/");
                let id = array[array.length -2];

                let clone = starships.content.cloneNode(true);
                clone.querySelector(".starships").innerText = result.name;
                clone.querySelector(".starships").href = `/starships-sheet.html?id=${id}`;

                starshipsList.appendChild(clone);
            })
        });

}

export default listOfStarships;