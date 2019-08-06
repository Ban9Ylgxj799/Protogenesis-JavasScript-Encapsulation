Element.prototype.getElementOffset = function() {
  var objData = this.getBoundingClientRect();
  if(objData.width) {
    return {
      w: objData.width,
      h: objData.height
    }
  }else {
    return {
      w: objData.right - objData.left,
      h: objData.top - objData.bottom
    }
  }
}