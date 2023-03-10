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



//  Snack 3 bonus 

//  Creo un array con N valori
const arrayOfNumber = [0,1,2,3,4,5,6,7,8,9,10];
console.log(arrayOfNumber);

const newArrayOfNumber = filteredArray(arrayOfNumber, 7, 10);
console.log(newArrayOfNumber); 

const newArrayOfNumberWrong = filteredArray(arrayOfNumber, 10, 8);
console.log(newArrayOfNumberWrong);

//  FUNZIONI

//  Dato in ingresso un array e due valori, minimo e massimo, restituisce un array con all'interno elemento compreso 
//  tra gli indici corrispondenti di minimo e massimo dati in ingresso (indexMin deve essere < di indexMax)
function filteredArray(array, indexMin, indexMax){
    if(indexMin < 0 || indexMin > indexMax || indexMax > array.length - 1){
        console.log(`Il valore minimo inserito non può essere minore di 0 e non può essere maggiore del valore massimo inserito, il valore massimo inserito non può essere maggiore di ${array.length -1}`);
    } else {
        let newArray = array.filter((element, index) => ((index >= indexMin) && (index <= indexMax)));
        return newArray;
    }
}