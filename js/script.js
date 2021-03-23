
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. 
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//scrivere un ciclo che stampa i numeri da 1 a 100

//inserire all interno del ciclo la condizione: i = numeroDaAnalizzare --> se numeroDaAnalizzare % 3 == 0 allora console.log("fizz");

var numeroDaAnalizzare;

for (var i = 1; i <= 100; i++) {

    numeroDaAnalizzare = i;

    if (numeroDaAnalizzare % 3 == 0 && numeroDaAnalizzare % 5 == 0) {
        console.log("FizzBuzz");
        
    } else if (numeroDaAnalizzare % 3 == 0) {
        console.log("Fizz");

    } else if (numeroDaAnalizzare % 5 == 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}
