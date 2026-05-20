function initArrays() {
  let iwhile = 0;

  fruits.forEach((element) => {
    console.log(element);
  });

  for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
  }

  // while (iwhile < 5) {
  //   console.log("while" + iwhile);
  //   iwhile++;
  // }

  // for (let index = 0; index < 5; index++) {
  //   console.log("for" + index);
  // }
}

function sumArray(arr) {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == "error") {
      continue;
    }

    sum += arr[index];
  }

  return sum;
}

console.log(sumArray([3, 7, 1, "error", 4, 5])); // 20

// -----------------------------------------------------------------------------------------------

// let myList = [12, "Banana", 1];

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let singletestVar = "assa";

// function containsElement(array, element) {
//   return array.includes(element);
// }

// function initArrays() {
//   let refList = document.getElementsByClassName("red_box");

//   for (let index = 0; index < refList.length; index++) {
//     const singleRef = refList[index];
//     singleRef.innerText = index;
//   }
// }

// function sumArray(arr) {
//   let sum = 0;

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == "error") {
//       continue;
//     }

//     sum += arr[index];
//   }

//   return sum;
// }

// console.log(sumArray([3, 7, 1, "error", 4, 5])); // 20

// -----------------------------------------------------------------------------------------------------

// let myList = [12, "Banana", 1];

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let singletestVar = "assa";

// function containsElement(array, element) {
//   return array.includes(element);
// }

// function initArrays() {
//   let contentRef = document.getElementById("my_content");
//   contentRef.innerHTML = "";
//   for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
//     contentRef.innerHTML += `<p>${fruits[indexFruits]}</p>`;
//   }
// }

// function sumArray(arr) {
//   let sum = 0;

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == "error") {
//       continue;
//     }

//     sum += arr[index];
//   }

//   return sum;
// }

// console.log(sumArray([3, 7, 1, "error", 4, 5])); // Erwartete Ausgabe:15 (3 + 7 + 1 + 4)

// --------------------------------------------------------------------------------------------------

// let myList = [12, "Banana", 1];

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let singletestVar = "assa";

// function containsElement(array, element) {
//   return array.includes(element);
// }

// function initArrays() {
//   let contentRef = document.getElementById("my_content");
//   contentRef.innerHTML = "";
//   for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
//     contentRef.innerHTML += fruits[indexFruits] + "<br>";
//   }
// }
//   for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
//     contentRef.innerHTML += `<p>${fruits[indexFruits]}</p>`;
//   }
// }

// Der Kernaufbau:
// for (let indexFruits = 0; indexFruits < 3; indexFruits++) {
//   console.log(indexFruits);
// }

// Bedeutet:
// let indexFruits = 0
// Start bei 0.
// indexFruits < 3
// Laufen, solange der Wert kleiner als 3 ist.
// indexFruits++
// Nach jedem Durchlauf um 1 erhöhen.
// Ausgabe:
// 0
// 1
// 2

// Der wichtigste Ablauf:
// let contentRef = document.getElementById("my_content");
// contentRef.innerHTML = "";
// holt zuerst das HTML-Element und leert es.

// Dann läuft die Schleife durch das komplette Array:
// for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
//   contentRef.innerHTML += fruits[indexFruits] + "<br>";
// }

// Wichtig:
// fruits.length

// sorgt dafür, dass die Schleife automatisch so lange läuft, wie das Array Elemente hat.

// fruits[indexFruits]
// holt den aktuellen Wert aus dem Array.

// innerHTML += ...
// hängt den neuen Inhalt an.

// Aufgabe: for-Schleifen

// Aufgabenstellung 1:
// Summe der Elemente eines Arrays
// Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen und zurückzugeben.

// Test:

// console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

// console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)

// Lösung:
// function sumArray(array) {
//   let sum = 0;

//   for (let index = 0; index < array.length; index++) {
//     sum += array[index];
//   }

//   return sum;
// }

// console.log(sumArray([3, 7, 1, 4])); // 15
// console.log(sumArray([1, 2, 3, 4, 5])); // 15
// sum startet bei 0. Die Schleife geht durch jedes Element im Array und addiert es dazu:
// sum += array[index];

// Aufgabenstellung 2:
// Ausgabe einer Zahlenreihe
// Implementiere eine for-Schleife, um die Zahlen von 1 bis n in aufsteigender Reihenfolge auszugeben.

// Test:

// printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5

// printNumbers(3); // Erwartete Ausgabe: 1, 2, 3

// Lösung:
// function printNumbers(n) {
//   for (let number = 1; number <= n; number++) {
//     console.log(number);
//   }
// }

// printNumbers(5); // 1 2 3 4 5
// printNumbers(3); // 1 2 3
// Wichtig ist hier:
// let number = 1
// Start bei 1.
// number <= n
// Die Schleife läuft, solange number kleiner oder gleich n ist.
// number++
// Nach jedem Durchlauf wird number um 1 erhöht.

// Aufgabenstellung 3:
// Rückwärts laufende for-Schleife
// Aufgabe:

// Implementiere eine for-Schleife,
// die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.
// Test:

// printNumbersReverse(5);

// // Erwartete Ausgabe: 5, 4, 3, 2, 1

// printNumbersReverse(3);

// Erwartete Ausgabe: 3, 2, 1

// Lösung:
// function printNumbersReverse(n) {
//   for (let number = n; number >= 1; number--) {
//     console.log(number);
//   }
// }

// printNumbersReverse(5); // 5 4 3 2 1
// printNumbersReverse(3); // 3 2 1

// Wichtig ist hier:
// let number = n
// Start bei der übergebenen Zahl.
// number >= 1
// Die Schleife läuft bis 1.
// number--
// Nach jedem Durchlauf wird number um 1 kleiner.

// Aufgabenstellung 4:
// Nur jedes dritte Element ausgeben
// Implementiere eine for-Schleife, die jedes dritte Element des gegebenen Arrays ausgibt.

// Test:

// printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// // Erwartete Ausgabe: 1, 4, 7

// printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']);

// // Erwartete Ausgabe: 'a', 'd'

// Lösung:
// function printEveryThirdElement(array) {
//   for (let index = 0; index < array.length; index += 3) {
//     console.log(array[index]);
//   }
// }

// printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 1 4 7
// printEveryThirdElement(["a", "b", "c", "d", "e", "f"]); // a d

// Wichtig ist hier:
// index += 3
// Der Index wird nach jedem Durchlauf um 3 erhöht.
// Deshalb werden die Positionen 0, 3, 6 ausgegeben.

// Bonusaufgabe:
// Prüfung auf Primzahlen
// Implementiere eine for-Schleife, um zu überprüfen,
// ob die gegebene Zahl eine Primzahl ist (d.h. nur durch 1 und sich selbst teilbar ist).
// Gib true zurück, wenn sie eine Primzahl ist, andernfalls false.

// Test:

// console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)

// console.log(isPrime(4)); // Erwartete Ausgabe: false (4 ist keine Primzahl)

// Lösung:
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let divider = 2; divider < number; divider++) {
//     if (number % divider === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(7)); // true
// console.log(isPrime(4)); // false

// Wichtig ist hier der Modulo-Operator:
// number % divider
// Wenn dabei 0 herauskommt, ist number ohne Rest teilbar. Dann ist es keine Primzahl.

// --------------------------------------------------------------------------------------------------

// let myList = [12, "Banana", 1];

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// let singletestVar = "assa";

// function containsElement(array, element) {
//   return array.includes(element);
// }

// function initArrays() {
//   console.log(containsElement(fruits, "Banana"));
// }

// Aufgabenstellung 1: includes
// Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.

// Test:

// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true

// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false

// function containsElement(array, element) {
//   return array.includes(element);
// }

// console.log(containsElement(["Anna", "Ben", "Clara"], "Ben")); // true
// console.log(containsElement(["Anna", "Ben", "Clara"], "Daniel")); // false
// includes(element) prüft, ob element im Array enthalten ist, und gibt direkt true oder false zurück

// Aufgabenstellung 2: indexOf
// Implementiere eine Funktion namens findElementIndex(array, element),
// die den Index des ersten Vorkommens von element im array zurückgibt oder -1,
// wenn es nicht gefunden wird.

// Test:

// console.log(findElementIndex([10, 20, 30, 40], 30)); // 2

// console.log(findElementIndex([10, 20, 30, 40], 50)); // -1

// function findElementIndex(array, element) {
//   return array.indexOf(element);
// }

// console.log(findElementIndex([10, 20, 30, 40], 30)); // 2
// console.log(findElementIndex([10, 20, 30, 40], 50)); // -1
// indexOf(element) gibt die Position des ersten passenden Elements zurück.
// Wenn es nicht gefunden wird, gibt es -1 zurück.

// Aufgabenstellung 3: shift
// Implementiere eine Funktion namens removeFirstElement(array),
// die das erste Element aus dem array entfernt und das neue Array zurückgibt.

// Test:

// console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]

// console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']

// function removeFirstElement(array) {
//   array.shift();
//   return array;
// }

// console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
// console.log(removeFirstElement(["a", "b", "c", "d"])); // ["b", "c", "d"]
// shift() entfernt das erste Element aus dem Array.
// Danach geben wir mit return array; das veränderte Array zurück.

// Aufgabenstellung 4: unshift
// Implementiere eine Funktion namens addElementToStart(array, element),
// die das element am Anfang des array hinzufügt und das neue Array zurückgibt.

// Test:

// console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]

// console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']

// function addElementToStart(array, element) {
//   array.unshift(element);
//   return array;
// }

// console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
// console.log(addElementToStart(["b", "c", "d"], "a")); // ["a", "b", "c", "d"]
// // unshift(element) fügt ein neues Element vorne am Anfang des Arrays ein.
// Danach geben wir das veränderte Array zurück.

// Aufgabenstellung 5: slice
// Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt,
// das die Elemente von start bis end (nicht eingeschlossen) enthält.

// Test:

// console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]

// console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']

// function getSubArray(array, start, end) {
//   return array.slice(start, end);
// }

// console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
// console.log(getSubArray(["a", "b", "c", "d", "e"], 0, 3)); // ["a", "b", "c"]

// slice(start, end) gibt ein neues Array zurück. Der start-Index ist dabei enthalten,
// der end-Index nicht mehr.

// Aufgabenstellung 6: join
// Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.

// Test:

// console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"

// console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"
// function joinArray(array, separator) {
//   return array.join(separator);
// }

// console.log(joinArray(["apple", "banana", "cherry"], ", ")); // "apple, banana, cherry"
// console.log(joinArray([1, 2, 3, 4], " - ")); // "1 - 2 - 3 - 4"
// join(separator) verbindet alle Elemente aus dem Array zu einem String.
// Zwischen die Elemente kommt der angegebene separator.

// ---------------------------------------------------------------------------------------------

// let myList = [12, "Banana", 1];

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

// // let singletestVar = fruits.push("Kiwi");
// let singletestVar = fruits.pop();

// function initArrays() {
//   // console.log(fruits);
//   console.log(singletestVar);
// }

// Wichtigster Unterschied:
// fruits.push("Kiwi");
// fügt "Kiwi" hinten an das Array an.
// fruits.pop();
// entfernt den letzten Wert aus dem Array und gibt ihn zurück.

// In deinem Beispiel:
// fruits.push("Kiwi");
// let singleTestVar = fruits.pop();
// wird erst "Kiwi" hinzugefügt und danach direkt wieder entfernt.
// Deshalb ist singleTestVar am Ende:
// "Kiwi"
// ---------------------------------------------------------------------------------------
// let myList = [12, "Banana", 1];

// function initArrays() {
//   myList[0] = "No Banana";

//   console.log(myList);
// }

// Wichtigster Punkt:
// let myList = [12, "Banana", 1];
// Arrays starten beim Zählen mit 0:

// myList[0] // 12
// myList[1] // "Banana"
// myList[2] // 1

// Diese Zeile aus deinem Beispiel ist wahrscheinlich die Stolperstelle:
// console.log(myList[myList]);

// Für den Anfang sollte dort ein Index stehen, also zum Beispiel:
// console.log(myList[0]);

// Unterschied für später:
// console.log(myList);
// gibt das ganze Array aus.

// console.log(myList[0]);
// gibt nur den ersten Wert aus
