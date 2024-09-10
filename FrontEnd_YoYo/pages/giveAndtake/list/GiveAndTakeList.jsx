import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Pressable,
} from "react-native";
import React from "react";
import Container from "../../../components/common/Container";
import YoYoCard from "../../../components/card/Yoyo/YoYoCard";
import YoYoCardDetail from "../../../components/card/Yoyo/YoYoCardDetail";
import SearchBar from "../../../components/common/SearchBar";
import Tag from "../../../components/common/Tag";
import YoYoText from "../../../constants/YoYoText";
import IconButton from "../../../components/common/IconButton";
import { MainStyle } from "../../../constants/style";
import Button from "../../../components/common/Button";
import { useNavigation } from "@react-navigation/native";

export default function GiveAndTakeList() {
    const navigation = useNavigation();

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
                <SafeAreaView style={styles.innerContainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Pressable onPress={tagHandler}>
                            <Tag type="all" margin={5}>
                                <YoYoText bold>전체</YoYoText>
                            </Tag>
                        </Pressable>
                        <Pressable onPress={tagHandler}>
                            <Tag type="family" margin={5}>
                                <YoYoText bold>가족</YoYoText>
                            </Tag>
                        </Pressable>
                        <Pressable onPress={tagHandler}>
                            <Tag type="friend" margin={5}>
                                <YoYoText bold>친구</YoYoText>
                            </Tag>
                        </Pressable>
                        <Pressable onPress={tagHandler}>
                            <Tag type="company" margin={5}>
                                <YoYoText bold>직장</YoYoText>
                            </Tag>
                        </Pressable>
                        <Pressable onPress={tagHandler}>
                            <Tag type="etc" margin={5}>
                                <YoYoText bold>기타</YoYoText>
                            </Tag>
                        </Pressable>
                    </ScrollView>
                </SafeAreaView>
                <ScrollView style={styles.innerContainer}>
                    <YoYoCard />
                    <YoYoCard />
                </ScrollView>
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
    iconContainer: {
        alignItems: "center",
    },
});
