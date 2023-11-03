var correct_question = [0, 0, 0, 0, 0];
var score = 0;
var question = 1;
var correct1 = document.getElementById("correct1");
var correct2 = document.getElementById("correct2");
var correct3 = document.getElementById("correct3");
var correct4 = document.getElementById("correct4");
var correct5 = document.getElementById("correct5");
var correct6 = document.getElementById("correct6");
var correct7 = document.getElementById("correct7");
var correct8 = document.getElementById("correct8");
var correct9 = document.getElementById("correct9");
var correct10 = document.getElementById("correct10");
var wrong1 = document.getElementById("wrong1");
var wrong2 = document.getElementById("wrong2");
var wrong3 = document.getElementById("wrong3");
var wrong4 = document.getElementById("wrong4");
var wrong5 = document.getElementById("wrong5");
var wrong6 = document.getElementById("wrong6");
var wrong7 = document.getElementById("wrong7");
var wrong8 = document.getElementById("wrong8");
var wrong9 = document.getElementById("wrong9");
var wrong10 = document.getElementById("wrong10");
var check_answer1 = document.getElementById("check_answer1");
var check_answer2 = document.getElementById("check_answer2");
var check_answer3 = document.getElementById("check_answer3");
var check_answer4 = document.getElementById("check_answer4");
var check_answer5 = document.getElementById("check_answer5");
var check_answer6 = document.getElementById("check_answer6");
var check_answer7 = document.getElementById("check_answer7");
var check_answer8 = document.getElementById("check_answer8");
var check_answer9 = document.getElementById("check_answer9");
var check_answer10 = document.getElementById("check_answer10");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");
function checkAnswer1() {
  if (document.getElementById("option1_4").checked) {
    score += 10;
    correct1.style.display = "block";
    correct_question[0]++;
  } else {
    wrong1.style.display = "block";
  }
  check_answer1.disabled = true;
}

function checkAnswer2() {
  if (document.getElementById("option2_3").checked) {
    score += 10;
    correct2.style.display = "block";
    correct_question[1]++;
  } else {
    wrong2.style.display = "block";
  }
  check_answer2.disabled = true;
}

function checkAnswer3() {
  if (document.getElementById("option3_3").checked) {
    score += 10;
    correct3.style.display = "block";
    correct_question[2]++;
  } else {
    wrong3.style.display = "block";
  }
  check_answer3.disabled = true;
}

function checkAnswer4() {
  if (document.getElementById("option4_2").checked) {
    score += 10;
    correct4.style.display = "block";
    correct_question[4]++;
  } else {
    wrong4.style.display = "block";
  }
  check_answer4.disabled = true;
}

function checkAnswer5() {
  if (document.getElementById("option5_2").checked) {
    score += 10;
    correct5.style.display = "block";
    correct_question[2]++;
  } else {
    wrong5.style.display = "block";
  }
  check_answer5.disabled = true;
}

var input6, input7, input8, input9, input10;

function checkAnswer6() {
  if (document.getElementById("input6").value == "p.content") {
    score += 10;
    correct6.style.display = "block";
    correct_question[0]++;
  } else {
    wrong6.style.display = "block";
  }
  check_answer6.disabled = true;
}

function checkAnswer7() {
  if (document.getElementById("input7").value == "text-align") {
    score += 10;
    correct7.style.display = "block";
    correct_question[2]++;
  } else {
    wrong7.style.display = "block";
  }
  check_answer7.disabled = true;
}

function checkAnswer8() {
  if (document.getElementById("input8").value == "translate") {
    score += 10;
    correct8.style.display = "block";
    correct_question[4]++;
  } else {
    wrong8.style.display = "block";
  }
  check_answer8.disabled = true;
}

function checkAnswer9() {
  if (document.getElementById("input9").value == "margin") {
    score += 10;
    correct9.style.display = "block";
    correct_question[3]++;
  } else {
    wrong9.style.display = "block";
  }
  check_answer6.disabled = true;
}

function checkAnswer10() {
  if (document.getElementById("input10").value == "padding") {
    score += 10;
    correct10.style.display = "block";
    correct_question[3]++;
  } else {
    wrong10.style.display = "block";
  }
  check_answer10.disabled = true;
}

function nextQuestion() {
  question++;
  switch (question) {
    case 1:
      reset_question();
      break;
    case 2:
      box1.style.display = "none";
      box2.style.opacity = 1;
      break;
    case 3:
      box2.style.display = "none";
      box3.style.opacity = 1;
      break;
    case 4:
      box3.style.display = "none";
      box4.style.opacity = 1;
      break;
    case 5:
      box4.style.display = "none";
      box5.style.opacity = 1;
      break;
    case 6:
      box5.style.display = "none";
      box6.style.opacity = 1;
      break;
    case 7:
      box6.style.display = "none";
      box7.style.opacity = 1;
      break;
    case 8:
      box7.style.display = "none";
      box8.style.opacity = 1;
      break;
    case 9:
      box8.style.display = "none";
      box9.style.opacity = 1;
      break;
    case 10:
      box9.style.display = "none";
      box10.style.opacity = 1;
      break;
    case 11:
      clearInterval(timer);
      showResult();
      box10.style.display = "none";
      box11.style.opacity = 1;
      break;
    case 12:
      question = 0;
      time = 0;
      score = 0;
      correct_question = [0, 0, 0, 0, 0];
      timer = setInterval(countTime, 1000);
      nextQuestion();
  }
}

function reset_question() {
  box1.style.display = "flex";
  box2.style.display = "flex";
  box3.style.display = "flex";
  box4.style.display = "flex";
  box5.style.display = "flex";
  box6.style.display = "flex";
  box7.style.display = "flex";
  box8.style.display = "flex";
  box9.style.display = "flex";
  box10.style.display = "flex";
  box11.style.display = "flex";
  box1.style.opacity = 1;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  box5.style.opacity = 0;
  box6.style.opacity = 0;
  box7.style.opacity = 0;
  box8.style.opacity = 0;
  box9.style.opacity = 0;
  box10.style.opacity = 0;
  box11.style.opacity = 0;
  correct1.style.display = "none";
  wrong1.style.display = "none";
  correct2.style.display = "none";
  wrong2.style.display = "none";
  correct3.style.display = "none";
  wrong3.style.display = "none";
  correct4.style.display = "none";
  wrong4.style.display = "none";
  correct5.style.display = "none";
  wrong5.style.display = "none";
  correct6.style.display = "none";
  wrong6.style.display = "none";
  correct7.style.display = "none";
  wrong7.style.display = "none";
  correct8.style.display = "none";
  wrong8.style.display = "none";
  correct9.style.display = "none";
  wrong9.style.display = "none";
  correct10.style.display = "none";
  wrong10.style.display = "none";
  check_answer1.disabled = false;
  check_answer2.disabled = false;
  check_answer3.disabled = false;
  check_answer4.disabled = false;
  check_answer5.disabled = false;
  check_answer6.disabled = false;
  check_answer7.disabled = false;
  check_answer8.disabled = false;
  check_answer9.disabled = false;
  check_answer10.disabled = false;
  document.getElementById("input6").value = "";
  document.getElementById("input7").value = "";
  document.getElementById("input8").value = "";
  document.getElementById("input9").value = "";
  document.getElementById("input10").value = "";
}
function showResult() {
  document.getElementById("r1").innerHTML = "本次測驗共花了" + time + "秒";
  document.getElementById("r2").innerHTML =
    "答對了" + score / 10 + "題，拿到" + score + "分";
  document.getElementById("r4").innerHTML =
    "選擇器: " +
    correct_question[0] +
    "/2<br>基本樣式: " +
    correct_question[1] +
    "/1<br>文字樣式: " +
    correct_question[2] +
    "/3<br>內距、外距: " +
    correct_question[3] +
    "/2<br>位移、旋轉、縮放、平移: " +
    correct_question[4] +
    "/2";
}

var time = 0;
function countTime() {
  time++;
}

var timer = setInterval(countTime, 1000);

var items = document.getElementById("items");
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var count = 0;

function callItems() {
  if (count % 2 == 0) {
    items.style.zIndex = 2;
    items.style.opacity = 1;
    item1.style.opacity = 1;
    item2.style.opacity = 1;
    item3.style.opacity = 1;
    item4.style.opacity = 1;
    item1.style.transitionDelay = 0.4 + "s";
    item2.style.transitionDelay = 0.8 + "s";
    item3.style.transitionDelay = 1.3 + "s";
    item4.style.transitionDelay = 1.8 + "s";
  } else {
    items.style.zIndex = -1;
    item1.style.opacity = 0;
    item2.style.opacity = 0;
    item3.style.opacity = 0;
    item4.style.opacity = 0;
    items.style.opacity = 0;
    item1.style.transitionDelay = 0 + "s";
    item2.style.transitionDelay = 0 + "s";
    item3.style.transitionDelay = 0 + "s";
    item4.style.transitionDelay = 0 + "s";
  }
  count++;
}
