// 바닐라 자바스크립트로 변경
const portBox = document.querySelector("#intro_in_portfolio_box");
const portInBox = document.querySelectorAll(".intro_in_portfolio_inbox");
const intro1 = document.querySelector("#intro>h2");
const intro2 = document.querySelector("#intro_title");
const intro3 = document.querySelector("#intro_title h2");
const intro4 = document.querySelector("#intro_in_portfolio");
const intro5 = document.querySelector("#intro_text");
const horizontal = document.querySelector("#horizontal");
const introMain = document.querySelector("#intro");
const portfolioMain = document.querySelector("#portfolio_main");
const portfolioWrap = document.querySelector("#portfolio_wrap");

//인트로 로딩 표시 시작
let count = 0;
const counter = setInterval(() => {
  count = count + 1;
  if (count <= 100) {
    intro1.innerHTML = count + "%";
  }
  if (count === 100) {
    intro1.innerHTML = "SUNG HYUK";
    portBox.classList.add("displayOn");
    stopCounter();
  }
}, 30);
//인트로 로딩 표시 끝

function stopCounter() {
  clearInterval(counter);
}

function portOnMove() {
  onMove(onHorizontal, onIntro, mainOpen, mainTextMove);
}

const onMove = (onHorizontal, onIntro, mainOpen, mainTextMove) => {
  portBox.classList.remove("displayOn");
  portBox.classList.add("displayOff");
  intro1.classList.add("displayOff");
  intro2.classList.add("displayOff");
  intro3.classList.add("displayOff");
  intro4.classList.add("displayOff");
  intro5.classList.add("displayOff");
  setTimeout(() => {
    onHorizontal();
  }, 300);
  setTimeout(() => {
    onIntro();
  }, 1300);
  setTimeout(() => {
    mainOpen();
  }, 1300);
  setTimeout(() => {
    mainTextMove();
  }, 1400);
};

const onHorizontal = () => {
  horizontal.style.left = "-50%";
  horizontal.style.width = "0%";
};

const onIntro = () => {
  introMain.classList.add("displayOff");
};

const mainOpen = () => {
  portfolioMain.classList.remove("displayOff");
  portfolioWrap.classList.remove("displayOff");
  portfolioMain.classList.add("displayOn");
  portfolioWrap.classList.add("displayOn");
};

const mainText1 = document.querySelector(
  "#portfolio_main_text_box h2:nth-child(2)"
);
const mainText2 = document.querySelector(
  "#portfolio_main_text_box h2:nth-child(3)"
);
const mainText3 = document.querySelector("#portfolio_main_text_box p");

const mainTextMove = () => {
  mainText1.style.paddingRight = "15%";
  mainText2.style.paddingLeft = "20%";
  setTimeout(() => {
    mainText3.style.paddingLeft = "60%";
  }, 100);
};

portBox.addEventListener("click", portOnMove);

const onMouseMove = () => {
  portInBox.forEach((box) => (box.style.borderColor = "rgba(38,70,80,1)"));
  for (let i = 0; i < portInBox.length; i++) {
    let width = 80;
    let height = 80;
    portInBox[i].style.width = `${(width -= 5 * i)}%`;
    portInBox[i].style.height = `${(height -= 5 * i)}%`;
  }
};

const offMouseMove = () => {
  portInBox.forEach((box) => (box.style.borderColor = "rgba(255,255,255,1)"));
  for (let i = 0; i < portInBox.length; i++) {
    let width = 85;
    let height = 85;
    portInBox[i].style.width = `${(width -= 5 * i)}%`;
    portInBox[i].style.height = `${(height -= 5 * i)}%`;
  }
};

portBox.addEventListener("mouseenter", onMouseMove);
portBox.addEventListener("mouseleave", offMouseMove);

const contents = [
  {
    name: "ader",
    linkName: "ader",
    title: "Main brand portfolio | Completion",
    explanation:
      "브랜딩 마이크로 사이트로 ADER는 패션을 기반으로 한 문화 커뮤니케이션 브랜드입니다. space라는 컨셉으로 브랜딩 마이크로 사이트를 제작해봤습니다.",
    htmlSource: "#1",
    cssSource: "#1",
    javascriptSource: "#1",
  },
  {
    name: "ipad",
    linkName: "chrome",
    title: "바닐라 자바스크립트로 제작한 IPAD",
    explanation:
      "노마드 코더 사이트의 자바스크립트 공부를 하면서 제작한 iPad앱 바닐라 자바스크립트를 활용한 todo-list, 날씨 api 활용한 앱등 다양한 APP을 볼 수 있습니다.",
    htmlSource: "#2",
    cssSource: "#2",
    javascriptSource: "#2",
  },
  {
    name: "meme_maker",
    linkName: "meme_maker",
    title: "밈 생성기",
    explanation: "javascript canvas를 활용한 밈 생성기",
    htmlSource: "#3",
    cssSource: "#3",
    javascriptSource: "#3",
  },
  {
    name: "apple",
    linkName: "apple",
    title: "",
    explanation: "애플 반응형 메인 페이지 제작 바닐라 자바스크립트로 작업",
    htmlSource: "#3",
    cssSource: "#3",
    javascriptSource: "#3",
  },
];

// 이걸 다시 재사용성을 고려해서 리팩토링 해보기!
const mainWork = document.querySelector(".works_box");

// 별도의 함수로 link를 생성하여 분리함 반복되는 코드를 줄일 수 있음.
const createLink = (outerElement, num) => {
  const createLink = document.createElement("a");
  createLink.innerHTML = outerElement.outerHTML;
  createLink.setAttribute("href", `./${contents[num].linkName}/index.html`);
  createLink.setAttribute("target", "_blank");
  outerElement.parentNode.insertBefore(createLink, outerElement);
  outerElement.remove();
};
//작성중...
const newDiv = (className) => {
  const createDiv = document.createElement("div");
  createDiv.classList.add(className);
};

const createContent = (num) => {
  const newDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const ul = document.createElement("ul");
  const linkTarget = `target="_blank"`;

  newDiv.classList.add("javascript_protfolio");
  secondDiv.classList.add(`${contents[num].name}`);

  newDiv.prepend(secondDiv, button, h4, h3, p, ul);
  button.innerHTML = "Go in";
  h4.innerHTML = `${contents[num].name}`;
  h3.innerHTML = `${contents[num].title}`;
  p.innerHTML = `${contents[num].explanation}`;
  ul.classList.add("language");
  ul.innerHTML = `<li><p>category source(click!)</p></li>
  <li><a href="${contents[num].htmlSource}" ${linkTarget}><p>html</p></a></li>
  <li><a href="${contents[num].cssSource}" ${linkTarget}><p>css</p></a></li>
  <li><a href="${contents[num].javascriptSource}" ${linkTarget}><p>javascript</p></a></li>`;
  //   ul.classList.add("language");
  //   ul.innerHTML = `${li.outerHTML} ${li.outerHTML} ${li.outerHTML} ${li.outerHTML}`;
  //   li.parentNode.insertBefore(ul, li);
  //   li.remove();
  createLink(secondDiv, num);
  createLink(button, num);
  mainWork.prepend(newDiv);
};

for (let i = 0; i < contents.length; i++) {
  let num = i;
  createContent(num);
}

const responsiveButton = document.querySelector(".responsive_bt");
const pcButton = document.querySelector(".pc_bt");
const responsiveWork = document.querySelector("#responsive_work");
const pcWork = document.querySelector("#pc_work");

const responsiveOn = () => {
  responsiveWork.classList.add("displayOn");
  responsiveWork.classList.remove("displayOff");
  pcWork.classList.add("displayOff");
  pcWork.classList.remove("displayOn");
  responsiveButton.style.backgroundColor = "#00ff96";
  responsiveButton.style.color = "#000000";
  pcButton.style.backgroundColor = "transparent";
  pcButton.style.color = "#ffffff";
};

const pcOn = () => {
  pcWork.classList.add("displayOn");
  pcWork.classList.remove("displayOff");
  responsiveWork.classList.add("displayOff");
  responsiveWork.classList.remove("displayOn");
  pcButton.style.backgroundColor = "#00ff96";
  pcButton.style.color = "#000000";
  responsiveButton.style.backgroundColor = "transparent";
  responsiveButton.style.color = "#ffffff";
};

responsiveButton.addEventListener("click", responsiveOn);
pcButton.addEventListener("click", pcOn);
// 바닐라 자바스크립트로 변경 끝

// scroll event 바닐라 자바스크립트

const header = document.querySelector("header");
const mainBox = document.querySelector("#portfolio_about_me_main_box");
const portfolioWorkBox = document.querySelector("#portfolio_work");

let last_Scroll = 0;

function scrollEvent() {
  let windowScrollY = window.scrollY;

  const mainInboxTopP = document.querySelector(
    "#portfolio_about_me_main_inbox_top p"
  );
  const mainInboxTopH2 = document.querySelector(
    "#portfolio_about_me_main_inbox_top h2"
  );
  const mainInboxTopH3 = document.querySelector(
    "#portfolio_about_me_main_inbox_top h3"
  );
  
  const mainInboxBottom = document.querySelector(
    "#portfolio_about_me_main_inbox_bottom"
  );
  const mainInboxRight = document.querySelector(
    "#portfolio_about_me_main_right_box"
  );

  if (windowScrollY < last_Scroll) {
    header.classList.remove("displayOff");
  } else if (windowScrollY > last_Scroll) {
    header.classList.add("displayOff");
  }
  last_Scroll = windowScrollY;
  //스크롤 아래로 내릴 때, 올릴 때 이벤트 last_sc = sc 마지막 변수 선언으로 동일한 값으로 만들어 줌으로써 아래 스크롤 이벤트 또한 적용될 수 있도록함
  // 스크롤 내릴때
  if (windowScrollY > 400 && windowScrollY <= 599) {
    mainInboxTopP.style.marginTop = "0px";
    mainInboxTopP.style.opacity = "1";
    mainInboxTopH2.style.marginTop = "10px";
    mainInboxTopH2.style.opacity = "1";
    mainInboxTopH3.style.marginTop = "10px";
    mainInboxTopH3.style.opacity = "1";
    mainInboxBottom.style.opacity = "1";
    mainInboxRight.style.opacity = "1";
  }
  //여기서 부터 하면됨
  if (mainBox.offsetTop < windowScrollY) {
    const aboutInBoxs = document.querySelectorAll(".about_value_inbox");
    aboutInBoxs[0].style.width = "80%";
    aboutInBoxs[1].style.width = "80%";
    aboutInBoxs[2].style.width = "85%";
    aboutInBoxs[3].style.width = "85%";
  }
  if (portfolioWorkBox.offsetTop < windowScrollY) {
    const portfolioWorkH2 = document.querySelector("#portfolio_work h2");
    const worksBox = document.querySelector(".works_box");
    portfolioWorkH2.style.marginTop = "0px";
    portfolioWorkH2.style.opacity = "1";
    worksBox.style.opacity = "1";
  }
// scroll 올릴때 
  if(windowScrollY < 400 ){
    mainInboxTopP.style.marginTop = "50px";
    mainInboxTopP.style.opacity = "0";
    mainInboxTopH2.style.marginTop = "50px";
    mainInboxTopH2.style.opacity = "0";
    mainInboxTopH3.style.marginTop = "50px";
    mainInboxTopH3.style.opacity = "0";
    mainInboxBottom.style.opacity = "0";
    mainInboxRight.style.opacity = "0";
  }

  if (mainBox.offsetTop > windowScrollY) {
    const aboutInBoxs = document.querySelectorAll(".about_value_inbox");
    aboutInBoxs[0].style.width = "0%";
    aboutInBoxs[1].style.width = "0%";
    aboutInBoxs[2].style.width = "0%";
    aboutInBoxs[3].style.width = "0%";
  }

  if (portfolioWorkBox.offsetTop >= windowScrollY) {
    const portfolioWorkH2 = document.querySelector("#portfolio_work h2");
    const worksBox = document.querySelector(".works_box");
    portfolioWorkH2.style.marginTop = "50px";
    portfolioWorkH2.style.opacity = "0";
    worksBox.style.opacity = "0";
  }
}

window.addEventListener("scroll", scrollEvent);

const menuLi = document.querySelectorAll("#menu li");
const footer = document.querySelector("footer");

function mainOffsetTop () {
  window.scrollTo({top: portfolioMain.offsetTop, behavior: 'smooth'});
}

function wrapOffsetTop () {
  window.scrollTo({top: portfolioWrap.offsetTop +1, behavior: 'smooth'});
}

function workOffsetTop () {
  window.scrollTo({top: portfolioWorkBox.offsetTop +1 , behavior: 'smooth'});
}

function footerOffsetTop () {
  window.scrollTo({top: footer.offsetTop , behavior: 'smooth'});
}

menuLi[0].addEventListener("click", mainOffsetTop);
menuLi[1].addEventListener("click", wrapOffsetTop);
menuLi[2].addEventListener("click", workOffsetTop);
menuLi[3].addEventListener("click", footerOffsetTop);



// jquery 시작
$(document).ready(function () {
  // let last_sc = 0;
  // $(window).scroll(function () {
  //   sc = $(window).scrollTop();
  //   //스크롤 아래로 내릴때, 올릴때 이벤트 last_sc = sc 마지막 변수 선언으로 아래 스크롤 이벤트와 분리함
  //   if (sc < last_sc) {
  //     $("header").stop().fadeIn(300);
  //   } else if (sc > last_sc) {
  //     $("header").stop().fadeOut(300);
  //   }
  //   last_sc = sc;
  //   if (sc > 400 && sc <= 599) {
  //     $("#portfolio_about_me_main_inbox_top p")
  //       .stop()
  //       .animate({ "margin-top": "0px", opacity: "1" }, 500);
  //     $(
  //       "#portfolio_about_me_main_inbox_top h3,#portfolio_about_me_main_inbox_top h2"
  //     )
  //       .stop()
  //       .animate({ "margin-top": "10px", opacity: "1" }, 500);
  //     $(
  //       "#portfolio_about_me_main_inbox_bottom, #portfolio_about_me_main_right_box"
  //     )
  //       .stop()
  //       .animate({ opacity: "1" }, 500);
  //   }
  //   if (sc > 600 && sc <= 999) {
  //     $("#about_box li:nth-child(1) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "80%" }, 1000);
  //     $("#about_box li:nth-child(2) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "80%" }, 1000);
  //     $("#about_box li:nth-child(3) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "85%" }, 1000);
  //     $("#about_box li:nth-child(4) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "85%" }, 1000);
  //   }
  //   if (sc > 1000 && sc <= 1699) {
  //     $("#portfolio_work h2")
  //       .stop()
  //       .animate({ "margin-top": "0", opacity: "1" }, 500);
  //     $("#main_work")
  //       .stop()
  //       .animate({ opacity: "1", "margin-top": "50px" }, 500);
  //   }
  //   if (sc < 400) {
  //     $("#portfolio_about_me_main_inbox_top p")
  //       .stop()
  //       .animate({ "margin-top": "50px", opacity: "0" }, 500);
  //     $(
  //       "#portfolio_about_me_main_inbox_top h3,#portfolio_about_me_main_inbox_top h2"
  //     )
  //       .stop()
  //       .animate({ "margin-top": "50px", opacity: "0" }, 500);
  //     $(
  //       "#portfolio_about_me_main_inbox_bottom, #portfolio_about_me_main_right_box"
  //     )
  //       .stop()
  //       .animate({ opacity: "0" }, 500);
  //   }
  //   if (sc < 600) {
  //     $("#about_box li:nth-child(1) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "0%" }, 1000);
  //     $("#about_box li:nth-child(2) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "0%" }, 1000);
  //     $("#about_box li:nth-child(3) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "0%" }, 1000);
  //     $("#about_box li:nth-child(4) .about_value_inbox")
  //       .stop()
  //       .animate({ width: "0%" }, 1000);
  //   }
  //   if (sc < 1000) {
  //     $("#portfolio_work h2")
  //       .stop()
  //       .animate({ "margin-top": "100px", opacity: "0" }, 500);
  //     $("#main_work")
  //       .stop()
  //       .animate({ opacity: "0", "margin-top": "50px" }, 500);
  //   }
  // });
  // //클릭 시 스크롤탑 이동
  // $("#menu li:nth-child(1)").click(function () {
  //   $("body,html").animate(
  //     { scrollTop: $("#portfolio_main").offset().top },
  //     300
  //   );
  // });
  // $("#menu li:nth-child(2)").click(function () {
  //   $("body,html").animate(
  //     { scrollTop: $("#portfolio_wrap").offset().top },
  //     300
  //   );
  // });
  // $("#menu li:nth-child(3)").click(function () {
  //   $("body,html").animate(
  //     { scrollTop: $("#portfolio_work").offset().top },
  //     300
  //   );
  // });
  // $("#menu li:nth-child(4)").click(function () {
  //   $("body,html").animate({ scrollTop: $("footer").offset().top }, 300);
  // });
  //mouse pointer 모바일에서 반응안함 확인해야함
  /*mouse_pointer_x = 0; mouse_pointer_y = 0; speed=0.1;
    setInterval(function(){
    mouse_pointer_x = mouse_pointer_x+speed*(x-mouse_pointer_x)
    mouse_pointer_y = mouse_pointer_y+speed*(y-mouse_pointer_y)
    $('#mouse_pointer').css({'left':mouse_pointer_x,"top":mouse_pointer_y})	  
    },15);

    $(window).mousemove(function(e){
    x = e.pageX-($('#mouse_pointer').width()/2);
    y = e.pageY-($('#mouse_pointer').height()/2);
    });*/
});
