const personajesJugables = personajes.data.filter( personaje => personaje.isPlayableCharacter )

console.log(location)

const personajeNuevo = personajesJugables.map( personaje => {
    let aux = {}
    aux.name = personaje.displayName
    aux.description = personaje.description
    aux.image = personaje.displayIconSmall
    aux.smallImage = personaje.killfeedPortrait,
    aux.background = personaje.background,
    aux.role = personaje.role.displayName
    aux._id = personaje.uuid

    return aux;
})

console.log(personajeNuevo);


const queryString = document.location.search
const params = new URLSearchParams(queryString)
console.log(params)
const id = params.get("id") //ese id es el que tenemos en playground
console.log(id)


const personaje = personajeNuevo.find(personaje => personaje._id === id )

console.log(personaje);

const containerCards = document.getElementById("containerCards")

containerCards.innerHTML = containerCards.innerHTML = `
<div class="card mb-3 bg-danger" style="min-width: 540px;">
<div class="row g-0">
    <div class="col-md-4">
    <img src="${personaje.background}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 d-flex justify-content-center align-items-center">
        <div class="card-body">
            <h1 class="card-title">${personaje.name}</h1>
            <h5 class="card-subtitle">Rol: ${personaje.role}</h5>
            <p class="card-text">${personaje.description}</p>
            <img src="${personaje.smallImage}" class="img-fluid rounded-start" alt="...">
            </div>
    </div>
</div>
</div>
`