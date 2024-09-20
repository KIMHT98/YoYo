import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "../Card";
import YoYoText from "../../../constants/YoYoText";
import Tag from "../../common/Tag";
import MoneyGauge from "./MoneyGauge";
import { CheckBox } from "../../common/CheckBox";

export default function YoYoCard({ item, type, onPress, selectedCard }) {
    return (
        <Card height={144} onPress={onPress}>
            <View style={styles.innerContainer}>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "flex-end",
                            gap: 8,
                        }}
                    >
                        <YoYoText type="subTitle" bold>
                            김현태
                        </YoYoText>
                        {type === "select" && (
                            <CheckBox checked={item.id === selectedCard} />
                        )}
                    </View>
                    <YoYoText type="content">고등학교 친구</YoYoText>
                </View>
                <Tag type="friend" width={88}>
                    친구
                </Tag>
            </View>
            <MoneyGauge give={20000} take={12000} />
        </Card>
    );
}
const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "flex-start",
    },
});
