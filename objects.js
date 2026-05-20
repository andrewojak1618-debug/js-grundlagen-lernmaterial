let myFancyObject = {
    age : 32,
    height : 173,
    name : "Klaus",
}

console.log(myFancyObject.age);
// um aus der Liste das Ergebnis zu erhalten , muss der key (age) nach dem punkt kommen um drauf zuzugreifen


let myFancyObject = {
    age : 32,
    height : 173,
    logNumber : function (){
           console.log(123);
           return 33334;
    },
}

console.log(myFancyObject.logNumber());
//mit der runden Klammer greift man auf die function 