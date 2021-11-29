export const magnifierProps = {
  imgWidth: {
    type: Number || String,
    default: 375,
  },
  imgHeight: {
    type: Number || String,
    default: 400,
  },
  magWidth: {
    type: Number || String,
    default: 150,
  },
  magHeight: {
    type: Number || String,
    default: 150,
  },
  magRadius: {
    type: String,
    default: '50%',
  },
  blank: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
  },
  imgAlt: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
} as const
