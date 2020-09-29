function listOfPeople(){

    let url = new URLSearchParams(window.location.search);

    let page = url.get("page") ? url.get("page") : 1;
    let nextPage, prevPage;
        
    let nextLink = document.querySelector(".characterDetails .nextLink");
    let previousLink = document.querySelector(".characterDetails .previousLink");

    fetch(`https://swapi.dev/api/people?page=${page}`)
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

            /* character template: */
            let character = document.querySelector("#character");
            /* character list container in main: */
            let characterList = document.querySelector(".characterList");

            data.results.forEach(function(result) {
                let array = result.url.split("/");
                let id = array[array.length -2];

                let clone = character.content.cloneNode(true);
                clone.querySelector(".character").innerText = result.name;
                clone.querySelector(".character").href = `/character-sheet.html?id=${id}`;

                characterList.appendChild(clone);
            })
        });

}

/* Update title: */
/* let title = document.querySelector("title");
title.innerText = "People | " + title.innerText; */

export default listOfPeople;