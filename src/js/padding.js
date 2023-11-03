var outer = document.getElementById("outer");
var margin_line = document.getElementById("margin_line");
var section = document.getElementById("section");
var padding_line = document.getElementById("padding_line");
var inner = document.getElementById("inner");
var margin_value = document.getElementById("margin_value");
var padding_value = document.getElementById("padding_value");
var input_padding;
var input_margin;
var width;
var height;

function changePadding() {
  input_padding = parseInt(document.getElementById("input_padding").value);
  inner.style.width = 550 - input_padding * 2 + "px";
  inner.style.height = 350 - input_padding * 2 + "px";
  padding_value.innerHTML = "padding為" + input_padding + "px";
  padding_line.style.width = input_padding + "px";
}
function changeMargin() {
  input_margin = parseInt(document.getElementById("input_margin").value);
  outer.style.height = 350 + input_margin * 2 + "px";
  outer.style.width = 550 + input_margin * 2 + "px";
  margin_value.innerHTML = "margin為" + input_margin + "px";
  margin_line.style.height = input_margin + "px";
}
function reset() {
  outer.style.width = 650 + "px";
  outer.style.height = 450 + "px";
  margin_value.innerHTML = "margin(預設50px)";
  margin_line.style.height = 50 + "px";

  inner.style.width = 390 + "px";
  inner.style.height = 190 + "px";
  padding_value.innerHTML = "padding(預設80px)";
  padding_line.style.width = 80 + "px";
  document.getElementById("input_padding").value = "";
  document.getElementById("input_margin").value = "";
}

////選單
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
