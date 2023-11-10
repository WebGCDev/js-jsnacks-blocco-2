//Descrizione esercizio: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt('Inserisci la prima parola');
console.log('La prima parola è: ', word1);
const word2 = prompt('Inserisci la seconda parola');
console.log('La seconda parola è: ', word2);

//Correzzione con stampa in console con i 3 risultati, parola più lunga parola più corta, possono avere anche caratteri uguali che non avevo valutato nella prima versione

if (word1.length < word2.length) {
  console.log('La parola più corta è:', word1);
  console.log('La parola più lunga è:', word2);
} else if (word1.length > word2.length) {
  console.log('La parola più corta è:', word2);
  console.log('La parola più lunga è:', word1);
} else {
  console.log('I caratteri delle parole sono uguali.');
}
