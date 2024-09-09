import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MainStyle } from "../../../constants/style";
import Button from "../../../components/common/Button";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // 로그인 버튼 클릭 시 처리할 로직
        console.log("로그인 버튼 클릭");
    };

    return (
        <View
            // 배경 이미지 경로
            style={styles.background}
        >
            <View style={styles.container}>
                {/* 상단 텍스트 */}
                <Text style={styles.logoText}>Yo! Yo!</Text>

                {/* 전화번호 입력 */}
                <TextInput
                    style={styles.input}
                    placeholder="전화번호를 입력해주세요Yo"
                    placeholderTextColo={MainStyle.colors.gray}
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType="phone-pad"
                />

                {/* 비밀번호 입력 */}
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력해주세요Yo"
                    placeholderTextColor={MainStyle.colors.gray}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                {/* 로그인 버튼 */}
                <Button color={MainStyle.colors.main}>로그인</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        backgroundColor: MainStyle.colors.hover,
    },
    container: {
        position: "absolute",
        top: 150,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    logoText: {
        fontSize: MainStyle.fontSize.logo,
        fontWeight: "bold",
        color: MainStyle.colors.main,
        marginBottom: 40,
    },
    input: {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: MainStyle.colors.main,
        marginBottom: 20,
        fontSize: MainStyle.fontSize.md,
        paddingLeft: 10,
    },
});
