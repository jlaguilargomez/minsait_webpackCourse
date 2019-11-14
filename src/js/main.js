import numbersAndLetters from './script/numbers_and_letters';

export function main(){
    // code goes here
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = numbersAndLetters; 
}

