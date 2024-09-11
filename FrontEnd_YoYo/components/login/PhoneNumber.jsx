import { View, StyleSheet } from "react-native";
import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import YoYoText from "../../constants/YoYoText";
import { useEffect, useState } from "react";

export default function PhoneNumber({ setIsActive }) {
    // 전화번호
    const [phoneNumber, setPhoneNumber] = useState("");
    const [authNumber, setAuthNumber] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (
            phoneNumber.length > 0 &&
            authNumber.length > 0 &&
            isComplete === true
        ) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [phoneNumber, authNumber, isComplete]);

    const clickAuthHandler = () => {
        setIsComplete(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.outerContainer}>
                <View style={styles.textContainer}>
                    <Input
                        type="phoneNumber"
                        onChange={setPhoneNumber}
                        placeholder={"ex) 01012345678"}
                        text={phoneNumber}
                    ></Input>
                </View>
                <View style={styles.buttonContainer}>
                    <Button type="normal" radius={24}>
                        <YoYoText type="content" bold>
                            인증번호받기
                        </YoYoText>
                    </Button>
                </View>
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.textContainer}>
                    <Input
                        type="phoneNumber"
                        onChange={setAuthNumber}
                        placeholder={"인증번호 6자리"}
                        text={authNumber}
                        isError={true}
                    ></Input>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        type="normal"
                        radius={24}
                        onPress={clickAuthHandler}
                    >
                        <YoYoText type="content" bold>
                            인증
                        </YoYoText>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    outerContainer: {
        flexDirection: "row",
        marginVertical: 5,
    },
    textContainer: {
        flex: 3,
    },
    buttonContainer: {
        flex: 1.5,
    },
});
