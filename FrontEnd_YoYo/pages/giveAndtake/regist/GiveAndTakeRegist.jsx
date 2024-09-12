import { View, StyleSheet } from "react-native";
import Container from "../../../components/common/Container";
import React, { useState, useLayoutEffect } from "react";
import Next from "../../../components/common/Next";
import IconButton from "../../../components/common/IconButton";
import Name from "../../../components/giveAndTake/regist/Name";
import Detail from "../../../components/giveAndTake/regist/Detail";

export default function GiveAndTakeRegist({ navigation }) {
    const [stage, setStage] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [person, setPerson] = useState({
        name: "",
        tag: "",
        description: "",
    });

    function clickNextButton() {
        if (stage < 4 && isActive) {
            setStage(stage + 1);
        }
        setIsActive(false);
    }

    function clickPrevButton() {
        if (stage === 0) {
            navigation.goBack();
        } else {
            setStage(stage - 1);
        }
    }

    function clickButton() {
        setStage(stage + 1);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Next
                    isActive={isActive}
                    onPress={clickNextButton}
                    final={stage === 3}
                />
            ),
            headerLeft: () => (
                <IconButton
                    icon="arrow-back-outline"
                    size={24}
                    onPress={clickPrevButton}
                />
            ),
        });
    }, [navigation, stage, isActive]);

    return (
        <Container>
            <View>
                {stage === 0 && (
                    <Name setIsActive={setIsActive} setPerson={setPerson} />
                )}
            </View>
            <View>
                {stage === 1 && (
                    <Detail
                        setIsActive={setIsActive}
                        person={person}
                        setPerson={setPerson}
                    />
                )}
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    nextContainer: {
        flexDirection: "row-reverse",
    },
    titleContainer: {
        marginTop: 30,
    },
    textContainer: {
        marginTop: 30,
    },
});
