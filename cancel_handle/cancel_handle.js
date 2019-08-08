function cancelHandle(event) {
  if(event.preventDefault) {
    event.preventDefault();
  }else {
    event.returnValue = false;
  }
}