import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MainStyle } from "./constants/style";
import MainPage from "./pages/mainpage/MainPage";
import HomeIcon from "./assets/svg/Home.svg";
import CalendarIcon from "./assets/svg/Calendar.svg";
import MoneyIcon from "./assets/svg/Money.svg";
import SettingIcon from "./assets/svg/Setting.svg";
import ScheduleList from "./pages/schedule/list/ScheduleList";
import PayList from "./pages/payment/payList/PayList";
import SettingList from "./pages/setting/list/SettingList";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <SafeAreaView style={styles.header}>
                <Text>YOYO</Text>
            </SafeAreaView>
            <NavigationContainer>
                <BottomTab.Navigator
                    screenOptions={({ route }) => ({
                        unmountOnBlur: true,
                        headerStyle: {
                            backgroundColor: MainStyle.colors.white,
                        },
                        headerTintColor: MainStyle.colors.black,
                        tabBarStyle: {
                            backgroundColor: MainStyle.colors.white,
                            height: 60,
                            borderTopColor: MainStyle.colors.black,
                            borderTopWidth: 2,
                        },
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: "bold",
                            marginBottom: 6,
                        },
                        tabBarActiveTintColor: MainStyle.colors.main,
                        tabBarInactiveTintColor: MainStyle.colors.grey,
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let IconComponent;

                            switch (route.name) {
                                case "Home":
                                    IconComponent = HomeIcon;
                                    break;
                                case "Schedule":
                                    IconComponent = CalendarIcon;
                                    break;
                                case "Payment":
                                    IconComponent = MoneyIcon;
                                    break;
                                case "Setting":
                                    IconComponent = SettingIcon;
                                    break;
                            }

                            return <IconComponent width={30} height={30} />;
                        },
                    })}
                >
                    <BottomTab.Screen
                        name="Home"
                        component={MainPage}
                        options={{ tabBarLabel: "홈" }}
                    />
                    <BottomTab.Screen
                        name="Schedule"
                        component={ScheduleList}
                        options={{ tabBarLabel: "일정" }}
                    />
                    <BottomTab.Screen
                        name="Payment"
                        component={PayList}
                        options={{ tabBarLabel: "페이" }}
                    />
                    <BottomTab.Screen
                        name="Setting"
                        component={SettingList}
                        options={{ tabBarLabel: "설정" }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
});
