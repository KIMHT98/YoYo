import { View, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Container from '../../../components/common/Container'
import YoYoText from '../../../constants/YoYoText';
import { MainStyle } from '../../../constants/style';
import Next from '../../../components/common/Next';
import IconButton from '../../../components/common/IconButton';
import EventType from '../../../components/event/regist/EventType';
import Input from '../../../components/common/Input';

export default function EventRegist({ navigation }) {
  const [stage, setStage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  function clickNextButton() {
    if (stage < 3 && isActive)
      setStage(stage + 1);
    setIsActive(false)
  }
  function clickPrevButton() {
    if (stage === 0) {
      navigation.goBack();
    } else {
      setStage(stage - 1);
    }
  }
  useEffect(() => {
    if (stage === 1) {

      if (title.length > 0) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
  }, [title])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (<Next isActive={isActive} onPress={clickNextButton} final={stage === 2} />),
      headerLeft: () => (<IconButton icon="arrow-back-outline" size={24} onPress={clickPrevButton} />)


    })
  }, [navigation, stage, isActive])
  return (
    <Container>
      <View>
        <YoYoText type="subTitle" bold color={MainStyle.colors.main} >{stage === 0 ? "이벤트 유형" : stage === 1 ? "제목" : "상세 정보"}</YoYoText>
      </View>
      <View style={styles.container}>
        {stage === 0 && <EventType setIsActive={setIsActive} />}
        {stage === 1 && <Input placeholder="행사명을 입력해주세요." type="default" text={title} onChange={setTitle} />}
      </View>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 36
  }
})