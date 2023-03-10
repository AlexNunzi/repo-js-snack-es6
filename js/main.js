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



//  Snack 1

//  Creazione dell'array di oggetti con le caratteristiche delle biciclette
const bikesArray = [
    {
        nome: 'bici da città',
        pesoKg: 12
    },
    {
        nome: 'mountain bike',
        pesoKg: 8
    },
    {
        nome: 'bici elettrica',
        pesoKg: 12
    },
    {
        nome: 'bici da corsa',
        pesoKg: 8
    },
];

console.log("Gli oggetti contenuti nell'array sono: ");
console.log(...bikesArray);

//  Variabile per memorizzare l'indice corrispondente alla locazione dell'array con la bicicletta più leggera
let indexOfLightBike = 0;

//  Ciclo l'array di oggetti a partire dal secondo elemento, confronto il valore di pesoKg dell'elemente corrente
//  con quello dell'elemento puntato da indexOfLightBike, il controllo viene fatto per ogni elemento contenuto nell'array ma 
//  il valore di indexOfLightBike cambia solo quando viene trovato un valore di pesoKg inferiore a quello corrispondente all'oggetto
//  all'indice puntato da indexOfLightBike
for(i=1; i < bikesArray.length; i++){
    const {pesoKg} = bikesArray[i];
    indexOfLightBike = (bikesArray[indexOfLightBike].pesoKg < pesoKg) ? indexOfLightBike : i;


    console.log(`${bikesArray[indexOfLightBike].pesoKg} < ${pesoKg} = ${(bikesArray[indexOfLightBike].pesoKg < pesoKg)}`)
    console.log("La bici più leggera attualmente memorizzata pesa: ",bikesArray[indexOfLightBike].pesoKg + "Kg");
}

//  Array di appoggio per salvare le biciclette col peso più basso trovate
const arrayOfLightBikes = [];

//  Controllo se sono presenti nell'array più di una bicicletta con lo stesso pesoKg di quella più leggera trovata
//  e le aggiungo nell'array apposito
bikesArray.forEach((element, i, array) => {
    if(element.pesoKg == array[indexOfLightBike].pesoKg){
        arrayOfLightBikes.push({...element});
    }
});

//  Se l'array di biciclette contiene più di una bicicletta
if(arrayOfLightBikes.length > 1){
    console.log(`Sono presenti nell'elenco ${arrayOfLightBikes.length} biciclette con il peso identico più basso delle altre e sono le seguenti:`);

    //  Per ogni elemento presente nell'array di oggetti recupero tramite destructuring i valori delle chiavi nome e pesoKg 
    //  e stampo a schermo in console i loro valori
    arrayOfLightBikes.forEach(element => {
        const {nome, pesoKg} = element;
        console.log(`${nome} con un peso pari a ${pesoKg}Kg`);
    });
} else {
    //  Recupero tramite destructuring i valori delle chiavi nome e pesoKg
    const {nome, pesoKg} = bikesArray[indexOfLightBike];

//  Stampo a schermo in console i valori ottenuti
console.log(`La bicicletta più leggera è la ${nome} con un peso pari a ${pesoKg}Kg`);
}


