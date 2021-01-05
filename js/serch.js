'use strict';
//입력창 이벤트
const mainHeader = document.querySelector('.main_header');
const serchHeader = document.querySelector('.serch_header');
const iconsBtton = document.querySelector('.icons_bt1');
const serchBtton = document.querySelector('.serch_bt1');

function input() {
    serchHeader.style.display='flex';
    mainHeader.style.display='none';
}
function serchInput(){
    serchHeader.style.display='none';
    mainHeader.style.display='flex';
}

function init(){
    serchBtton.addEventListener("click", serchInput);
    iconsBtton.addEventListener("click",input);
}

init();