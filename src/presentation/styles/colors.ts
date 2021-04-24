export type Colors = {
  primary: string
  secondary: string
  background: string
  content: string
  contentOnColor: string
  contentOnColorOpacity: string
  positive: string
}

export type AllColors = keyof Colors

interface ITheme {
  light: Colors
  dark: Colors
}

const colorsTheme: ITheme = {
  light: {
    primary: '#FFA500',
    secondary: '#282828',
    background: '#F2F2F2',
    content: '#000000',
    contentOnColor: '#000000',
    contentOnColorOpacity: 'rgba(0,0,0,.1)',
    positive: '#69EF2F',
  },
  dark: {
    primary: '#FFA500',
    secondary: '#282828',
    background: '#282828',
    content: '#000000',
    contentOnColor: '#ffffff',
    contentOnColorOpacity: 'rgba(255,255,255,.1)',
    positive: '#69EF2F',
  },
}

export default colorsTheme
