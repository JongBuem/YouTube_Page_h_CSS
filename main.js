'use strict';

// 제목 화살표 버튼
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

// 검색창 버튼
const icons_input = document.querySelector('.icons_input');
const icons_bt =document.querySelector('.icons_bt1');
const header = document.querySelector('.head');
const serch_header = document.querySelector('.serch_header');
const serch_bt1 =document.querySelector('.serch_bt1');
const serch_input = document.querySelector('.serch_input');

function input() {
serch_header.style.display='flex';
  header.style.display='none';
}
function serchInput(){
    header.style.display='flex';
    serch_header.style.display='none';
}
serch_bt1.addEventListener("click", serchInput)
icons_bt.addEventListener("click",input);

// 좋아요와 싫어요 버튼
const actions_down = document.querySelector('.fa-thumbs-down');
const actions_up = document.querySelector('.fa-thumbs-up');
const button_up = document.querySelector('.bt_up');
const button_down = document.querySelector('.bt_down');
let count=1;
let count_not =1;

function upDown(count,count_not){
    if(count == 1){
        console.log(333);
    }
    else if(count_not==0){
        console.log(555);
    }
}

function func1() {
    if (count == 1){
        actions_up.textContent=count;
        actions_up.style.fontSize = 11+ 'pt';
        count = --count;
    }else{
        actions_up.textContent=count;
        actions_up.style.fontSize = 11+ 'pt';
        count = ++count;
    }
    upDown(count,count_not);
}
function func2() {
    if (count_not == 1){
        actions_down.textContent=count_not;
        actions_down.style.fontSize = 11+ 'pt';
        count_not = --count_not;
    }else{
        actions_down.textContent=count_not;
        actions_down.style.fontSize = 11+ 'pt';
        count_not = ++count_not;
    }
    upDown(count,count_not);
}

function up() {
    actions_up.classList.toggle('bule');
}

function down() {
    actions_down.classList.toggle('bulee');
}

function down_up(){
    actions_up.removeEventListener("click",up);   
}

actions_up.addEventListener("click",up);
actions_up.addEventListener("click",func1);
actions_down.addEventListener("click",down);
actions_down.addEventListener("click",func2);




