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
