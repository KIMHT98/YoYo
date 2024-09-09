import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { MainStyle } from "../constants/style";
import Funeral from "../assets/svg/image4.svg";

export default function MainPageCard({ yoyoTitle, yoyoSubTitle }) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <View>
                        <Text>{yoyoTitle}</Text>
                    </View>
                    <View>
                        <Text>{yoyoSubTitle}</Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Funeral />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        padding: 24,
    },
    container: {
        flexDirection: "row",
        borderRadius: 16,
        borderWidth: 2,
        borderColor: MainStyle.colors.main,
        height: 135,
        paddingLeft: 12,
        paddingRight: 4,
        paddingVertical: 12,
    },
    textContainer: {
        flexDirection: "column",
        flex: 1,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});
