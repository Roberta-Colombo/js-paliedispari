/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

chiedere parola tramite input;
word1 = tramite split dividi parola in caratteri;
wordReverse = applica reverse a split word1;
applica join sia a splitWord che a wordReverse;
se word1 = wordReverse -> la parola è palindroma. */

const inviaBtn = document.getElementById('invia-btn');
const container = document.querySelector('.container');
const result = document.createElement('div');
container.append(result); 

const checkWord = function(){  
    result.innerHTML = ''
    let word1 = document.getElementById('user-input').value;
    // console.log(word1);
    const wordReverse = word1.split('').reverse().join('');
    // console.log(wordReverse); 

    if(word1 == wordReverse){
        result.innerHTML = "è palindroma!";
    } else{
        result.innerHTML = "non è palindroma";
    } 
}

inviaBtn.addEventListener('click', checkWord);

/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. 

input per utente: scegliere pari o dispari;
input2 per utente: inserire numero da 1 a 5 (num1);
PC genera numero random (da 1 a 5) (num2);
somma di num1 + num2;
verificare se somma è pari o dispari;
dichiarare vincitore; */

const iniziaBtn = document.getElementById('inizia-btn');
const container2 = document.querySelector('.container2');
const generaBtn = document.getElementById('genera');
const numberResult = document.createElement('div');
container2.append(numberResult); 

const checkNumber = function(){
    numberResult.innerHTML = ''
    const userNumber = document.getElementById('user-number').value;
    console.log(userNumber);

    if(userNumber < 1 || userNumber > 5){
        numberResult.innerHTML = "Inserire un numero compreso tra 1 e 5";
    } 
    else{
        numberResult.innerHTML = "Il tuo numero è: " + userNumber;
    }
}
iniziaBtn.addEventListener('click', checkNumber);


let min = 1;
let max = 5; 

function generateNumber(min, max){   
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(generateNumber());


generaBtn.addEventListener('click', generateNumber);

