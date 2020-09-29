function stopBubble(event) {
  if(event.stopPropagation) {
    event.stopPropagation();
  }else {
    event.cancelBubble = true;
  }
}

//阻止事件冒泡