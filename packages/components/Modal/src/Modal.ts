export const modalProps = {
  show: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: Boolean,
    default: false,
  },
  modalStyle: {
    type: Object,
    default: () => {
      return {}
    },
  },
  headerStyle: {
    type: Object,
    default: () => {
      return {}
    },
  },
  contentStyle: {
    type: Object,
    default: () => {
      return {}
    },
  },
  footerStyle: {
    type: Object,
    default: () => {
      return {}
    },
  },
  headColor: {
    type: String,
    default: '',
  },
  headText: {
    type: String,
    default: '',
  },
  headTextColor: {
    type: String,
    default: '',
  },
  contentText: {
    type: String,
    default: '',
  },
  contentTextColor: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    default: 'top',
  },
  actionBtn: {
    type: Boolean,
    default: false,
  },
  showHead: {
    type: Boolean,
    default: false,
  },
  confirmText: {
    type: String,
    default: '确定',
  },
  cancelText: {
    type: String,
    default: '取消',
  },
  animate: {
    type: String,
    default: 'fade',
  },
} as const
