import { View, StyleSheet } from 'react-native'
import React from 'react'
import YoYoText from '../../../constants/YoYoText'
import { MainStyle } from '../../../constants/style'
import Detail from '../../../assets/svg/계좌인증예시.svg'
export default function RegistAuthNumber() {
  return (
    <View style={styles.container}>
      <YoYoText type="md" bold center>1원을 보냈습니다.</YoYoText>
      <YoYoText type="desc" bold center color={MainStyle.colors.lightGray}>입금내역에 표시된 숫자 4자리를 입력해주세요.</YoYoText>
      <Detail />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    alignItems: 'center',
    gap: 16
  }
})