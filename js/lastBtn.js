'use strict';
// 자동재생 버튼과 구독버튼
const channerButton = document.querySelector('.channer_bt');    // 구독버튼
const moveButton = document.querySelector('.last_btn');         // 자동재생버튼
const moveEvent = document.querySelector('video');              // 비디오
let yes = true;                                                 // 구독 여부

//구독버튼
function channerText() {                        // 구독여부 확인
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

// 자동재생 버튼
function lastButtonOption(){
    moveButton.classList.toggle('rightMove');
    const loop = moveEvent.getAttribute('loop');
    if(loop === null){
        moveEvent.setAttribute('loop','');
    } else {
        moveEvent.removeAttribute('loop');
    }
}

function init(){
    channerButton.addEventListener("click", channerText);           // 구독 버튼 
    moveButton.addEventListener('click', lastButtonOption);         // 자동재생 버튼
}
init();

