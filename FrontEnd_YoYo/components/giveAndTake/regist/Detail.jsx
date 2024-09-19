import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import YoYoText from "../../../constants/YoYoText";
import Input from "../../common/Input";
import { MainStyle } from "../../../constants/style";
import TagList from "../../common/TagList";
import { useNavigation } from "@react-navigation/native";
import YoYoCard from "../../card/Yoyo/YoYoCard";

export default function Detail({ setIsActive, person, setPerson, data }) {
    const navigation = useNavigation();
    const [description, setDescription] = useState("");
    const [selectedTag, setSelectedTag] = useState("all");

    useEffect(() => {
        if (description.length > 0) {
            setIsActive(true);
            setPerson((prevPerson) => ({
                ...prevPerson,
                description: description,
            }));
        }
    }, [description]);

    function clickTag(type) {
        setSelectedTag(type);
    }

    const clickDetailHandler = () => {
        setIsActive(true);
    };

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
                {data.length > 0 ? (
                    <FlatList
                        data={data}
                        renderItem={({}) => (
                            <YoYoCard onPress={clickDetailHandler} />
                        )}
                        style={styles.innerContainer}
                    ></FlatList>
                ) : (
                    <>
                        <View>
                            <YoYoText
                                type="title"
                                bold
                                color={MainStyle.colors.main}
                            >
                                태그선택
                            </YoYoText>
                        </View>
                        <View style={styles.tagContainer}>
                            <TagList
                                onPress={clickTag}
                                selectedTag={selectedTag}
                                size={76}
                            />
                        </View>

                        <View>
                            <YoYoText
                                type="title"
                                bold
                                color={MainStyle.colors.main}
                            >
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
                    </>
                )}
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
    tagContainer: {
        marginVertical: 12,
    },
    innerContainer: {
        marginBottom: 16,
    },
});
