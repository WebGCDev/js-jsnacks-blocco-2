//Descrizione esercizio: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt('Inserisci la prima parola');
const word2 = prompt('Inserisci la seconda parola');

if (word1.length > word2.length) {
  console.log(word1);
  console.log(word2);
} else {
  console.log(word2);
  console.log(word1);
}
