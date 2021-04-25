import { showMessage } from 'react-native-flash-message'
import useActiveTheme from './use-active-theme'

export default function useShowMessage() {
  const theme = useActiveTheme()

  function successMessage(message: string, title: string = 'Sucesso!') {
    showMessage({
      description: message,
      message: title,
      backgroundColor: theme.positive,
      color: theme.contentOnColor,
      type: 'success',
    })
  }

  function erroMessage(message: string, title: string = 'Ops...') {
    showMessage({
      description: message,
      message: title,
      backgroundColor: theme.primary,
      color: theme.contentOnColor,
      type: 'warning',
    })
  }

  return [successMessage, erroMessage]
}
