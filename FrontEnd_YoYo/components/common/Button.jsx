import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { MainStyle } from "../../constants/style";

export default function Button({ color, children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={[
                    styles.buttonInnerContainer,
                    {
                        backgroundColor: color,
                        borderColor: color,
                    },
                ]}
                onPress={() => console.log("Pressed")}
                android_ripple={{ color: MainStyle.colors.white }}
            >
                <Text
                    style={{
                        color: MainStyle.colors.white,
                    }}
                >
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        width: 160,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderRadius: 24,
        borderWidth: 2,
    },
    normalText: {
        fontSize: MainStyle.fontSize.subTitle,
        fontWeight: "bold",
    },
});
