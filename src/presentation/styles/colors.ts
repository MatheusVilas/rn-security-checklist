export type Colors = {
  primary: string
  secondary: string
  positive: string
  alert: string
  negative: string
  content: string
  contentDisabled: string
  contentOnColor: string
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundTertiary: string
  backgroundDisabled: string
  backgroundOnColor: string
  backgroundInverted: string
  line: string
}

export type AllColors = keyof Colors

interface ITheme {
  light: Colors
  dark: Colors
}

const colorsTheme: ITheme = {
  light: {
    primary: '#CD1F20',
    secondary: '#FAA61A',
    content: '#000000',
    contentOnColor: '#ffffff',
    contentDisabled: '#9E9E9E',
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#F4F4F4',
    backgroundDisabled: '#E0E0E0',
    line: '#E0E0E0',
    negative: '#E23647',
    positive: '#28A745',
    alert: '#FFC107',
    backgroundInverted: '#e8e8e8',
    backgroundOnColor: '#fff',
    backgroundTertiary: '#F4F4F4',
  },
  dark: {
    primary: '#CD1F20',
    secondary: '#FAA61A',
    content: '#FFFFFF',
    contentOnColor: '#FFFFFF',
    contentDisabled: '#9E9E9E',
    backgroundPrimary: '#000000',
    backgroundSecondary: '#1F1F1F',
    backgroundDisabled: '#E0E0E0',
    line: '#434343',
    negative: '#E23647',
    positive: '#28A745',
    alert: '#FFC107',
    backgroundInverted: '#4C4C4C',
    backgroundOnColor: '#fff',
    backgroundTertiary: '#313131',
  },
}

export default colorsTheme
