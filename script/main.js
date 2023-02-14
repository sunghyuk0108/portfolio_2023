$(document).ready(function () {
  let last_sc = 0;
  $(window).scroll(function () {
    sc = $(window).scrollTop();
    //스크롤 아래로 내릴때, 올릴때 이벤트 last_sc = sc 마지막 변수 선언으로 아래 스크롤 이벤트와 분리함
    if (sc < last_sc) {
      $("header").stop().fadeIn(300);
    } else if (sc > last_sc) {
      $("header").stop().fadeOut(300);
    }
    last_sc = sc;
    if (sc > 400 && sc <= 599) {
      $("#portfolio_about_me_main_inbox_top p")
        .stop()
        .animate({ "margin-top": "0px", opacity: "1" }, 500);
      $(
        "#portfolio_about_me_main_inbox_top h3,#portfolio_about_me_main_inbox_top h2"
      )
        .stop()
        .animate({ "margin-top": "10px", opacity: "1" }, 500);
      $(
        "#portfolio_about_me_main_inbox_bottom, #portfolio_about_me_main_right_box"
      )
        .stop()
        .animate({ opacity: "1" }, 500);
    }
    if (sc > 600 && sc <= 999) {
      $("#about_box li:nth-child(1) .about_value_inbox")
        .stop()
        .animate({ width: "80%" }, 1000);
      $("#about_box li:nth-child(2) .about_value_inbox")
        .stop()
        .animate({ width: "80%" }, 1000);
      $("#about_box li:nth-child(3) .about_value_inbox")
        .stop()
        .animate({ width: "85%" }, 1000);
      $("#about_box li:nth-child(4) .about_value_inbox")
        .stop()
        .animate({ width: "85%" }, 1000);
    }
    if (sc > 1000 && sc <= 1699) {
      $("#portfolio_work h2")
        .stop()
        .animate({ "margin-top": "0", opacity: "1" }, 500);
      $("#main_work")
        .stop()
        .animate({ opacity: "1", "margin-top": "50px" }, 500);
    }
    if (sc < 400) {
      $("#portfolio_about_me_main_inbox_top p")
        .stop()
        .animate({ "margin-top": "50px", opacity: "0" }, 500);
      $(
        "#portfolio_about_me_main_inbox_top h3,#portfolio_about_me_main_inbox_top h2"
      )
        .stop()
        .animate({ "margin-top": "50px", opacity: "0" }, 500);
      $(
        "#portfolio_about_me_main_inbox_bottom, #portfolio_about_me_main_right_box"
      )
        .stop()
        .animate({ opacity: "0" }, 500);
    }
    if (sc < 600) {
      $("#about_box li:nth-child(1) .about_value_inbox")
        .stop()
        .animate({ width: "0%" }, 1000);
      $("#about_box li:nth-child(2) .about_value_inbox")
        .stop()
        .animate({ width: "0%" }, 1000);
      $("#about_box li:nth-child(3) .about_value_inbox")
        .stop()
        .animate({ width: "0%" }, 1000);
      $("#about_box li:nth-child(4) .about_value_inbox")
        .stop()
        .animate({ width: "0%" }, 1000);
    }
    if (sc < 1000) {
      $("#portfolio_work h2")
        .stop()
        .animate({ "margin-top": "100px", opacity: "0" }, 500);
      $("#main_work")
        .stop()
        .animate({ opacity: "0", "margin-top": "50px" }, 500);
    }
  });
  //클릭 시 스크롤탑 이동
  $("#menu li:nth-child(1)").click(function () {
    $("body,html").animate(
      { scrollTop: $("#portfolio_main").offset().top },
      300
    );
  });
  $("#menu li:nth-child(2)").click(function () {
    $("body,html").animate(
      { scrollTop: $("#portfolio_wrap").offset().top },
      300
    );
  });
  $("#menu li:nth-child(3)").click(function () {
    $("body,html").animate(
      { scrollTop: $("#portfolio_work").offset().top },
      300
    );
  });
  $("#menu li:nth-child(4)").click(function () {
    $("body,html").animate({ scrollTop: $("footer").offset().top }, 300);
  });
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
  $("#samo").animate({ "margin-top": "12px" }, 500, function samo() {
    $("#samo").animate({ "margin-top": "0" }, 300);
    $("#samo").animate({ "margin-top": "12px" }, 500, samo);
  });

  //1~100까지 count 이후 sung hyuk이름이 보여지고

  $("#intro_in_portfolio").animate(
    { rotate: "90deg" },
    10000,
    function rotate() {
      $("#intro_in_portfolio").animate({ rotate: "0deg" }, 10000, function () {
        $("#intro_in_portfolio").animate({ rotate: "90deg" }, 10000, rotate);
      });
    }
  );
  $(".intro_in_portfolio_inbox").mouseenter(function () {
    $(".intro_in_portfolio_inbox:nth-child(1)").css(
      { "border-color": "rgb(38,70,80,1)" },
      500
    );
    $(".intro_in_portfolio_inbox:nth-child(2)").css(
      { "border-color": "rgb(38,70,80,0.75)" },
      500
    );
    $(".intro_in_portfolio_inbox:nth-child(3)").css(
      { "border-color": "rgb(38,70,80,0.5)" },
      500
    );
    $(".intro_in_portfolio_inbox:nth-child(1)")
      .stop()
      .animate({ width: "80%", height: "80%" }, 600);
    $(".intro_in_portfolio_inbox:nth-child(2)")
      .stop()
      .animate({ width: "75%", height: "75%" }, 550);
    $(".intro_in_portfolio_inbox:nth-child(3)")
      .stop()
      .animate({ width: "70%", height: "70%" }, 500);
  });
  $(".intro_in_portfolio_inbox").mouseleave(function () {
    $(".intro_in_portfolio_inbox:nth-child(1)").css(
      { "border-color": "rgb(255,255,255,1)" },
      500
    );
    $(".intro_in_portfolio_inbox:nth-child(2)").css(
      { "border-color": "rgb(255,255,255,0.75)" },
      500
    );
    $(".intro_in_portfolio_inbox:nth-child(3)").css(
      { "border-color": "rgb(255,255,255,0.5)" },
      500
    );
    $(".intro_in_portfolio_inbox:nth-child(1)")
      .stop()
      .animate({ width: "85%", height: "85%" }, 600);
    $(".intro_in_portfolio_inbox:nth-child(2)")
      .stop()
      .animate({ width: "80%", height: "80%" }, 550);
    $(".intro_in_portfolio_inbox:nth-child(3)")
      .stop()
      .animate({ width: "75%", height: "75%" }, 500);
  });
  $("#works_menu li:nth-child(1)").click(function () {
    $("#responsive_work").show();
    $("#pc_work").hide();
    $(this).css({ "background-color": "#00ff96", color: "#000" });
    $("#works_menu li:nth-child(2)").css({
      "background-color": "transparent",
      color: "#fff",
    });
  });
  $("#works_menu li:nth-child(2)").click(function () {
    $("#pc_work").show();
    $("#responsive_work").hide();
    $(this).css({ "background-color": "#00ff96", color: "#000" });
    $("#works_menu li:nth-child(1)").css({
      "background-color": "transparent",
      color: "#fff",
    });
  });
});

// 바닐라 자바스크립트로 변경
const portBox = document.querySelector("#intro_in_portfolio_box");
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
setInterval(() => {
  count = count + 1;
  if (count <= 100) {
    intro1.innerHTML = count + "%";
  }
  if (count === 100) {
    intro1.innerHTML = "SUNG HYUK";
    portBox.classList.add("displayOn");
  }
}, 30);
//인트로 로딩 표시 끝

function portOnMove() {
  onMove(onHorizontal, onIntro, mainOpen, mainTextMove);
}

const onMove = (callback1, callback2, callback3, callback4) => {
  portBox.classList.remove("displayOn");
  portBox.classList.add("displayOff");
  intro1.classList.add("displayOff");
  intro2.classList.add("displayOff");
  intro3.classList.add("displayOff");
  intro4.classList.add("displayOff");
  intro5.classList.add("displayOff");
  setTimeout(() => {
    callback1();
  }, 300);
  setTimeout(() => {
    callback2();
  }, 1300);
  setTimeout(() => {
    callback3();
  }, 1300);
  setTimeout(() => {
    callback4();
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
// 바닐라 자바스크립트로 변경 끝

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
  }
];

// 이걸 다시 재사용성을 고려해서 리팩토링 해보기!
const mainWork = document.querySelector(".works_box");

const createContent = (num) => {
  const newDiv = document.createElement("div");
  const secondDiv = document.createElement("div");
  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  newDiv.classList.add("javascript_protfolio");
  secondDiv.classList.add(`${contents[num].name}`);

  newDiv.prepend(secondDiv, button, h4, h3, p, ul);
  button.innerHTML = "Go in";
  h4.innerHTML = `${contents[num].name}`;
  h3.innerHTML = `${contents[num].title}`;
  p.innerHTML = `${contents[num].explanation}`;
  ul.classList.add("language");
  ul.innerHTML = `<li><p>category source(click!)</p></li>
  <li><a href="${contents[num].htmlSource}"><p>html</p></a></li>
  <li><a href="${contents[num].cssSource}"><p>css</p></a></li>
  <li><a href="${contents[num].javascriptSource}"><p>javascript</p></a></li>`;
  //   ul.classList.add("language");
  //   ul.innerHTML = `${li.outerHTML} ${li.outerHTML} ${li.outerHTML} ${li.outerHTML}`;
  //   li.parentNode.insertBefore(ul, li);
  //   li.remove();
  mainWork.prepend(newDiv);

  link1.innerHTML = secondDiv.outerHTML;
  link1.setAttribute("href", `./${contents[num].linkName}/index.html`);
  secondDiv.parentNode.insertBefore(link1, secondDiv);
  secondDiv.remove();

  link2.innerHTML = button.outerHTML;
  link2.setAttribute("href", `./${contents[num].linkName}/index.html`);
  button.parentNode.insertBefore(link2, button);
  button.remove();
};

for (let i = 0; i < contents.length; i++) {
  let num = i;
  createContent(num);
}
