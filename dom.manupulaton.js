let title = document.getElementById('webside_title');
//script kann nach dem body im index.html geschrieben werden, damit es nicht zu null kommt
//und ausgeführt wird.
// title.innerHTML = "neuer Title";
//kann einen neuen titel einfügt werden.

// console.log(title.innerHTML);
// Wenn das Script nach dem HTML am Ende vom body steht, ist das Element schon geladen. 
// Dadurch vermeidet man oft, dass getElementById(...) nur null zurückgibt.

//p tac ist ein HTML
//document.getElementById('test_div').innerHTML = '<p>test</p>'
//p tac ein sichtbares Text Element
//document.getElementById('test_div').innerText = '<p>test</p>'

//document.getElementById('test_div').classList.add('green_bg');
//remove entfernt den add
//document.getElementById('test_div').classList.remove('green_bg');
//toggle lässt add & remove hinzufügen und wegnehmen 
//document.getElementById('test_div').classList.toggle('green_bg');



function toggleDNone(id){
    document.getElementById(id).classList.toggle('d_none');
}

function logger(){
    console.log(5555);
}



// document.getElementById('test_div').innerHTML = 'test';
// element.innerHTML = "<p>test</p>";
// macht daraus echtes HTML.
// text im 'test' bereich wird als html interpretiert 

// document.getElementById('test_div').innerText = '<p>test</p>';
// element.innerText = "<p>test</p>";
// zeigt wirklich den Text <p>test</p> an.
// text im '<p>test</p>' bereich wird als text interpretiert / umgesetzt





// Aufgabe 1
// Erstelle mit Hilfe von JavaScript einen Button innerhalb einer div.

// Tipp: Im besten Fall bekommt der Button hier schon eine id.

// document.getElementById("button_container").innerHTML =
//   '<button id="my_button">Klick mich</button>';

//   Dazu brauchst du im HTML dann nur:




// Aufgabe 2
// Füge diesem Button wieder mit Hilfe von JavaScript den Text hinzu "Klick mich"

// Erst wird der Button erstellt. Danach wird über seine id der Text eingefügt:

// document.getElementById("my_button").innerText = "Klick mich";



// document.getElementById('test_div').classList.add('green_bg');

// document.getElementById('test_div').classList.remove('green_bg');

// document.getElementById('test_div').classList.toggle('green_bg');

// schaltet sie um: Wenn sie fehlt, wird sie hinzugefügt.
//  Wenn sie da ist, wird sie entfernt.
// Das ist besonders nützlich für Dinge wie aktive Buttons, 
// Menüs öffnen/schließen oder Farbwechsel.



// document.getElementById('test_input').setAttribute('type', 'text');

// document.getElementById('test_input').setAttribute('value', 123);

// document.getElementById('test_input').value = 10;

// console.log(document.getElementById('test_input').value);
// damit ließt man den input feld aus um zu erfahren welcher wert es hat

// Wichtigster Unterschied:
// setAttribute("value", 123)
// ändert das HTML-Attribut.

// .value = 10
// ändert den aktuellen Wert im Input-Feld.

// Zum Auslesen:
// console.log(document.getElementById("test_input").value);
// Damit liest du den aktuellen Wert des Input-Feldes aus. Wichtig: 
// Dieser Wert kommt in JavaScript meistens als String zurück, 
// auch wenn der Input type="number" hat.


// 1. Aufgabe:
// Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.
// {/* <p id="my_paragraph">Das ist mein Text.</p> */}


// 2. Aufgabe:
// Füge mit JavaScript dem p-tag einen title hinzu.
// Hinweis: das title Attribute ist meist auch als Tooltip zu verstehen.
{/* <p id="my_paragraph">Das ist mein Text.</p>
<script>
  document
    .getElementById("my_paragraph")
    .setAttribute("title", "Das ist ein Tooltip");
</script> */}



// 3. Probiere aus:
// Kannst du auch eine css class mit setAttribute hinzufügen?

// html
// <p id="my_paragraph">Das ist mein Text.</p>

{/* <script>
  document
    .getElementById("my_paragraph")
    .setAttribute("class", "green_text");
</script> */}

// css
// .green_text {
//   color: green;
// }

// Wichtig: Für Klassen ist meistens classList.add(...) besser:
// document.getElementById("my_paragraph").classList.add("green_text");
// Denn setAttribute("class", "...") kann vorhandene Klassen überschreiben.



// 4. Probiere aus:
// Worin liegt der Unterschied von 
// classList.add("test_class") und setAttribute("class", "test_class")?

// Hinweis: Füge hierzu vorher schon einmal eine andere class ein!

// Unterschied:
// classList.add("test_class");
// fügt die Klasse zusätzlich hinzu.
// setAttribute("class", "test_class");
// setzt das komplette class-Attribut neu und überschreibt vorhandene Klassen.

// Beispiel:

// html
// <p id="my_paragraph" class="old_class">Das ist mein Text.</p>

// <script>
//   document.getElementById("my_paragraph").classList.add("test_class");
// </script>

// Ergebnis:
{/* <p id="my_paragraph" class="old_class test_class">Das ist mein Text.</p> */}


// Aber hier:

// html
// <p id="my_paragraph" class="old_class">Das ist mein Text.</p>

// <script>
//   document
//     .getElementById("my_paragraph")
//     .setAttribute("class", "test_class");
// </script>


// Ergebnis:

// html
// <p id="my_paragraph" class="test_class">Das ist mein Text.</p>

// Merksatz:
// classList.add() ergänzt eine Klasse.
// setAttribute("class", ...) ersetzt alle Klassen

// function toggleDNone(id) {
//   document.getElementById(id).classList.toggle("d_none");
// }

// classList.toggle("d_none")

// Wichtigster Ablauf:
// html
// <button onclick="toggleDNone('our_p_tag')">bitte ausführen</button>

// ruft beim Klick diese Funktion auf:
// function toggleDNone(id) {
//   document.getElementById(id).classList.toggle("d_none");
// }

// 'our_p_tag' wird als Argument übergeben. In der Funktion heißt dieser Wert dann id.

// Wichtig: Diese Zeile allein reicht nicht:
// classList.toggle("d_none");
// Du brauchst immer ein konkretes Element davor:
// document.getElementById(id).classList.toggle("d_none");


// document.getElementById("our_p_tag").addEventListener("click", logger);

// function logger(){
//   console.log(5555);
// }

// Wichtigster Punkt:
// document.getElementById("our_p_tag").addEventListener("click", logger);
// bedeutet:
// Wenn das Element angeklickt wird, führe logger aus.

// Dabei schreibt man:
// logger
// ohne Klammern.

// Nicht:
// logger()
// Denn logger() würde die Funktion sofort ausführen. 
// logger übergibt die Funktion nur als Aufgabe für später, nämlich für den Klick.

// d_none ist noch nicht da -> Klasse wird hinzugefügt -> Element verschwindet.
// d_none ist schon da -> Klasse wird entfernt -> Element erscheint wieder.
