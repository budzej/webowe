let num: number = 22;

let str : string = "Hejka Technikum";

let prawda : boolean = true;

let x : null = null;

let y : undefined = undefined;

let cos : any = 43;
cos="xxxxx";

let xxxxx : unknown = 5;

if(typeof xxxxx==="number"){
    let num2 : number=xxxxx;
}

function logowanie() : void{
    console.log("funckja logowanie");
} 

function log2(mess:string) : never{
    throw new Error(mess);
}

let mojWektor : number[] = [2,3,4,];

let mojaTupla :[string, number] = ["Technikum", 666];

enum Color{Red,Blue,Green};

let kolor : Color = Color.Blue;

let Osoba: {imie: string, klasa: number} = {imie: "Anna", klasa: 4};

let wartosc : string | number;
wartosc = "Krowa";
wartosc = 333;
// wartosc = true; // tu jest błąd typu ale skonwertowany do js

interface Osoba { imie: string};
interface Klasa { numer: number};

let szkola : Osoba & Klasa = {imie: "Jan", numer:4};

let mnozenie: (x: number, y:number) => number;
mnozenie = (x, y) => x*y;

let ocena: 1 | 2 | 3 | 4 | 5 | 6
ocena = 5

let mojWektor2 : string[] = ["Matma","Chemia","Fizyka"];
console.log(mojWektor2);

for(let i =0; i < mojWektor2.length; i++){
    console.log(mojWektor2[i]);
}

for (let przedmiot of mojWektor2){
    console.log(przedmiot);
}

mojWektor2.forEach((przedm)=> {
    console.log(przedm);
});

mojWektor2.unshift("WF");
mojWektor2.forEach((przedm)=> {
    console.log(przedm);
});
mojWektor2.shift();
mojWektor2.forEach((przedm)=> {
    console.log(przedm);
});

mojWektor2.splice(1,1,"j. angielski");
mojWektor2.forEach((przedm)=> {
    console.log(przedm);
});

let mojePrzedmiotyNowe = mojWektor2.slice(1,2);
mojWektor2.forEach((przedm)=> {
    console.log(przedm);
});
