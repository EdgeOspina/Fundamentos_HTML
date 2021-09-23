

async function getCharacters() {
    const peticion = await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
    console.log(peticion);
    console.log("-------------");
    const personajes = await peticion.json();
    console.log(personajes);

    
    let contenedor = document.getElementById("contImg");

    personajes.forEach(element => {
        //console.log(element.Name);
        let strPersonaje = "<div class='card' style='width: 18rem;'>";
        strPersonaje += "<img id='img1'";
        strPersonaje += "src='"+element.PicUrl+"'class='card-img-top' alt='"+element.Name+"'>";
        strPersonaje += "<div class ='card-body'>";
        strPersonaje += "<h5 class ='card-title'>"+element.Name+"</h5>";
        strPersonaje += "<p class ='card-text'></p>";
        strPersonaje += "</div></div>"

        contenedor.innerHTML += strPersonaje;
    });
}

