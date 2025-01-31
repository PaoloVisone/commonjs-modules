// Recupero le funzioni
const getName = require("./names")
const getHobby = require("./hobbies")

// Creo una funzione che restiuisca un oggetto con due propietà: fullName ed hobbies

function getPerson() {
    const person = {
        fullName: getName(),
        hobbies: getHobby()
    }
    return person
}

console.log(getPerson);




