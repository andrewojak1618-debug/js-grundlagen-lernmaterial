
// let count = 0;

// function init(){
// debuggerOutput('A');
// debuggerOutput('A');
// testOne();
// debuggerOutput('A');
// debuggerOutput('A');
// }


// function testOne(){
// debuggerOutput('B');
// debuggerOutput('B');
// testTwo();
// debuggerOutput('B');
// debuggerOutput('B');
// }
// function testTwo(){
// debuggerOutput('C');
// debuggerOutput('C');
// debuggerOutput('C');

// }

// function debuggerOutput(text){
//    let debuggerLogRef = document.getElementById("debugger_log");
//    count++;
//    debuggerLogRef.innerHTML += text + " " + text + count;
// }

// Der wichtigste Lernpunkt hier:
// init()
// ruft testOne() auf, und testOne() ruft testTwo() auf. Wenn testTwo() fertig ist,
// geht der Code zurück nach testOne(). Wenn testOne() fertig ist, geht der Code zurück nach init().

// Außerdem wichtig:
// count++;
// erhöht count immer um 1.

// innerHTML += ...
// hängt neuen Inhalt an den bestehenden Inhalt an. Mit nur innerHTML = ... würde der alte Inhalt ersetzt werden.




// function debuggerOutput(text){
//    let debuggerLogRef = document.getElementById("debugger_log");
//    debuggerLogRef.innerHTML = text;
// }





let count = 0;

function init() {
   testOne();
   debuggerOutput('init');
   testOne();
   testTwo('testTwo');
   testOne();
}

function testOne() {
   debuggerOutput('testOne');
}

function testTwo(text) {
   debuggerOutput(text);
   testOne();
}

function debuggerOutput(text) {
   count++;
   let debuggerLogRef = document.getElementById("debugger_log");
   debuggerLogRef.innerHTML = count + text;
}
// Wichtigster Lernpunkt: 
// Im Debugger kannst du live sehen, welchen Wert Variablen gerade haben, zum Beispiel:
// count
// text
// debuggerLogRef

// Außerdem wichtig:
// debuggerLogRef.innerHTML = count + text;
// ersetzt jedes Mal den Inhalt.

// Das ist anders als:
// debuggerLogRef.innerHTML += count + text;
// Das würde neuen Inhalt anhängen.
