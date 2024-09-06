import { View, StyleSheet } from "react-native";
import React from "react";
import { MainStyle } from "../../constants/style";

const tagColor = {
    friend: MainStyle.tagColors.friend,
    family: MainStyle.tagColors.family,
    company: MainStyle.tagColors.company,
    etc: MainStyle.tagColors.etc,
};

export default function Tag({ type, margin, children }) {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: tagColor[type],
                    marginHorizontal: margin ? margin : 0,
                },
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 48,
        borderRadius: 32,
        alignSelf: "flex-start",
    },
});
