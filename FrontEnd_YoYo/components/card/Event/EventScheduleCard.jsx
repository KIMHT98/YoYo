import { View, StyleSheet } from "react-native";
import React from "react";
import Card from "../Card";
import YoYoText from "../../../constants/YoYoText";

export default function EventScheduleCard({ event, onPress }) {
    return (
        <Card height={120} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.titleContainer}>
                        <YoYoText type="subTitle" bold>
                            {event.title}
                        </YoYoText>
                        <YoYoText type="md" bold>
                            {event.name}
                        </YoYoText>
                    </View>
                    <YoYoText type="content">{event.date}</YoYoText>
                </View>
                <YoYoText type="desc">{event.position}</YoYoText>
            </View>
        </Card>
    );
}
const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    container: {
        gap: 12,
    },
    titleContainer: {
        gap: 3,
    },
});
