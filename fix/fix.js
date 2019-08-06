function fixed(ele) {
  var w = parseInt(getStyle(ele, 'left')),
      h = parseInt(getStyle(ele, 'top'));
  addEvnt(ele, 'scroll', function() {
    ele.style.left = w + getScrollOffset().w + 'px';
    ele.style.top = h + getScrollOffset().h + 'px'
  })
}