"use strict";
let num = 22;
let str = "Hejka Technikum";
let prawda = true;
let x = null;
let y = undefined;
let cos = 43;
cos = "xxxxx";
let xxxxx = 5;
if (typeof xxxxx === "number") {
    let num2 = xxxxx;
}
function logowanie() {
    console.log("funckja logowanie");
}
function log2(mess) {
    throw new Error(mess);
}
let mojWektor = [2, 3, 4,];
let mojaTupla = ["Technikum", 666];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
let kolor = Color.Blue;
let Osoba = { imie: "Anna", klasa: 4 };
let wartosc;
wartosc = "Krowa";
wartosc = 333;
;
;
let szkola = { imie: "Jan", numer: 4 };
let mnozenie;
mnozenie = (x, y) => x * y;
let ocena;
ocena = 5;
let mojWektor2 = ["Matma", "Chemia", "Fizyka"];
console.log(mojWektor2);
for (let i = 0; i < mojWektor2.length; i++) {
    console.log(mojWektor2[i]);
}
for (let przedmiot of mojWektor2) {
    console.log(przedmiot);
}
mojWektor2.forEach((przedm) => {
    console.log(przedm);
});
mojWektor2.unshift("WF");
mojWektor2.forEach((przedm) => {
    console.log(przedm);
});
mojWektor2.shift();
mojWektor2.forEach((przedm) => {
    console.log(przedm);
});
mojWektor2.splice(1, 1, "j. angielski");
mojWektor2.forEach((przedm) => {
    console.log(przedm);
});
let mojePrzedmiotyNowe = mojWektor2.slice(1, 2);
mojWektor2.forEach((przedm) => {
    console.log(przedm);
});
