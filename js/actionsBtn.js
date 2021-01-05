'use strict';   
// 좋아요와 싫어요 버튼
const downImg = document.querySelector('.fa-thumbs-down');  // 좋아요 이미지
const upImg = document.querySelector('.fa-thumbs-up');      // 싫어요 이미지
let count=0;                                                // 좋아요 카운트 변수
let countTwo =0;                                            // 싫어요 카운트 변수
const USER_up = "good";                                     // 좋아요 localStorage 이름
const USER_dowm = "bad";                                    // 싫어요 localStorage 이름

const color = {                                     // 색 오브젝트
    blue : 'rgba(0, 0, 255, 0.74)',
    gray : 'rgba(0, 0, 0, 0.527)'
}

function bttonOption(vule, color) {                 // 색변화 함수 (어떤이미지, 색)
    vule.style.fontSize = 11+ 'pt';
    vule.style.color=color;
}


function goodUpDown() {                             // 좋아요 상태에서 싫어요를 눌렀을때
    if(count==1&&countTwo==1){
        countTwo = --countTwo;              
        bttonOption(downImg, color.gray);
        SaveName(USER_dowm,count,0);
    }
}

function badUpDown() {                              // 싫어요 상태에서 좋아요를 눌렀을때
    if(count==1&&countTwo==1){
        count = --count;
        bttonOption(upImg, color.gray);
        SaveName(USER_up,count,0);
    }
}

function goodBtton() {                              // 좋아요 버튼                                     
    if (count === 0){
        count = ++count;
        bttonOption(upImg, color.blue);
        SaveName(USER_up,count,1);
    }else{
        count = --count;
        bttonOption(upImg, color.gray);
        SaveName(USER_up,count,0);
    }
}

function badBtton() {                               // 싫어요 버튼
    if (countTwo === 0){
        countTwo = ++countTwo;
        bttonOption(downImg, color.blue);
        SaveName(USER_dowm,count,1);
    }else{
        countTwo = --countTwo;
        bttonOption(downImg, color.gray);
        SaveName(USER_dowm,count,0);
    }
}

function setValue(name,value){                      // localStorage에 좋아요 싫어요를 저장
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(name,stringifyValue);
    if(name === USER_up){
        upImg.innerText =value;
    } else {
        downImg.innerText =value;
    }
}

function getValue(name,getload,updown){             // localStorage 값의 변경과 출력
    const parsedToDos = JSON.parse(getload);            
    const add = parsedToDos+1;
    const mainus = parsedToDos-1;
    if(updown === 1){
        setValue(name,add);
    } else {
        setValue(name,mainus);
    }
}

function SaveName(name,value,updown){               // localStorage의 존재여부 확인                     
    const getload = localStorage.getItem(name);
    if(getload === null){
        setValue(name,value);
    } else{                                                        
        getValue(name,getload,updown);
    }
}

function init(){                                    // 이벤트 발생
    upImg.addEventListener("click", ()=>{           // 좋아요 이미지 클릭시
        goodBtton();
        goodUpDown();   
    });
    downImg.addEventListener("click", ()=>{         // 싫어요 이미지 클릭시
        badBtton();
        badUpDown();
    });
}

init();