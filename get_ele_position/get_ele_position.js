Element.prototype.getElementPosition = function() {
  var x = 0,
      y = 0,
      ele = this;
  while(ele != document.body) {
    x += ele.scrollLeft;
    y += ele.scrollTop;
    ele = ele.offsetParent;
  }
  return {
    x: x,
    y: y
  }
}