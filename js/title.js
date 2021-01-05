'use strict';
//제목 화살표 버튼
const tileButton = document.querySelector('.title_bt');
const titleSpan = document.querySelector('.title_span');

function titleOption(){
    titleSpan.classList.toggle('buttonText');
    tileButton.classList.toggle('buttonColor');
}

function init(){
tileButton.addEventListener("click", titleOption);
titleSpan.addEventListener("click", titleOption);
}

init();