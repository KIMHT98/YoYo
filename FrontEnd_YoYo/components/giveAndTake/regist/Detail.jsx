import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { MainStyle } from "../../../constants/style";
import { getRelations } from "../../../apis/https/relationApi";
import YoYoText from "../../../constants/YoYoText";
import Input from "../../common/Input";
import TagList from "../../common/TagList";
import YoYoCard from "../../card/Yoyo/YoYoCard";

export default function Detail({ setIsActive, person, setPerson }) {
    const [description, setDescription] = useState("");
    const [selectedTag, setSelectedTag] = useState("all");
    const [cardId, setCardId] = useState(-1);
    const [oppositeId, setOppositeId] = useState(-1);
    const [relationData, setRelationData] = useState([]);
    function clickCard(id, oppositeId) {
        if (id === cardId) {
            setCardId(-1);
            setOppositeId(-1);
            setIsActive(false);
        } else {
            setCardId(id);
            setOppositeId(oppositeId);
            setPerson((prevPerson) => ({
                ...prevPerson,
                memberId: oppositeId,
            }));
            setIsActive(true);
        }
    }
    useEffect(() => {
        if (description.length > 0) {
            setPerson((prevPerson) => ({
                ...prevPerson,
                relationType: selectedTag,
                description: description,
            }));
            setIsActive(true);
        }
    }, [description, cardId]);
    useEffect(() => {
        async function fetchRelationData(name) {
            const response = await getRelations(name);
            if (response != null) {
                const tmpData = response.map((item) => ({
                    id: item.relationId,
                    oppositeId: item.oppositeId,
                    title: item.oppositeName,
                    description: item.description,
                    type: item.relationType.toLowerCase(),
                    give: item.totalReceivedAmount,
                    take: item.totalSentAmount,
                }));
                setRelationData(tmpData);
            }
        }
        fetchRelationData(person.name);
    }, [person.name]);
    function clickTag(type) {
        setSelectedTag(type);
    }
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <YoYoText type="title" bold color={MainStyle.colors.main}>
                        이름 입력
                    </YoYoText>
                </View>
                <View style={styles.textContainer}>
                    <Input text={person.name} notEditable />
                </View>
            </View>
            <View style={styles.container}>
                {relationData.length > 0 ? (
                    <FlatList
                        data={relationData}
                        renderItem={({ item }) => (
                            <YoYoCard
                                data={item}
                                onPress={() =>
                                    clickCard(item.id, item.oppositeId)
                                }
                                type="select"
                                selectedCard={cardId}
                            />
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
