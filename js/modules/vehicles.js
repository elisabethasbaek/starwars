function listOfVehicles(){

    let url = new URLSearchParams(window.location.search);

    let page = url.get("page") ? url.get("page") : 1;
    let nextPage, prevPage;
        
    let nextLink = document.querySelector(".vehicleDetails .nextLink");
    let previousLink = document.querySelector(".vehicleDetails .previousLink");

    fetch(`https://swapi.dev/api/vehicles?page=${page}`)
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

            /* vehicle template: */
            let vehicle = document.querySelector("#vehicle");
            /* vehicle list container in main: */
            let vehicleList = document.querySelector(".vehicleList");

            data.results.forEach(function(result) {
                let array = result.url.split("/");
                let id = array[array.length -2];

                let clone = vehicle.content.cloneNode(true);
                clone.querySelector(".vehicle").innerText = result.name;
                clone.querySelector(".vehicle").href = `/vehicle-sheet.html?id=${id}`;

                vehicleList.appendChild(clone);
            })
        });

}

export default listOfVehicles;