// get cookie
function getCookie(name) {
  var str = document.cookie
  var arrStr = str.split(" ; ")
  for(var i = 0; i < arrStr.length; i++) {
    console.log(arrStr[i])
    var arr = arrStr[i].split(" = ")
    console.log(arr)
    if(arr[0] == name) {
      return arr[1]
    }
  }
}

// save cookie
function setCookie(name, val, time) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + time);
  document.cookie = name + "=" + val + ";expires=" + oDate;
}

// remove cookie
function removeCookie(name) {
  setCookie(name, "", -1);
}