function removeEvent(ele, type, handle) {
  if(ele.removeEventListener) {
    ele.removeEventListener(type, handle, false);
  }else if(ele.detachEvent) {
    ele.detachEvent('on' + type, handle);
  }else {
    ele['on' + type] = null;
  }
}