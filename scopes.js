// möglichkeit 1

function scopeTest(){
    let testScopeVar = "hallo world";
    if(true){
        console.log(testScopeVar);
    }
    
    
}


// möglichkeit 2

let testScopeVar = "hallo world";

function scopeTestSecond(){
    scopeTestSecond();
}

function scopeTestSecond(){
    console.log(testScopeVar);
}

// Wichtigster Merksatz: Scope bedeutet Gültigkeitsbereich. Eine Variable ist nur dort nutzbar, wo sie sichtbar ist.

// Zum Beispiel:

// function scopeTest() {
//   let testScopeVar = "hallo world";

//   if (true) {
//     console.log(testScopeVar);
//   }
// }
// Hier funktioniert console.log(testScopeVar), weil der if-Block innerhalb der Function liegt.

// Außerdem habe ich festgehalten: Zwei Functions mit demselben Namen sollte man vermeiden, 
// weil die zweite die erste überschreiben kann. 
// Und eine Function, die sich selbst ohne Abbruch immer wieder aufruft, führt zu einem Fehler.