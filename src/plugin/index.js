// 添加实例方法，挂载到 vue.prototype 上

let plugins = {}
plugins.install = (Vue, options) => {
  // textarea 根据输入内容实现高度自适应
  Vue.prototype.$autoText = (event) => {
    let elem = event.target
    let height, minHeight
    let padding = 0
    let style = elem.style
    let getStyle = (name) => {
      return getComputedStyle(elem, null)[name]
    }
    if (elem._length === elem.value.length) return
    elem._length = elem.value.length
    padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'))
    minHeight = parseFloat(getStyle('height'))
    elem.style.height = minHeight + 'px'
    if (elem.scrollHeight > minHeight) {
      height = elem.scrollHeight - padding
      style.overflowY = 'hidden'
      style.height = height + 'px'
    }
  }
}

export default plugins
