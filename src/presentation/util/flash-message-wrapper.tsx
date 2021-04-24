import React from 'react'
import FlashMessage from 'react-native-flash-message'

const FlashMessageWrapper: React.FC = ({ children }) => (
  <>
    {children}
    <FlashMessage position="top" />
  </>
)

export default FlashMessageWrapper
