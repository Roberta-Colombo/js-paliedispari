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
const numberResult = document.createElement('div');
container2.append(numberResult); 
const container3 = document.querySelector('.container3');
const generatedNumber = document.createElement('div');
container3.append(generatedNumber);
   

const checkNumber = function(){
    numberResult.innerHTML = ''
    const userNumber = parseInt(document.getElementById('user-number').value);

    if(userNumber < 1 || userNumber > 5){
        numberResult.innerHTML = "Inserire un numero compreso tra 1 e 5";
    } 
    else{
        numberResult.innerHTML = "Il tuo numero è: " + userNumber;
        
        let min = 1;
        let max = 5; 
        function randomNumber(min, max){   
            generatedNumber.innerHTML = ''
            const risultato = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
            generatedNumber.innerHTML = "Il numero del PC è: " + risultato
            + "<br><br>La somma è " + (risultato + userNumber);
        
            const evenOrOdd = document.getElementById('even-or-odd').value;
            // console.log(evenOrOdd);
            if((risultato + userNumber) % 2 == 0 && evenOrOdd == 'even'){
                generatedNumber.innerHTML += ", un numero pari<br>" + "Complimenti, hai vinto!"
            }
            else if((risultato + userNumber) % 2 != 0 && evenOrOdd == 'odd'){
                generatedNumber.innerHTML += ", un numero dispari<br>" + "Complimenti, hai vinto!"
            }
            else if((risultato + userNumber) % 2 != 0 && evenOrOdd == 'even'){
                generatedNumber.innerHTML += ", un numero dispari<br>" + "Purtroppo hai perso. Ritenta!"
            }
            else if((risultato + userNumber) % 2 == 0 && evenOrOdd == 'odd'){
                generatedNumber.innerHTML += ", un numero pari<br>" + "Purtroppo hai perso. Ritenta!"
            }
        }
        console.log(randomNumber(min, max));        
    }
}

iniziaBtn.addEventListener('click', checkNumber);













