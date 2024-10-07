import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Loading() {
    return (
        <LottieView
            style={styles.iconContainer}
            source={require("../../assets/loadingIcon.json")}
            autoPlay
            loop
        />
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        justifyContent: "center",
    },
});
