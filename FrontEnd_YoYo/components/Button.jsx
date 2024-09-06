import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { MainStyle } from "../constants/style";

export default function Button({ color, children }) {
    // 버튼의 상태를 true/false로 관리
    const [isPressed, setIsPressed] = useState(false);

    // 버튼 클릭 시 상태를 반전
    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    /*
  isPressed = false  ----> 배경색은 흰색이고, 테두리는 main 색상
  isPressed = true ----> 배경색은 부모에게서 전달받은 색상이고 테두리는 배경색
  */
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={[
                    styles.buttonInnerContainer,
                    {
                        backgroundColor: isPressed
                            ? color
                            : MainStyle.colors.white,
                        borderColor: isPressed ? color : MainStyle.colors.main,
                    },
                ]}
                onPress={handlePress}
            >
                <Text
                    style={{
                        color: isPressed
                            ? MainStyle.colors.white
                            : MainStyle.colors.main,
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
        borderRadius: 16,
        borderWidth: 2,
    },
    normalText: {
        fontSize: MainStyle.fontSize.subTitle,
        fontWeight: "bold",
    },
});
