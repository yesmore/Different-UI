// import { getDomStyle } from '~/utils/getDomStyle'

function getDomStyle(el: any, prop: any) {
  return parseInt(window.getComputedStyle(el, null)[prop])
}

export default {
  mounted(el: {
    querySelector: any
    addEventListener: any
    offsetLeft: number
    offsetTop: number
    offsetParent: {
      offsetLeft: number
      offsetTop: number
      offsetWidth: number
    }
  }) {
    const oImgWrap = el

    const oMagWrap = oImgWrap.querySelector('.df-mag-point-wrapper') // 放大镜
    const oMagImg = oMagWrap.querySelector('.df-mag-img') // 放大镜里的图片

    const imgWidth = getDomStyle(oImgWrap, 'width')
    const imgHeight = getDomStyle(oImgWrap, 'height')

    const magWidth = getDomStyle(oMagWrap, 'width')
    const magHeight = getDomStyle(oMagWrap, 'height')

    // 图片容器到浏览器左上距离
    const imgX = oImgWrap.offsetParent.offsetLeft + oImgWrap.offsetLeft
    const imgY = oImgWrap.offsetParent.offsetTop + oImgWrap.offsetTop + 1
    // const imgX = oImgWrap.offsetLeft
    // const imgY = oImgWrap.offsetTop

    const init = () => {
      bindEvent()
    }

    function bindEvent() {
      oImgWrap.addEventListener(
        'mouseover',
        function (e: MouseEvent) {
          oMagWrap.className += ' df-mag-show'
          showMag(getXY(e).x, getXY(e).y)

          document.addEventListener('mousemove', handleMouseMove, false)
        },
        false,
      )

      oImgWrap.addEventListener('mouseout', handleMouseOut, false)
    }

    function handleMouseMove(e: MouseEvent) {
      const { x, y, mouseX, mouseY } = getXY(e)
      showMag(x, y, mouseX, mouseY)
      // console.log('监听鼠标移动：', getXY(e))
      // console.log('监听鼠标移动(imgX,imgY)：', imgX, imgY)
    }

    function handleMouseOut() {
      oMagWrap.className = 'df-mag-point-wrapper df-shadow-light'
      document.removeEventListener('mousemove', handleMouseMove, false)
      // console.log(oMagWrap.classList)
    }

    function showMag(x: number, y: number, mouseX?: number, mouseY?: number) {
      oMagWrap.style.left = x + 'px'
      oMagWrap.style.top = y + 'px'

      oMagImg.style.left = -x + 'px'
      oMagImg.style.top = -y + 'px'

      if (
        mouseX &&
        mouseY &&
        (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight)
      ) {
        oMagWrap.className = 'df-mag-point-wrapper df-shadow-light'
        document.removeEventListener('mousemove', handleMouseMove, false)
      }
    }

    function getXY(e: MouseEvent) {
      return {
        x: e.pageX - imgX - magWidth / 2, // 当前鼠标位置（以原图左上角为原点）
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX, // 鼠标距原图边框位置
        mouseY: e.pageY - imgY,
      }
    }

    init()
  },
}
