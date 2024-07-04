import { VariantProps } from 'class-variance-authority'
import { useVariantPicker } from './variants'
import { IconProps } from '../icons'

// eslint-disable-next-line react-hooks/rules-of-hooks
const { buttonVariants } = useVariantPicker('')

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    LeftIcon?: React.FC<IconProps>
    RightIcon?: React.FC<IconProps>
    children?: React.ReactNode
    color?: string
  }

