import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import React from "react";
import Header from "../../../components/header/Header";
import YoYoText from "../../../constants/YoYoText";
import IconButton from "../../../components/common/IconButton";
import { MainStyle } from "../../../constants/style";
import { useNavigation } from "@react-navigation/native";

export default function SettingList() {
    const navigation = useNavigation();
    const settingList = [
        { id: "1", title: "계좌관리" },
        { id: "2", title: "개인정보 처리방침" },
        { id: "3", title: "로그인" },
        { id: "4", title: "로그아웃" },
    ];

    const navigationList = {
        1: () => navigation.navigate("ManageAccount"), // 예시로 콘솔 로그
        2: () => navigation.navigate("Private"), // 실제 네비게이션 이동
        3: () => navigation.navigate("Login"), // 로그아웃을 처리할 함수
        4: () => console.log("로그아웃 진행"),
    };

    function clickItem(item) {
        const action = navigationList[item.id]; // id에 해당하는 액션을 찾아서 실행
        if (action) {
            action(); // 해당 액션이 존재하면 실행
        }
    }

    function renderItem({ item }) {
        return (
            <Pressable style={styles.item} onPress={() => clickItem(item)}>
                <YoYoText type={"subTitle"}>{item.title}</YoYoText>
                <IconButton icon={"chevron-forward"} size={24} />
            </Pressable>
        );
    }
    return (
        <>
            <View style={styles.container}>
                <Header />
                <YoYoText type={"title"} bold>
                    이찬진님, 반갑습니다.
                </YoYoText>
            </View>
            <View>
                <FlatList
                    data={settingList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    separator: {
        height: 1,
        backgroundColor: MainStyle.colors.main,
    },
});
