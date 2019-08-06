function getScrollOffset() {
  if(window.pageXOffset) {
    return {
      w: window.pageXOffset,
      h: window.pageYOffset
    }
  }else {
    return {
      w: document.body.scrollLeft + document.documentElement.scrollLeft,
      h: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}