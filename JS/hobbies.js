// Creo una funzione con tre parametri che restituisca un array di stringhe contenenti gli hobby.

function getHobby(hobbyOne, hobbytwo, hobbythree) {
    const hobby = [hobbyOne, hobbytwo, hobbythree];
    return hobby;
}

console.log(getHobby("Calcio", "Musica", "Palestra"));

module.exports = getHobby("Calcio", "Musica", "Palestra");
