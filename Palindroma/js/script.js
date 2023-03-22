// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

let word = prompt("Inserisci una parola");
let result = numeroPalindromo (word);
console.log (result);

function numeroPalindromo (word) {

    let palindrome = false;
    let i = 0;
    let less = word.length -1;

    while (i <= word.length) {

        if (i > less) {
            palindrome = true;
            i = word.length + 1;

        } else if ( i < word.length && word[i] == word[less]) {
            i++;
            less--;
        } else {
            i = word.length + 1
        }
    }

        if (palindrome == true) {
            console.log ('la parola è palindroma!');
        } else {
            console.log ('la parola non è palindroma');
        }
        return palindrome;
}