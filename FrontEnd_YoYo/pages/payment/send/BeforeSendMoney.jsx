import { View, Text } from 'react-native'
import React, { useState } from 'react'
// navigation.navigate("돈보내기전로딩페이지", {
//   data: {
//       title: "마음 전달",
//       item: {
//           memberId: item.oppositeId,
//           memberName: data.name,
//           eventId: item.eventId,
//           title: item.title,
//       },
//   }
// });
export default function BeforeSendMoney() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <View>
      <Text>BeforeSendMoney</Text>
    </View>
  )
}