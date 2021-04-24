import { scaleFont } from './mixins'

// FONT FAMILY
export type FontFamilyType = {
  REGULAR: string
  BOLD: string
}

const FONT_REGULAR = 'regular'
const FONT_BOLD = 'bold'

export const fontFamily: FontFamilyType = {
  BOLD: FONT_BOLD,
  REGULAR: FONT_REGULAR,
}

// FONT SIZE
const FONT_SIZE_EXTRA_SMALL = scaleFont(12) as 12
const FONT_SIZE_SMALL = scaleFont(14) as 14
const FONT_SIZE_MEDIUM = scaleFont(16) as 16
const FONT_SIZE_LARGE = scaleFont(18) as 18
const FONT_SIZE_EXTRA_LARGE = scaleFont(32) as 32

export type FontSizeType = {
  EXTRA_SMALL: number
  SMALL: number
  MEDIUM: number
  LARGE: number
  EXTRA_LARGE: number
}

export const fontSizes: FontSizeType = {
  EXTRA_SMALL: FONT_SIZE_EXTRA_SMALL,
  SMALL: FONT_SIZE_SMALL,
  MEDIUM: FONT_SIZE_MEDIUM,
  LARGE: FONT_SIZE_LARGE,
  EXTRA_LARGE: FONT_SIZE_EXTRA_LARGE,
}
