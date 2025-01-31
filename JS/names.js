// Creo una funzione che restituisce nome e cognome

function getName(firstName, lastName) {
    const yourName = {
        name: firstName,
        surname: lastName
    }
    return yourName
}

console.log(getName("Paolo", "Visone"));

module.exports = getName("Paolo", "Visone");



