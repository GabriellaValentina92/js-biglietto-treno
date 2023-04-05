
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let km_number = parseInt(prompt('Inserire il numero dei kilometri da percorrere'));

let age = parseInt(prompt('Inserire età del passeggero'));

let price = (km_number * 0.21);
console.log(price)

let discountYoung = price - (price * 20 / 100);
console.log(discountYoung)
let discountaged = price - (price * 40 / 100);
console.log(discountaged)

let discount = discountYoung.toFixed(2)
let Discount = discountaged.toFixed(2)

if (age < 18){
    document.getElementById('ticket').innerHTML = discount;
} else if (age > 65){
    document.getElementById('ticket').innerHTML = Discount;
}else {
    document.getElementById('ticket').innerHTML = price;
}
