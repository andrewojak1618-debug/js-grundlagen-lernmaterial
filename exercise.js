//Aufgabe 1. Function fullName die zwei Strings Parameter übernimmt
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName('Max', 'Mustermann')); //LÖSUNG: Max Mustermann





//Aufgabe 2. String als Parameter übernimmt, jeden Buchstaben darin groß schreibt 

const capitalizeLetters = str => str.replace(/[a-z]/gi, c => c.toUpperCase());

// str = bedeutet String , Ein String ist einfacher Text
// replace = bedeutet ersetzen, kann Buchstaben ersetzen 
// /[a-z]/gi = welche Buchstaben sollen gefungen werden
// [a-z] => alle Buchstaben von a bis z
// i => egal ob groß oder klein 
// g => im ganzen Wort suchen
// c => beudeutet Der gefundene Buchstabe 
// c.toUpperCase = Mache den Buchstaben groß
console.log(capitalizeLetters("bAnanE")); //LÖSUNG: BANANE





//Aufgabe 3. einen String als Parameter übernimmmt
//  und die Anzahl der Zeichen in diesem String zurückgibt 

function countCharacters(str) {
    return str.length;
}

//Die Function countCharacters bekommt eine Parameter -str-
//Mit str.length wird die Anzahl der Zeichen im String ermittelt
//Die Function gibt diese Zahl zurück

console.log(countCharacters('banana')); //LÖSUNG: 6





//Aufgabe 4.Function die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert
// im Format 0,00€ zurückgibt. Mit toFixed() Methode um zwei Nachkommastellen zu erhalten
// und ersetze den Punkt durch ein Komma

function formatToCurrency(amount) {
    //Zahl auf zwei Nachkommastellen runden 
    let formatted = amount.toFixed(2);
    //Punkt durch Komma ersetzen und € anhängen 
    return formatted.replace('.', ',') + '€';
}

//toFixed(2) sorgt dafür, dass immer zwei Nachkommastellen angezeigt werden
//replace('.', ',') ersetzt den Dezimalpunkt durch ein Komma 
//mit + '€' wird das Euro-Symbol angehängt

           console.log(formatToCurrency(0.50));


