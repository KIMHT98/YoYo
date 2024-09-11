import { View, StyleSheet, Pressable, FlatList } from "react-native";
import React from "react";
import Container from "../../../components/common/Container";
import YoYoCard from "../../../components/card/Yoyo/YoYoCard";
import SearchBar from "../../../components/common/SearchBar";
import Tag from "../../../components/common/Tag";
import YoYoText from "../../../constants/YoYoText";
import { MainStyle } from "../../../constants/style";
import Button from "../../../components/common/Button";
import { useNavigation } from "@react-navigation/native";

export default function GiveAndTakeList() {
    const navigation = useNavigation();
    const margin = 2;

    const DATA = [
        {
            id: "1",
            title: "First Item",
        },
        {
            id: "2",
            title: "Second Item",
        },
    ];

    const clickNextHandler = () => {
        navigation.navigate("GiveAndTakeRegist");
    };

    const tagHandler = () => {
        console.log("click tag");
    };
    return (
        <>
            <Container>
                <View style={styles.innerContainer}>
                    <SearchBar placeholder={"이름을 검색해 주세요."} />
                </View>
                <View style={styles.tagContainer}>
                    <Pressable onPress={tagHandler}>
                        <Tag type="all" width={64}>
                            <YoYoText bold>전체</YoYoText>
                        </Tag>
                    </Pressable>
                    <Pressable onPress={tagHandler}>
                        <Tag type="family" width={64}>
                            <YoYoText bold>가족</YoYoText>
                        </Tag>
                    </Pressable>
                    <Pressable onPress={tagHandler}>
                        <Tag type="friend" width={64}>
                            <YoYoText bold>친구</YoYoText>
                        </Tag>
                    </Pressable>
                    <Pressable onPress={tagHandler}>
                        <Tag type="company" width={64}>
                            <YoYoText bold>직장</YoYoText>
                        </Tag>
                    </Pressable>
                    <Pressable onPress={tagHandler}>
                        <Tag type="etc" width={64}>
                            <YoYoText bold>기타</YoYoText>
                        </Tag>
                    </Pressable>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({}) => <YoYoCard />}
                    style={styles.innerContainer}
                ></FlatList>
            </Container>
            <Button type={"fill"} onPress={clickNextHandler}>
                <YoYoText bold>거래내역 추가하기</YoYoText>
            </Button>
        </>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        marginBottom: 16,
    },
    tagContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    iconContainer: {
        alignItems: "center",
    },
});
