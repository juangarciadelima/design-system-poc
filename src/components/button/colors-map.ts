export const getColorPalette = (variant: string) =>
  new Map<
    string,
    {
      backgroundColor: string
      textColor: string
      textHover: string
      backgroundHover: string
      border: string
    }
  >([
    [
      'primary',
      {
        backgroundColor: 'bg-brand-600',
        textColor: 'text-brand-600',
        textHover: 'hover:text-brand-400',
        backgroundHover: 'hover:bg-brand-400',
        border: 'border-brand-600',
      },
    ],
    [
      'secondary',
      {
        backgroundColor: 'bg-baseblack',
        textColor: 'text-baseblack',
        textHover: 'hover:text-gray-200',
        backgroundHover: 'hover:bg-gray-100',
        border: 'border-baseblack hover:border-gray-200',
      },
    ],
  ]).get(variant) || {
    backgroundColor: 'bg-brand-700',
    textColor: 'brand-700',
    textHover: 'hover:text-brand-400',
    backgroundHover: 'brand-400',
    border: 'border-brand-600 hover:border-brand-400',
  }

export const applyOpacity = (backgroundHover: string) => {
  return backgroundHover + '/20'
}

