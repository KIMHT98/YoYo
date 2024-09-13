import { View, StyleSheet } from 'react-native'
import React from 'react'
import Input from './../../../components/common/Input';
import Button from './../../../components/common/Button';
import YoYoText from '../../../constants/YoYoText';

export default function RegistAccountNumber({ number, setNumber, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input type="phoneNumber" text={number} onChange={setNumber} placeholder="계좌번호를 입력해주세요" />
      </View>
      <Button type={number.length > 10 ? "fill" : "inactive"} radius={30} width={80} onPress={onPress}><YoYoText type="md" bold>인증</YoYoText></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  inputContainer: {
    width: '80%'
  }
})
