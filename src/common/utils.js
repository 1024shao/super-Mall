// 防抖
export function debounce(func, delay) {
  let timer = null
  return function () {
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
      func.apply(this)
    }, delay);
  }
}