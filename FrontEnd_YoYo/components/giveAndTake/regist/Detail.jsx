import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import YoYoText from "../../../constants/YoYoText";
import Input from "../../common/Input";
import { MainStyle } from "../../../constants/style";

export default function Detail({ setIsActive, person, setPerson }) {
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (description.length > 0) {
            setIsActive(true);
            setPerson((prevPerson) => ({
                ...prevPerson,
                description: description,
            }));
        }
    }, [description]);

    return (
        <View>
            <View style={styles.container}>
                <View>
                    <YoYoText type="title" bold color={MainStyle.colors.main}>
                        이름
                    </YoYoText>
                </View>
                <View style={styles.textContainer}>
                    <Input text={person.name} notEditable />
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <YoYoText type="title" bold color={MainStyle.colors.main}>
                        인적사항
                    </YoYoText>
                </View>
                <View style={styles.textContainer}>
                    <Input
                        placeholder={"추가 인적사항을 기록해주세요."}
                        onChange={setDescription}
                        text={description}
                    />
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
        marginTop: 30,
    },
});
