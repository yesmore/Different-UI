import {
  defineComponent,
  computed,
  inject,
  h,
  renderSlot,
  defineProps,
} from 'vue'
// import { buildProps, definePropType, mutable } from '@dfement-plus/utils/props'
import type { ExtractPropTypes, CSSProperties } from 'vue'

type SizeObject = {
  span?: number
  offset?: number
}
type Size = number | SizeObject

export const colProps = {
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
  xs: {
    type: Number || Object,
    default: {},
  },
  sm: {
    type: Number || Object,
    default: {},
  },
  md: {
    type: Number || Object,
    default: {},
  },
  lg: {
    type: Number || Object,
    default: {},
  },
  xl: {
    type: Number || Object,
    default: {},
  },
} as const
export type ColProps = ExtractPropTypes<typeof colProps>

export default defineComponent({
  name: 'DfCol',
  props: colProps,

  setup(props, { slots }) {
    const { gutter } = inject('DfRow', { gutter: { value: 0 } })

    const style = computed<CSSProperties>(() => {
      if (gutter.value) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`,
        }
      }
      return {}
    })

    const classList = computed(() => {
      const classes: string[] = []

      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach((prop) => {
        const size = props[prop]
        if (typeof size === 'number') {
          if (prop === 'span') classes.push(`df-col-${props[prop]}`)
          else if (size > 0) classes.push(`df-col-${prop}-${props[prop]}`)
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach((size) => {
        if (typeof props[size] === 'number') {
          classes.push(`df-col-${size}-${props[size]}`)
        } else if (typeof props[size] === 'object') {
          const sizeProps = props[size]
          Object.keys(sizeProps).forEach((prop) => {
            classes.push(
              prop !== 'span'
                ? `df-col-${size}-${prop}-${(sizeProps as any)[prop]}`
                : `df-col-${size}-${(sizeProps as any)[prop]}`,
            )
          })
        }
      })
      // this is for the fix
      if (gutter.value) {
        classes.push('is-guttered')
      }

      return classes
    })

    return () =>
      h(
        props.tag,
        {
          class: ['df-col', classList.value],
          style: style.value,
        },
        [renderSlot(slots, 'default')],
      )
  },
})
