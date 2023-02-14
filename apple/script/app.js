const search = document.querySelector(".search");
const body = document.querySelector("body");
const inputPop = document.querySelector("#input_popup");
const searchCloseBt = document.querySelector("#input_search_close");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const menuLi = document.querySelectorAll(".menu li");

/** 유사배열을 배열로 만듬 */
const ArrayMenuLi = Array.from(document.querySelectorAll(".menu li"));

/**기존 배열을 그대로 두고 ArrayMenuLi를 거꾸로 뒤집는다. 반대로*/
const reverseLi = [...ArrayMenuLi].reverse();

function searchView(){
    header.style.backgroundColor = "#000"
    inputPop.classList.remove("display_off");
    body.classList.add("overflow_off");
    /** 뒤집은 배열을 활용해 [li:nth-child(13)~~~(1)] 점점 느린 속도로 적용함 */
    for(let i = 0; i < reverseLi.length; i++){
        reverseLi[i].style.animationDelay = `${i*0.025}s`;
        // 속도 i값에서 *활용해서 속도 조절하기.
    }
    menuLi.forEach((i) => {
        i.classList.add("searchShow");
        i.classList.remove("searchHide");
    });
    console.log("열기")
}


function searchClose(){
    header.style.backgroundColor = "rgba(0,0,0,0.8)"
    inputPop.classList.add("display_off");
    body.classList.remove("overflow_off");
    /** 원래의 배열을 활용해 [li:nth-child(1)~~~(13)] 점점 느린 속도로 적용함 */
    for(let i = 0; i < ArrayMenuLi.length; i++){
        ArrayMenuLi[i].style.animationDelay = `${i*0.025}s`;
    }
    menuLi.forEach((i) => {
        i.classList.remove("searchShow");
        i.classList.add("searchHide");
    });
    console.log("닫기")
}

search.addEventListener("click", searchView);
searchCloseBt.addEventListener("click", searchClose);

/** media menu event */ 
const mediaNav = document.querySelector(".media_nav");
const popupMenu = document.querySelector("#media_slide_menu");
const mediaHeader = document.querySelector("header");
const mediaWrap = document.querySelector("#media_menu_wrap");
const mediaInput = document.querySelector("#media_input");
const xMenu = document.querySelectorAll(".media_nav li");


let slideToggle = 0;
function mediaSlideOn(){
    if(slideToggle ==0){
        slideToggle =1;
        console.log(slideToggle);
        slideOn(displayOn);
        mediaHeader.classList.add("colorChangeOn")
        mediaHeader.classList.remove("colorChangeOff")
        hamMenuOn(rotateOn);
    } else if(slideToggle ==1){
        slideToggle =0;
        console.log(slideToggle);
        slideOff(displayOff);
        mediaHeader.classList.add("colorChangeOff")
        mediaHeader.classList.remove("colorChangeOn")
        hamMenuOff(rotateOff);
    }
}

mediaNav.addEventListener("click", mediaSlideOn);

const slideOn = (callback) => {
    popupMenu.classList.add("slideOn");
    popupMenu.classList.remove("slideOff");
    console.log("1차 실행")
    console.log("1차 실행")
    setTimeout(() => {
        callback();          
    }, 200);
}

const displayOn = () => {
    mediaWrap.classList.add("display_on");
    mediaWrap.classList.remove("display_off");
    console.log("2차실행")
}

const slideOff = (callback) => {
    mediaWrap.classList.add("display_off");
    mediaWrap.classList.remove("display_on");
    console.log("1차 실행")
    console.log("1차 실행")
    setTimeout(() => {
        callback();          
    }, 200);
}

const displayOff = () => {
    popupMenu.classList.add("slideOff");
    popupMenu.classList.remove("slideOn");
    console.log("2차실행")
}

const rotateOn = () => {
    xMenu[0].style.transform = 'rotate(45deg)';
    xMenu[1].style.transform = 'rotate(-45deg)';
}

const hamMenuOn = (rotateOn) => {
    xMenu[0].style.top = '9px';
    xMenu[1].style.top = '9px';
    setTimeout(() => {
        rotateOn();
    }, 200);
}

const rotateOff = () => {
    xMenu[0].style.top = '6px';
    xMenu[1].style.top = '12px';
}

const hamMenuOff = (rotateOff) => {
    xMenu[0].style.transform = 'rotate(0)';
    xMenu[1].style.transform = 'rotate(0)';
    setTimeout(() => {
        rotateOff();
    }, 200);
}

//slide 백그라운드 이미지
const backgroundImg = [
    `url("https://is3-ssl.mzstatic.com/image/thumb/PiR1djqZF-tlgKKp3n6yOQ/980x551.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/I25UvCTJzFPQZ7dAB6BFRg/980x551.jpg")`,
    `url("https://is1-ssl.mzstatic.com/image/thumb/eFodV5_vSzfAMgs1pYjtmA/980x551.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/9614uvFWNf4CbTg6Bk7rpQ/1250x703.jpg")`,
    `url("https://is2-ssl.mzstatic.com/image/thumb/JnCi-pZrEPZVs_N_H4qWbg/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/CkBnY85jwna1fuSpPrqCmQ/1250x703.jpg")`,
    `url("https://is3-ssl.mzstatic.com/image/thumb/N1yhurIJQod61UUJH6jJtg/1250x703.jpg")`,
    `url("https://is5-ssl.mzstatic.com/image/thumb/wtYaraYXcLHy0xwQl4LSGQ/1250x703.jpg")`,
    `url("https://is2-ssl.mzstatic.com/image/thumb/vBnga41bJlFDpYwvaej6Jg/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/P6b7_NbvzrK7pH0p6cFhwQ/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/qT49nv5vDfi2WKnjUbyaEw/1250x703.jpg")`,
    `url("https://is3-ssl.mzstatic.com/image/thumb/PiR1djqZF-tlgKKp3n6yOQ/980x551.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/I25UvCTJzFPQZ7dAB6BFRg/980x551.jpg")`,
    `url("https://is1-ssl.mzstatic.com/image/thumb/eFodV5_vSzfAMgs1pYjtmA/980x551.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/9614uvFWNf4CbTg6Bk7rpQ/1250x703.jpg")`,
    `url("https://is2-ssl.mzstatic.com/image/thumb/JnCi-pZrEPZVs_N_H4qWbg/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/CkBnY85jwna1fuSpPrqCmQ/1250x703.jpg")`,
    `url("https://is3-ssl.mzstatic.com/image/thumb/N1yhurIJQod61UUJH6jJtg/1250x703.jpg")`,
    `url("https://is5-ssl.mzstatic.com/image/thumb/wtYaraYXcLHy0xwQl4LSGQ/1250x703.jpg")`,
    `url("https://is2-ssl.mzstatic.com/image/thumb/vBnga41bJlFDpYwvaej6Jg/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/P6b7_NbvzrK7pH0p6cFhwQ/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/qT49nv5vDfi2WKnjUbyaEw/1250x703.jpg")`,
    `url("https://is3-ssl.mzstatic.com/image/thumb/PiR1djqZF-tlgKKp3n6yOQ/980x551.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/I25UvCTJzFPQZ7dAB6BFRg/980x551.jpg")`,
    `url("https://is1-ssl.mzstatic.com/image/thumb/eFodV5_vSzfAMgs1pYjtmA/980x551.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/9614uvFWNf4CbTg6Bk7rpQ/1250x703.jpg")`,
    `url("https://is2-ssl.mzstatic.com/image/thumb/JnCi-pZrEPZVs_N_H4qWbg/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/CkBnY85jwna1fuSpPrqCmQ/1250x703.jpg")`,
    `url("https://is3-ssl.mzstatic.com/image/thumb/N1yhurIJQod61UUJH6jJtg/1250x703.jpg")`,
    `url("https://is5-ssl.mzstatic.com/image/thumb/wtYaraYXcLHy0xwQl4LSGQ/1250x703.jpg")`,
    `url("https://is2-ssl.mzstatic.com/image/thumb/vBnga41bJlFDpYwvaej6Jg/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/P6b7_NbvzrK7pH0p6cFhwQ/1250x703.jpg")`,
    `url("https://is4-ssl.mzstatic.com/image/thumb/qT49nv5vDfi2WKnjUbyaEw/1250x703.jpg")`,
]

//slide 구현 // 목적을 적으면서 구현할 것
const slideContainer = document.querySelector(".slide_container_wrap");
const slideLi = document.querySelectorAll(".slide_container_inbox");
let currentIdx = 0;
const slideLength = slideLi.length;
const slideWidth = 1200;
const slideMargin = 10;
const maxSlides = 3;
const nextBt = document.querySelector(".right_bt");
const prevBt = document.querySelector(".left_bt");

const slideReverse = [...slideLi].reverse();
// 슬라이드 복제시 1, 2, 3, 4 ... 을 뒤집어서 사용하기 위한 변수

function cloneImg (){
    for(let i = 0; i < slideLength; i++){
        const cloneFirst = slideLi[i].cloneNode(true);
        slideContainer.append(cloneFirst)
        const cloneLast = slideReverse[i].cloneNode(true);
        slideContainer.prepend(cloneLast)
    }
};
//slideLength를 활용해 cloneNode 생성 후 앞 뒤로 배치 

cloneImg();

function backGroundImgMake(){
    const slideLengthAll = document.querySelectorAll(".slide_container_inbox");
    //cloneImg 함수에서 생성된 복제 값을 받아오기위해 재선언
    for(let i = 0; i < slideLengthAll.length; i++){
     slideLengthAll[i].style.backgroundImage = `${backgroundImg[i]}`;
    }
}
// cloneImg 실행 후 백그라운드 이미지 배치 

backGroundImgMake();

function updateWidtd (){
    const currentSlides = document.querySelectorAll(".slide_container_inbox");
    const newSlideLength = currentSlides.length;
    const newWidth = (slideWidth + slideMargin) * newSlideLength - slideMargin;
    console.log(newWidth)
    slideContainer.style.width = newWidth + "px";
};

updateWidtd();
// 총 넓이를 계산해 slideContainer의 width값 업데이트

function setInitialPos(){
    const initialValue = -(slideWidth + slideMargin) * slideLength;
    console.log(initialValue)
    slideContainer.style.transform = `translateX(${initialValue}px)`
    setTimeout(() => {
        slideContainer.classList.add("slide_animated")
    }, 100);
};

setInitialPos();

nextBt.addEventListener("click", function(){
    moveSlide(currentIdx +1);
});

prevBt.addEventListener("click", function(){
    moveSlide(currentIdx -1);
});

// const siblings = (el) => [...el.parentElement.children].filter(node => node != el);

function moveSlide(num){
    slideContainer.style.left = -num * (slideWidth+slideMargin) + "px"
    currentIdx = num;
    if(currentIdx == slideLength || currentIdx == -slideLength){
        setTimeout(() => {
            slideContainer.classList.remove("slide_animated");
            slideContainer.style.left = "0px"
            currentIdx =0;
        }, 300);
        setTimeout(() => {
            slideContainer.classList.add("slide_animated");
        }, 350);
    }
};


//autoSlide, stopSlide
let timer = true;
const tvSlide = document.querySelector(".tv_slide");

function autoSlide(){
    if(timer == true){
        timer = setInterval(() => {
            moveSlide(currentIdx +1);
        }, 3000);
    }
}

autoSlide();

function stopSlide(){
    clearInterval(timer);
    timer = true;
    console.log(timer);
    //stopSlide() 실행중 timer를 다시 true 값으로 바꿔줘서 stopSlide()가 끝나면 다시 autoSlide가 작동할 수 있게 만듬.
}

tvSlide.addEventListener("mouseenter", ()=>{
    stopSlide();
});
tvSlide.addEventListener("mouseleave", ()=>{
    autoSlide();
});

//listButtons 
const listButtons = document.querySelectorAll(".list_button_wrap li");

//listBtttons의 이덱스 번호를 클릭하면 0, 1, 2 ,3 ... movesdlie작동

function listSlide(){
    for(let i = 0; i < listButtons.length; i++){
        listButtons[i].addEventListener("click", ()=>{
            moveSlide(currentIdx = i);
        });
    }
}

listSlide();


window.addEventListener('resize', function(){
    const currentWidth = document.body.offsetWidth;
    console.log(currentWidth)
    if(currentWidth < 1024){
        const slideContainerWidth = slideContainer.offsetWidth;
    }
});