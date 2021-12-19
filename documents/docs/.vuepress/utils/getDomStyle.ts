/**
 * 获取Dom属性值
 * @param el
 * @param prop
 * @returns
 */
export function getDomStyle(el: any, prop: any) {
  return parseInt(window.getComputedStyle(el, null)[prop])
}
