function stopBubble(event) {
  if(event.stopPropagation) {
    event.stopPropagation();
  }else {
    event.cancelBubble = true;
  }
}
function get() {
  return 
}
//阻止事件冒泡