function asyncLoaded(url, cb) {
  var oScript = document.createElement('script');

  if(oScript.readyState) {
    oScript.onreadystatechange = function() {
      if(oScript.readyState == 'load' || oScript.readyState == 'completed') {
        cb();
      }
    }
  }else {
    oScript.onload = function() {
      cb();
    }
  }

  oScript.src = url;
  document.body.appendChild(oScript);
}