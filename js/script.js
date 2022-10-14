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

