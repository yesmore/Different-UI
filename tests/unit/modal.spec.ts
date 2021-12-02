import { shallowMount, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import DfModal from '~/components/Modal/index'

describe('Modal.vue', () => {
  it('[DF-Modal] renders props when passed', () => {
    const confirmText = 'testText'
    const modalStyle = {
      width: '300',
    }
    const myWarpper = mount(DfModal, {
      props: {
        // modalProps,
        confirmText,
        modalStyle,
        confirm: () => {},
      },
    })

    const wrapper = shallowMount(DfModal, {
      props: { confirmText, modalStyle },
    })

    expect(myWarpper.text()).toMatch(confirmText)
    // expect(myWarpper.text()).toBe(modalStyle)
  })
})
