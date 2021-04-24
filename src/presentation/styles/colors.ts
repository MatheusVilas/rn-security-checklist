export type Colors = {
  primary: string
  background: string
  content: string
  contentOnColor: string
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
    background: '#F2F2F2',
    content: '#000000',
    contentOnColor: '#ffffff',
    positive: '#69EF2F',
  },
  dark: {
    primary: '#FFA500',
    background: '#282828',
    content: '#000000',
    contentOnColor: '#ffffff',
    positive: '#69EF2F',
  },
}

export default colorsTheme
