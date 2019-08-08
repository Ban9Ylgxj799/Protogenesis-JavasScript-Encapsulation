//simple
var xhr = new XMLHttpRequest();
xhr.open('methods', url, async);
xhr.onreadystatechange = function() {
  //readyState == 4 说明请求已完成
  if(xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
}
if(method == 'POST') {
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
}
xhr.send()

//simple ajax
fucntion ajax(url, method, async, data, callBack, type) {
    method = method || "GEt";
    method = method.toUppercase();
    async = async || true;
    data = data || null;
    callBack = callBack || function() {
      alert('defalut');
    };
    type = type || "text";
    type = type.toUppercase();

    var xhr = false;
    if(window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      if(xhr.overrideMimeType) {
        if(type == "text") {
          xhr.overrideMimeType("text/plai");
        }else if (type == "xml") {
          xhr.overrideMimeType("text/xml");
        }
      }
    } else if (window.ActiveXObject) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
        }
      }
    }

    if(!xhr) {
      window.alert("can't new XMLHTTPRequest ");
      return false;
    }
    xhr.open(method, url, async);
    xhr.setRequestHeader("If-Modified-Since", "0");
    if(method == "POST") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(data);
    }else {
      xhr.send(null);
    }

    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        if(type == "xml") {
          return callBack(xhr.responseXML, xhr);
        }else if(type == "text") {
          return callBack(xhr.responseText, xhr);
        }
      }
    };
}

//same with jq
const $ = (function() {
  var name = 'jquery';
  return {
    ajax: function({
      type,
      url,
      data,
      isAsync,
      success
    }) {
      if(!url) {
        console.log('please enter request url')
        return;
      }
      var xhr = new XMLHttpRequest();

      //处理对象
      var query = [],
      queryData;
      for (var key in data) {
        //默认encodeURIComponent一下
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
      queryData = query.join('&');

      if(type == 'GET') {
        //get方式参数要跟在url上
        url = url + '?' + queryData
      }

      //默认使用GET，默认异步
      xhr.open(type || 'GET', url, isAsync || true);
      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr,status == 200) {
          //有传入success回调就执行
          success && success(xhr.responseText);
        }
      }
      if(type == 'POST') {
        //给指定的HTTP请求头赋值
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //数组组成字符串
        xhr.send()
      }
    }  
  }
})();

//类似jquery的使用方式
$.ajax({
  type: 'POST',
  url:'url',
  data: {
    name: 'data'
  },
  success: function(res) {
    console.log(res);
  }
})