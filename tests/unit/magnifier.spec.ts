import { shallowMount, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import DfMagnifier from '~/components/Magnifier/index'

describe('Modal.vue', () => {
  it('[DF-Magnifier] renders props when passed', () => {
    const imgWidth = '300'

    const myWarpper = mount(DfMagnifier, {
      props: {
        imgWidth,
      },
    })

    // const wrapper = shallowMount(DfMagnifier, {
    //   props: { confirmText, modalStyle },
    // })

    // expect(myWarpper.text()).toMatch(imgWidth)
  })
})
