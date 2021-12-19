import { createVNode, render, VNodeProps, VNode } from 'vue'
import { IMessageParams } from './Message.types'
import MessageComponent from './DfMessage.vue'
import randomKey from '../../utils/util-randomKey'

const instance: VNode[] = [] // pool of messagebox

const Message = (options: IMessageParams) => {
  if (typeof options === 'string') {
    // string -> object
    options = {
      message: options,
    }
  }

  // 重复偏移量
  let offset = options.offset || 20
  instance.forEach((v) => {
    offset += v.el!.offsetHeight + 20
  })

  const userClose = options.onClose
  const opts = {
    ...options,
    offset,
    id: randomKey(),
    onClose: () => {
      userClose?.() // 存在，则调用
    },
  }

  // 动态创建组件: createVNode -> render()
  // TODO1: 创建虚拟节点
  const vm = createVNode(MessageComponent, opts as VNodeProps)
  vm.props!.onDestroy = () => {
    // TODO4: 移除已隐藏的message dom (vue3.x)
    render(null, container)
    // TODO5: 移除时 instance出栈，以重置 offsetHeight
    instance.forEach((v, index) => {
      v.props!.id === opts.id ? delete instance[index] : null
    })
  }
  // TODO2: 挂载容器
  const container = document.createElement('div')
  render(vm, container)
  // TODO3: 渲染到 body
  document.body.appendChild(container.firstElementChild!)

  instance.push(vm)
}

export default Message
