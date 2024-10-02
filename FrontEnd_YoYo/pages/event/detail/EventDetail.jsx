import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Container from "./../../../components/common/Container";
import YoYoText from "../../../constants/YoYoText";
import { MainStyle } from "../../../constants/style";
import SearchBar from "./../../../components/common/SearchBar";
import SelectTap from "../../../components/common/SelectTap";
import EventBeforeRegist from "../../../components/card/Event/EventBeforeRegist";
import EventAfterRegist from "../../../components/card/Event/EventAfterRegist";
import IconButton from "../../../components/common/IconButton";
import TagList from "../../../components/common/TagList";
import Button from "./../../../components/common/Button";
import { getEventDetail, getEventTransaction } from "../../../apis/https/eventApi";



export default function EventDetail({ navigation, route }) {
    const [event, setEvent] = useState()
    const [eventList, setEventList] = useState();
    const eventId = route.params.id
    const [keyword, setKeyword] = useState('')
    const [selectedTag, setSelectedTag] = useState("all");
    const [waitCnt, setWaitCnt] = useState(0)
    const [isWait, setIsWait] = useState(true);
    function clickWaitCard(friend) {
        navigation.navigate("지인선택", { friend: friend, eventId: event.eventId });
    }
    function clickTag(type) {
        setSelectedTag(type);
    }
    function clickBottomButton() {
        if (isWait) {
            navigation.navigate("SelectRegistType", { eventId: event.eventId });
        } else {
            navigation.navigate("SelectLinkType", {
                eventId: event.eventId,
            });
        }
    }
    const renderItem = ({ item }) => {
        return isWait ? (
            <EventBeforeRegist
                event={item}
                onPress={() => clickWaitCard(item)}
            />
        ) : (
            <EventAfterRegist event={item} />
        );
    };
    useEffect(() => {
        async function fetchEventTransaction() {
            try {
                const response = await getEventTransaction(eventId, keyword, "", !isWait)
                if (response.status === 200) {
                    if (isWait) setWaitCnt(response.data.length)
                    if (selectedTag === "all") setEventList(response.data)
                    else
                        setEventList(response.data.filter((item) => item.relationType === selectedTag.toUpperCase()))
                } else {
                    setEventList()
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchEventTransaction();

    }, [keyword, selectedTag, isWait])
    useEffect(() => {
        async function fetchEvent() {
            const data = await getEventDetail(eventId)
            setEvent(data)
        }
        fetchEvent()
    }, [])
    useLayoutEffect(() => {
        if (event) {
            navigation.setOptions({
                title: event.title || "",
                headerRight: () => (
                    <IconButton
                        icon="create-outline"
                        size={24}
                        onPress={() => alert("Header Button Pressed")}
                    />
                ),
            })
        };
    }, [navigation, event]);
    if (!event)
        return <View><Text>없어</Text></View>
    return (
        <>
            <Container>
                <View style={styles.rowContainer}>
                    <YoYoText
                        type="subTitle"
                        bold
                        color={MainStyle.colors.main}
                    >
                        {event.totalReceiver}
                    </YoYoText>
                    <YoYoText type="md">명의 분들이</YoYoText>
                </View>
                <View style={styles.rowContainer}>
                    <YoYoText
                        type="subTitle"
                        bold
                        color={MainStyle.colors.main}
                    >
                        {event.totalReceivedAmount}
                    </YoYoText>
                    <YoYoText type="md">원의 마음을 전해주었어요.</YoYoText>
                </View>
                <SearchBar placeholder="이름을 입력해주세요." keyword={keyword} setKeyword={setKeyword} />
                <TagList
                    onPress={clickTag}
                    selectedTag={selectedTag}
                    size={64}
                    all
                />
                <View style={{ position: "relative", flex: 1 }}>
                    <SelectTap
                        leftColor={MainStyle.colors.main}
                        rightColor={MainStyle.colors.main}
                        stateHandler={setIsWait}
                        left="등록 대기"
                        right="등록 완료"
                    />
                    {(eventList && eventList.length > 0) ?
                        <FlatList
                            data={eventList}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.transactionId.toString()}
                        /> : <View style={{ paddingTop: 24 }}><YoYoText type="md" bold center>거래 내역이 없습니다.</YoYoText></View>}
                    {<Text style={styles.waitText}>{waitCnt}</Text>}
                </View>
            </Container>
            <Button
                type="fill"
                radius={0}
                onPress={clickBottomButton}
                width="100%"
            >
                <YoYoText type="md" bold>
                    {isWait ? "직접 등록" : "마음 받으실 곳"}
                </YoYoText>
            </Button>
        </>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        gap: 4,
    },
    tagContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16,
    },
    transactionContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    transactionName: {
        fontWeight: "bold",
    },
    waitText: {
        color: "white",
        backgroundColor: 'red',
        paddingVertical: 1,
        paddingHorizontal: 7,
        borderRadius: 100,
        fontWeight: "bold",
        textAlign: "center",
        position: "absolute",
        top: 11,
        left: "40%",
    },
});
