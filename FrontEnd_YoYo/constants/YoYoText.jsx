import { View, Text } from 'react-native'
import React from 'react'

export default function Fonty({ size, bold, align, color, children }) {
  let fontStyle = {
    fontSize: size,
    textAlign: align,
    color: color
  }
  if (bold) {
    fontStyle.fontWeight = 'bold'
  }

  return (
    <Text style={fontStyle}>{children}</Text>
  )
}