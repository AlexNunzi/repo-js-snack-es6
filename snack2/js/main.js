// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// BONUS
// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



//  Snack 2

//  Creo un array contenente un oggetto per ogni squadra
let teamsArray = [
    {
        nome: "sampdoria",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: "genoa",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: "milan",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: "juventus",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: "inter",
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        nome: "napoli",
        'punti fatti': 0,
        'falli subiti': 0
    },
]

//  Ciclo l'array e per ogni elemento dell'array genero numeri casuali da assegnare alle key 'punti fatti' e 'falli subiti'
teamsArray.forEach(element => {
    const newPuntiFatti = randomNumber(0, 60);
    const newFalliSubiti = randomNumber(0, 20);
    element['punti fatti'] = newPuntiFatti;
    element['falli subiti'] = newFalliSubiti;
    console.log(element);
});

//  Ciclo l'array con il metodo .map() e genero un nuovo array che contenga gli stessi oggetti presenti nell'array teamsArray
//  con riportate solo le coppie chiave/valore nome e 'falli subiti'
const newTeamsArray = teamsArray.map(function(element){
    let newObject = {};
    const {nome, 'falli subiti':falliSubiti} = element;
    console.log(`Il nome è ${nome} i falli subiti sono ${falliSubiti}`);
    newObject.nome = nome;
    newObject['falli subiti'] = falliSubiti;
    return newObject;
})

//  Stampo in console l'array generato
console.log(newTeamsArray);


//  FUNZIONI

function randomNumber(min, max){
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return newRandomNumber;
}