import React from "react";
import MainPageCard from "../../components/card/mainPage/MainPageCard";
import PayCard from "../../components/card/mainPage/PayCard";
import Container from "../../components/common/Container";
import { useNavigation } from "@react-navigation/native";
import YoYoText from "../../constants/YoYoText";
import { StyleSheet, View } from "react-native";

export default function MainPage() {
    const navigation = useNavigation();
    function clickPayCardHandler() {
        navigation.navigate("은행 선택")
    }
    function clickEventHandler() {
        navigation.navigate("EventList")
    }
    function cliclYoyoHandler() {
        navigation.navigate("GiveAndTake")
    }
    return (
        <Container>
            <View style={styles.header}>
                <YoYoText type="mainTitle" bold>YoYo</YoYoText>
            </View>
            <PayCard name="김현태" money={1000000} onPress={clickPayCardHandler} />
            <MainPageCard title={"Event"} subTitle={"경조사를 추가하Go" + "\n" + "경조사비를 관리해Yo!"} type="event" onPress={clickEventHandler} />
            <MainPageCard title={"Yo! Yo!"} subTitle={"주변인들과의" + "\n" + "경조사비 현황을 확인해Yo!"} type="yoyo" onPress={cliclYoyoHandler} />
        </Container >
    );
}
const styles = StyleSheet.create({
    header: {
        marginVertical: 24
    }
})
