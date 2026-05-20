
let myCondition = true;

myCondition =!myCondition; // not Operator


myCondition = false || false; // or Operator


myCondition = true && true; // and Operator





myCondition = 45 == "45"; // testen ob exakt gleich, ohne Type

myCondition = 45 === "45"; // testen ob exakt gleich, mit Type ->  false
myCondition = 45 === 45; // testen ob exakt gleich, mit Type -> true

myCondition = 45 < 123; // größer Abfrage

myCondition = 45 <= 45; // größergleich Abfrage

myCondition = 45 != "47"; // testen ob nicht gleich ist, ohne Type
myCondition = 45 !== "47"; // testen ob nicht gleich ist, mit Type ->  true
myCondition = 45 !== 47; // testen ob nicht gleich ist, mit Type -> true


let myIfCondition = false;
let mysecondIfCondition = true;

if(myIfCondition){
   // console.log("hello world! if teil");
} else if(!myIfCondition || mysecondIfCondition){
   // console.log("hello world! else if teil");
} else {
   // console.log("hello world! else teil"); //´else´ ist dass ´dann´ ausgeführt wird
}
