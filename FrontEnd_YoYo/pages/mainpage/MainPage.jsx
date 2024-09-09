import { View, Text } from "react-native";
import React from "react";
import MainPageCard from "../../components/MainPageCard";

export default function MainPage() {
    return (
        <View>
            <Text>MainPage</Text>
            <MainPageCard title={"event"} subTitle={"경조사"}></MainPageCard>
        </View>
    );
}
