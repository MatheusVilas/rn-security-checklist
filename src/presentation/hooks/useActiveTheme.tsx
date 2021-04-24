import { useContext } from 'react'
import { ThemeContext } from '../util/theme-context'

export default function useActiveTheme() {
  const theme = useContext(ThemeContext)

  return theme
}
