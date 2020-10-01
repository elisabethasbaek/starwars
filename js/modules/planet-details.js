function planetDetails(){

    let url = new URLSearchParams(window.location.search);

    if (url.has("id")) {

        fetch(`http://swapi.dev/api/planets/${url.get("id")}`)
            .then(res => res.json())
            .then(function(data) {

                /* title: */
                document.querySelector(".titlePlanets").innerText = data.name + " | Star Wars API";

                /* name: */
                document.querySelector(".detailsPlanets__name").innerText = data.name;

            }) /* end of .then in fetch */

    } /* end of if-statement */

} /* end of planetDetails function */

export default planetDetails;