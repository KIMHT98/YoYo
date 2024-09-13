import { View, Text } from "react-native";
import React from "react";
import YoYoText from "../../../constants/YoYoText";

export default function Event({ type }) {
    return (
        <View>
            <YoYoText>{type}</YoYoText>
        </View>
    );
}
