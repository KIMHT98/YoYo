import React, { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import { MainStyle } from "../../../constants/style";
import EventListCard from "../../../components/card/Event/EventListCard";
import YoYoText from "../../../constants/YoYoText";
import IconButton from "../../../components/common/IconButton";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../../components/header/Header";
import Container from "../../../components/common/Container";
const eventsData = [
    {
        // 이거 어떻게 가져올지 고민해 봐야 함
        date: "2024.09.02",
        events: [
            {
                eventId: 1,
                title: "이벤트 이름",
                name: "주최자 이름",
                position: "주소",
                startAt: "2024.09.02",
                endAt: "2024.09.02",
            },
            {
                eventId: 2,
                title: "이벤트 이름",
                name: "주최자 이름",
                position: "주소",
                startAt: "2024.09.02",
                endAt: "2024.09.02",
            },
            {
                eventId: 3,
                title: "이벤트 이름",
                name: "주최자 이름",
                position: "주소",
                startAt: "2024.09.02",
                endAt: "2024.09.03",
            },
        ],
    },
    {
        date: "2024.09.03",
        events: [
            {
                eventId: 4,
                title: "이벤트 이름",
                name: "주최자 이름",
                position: "주소",
                startAt: "2024.09.03",
                endAt: "2024.09.04",
            },
        ],
    },
];

export default function ScheduleList({ navigation }) {
    const [expandedDate, setExpandedDate] = useState(null);

    function clickSchedule() {
        navigation.navigate("ScheduleDetail");
    }
    function toggleExpand(date) {
        if (expandedDate === date) {
            setExpandedDate(null);
        } else {
            setExpandedDate(date);
        }
    }
    function renderItem({ item }) {
        return <EventListCard event={item} onPress={clickSchedule} />;
    }
    const scheduleList = ({ item }) => (
        <View>
            <Pressable
                onPress={() => toggleExpand(item.date)}
                style={({}) => [styles.dateContainer]}
            >
                <Text>{item.date}</Text>
                <View style={styles.dateRightContainer}>
                    <Text>{item.events.length}개</Text>
                    <IconButton icon={"chevron-down-sharp"} />
                </View>
            </Pressable>

            {expandedDate === item.date && (
                <FlatList
                    data={item.events}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.eventId}
                />
            )}
        </View>
    );

    return (
        <>
            <View style={styles.container}>
                <Header />
            </View>
            <View>
                <FlatList
                    data={eventsData}
                    renderItem={scheduleList}
                    keyExtractor={(item) => item.date}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    dateContainer: {
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: MainStyle.colors.hover,
    },
    dateRightContainer: {
        flexDirection: "row",
        columnGap: 10,
        justifyContent: "space-around",
        alignItems: "center",
    },
    header: {
        marginVertical: 24,
    },
    subTitle: {
        alignItems: "center",
        marginVertical: 16,
    },
});
