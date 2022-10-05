var containerPxs = {
    width: document.getElementById("container").offsetWidth,
    height: document.getElementById("container").offsetHeight
}

var dragDivPxs = {
    width: document.getElementById("drag-div").offsetWidth,
    height: document.getElementById("drag-div").offsetHeight
}

// Credits to https://www.w3schools.com/howto/howto_js_draggable.asp
dragElement(document.getElementById("drag-div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("drag-item")) {
    document.getElementById("drag-item").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    var top = elmnt.offsetTop - pos2;
    var left = elmnt.offsetLeft - pos1;

    if (top >= (containerPxs.height - dragDivPxs.height)) top = containerPxs.height - dragDivPxs.height;
    if (top < 0) top = 0;
    if (left >= (containerPxs.width - dragDivPxs.width)) left = containerPxs.width - dragDivPxs.width;
    if (left < 0) left = 0;

    elmnt.style.top = top + "px";
    elmnt.style.left = left + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  // Posições default
  function setTopLeft(top, left) {
    var element = document.getElementById("drag-div");
    element.style.top = top + "px";
    element.style.left = left + "px";
  }

  setTopLeft(80, 100);
}