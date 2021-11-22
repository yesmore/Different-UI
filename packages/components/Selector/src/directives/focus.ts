export default {
  mounted(el: any) {
    const oSelectorInput = el.querySelector('.df-selector-input-bar')
    const oSelectorMenu = el.querySelector('.df-selector-menu')

    const oInput = oSelectorInput.querySelector('.df-selector-input')
    const oPlaceHolder = oSelectorInput.querySelector('label') // placeholder
    const oIcon = oSelectorInput.querySelector('i') // 图标字体

    oInput.addEventListener(
      'focus',
      function () {
        oPlaceHolder.style.display = 'none'
        oIcon.className = 'iconfont icon-searchsousuo'
        if (oInput.value.length > 0) {
          oIcon.className = 'iconfont icon-quxiao1'
        }

        // 延迟显示，解决无法选中item
        setTimeout(() => {
          oSelectorMenu.style.display = 'block'
        }, 100)
      },
      false,
    )

    oInput.addEventListener(
      'blur',
      function () {
        oIcon.className = 'iconfont icon-arrowdownxiajiantou'
        if (oInput.value.length > 0) {
          oIcon.className = 'iconfont icon-quxiao1'
        }
        // 延迟显示，解决无法选中item
        setTimeout(function () {
          oSelectorMenu.style.display = 'none'

          if (oInput.value.length === 0) {
            oPlaceHolder.style.display = 'block'
          }
        }, 100)
      },
      false,
    )

    oInput.addEventListener('input', function () {
      if (oInput.value.length > 0) {
        oIcon.className = 'iconfont icon-quxiao1'
      } else {
        oIcon.className = 'iconfont icon-searchsousuo'
      }
    })
  },
}
