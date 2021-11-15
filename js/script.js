// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


const btnJSnack1 = document.getElementById('jsnack1');

btnJSnack1.addEventListener('click', function(){
    
    console.clear();
    
    // for
    let sommaFor = 0;
    
    for (let i = 0; i < 5; i++) {
    
        let userNumber = parseFloat(prompt('(ciclo for) Inserisci un numero'));
    
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
        let userNumber = parseFloat(prompt('(ciclo while) Inserisci un numero'));
    
        while(isNaN(userNumber)) {
            userNumber = parseFloat(prompt('ATTENZIONE! Inserire un numero valido!'));
        }    
        
        sommaWhile += userNumber;
    
        i++;
    }
    
    console.log('Somma del ciclo WHILE: ' + sommaWhile);

});




// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const btnJSnack2 = document.getElementById('jsnack2');

btnJSnack2.addEventListener('click', function(){

    console.clear();
    
    const word1 = prompt('Inserisci una parola');
    const word2 = prompt('Inserisci una seconda parola');
    
    if (word1.length > word2.length) {
        console.log('La prima parola è più lunga rispetto la seconda: ' + word1);
    } else if (word1.length < word2.length) {
        console.log('La seconda parola è più lunga rispetto alla prima: ' + word2);
    } else {
        console.log('Le due parola hanno la stessa lunghezza: ' + word1 + ' ' + word2);
    }

});




// JSnack 3
// Stampa le potenze di 2 fino a 1000.

const btnJSnack3 = document.getElementById('jsnack3');

btnJSnack3.addEventListener('click', function(){
    
    console.clear();

    let power = 1;
    
    do {
        console.log(2 ** power);
        power++;
    } while (2 ** power < 1000)

});
