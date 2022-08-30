function getCharacters(done) {//funcion GET
    const results = fetch("https://rickandmortyapi.com/api/character");//El fetch es el que busca los datos del api, aca los guardamos en la variable results
    results
        .then(response => response.json())//hacemos que la busqueda ahora tengan un formato Json
        .then(data => {
            done(data) //Aca llamamos al callback para pasarle el Json y que sean legibles los datos
        });
}
function viewCharacters() {

    getCharacters(data => { //La funcion getCharacter recibe siempre un callback, en este caso sera data, que ya contiene los datos legibles y en un json

        data.results.forEach(personaje => { //data.results es donde estan los personajes, ForEach para recorrer cada personaje

            /*Aca vamos a crear el formato de la tarjeta de cada personaje y vamos a ingresar los datos de la api en cada tarjeta*/
            const article = document.createRange().createContextualFragment(/*html*/` 
        
        <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">
        </div>

        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
        </article>

        `);
            //En el html las variables ${personaje.dato}, se comportan con personaje como objeto y dato como atributo del mismo

            //Para mostrar el article creado en javascript pero en el html necesitamos enviarlo al main del html
            const main = document.querySelector("main"); //creamos una variable que apunte al main del html

            //Esta linea agrega todos los article encontrados por el foreach al main
            main.append(article);
        });

    });
}
var botonBuscar = document.getElementById("Buscar"); // Aca vamos a darle a la variable "botonExtraer" el valor del boton en el HTML
botonBuscar.addEventListener("click", viewCharacters);