function getViewProtOffset() {
  if(window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }else if(document.compatMode = "BackCompat") {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }else {
    return {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight
    }
  }
}