"use strict";
let owoce = ['jabłko', 'arbuz', 'banan', 'gruszka'];
console.log('Długość tablicy:', owoce.length);
owoce.sort();
console.log(owoce);
owoce.push('ananas');
console.log(owoce);
owoce.shift();
console.log(owoce);
owoce.pop();
console.log(owoce);
owoce.unshift('ananas');
console.log(owoce);
owoce.reverse();
console.log(owoce);
let miesiac = 5;
let czyPoprawna = miesiac > 0 && miesiac <= 12 ? "Liczba jest poprwana" : "Niepoprawna";
console.log(czyPoprawna);
let podwajanie;
podwajanie = (liczby) => {
    for (let i = 0; i < liczby.length; i++)
        liczby[i] *= 2;
};
let tablica = [1, 2, 3, 4, 5, 6];
podwajanie(tablica);
console.log(tablica);