'use strict';

const butt = document.querySelector('.title_bt');
const button_move = document.querySelector('.title span');

butt.addEventListener("click", ()=>{
    button_move.classList.toggle('activee');
    button_move.classList.toggle('active');
});

const button = {
    set_button : function () {
            const but = document.querySelector('.title_bt');
        if(but.value==="a") {
            but.style.color='red';
            but.value="b";  
        }
        else {
            but.style.color='black';
            but.value="a";
        }
    }
}

const actions_down = document.querySelector('.fa-thumbs-down');
const actions_up = document.querySelector('.fa-thumbs-up');
const button_up = document.querySelector('.bt_up');
const button_down = document.querySelector('.bt_down');
let value;

function func1(value) {
  value = value+1;
  return value;
  console.log(value);
  }

actions_up.addEventListener("click", ()=>{
    actions_up.classList.toggle('bule');   
    func1(value);
});


actions_down.addEventListener("click", ()=>{
    actions_down.classList.toggle('bulee');  

});

console.log(value);

