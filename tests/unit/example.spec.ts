import { shallowMount, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { DfModal } from '~/index'

describe('Modal.vue', () => {
  it('[DF] renders props.confirmText when passed', () => {
    const confirmText = '不说'
    const modalStyle = {
      width: '300',
    }
    const myWarpper = mount(DfModal, {
      props: {
        confirmText,
        modalStyle,
        confirm: () => {},
      },
    })

    const wrapper = shallowMount(DfModal, {
      props: { confirmText, modalStyle },
    })
    expect(myWarpper.text()).toMatch(confirmText)
  })
})
