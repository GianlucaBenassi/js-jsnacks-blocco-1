// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// for

let sommaFor = 0;

for (let i = 0; i < 5; i++) {

    let userNumber = parseFloat(prompt('Inserisci un numero'));

    while(isNaN(userNumber)) {
        userNumber = parseFloat(prompt('ATTENZIONE! Inserire un numero valido!'));
    }    
    
    sommaFor += userNumber;
}

console.log('Somma del ciclo FOR: ' + sommaFor);

//while

let sommaWhile = 0;
let i = 0;

while (i < 5) {
    let userNumber = parseFloat(prompt('Inserisci un numero'));

    while(isNaN(userNumber)) {
        userNumber = parseFloat(prompt('ATTENZIONE! Inserire un numero valido!'));
    }    
    
    sommaWhile += userNumber;
    
    i++;
}

console.log('Somma del ciclo WHILE: ' + sommaWhile);