
let url = new URLSearchParams(window.location.search);

let page = url.get("page") ? url.get("page") : 1;
let nextPage, prevPage;
    
let nextLink = document.querySelector(".planetDetails .nextLink");
let previousLink = document.querySelector(".planetDetails .previousLink");

fetch(`https://swapi.dev/api/planets?page=${page}`)
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

        /* planet template: */
        let planet = document.querySelector("#planet");
        /* planet list container in main: */
        let planetList = document.querySelector(".planetList");

        data.results.forEach(function(result) {
            let array = result.url.split("/");
            let id = array[array.length -2];

            let clone = planet.content.cloneNode(true);
            clone.querySelector(".planet").innerText = result.name;
            clone.querySelector(".planet").href = `/planet-sheet.html?id=${id}`;

            planetList.appendChild(clone);
        })
    });