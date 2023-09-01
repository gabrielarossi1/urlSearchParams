console.log( personajes )
console.log([document])
const personajesJugables = personajes.data.filter( personaje => personaje.isPlayableCharacter )

const personajesNuevo = personajesJugables.map( personaje => {
    let aux = {}
    aux.id = personaje.uuid
    aux.name = personaje.displayName
    aux.description = personaje.description
    aux.image = personaje.displayIconSmall
    aux.role = personaje.role.displayName
    return aux
} )

console.log(personajesNuevo);

const cards = personajesNuevo.reduce( (acc, act) => {
    return acc + `
    <div class="card text-center bg-danger-subtle" style="width: 18rem">
        <a href="./details.html?id=${act.id}" class="text-decoration-none item">
            <img class="card-img-top" src="${act.image}" alt="Imagen de ${act.name}">
            <h4 class="card-title text-black">${act.name}</h4>
        </a> 
    </div>
    `
}, "" )

//console.log( cards )

const contenedor = document.getElementById( 'contenedor' )

contenedor.innerHTML = cards

{/* <a href="./details.html?id=${act.id}" class="btn btn-primary">Go somewhere</a> */}