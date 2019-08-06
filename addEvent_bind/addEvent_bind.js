function addEvent(ele, type, handle) {
  if(ele.addEventListener) {
    ele.addEventListener(type, handle, false);
  }else if(ele.attachEvent) {
    ele['temp' + type + handle] = handle;
    ele[type + handle] = function() {
      ele['temp' + type +handle].call(ele);
    }
    ele.attachEvent('on' + type, ele[type + handle]);
  }else {
    ele['on + type'] = handle
  }
}