import { cva } from 'class-variance-authority'
import { applyOpacity, getColorPalette } from './colors-map'
import { useMemo } from 'react'

const useVariantPicker = (colorVariant: string) => {
  const colorPallette = useMemo(() => getColorPalette(colorVariant), [colorVariant])
  console.log(colorPallette)
  const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold transition-all uppercase text-white disabled:opacity-30 disabled:pointer-events-none',
    {
      variants: {
        variant: {
          solid: `${colorPallette.backgroundColor} ${colorPallette.backgroundHover}`,
          outline: `border-[2px] ${colorPallette.border} ${colorPallette.textColor} ${applyOpacity(colorPallette.backgroundHover)}`,
          link: `${colorPallette.textColor} ${colorPallette.textHover}`,
        },
        size: {
          default: 'h-11 px-4 text-sm rounded-md',
        },
      },
      defaultVariants: {
        variant: 'solid',
        size: 'default',
      },
    },
  )

  return { buttonVariants }
}

export { useVariantPicker }

