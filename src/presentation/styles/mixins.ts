import { Dimensions, PixelRatio } from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width
const guidelineBaseWidth = 375

export const scaleSize = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale()

export const percentage = (num: number, per: number): number =>
  (num / 100) * per
