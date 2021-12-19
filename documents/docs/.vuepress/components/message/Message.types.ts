export type Itype = 'success' | 'warning' | 'info' | 'error'
export type IIcon = 'success' | 'warning' | 'info' | 'error'
export type IAnimation = 'df-fade-in' | 'df-list'

export interface IMessageOptions {
  id?: string // id标识
  message?: string
  type?: Itype
  duration?: number
  center?: boolean
  offset?: number
  animation?: IAnimation
  icon?: IIcon
  onClose?: () => void
}

export type IMessageParams = IMessageOptions | string
