
let km_number = parseInt(prompt('Inserire il numero dei kilometri da percorrere'));

let age = parseInt(prompt('Inserire età del passeggero'));

let price = (km_number * 0.21);

let discountYoung = price - (price * 20 / 100);
let discountaged = price - (price * 40 / 100);

let discount = discountYoung.toFixed(2)
let Discount = discountaged.toFixed(2)

let value = (' il valore inserito non è un numero')

if (isNaN(km_number) || isNaN(age)) {
	document.getElementById('ticket').innerHTML = value;
} else {
    if (age < 18){
        document.getElementById('ticket').innerHTML = discount;
    } else if (age > 65){
        document.getElementById('ticket').innerHTML = Discount;
    }else {
        document.getElementById('ticket').innerHTML = price;
    }
}
