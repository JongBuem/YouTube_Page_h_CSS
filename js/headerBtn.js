'use strict';
// 상위 햄버거 버튼
const hambugButton = document.querySelector('.icons_bt2');          // 햄버거 이미지
const wrapperMenu = document.querySelector('.wrapper');             // 햄버거 이벤트 발생 메뉴
const wrapperClose = document.querySelector('.wrapper_close');      // 햄버거 메뉴중 취소

function hambugButtonOption(){                                      // 햄버거 클릭시
    wrapperMenu.classList.toggle('wrapperMenu');                    // 클래스 추가 삭제
}

function init(){
    hambugButton.addEventListener('click', hambugButtonOption);     // 햄버거 버튼
    wrapperClose.addEventListener('click', hambugButtonOption);     // 햄버거 버튼
}
init();