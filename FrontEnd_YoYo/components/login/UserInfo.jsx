import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import YoYoText from "../../constants/YoYoText";
import Input from "../common/Input";
import IconButton from "../common/IconButton";
import { MainStyle } from "../../constants/style";

export default function UserInfo({ setIsActive }) {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [isNameCorrect, setIsNameCorrect] = useState(false);

    useEffect(() => {
        if (name.length > 0) {
            setIsNameCorrect(validateName());
        }
    }, [isNameCorrect]);

    const validateName = () => {
        // 이름은 최소 2자 이상, 특수문자와 숫자는 포함되지 않도록 설정
        const nameRegex = /^[a-zA-Z가-힣 ]{2,}$/;

        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Input
                    type="default"
                    placeholder="이름"
                    onChange={setName}
                    text={name}
                    isError={name.length === 0 ? false : isNameCorrect}
                />
            </View>
            <View style={styles.textContainer}>
                <Input
                    type="phoneNumber"
                    placeholder="생년월일"
                    onChange={setBirthday}
                    text={birthday}
                />
            </View>
            <View style={styles.outerContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        type="default"
                        placeholder="주소"
                        onChange={setAddress}
                        text={address}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <IconButton icon="search" size={25} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    textContainer: {
        marginVertical: 5,
    },
    outerContainer: {
        flexDirection: "row",
        marginVertical: 5,
    },
    inputContainer: {
        flex: 6,
    },
    buttonContainer: {
        padding: 10,
        flex: 0.5,
    },
});
