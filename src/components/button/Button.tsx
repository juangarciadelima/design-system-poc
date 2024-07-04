import { ButtonProps } from './types'
import '../../index.css'
import React from 'react'
import { mergeCSS } from '../../utils/merge-css'
import { useVariantPicker } from './variants'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, LeftIcon, RightIcon, children, color = 'primary', ...props }, ref) => {
    const { buttonVariants } = useVariantPicker(color)
    return (
      <>
        <button className={mergeCSS(buttonVariants({ className, variant, size }))} ref={ref} {...props}>
          {LeftIcon && <LeftIcon className="mr-3" />}
          {children}
          {RightIcon && <RightIcon className="mr-3" />}
        </button>
      </>
    )
  },
)

export default Button
