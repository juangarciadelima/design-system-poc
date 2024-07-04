import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'AC Digital - Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://acdigital.com.br/media/eternal/venedor/default/Logo_300X75_1.png',
  brandTarget: '_self',

  //
  colorPrimary: '#971520',
  colorSecondary: '#971520',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#B2B4BD',
  appBorderRadius: 4,

  // Text colors
  textColor: '#26272D',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#26272D',
  barSelectedColor: '#971520',
  barHoverColor: '#DE4348',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#ffffff',
  inputTextColor: '#971520',
  inputBorderRadius: 2,
})

