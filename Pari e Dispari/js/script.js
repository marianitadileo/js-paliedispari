// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiediamo all'utente pari o dispari e il suo numero e verifichiamo quello che inserisce
let oddEvenUser;
oddEvenUser = prompt("scegli: Pari o Dispari");

if (oddEvenUser == "pari") {
    console.log("hai scelto Pari!");
} else if (oddEvenUser == "dispari") {
    console.log("hai scelto Dispari!")
} else {
    console.log("parola non valida");
}

// chiediamo all'utente di inserire un numero e verifichiamo quello che inserisce
let userChoice;

userChoice = prompt("inserisci un numero da 1 a 5");
if (userChoice <= 5 && userChoice > 0) {
    console.log(userChoice);
} else {
    console.log("questo numero non puoi inserirlo!");
}

// generiamo un numero per il computer
console.log("ora sceglie il computer");
let rndNumber = numbComputer (); 
function numbComputer (){
    const rnd = Math.floor(Math.random() * (5)) +1;
    return rnd;
}
 console.log(rndNumber); 

//  sommiamo i due numeri 






