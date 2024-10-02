import { View, StyleSheet } from "react-native";
import React from "react";
import Card from "../card/Card";
import YoYoText from "../../constants/YoYoText";
import Tag from "../common/Tag";
import Button from "../common/Button";

const tagTranslate = {
    ALL: "전체",
    FRIEND: "친구",
    FAMILY: "가족",
    COMPANY: "직장",
    OTHERS: "기타",
};

export default function ScheduleCard({ item, onPress }) {
    return (
        <Card>
            <View style={styles.firstContainer}>
                <YoYoText bold>
                    {item.name}님의 {item.title}
                </YoYoText>
                <YoYoText>{item.date}</YoYoText>
            </View>
            <View style={styles.secondContainer}>
                <YoYoText bold>{item.description}</YoYoText>
            </View>
            <View style={styles.thirdContainer}>
                <View>
                    <Tag type={tagTranslateToLowerCase[item.tag]} width={88}>
                        {tagTranslate[item.tag]}
                    </Tag>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Button
                            type={"normal"}
                            width={88}
                            radius={24}
                            onPress={() => onPress(item.notificationId, "true")}
                        >
                            <YoYoText bold>등록</YoYoText>
                        </Button>
                    </View>

                    <Button
                        type={"normal"}
                        width={88}
                        radius={24}
                        onPress={() => onPress(item.notificationId, "false")}
                    >
                        <YoYoText bold>미등록</YoYoText>
                    </Button>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    firstContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    secondContainer: {
        marginVertical: 4,
    },
    thirdContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
        alignItems: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
        columnGap: 10,
    },
    buttonContainer: {
        borderRadius: 18,
    },
});
