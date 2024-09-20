import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Input from "../common/Input";
import IconButton from "../common/IconButton";
import validate from "../../util/validate";

export default function UserInfo({ setIsActive }) {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [isNameCorrect, setIsNameCorrect] = useState(false);

    useEffect(() => {
        if (name.length > 0) {
            setIsNameCorrect(validate.validateName(name));
            setIsActive(true);
        }
    }, [isNameCorrect]);

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
