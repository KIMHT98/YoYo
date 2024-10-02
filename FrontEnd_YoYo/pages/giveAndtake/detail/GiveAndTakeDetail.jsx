import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import YoYoText from "../../../constants/YoYoText";
import Tag from "../../../components/common/Tag";
import Container from "../../../components/common/Container";
import DetailMoneyGauge from "../../../components/card/Yoyo/DetailMoneyGauge";
import SelectTap from "../../../components/common/SelectTap";
import YoYoCardDetail from "../../../components/card/Yoyo/YoYoCardDetail";
import { MainStyle } from "../../../constants/style";
import { getTransaction } from "../../../apis/https/transactionApi";
import { formatDate } from "../../../util/date";

const tag = {
    all: "전체",
    family: "가족",
    friend: "친구",
    company: "직장",
    etc: "기타",
};

export default function GiveAndTakeDetail({ route }) {
    const [giveAndTake, setGiveAndTake] = useState(true);
    const [giveData, setGiveData] = useState([]);
    const [takeData, setTakeData] = useState([]);
    const [data, setData] = useState({
        name: "",
        description: "",
        tag: "",
        give: 0,
        take: 0,
    });
    const { id } = route.params;

    useEffect(() => {
        async function fetchTransaction(oppositeId) {
            const response = await getTransaction(oppositeId);
            setTakeData(
                response.receive.map((item) => ({
                    transactionId: item.transactionId,
                    date: formatDate(item.time),
                    name: item.memo,
                    tag: item.relationType,
                    amount: item.amount,
                }))
            );
            setGiveData(
                response.send.map((item) => ({
                    transactionId: item.transactionId,
                    date: formatDate(item.time),
                    name: item.memo,
                    tag: item.relationType,
                    amount: item.amount,
                }))
            );
            setData({
                name: response.oppositeName,
                description: response.description,
                tag: response.relationType.toLowerCase(),
                give: response.totalSentAmount,
                take: response.totalReceivedAmount,
            });
        }
        fetchTransaction(id);
    }, []);
    function renderItem({ item }) {
        return <YoYoCardDetail data={item} />;
    }
    const detailList = () => {
        if (giveAndTake) {
            return (
                <FlatList
                    data={takeData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.transactionId}
                ></FlatList>
            );
        } else {
            return (
                <FlatList
                    data={giveData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.transactionId}
                ></FlatList>
            );
        }
    };
    return (
        <Container>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <YoYoText type="title" bold>
                        {data.name}
                    </YoYoText>
                    <View style={styles.tagContainer}>
                        <Tag type={data.tag} width={88}>
                            {tag[data.tag]}
                        </Tag>
                    </View>
                </View>
                <View>
                    <YoYoText type="subTitle">{data.description}</YoYoText>
                </View>
                <DetailMoneyGauge
                    give={data.give}
                    take={data.take}
                ></DetailMoneyGauge>
            </View>
            <View style={styles.selectContainer}>
                <SelectTap
                    stateHandler={setGiveAndTake}
                    leftColor={MainStyle.colors.main}
                    rightColor={MainStyle.colors.red}
                    left="받았어Yo"
                    right="보냈어Yo"
                />
            </View>
            {detailList()}
        </Container>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        width: "100%",
        rowGap: 10,
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    tagContainer: {
        marginLeft: 10,
    },
    selectContainer: {
        marginVertical: 10,
    },
});
