'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const closeModel = function(){
    overlay.classList.add('hidden');
    model.classList.add('hidden')
}

const openModel = function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
console.log(btnsOpenModel);

for(let i =0; i < btnsOpenModel.length; i++){
    btnsOpenModel[i].addEventListener('click', openModel);
}

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !model.classList.contains('hidden')) {
        closeModel();
    }
    console.log(e.key);
})

// for (let i = 0; i < btnsOpenModel.length; i++) {

//     btnsOpenModel[i].addEventListener('click', function () {
//         console.log('button clicked');
//         model.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     })
// }


   


// overlay.addEventListener('click', function () {
//     model.classList.add('hidden');
//     overlay.classList.add('hidden');
// });