'use strict';
//제목 화살표 버튼
const buttonAtiv = document.querySelector('.title_bt');
const button_move = document.querySelector('.title span');

buttonAtiv.addEventListener("click", ()=>{
    button_move.classList.toggle('buttonText');
    buttonAtiv.classList.toggle('buttonColor');
});


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
    mainHeader.style.display='flex';
    serchHeader.style.display='none';
}
serchBtton.addEventListener("click", serchInput)
iconsBtton.addEventListener("click",input);


// 좋아요와 싫어요 버튼
const downImg = document.querySelector('.fa-thumbs-down');
const upImg = document.querySelector('.fa-thumbs-up');
let count=0;
let countTwo =0;

const color = {
    blue : 'rgba(0, 0, 255, 0.74)',
    gray : 'rgba(0, 0, 0, 0.527)'
}

function bttonOption(vule, number, color) {
    vule.textContent = number;
    vule.style.fontSize = 11+ 'pt';
    vule.style.color=color;
}


function goodUpDown(){
    if(count==1&&countTwo==1){
        countTwo = --countTwo;
        bttonOption(downImg, countTwo, color.gray);
    }
}

function badUpDown(){
    if(count==1&&countTwo==1){
        count = --count;
        bttonOption(upImg, count, color.gray);
    }
}


function goodBtton() {
    if (count === 0){
        count = ++count;
        bttonOption(upImg, count, color.blue);
    }else{
        count = --count;
        bttonOption(upImg, count, color.gray);
    }
}


function badBtton() {
    if (countTwo === 0){
        countTwo = ++countTwo;
        bttonOption(downImg,countTwo, color.blue);
    }else{
        countTwo = --countTwo;
        bttonOption(downImg,countTwo, color.gray);
    }
}

upImg.addEventListener("click", ()=>{
    goodBtton();
    goodUpDown();
});
downImg.addEventListener("click", ()=>{
    badBtton();
    badUpDown();
});


// 구독 버튼 
const channerButton = document.querySelector('.channer_bt');
let yes = true;

function channerText() {
    if (yes === true){
        channerButton.textContent="구독중";
        channerButton.style.color=color.gray;
        yes = false;
    } else {
        channerButton.textContent="구독";
        yes = true;
        myFunction()
    }
}

function myFunction() {
    if (confirm("구독을 취소 하시겠습니까?")) {
        channerButton.style.color='red';
    } else {
        channerButton.textContent="구독중";
    }
}

channerButton.addEventListener("click", channerText);

