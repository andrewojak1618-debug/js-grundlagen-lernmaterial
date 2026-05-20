

let myDivision = 10/5;
let myMulty = 10*5;
let myAdention = 10+5;
let myAway = 10-5;


let myPow = 2**7;


// Strings 

let myConcat = "hello" + " world";
//let myConcat = "hello" - "world"; -> NAN (not a number)



//combination strings and numbers

//let myCombination = 5 + "5"; -> 55
//let myCombination = 5 - "5"; -> 0
//let myCombination = 10 - "5,5"; -> NAN (not a number)

//let myCombination = 10 * "5"; -> 50
//let myCombination = 8 ** "7"; -> 2097152
//let myCombination = "15" + 77 * "15"; -> 151155

//weitere Strings auf w3schools unter JS strings

let myTestString = "hallo  ";

myTestString = myTestString.trim();
console.log(myTestString.length);
//trim gibt etwas zurück mit dem originalen string, der string wird aber nicht verändert, entfernt alle leerzeichen.


console.log(myTestString.length);
//length ist die länge vom string, ohne klammern weil es eine Eigenschaft ist.




// 01 Aufgabe
// Erstelle eine Funktion namens "fullName", 
// die zwei Strings als Parameter übernimmt, 
// sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).

// Beispiel: console.log(fullName('Max','Mustermann')); Ausgabe: Max Mustermann


function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Max", "Mustermann"));
//Wichtig dabei:
return firstName + " " + lastName;
//Das " " ist das Leerzeichen zwischen Vorname und Nachname. 
// Ohne dieses Leerzeichen käme sonst MaxMustermann heraus.


// 02 Aufgabe
// Erstelle eine Funktion namens "capitalizeLetters", 
// die einen String als Parameter übernimmt, 
// jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.

// Beispiel: console.log(capitalizeLetters('bAnanE')); Ausgabe: BANANE

function capitalizeLetters(text) {
  return text.toUpperCase();
}

console.log(capitalizeLetters("bAnanE"));

// toUpperCase() ist eine String-Methode. 
// Sie macht alle Buchstaben im String groß und gibt den neuen String zurück.



// 03 Aufgabe
// Erstelle eine Funktion namens "countCharacters", 
// die einen String als Parameter übernimmt und die Anzahl 
// der Zeichen in diesem String zurückgibt.

// Beispiel: console.log(countCharacters('banana')); Ausgabe: 6

function countCharacters(text) {
  return text.length;
}

console.log(countCharacters("banana"));
// Wichtig: length wird ohne runde Klammern geschrieben,
//  weil es eine Eigenschaft ist, keine Funktion.


// Knacker-Aufgabe
// Erstelle eine Funktion namens "formatToCurrency", 
// die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert 
// im Format 0,00€ zurückgibt. 
// Verwende die toFixed() Methode, 
// um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.

// Beispiel: console.log(formatToCurrency(0.5)); Ausgabe: "0,50€"

function formatToCurrency(number) {
  let fixedNumber = number.toFixed(2);
  let currency = fixedNumber.replace(".", ",");

  return currency + "€";
}

console.log(formatToCurrency(0.5));

// kurz erklärt: 
// number.toFixed(2)
// macht aus 0.5 den String "0.50".

// replace(".", ",")
// macht daraus "0,50".

// Dann wird noch "€" angehängt