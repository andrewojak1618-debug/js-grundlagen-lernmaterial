let discount = 50 ;
let price = 500;

//console.log((price - discount));

//Variable wird immer oben diffieniert

logCalculatePrice(50, 500);

//console.log((price - discount) * 1.19);

//calculatePrice(); kann immer wieder genutzt werden zum Ausführung

price = 400;

logCalculatePrice(50, 500,);

logCalculatePrice(50, 300,);

function logCalculatePrice(discount, price) {
    console.log((price - discount) * 1.19);
} //functionen werden immer einzeln betrachtet & gelesen

//    genauso viele parameter definieren , exakt genauso viel wie man der function übergibt 


console.log(logCalculatePrice(50, 300));

function logCalculatePrice(discount, price) {
    let value = (price - discount - discount) * 1.19;

    console.log("vor return");
    
    return value;
    // nach dem return folgen keine Ausführungen mehr, mit return wird der Vorgang auch abgebrochen
}