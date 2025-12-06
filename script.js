'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

console.log(btnsOpenModel);

for(let i = 0; i <btnsOpenModel.length; i++){

    btnsOpenModel[i].addEventListener('click', function(){
        console.log('button clicked');
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}