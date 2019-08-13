// 防抖函数原理：在事件被触发n秒后，如果在这n秒内重新触发，则重新计时

const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}

// 按钮提交场景：防止多次提交按钮，只执行左后一次提交
// 服务器端验证场景：表单验证余姚服务器端配合，只执行一段连续的输入事件的最后一次
// 类似生存环境请用loadsh.debounce