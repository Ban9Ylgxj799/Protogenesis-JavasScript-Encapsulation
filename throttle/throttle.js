
// 节流函数原理：规定在一个单位时间内，只能触发一次函数。如果单位时间内多次触发函数，只有一次生效
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay)
  }
}

// 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
// 缩放场景：监控浏览器resize
// 动画场景：避免短时间内多次触发动画引起性能问题