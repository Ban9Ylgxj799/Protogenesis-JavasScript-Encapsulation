function getStyle(ele, prop) {
  if(window.getComputedStyle) {
    return window.getComputedStyle(ele, null)[props];
  }else {
    return ele.currentStyle[prop];
  }
}