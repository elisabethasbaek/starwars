let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let previousOffset, nextOffset;

let nextLink = document.querySelector(".nextLink");
let previousLink = document.querySelector(".previousLink");

fetch(`https://swapi.dev/api/people?page=${offset}`)
    .then(res => res.json())
    .then(function(data){
        let maxOffset = data.count - (data.count % 15);

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 15;
        previousOffset = offset <= 0 ? 0 : parseInt(offset) - 15;

        nextLink.href = `?offset=${nextOffset}`;
        previousLink.href = `?offset=${previousOffset}`;

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