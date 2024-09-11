import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Container from './../../../components/common/Container';
import YoYoText from '../../../constants/YoYoText';
import { MainStyle } from '../../../constants/style';
import SearchBar from './../../../components/common/SearchBar';
import Tag from './../../../components/common/Tag';
const event = {
  eventId: 1,
  totalReceiver: 5,
  totalReceivedAmount: 1000000,
  eventTitle: "이벤트1",
  transactions: [
    {
      id: 1,
      name: "이찬진",
      tag: "friend",
      memo: "고등학교 친구",
      date: "2024.09.11",
      amount: 50000
    },
    {
      id: 2,
      name: "이찬진",
      tag: "friend",
      memo: "고등학교 친구",
      date: "2024.09.11",
      amount: 50000
    },
    {
      id: 3,
      name: "이찬진",
      tag: "friend",
      memo: "고등학교 친구",
      date: "2024.09.11",
      amount: 50000
    },
    {
      id: 4,
      name: "이찬진",
      tag: "friend",
      memo: "고등학교 친구",
      date: "2024.09.11",
      amount: 50000
    },
    {
      id: 5,
      name: "이찬진",
      tag: "friend",
      memo: "고등학교 친구",
      date: "2024.09.11",
      amount: 50000
    },
  ]
}
const tag = [{
  type: "all",
  name: "전체"
}, {
  type: "family",
  name: "가족"
}, {
  type: "friend",
  name: "친구"
}
  , {
  type: "company",
  name: "직장"
}, {
  type: "etc",
  name: "기타"
}]
export default function EventDetail({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: event.eventTitle
    })
  })
  return (
    <Container>
      <View style={styles.rowContainer}>
        <YoYoText type="subTitle" bold color={MainStyle.colors.main}>{event.totalReceiver}</YoYoText>
        <YoYoText type="md">명의 분들이</YoYoText>
      </View>
      <View style={styles.rowContainer}>
        <YoYoText type="subTitle" bold color={MainStyle.colors.main}>{event.totalReceivedAmount}</YoYoText>
        <YoYoText type="md">원의 마음을 전해주었어요.</YoYoText>
      </View>
      <SearchBar placeholder="이름을 입력해주세요." />
      <View style={styles.rowContainer}>
        {tag.map((item) => <Tag type={item.type} width={64} key={item.type}>{item.name}</Tag>)}
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  }
})