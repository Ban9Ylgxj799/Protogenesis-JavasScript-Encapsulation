function drag(ele) {
  var disX, disY;
  addEvent(ele, 'mousedown', function(e) {
    var event = e || window.event;
    disX = event.clientX - getStyle(ele, 'left');
    disY = event.clientY - getStyle(ele, 'top');
    addEvent(ele, 'mousemove', mouseMove);
    addEvent(ele, 'mouseup', mouseUp);
    stopBubble(event);
    cancelHandle(event);
  });
  function mouseMove(event) {
    ele.style.left = event.clientX - disX;
    ele.style.top = event.clientY - disY;
  }
  function mouseUp(event) {
    removeEvent(ele, 'mousemove', mouseMove);
    removeEvent(ele, 'mouseup', mouseUp);
  }
}