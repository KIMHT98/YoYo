import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MainStyle } from "./constants/style";
import MainPage from "./pages/mainpage/MainPage";
import ScheduleList from "./pages/schedule/list/ScheduleList";
import PayList from "./pages/payment/payList/PayList";
import SettingList from "./pages/setting/list/SettingList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "./pages/notification/Notification";
import Login from "./pages/member/login/Login";
import AccountRegist from "./pages/payment/regist/AccountRegist";
import EventList from "./pages/event/list/EventList";
import GiveAndTakeList from "./pages/giveAndtake/list/GiveAndTakeList";
import SendMoney from "./pages/payment/send/SendMoney";
import GiveAndTakeDetail from "./pages/giveAndtake/detail/GiveAndTakeDetail";
import EventDetail from "./pages/event/detail/EventDetail";
import GiveAndTakeRegist from "./pages/giveAndtake/regist/GiveAndTakeRegist";
import EventRegist from "./pages/event/regist/EventRegist";
import SignUp from "./pages/member/signup/SignUp";
import SelectGiveAndTake from "./pages/giveAndtake/regist/SelectGiveAndTake";
import SelectCard from "./pages/event/detail/SelectCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegistNewFriend from "./pages/event/detail/RegistNewFriend";
import SelectRegistType from "./pages/event/select/SelectRegistType";
import SelectLinkType from "./pages/event/select/SelectLinkType";
import QrCode from "./pages/event/select/QrCode";
import RegistPayPassword from "./pages/payment/password/RegistPayPassword";
import AfterPassword from "./pages/payment/password/AfterPassword.jsx";
import PhoneNumber from "./components/login/PhoneNumber";
import Password from "./components/login/Password";
import UserInfo from "./components/login/UserInfo";
import ScheduleDetail from "./pages/schedule/detail/ScheduleDetail";
import Private from "./pages/setting/agree/Private";
import ManageAccount from "./pages/setting/account/ManageAccount";
import YoYoText from "./constants/YoYoText.jsx";
import PayPage from "./pages/payment/PayPage.jsx";
import OcrPage from "./pages/ocr/OcrPage.jsx";
import OcrList from "./pages/ocr/list/OcrList";
import OcrSelect from "./pages/ocr/select/OcrSelect";
import { useContext, useEffect } from "react";
import AuthContextProvider, { AuthContext } from "./store/auth-context.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInterceptor } from "./apis/axiosInterceptor.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabBar() {
    return (
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
                    borderTopColor: MainStyle.colors.lightGray,
                    borderTopWidth: 2,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                    marginBottom: 6,
                },
                tabBarActiveTintColor: MainStyle.colors.main,
                tabBarInactiveTintColor: MainStyle.colors.lightGray,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let icon;
                    switch (route.name) {
                        case "HomeTab":
                            icon = "home";
                            break;
                        case "ScheduleTab":
                            icon = "calendar-number-sharp";
                            break;
                        case "PaymentTab":
                            icon = "wallet";
                            break;
                        case "SettingTab":
                            icon = "settings";
                            break;
                    }
                    return (
                        <Ionicons
                            name={icon}
                            size={30}
                            color={
                                focused
                                    ? MainStyle.colors.main
                                    : MainStyle.colors.lightGray
                            }
                        />
                    );
                },
            })}
        >
            <BottomTab.Screen
                name="HomeTab"
                component={SharedStack} // SharedStack으로 변경
                initialParams={{ screenName: "Home" }} // 파라미터를 추가하여 사용할 수 있음
                options={{ tabBarLabel: "홈" }}
            />
            <BottomTab.Screen
                name="ScheduleTab"
                component={SharedStack} // SharedStack으로 변경
                initialParams={{ screenName: "Schedule" }} // 파라미터를 추가하여 사용할 수 있음
                options={{ tabBarLabel: "일정" }}
            />
            <BottomTab.Screen
                name="PaymentTab"
                component={SharedStack} // SharedStack으로 변경
                initialParams={{ screenName: "Payment" }} // 파라미터를 추가하여 사용할 수 있음
                options={{ tabBarLabel: "페이" }}
            />
            <BottomTab.Screen
                name="SettingTab"
                component={SharedStack} // SharedStack으로 변경
                initialParams={{ screenName: "Setting" }} // 파라미터를 추가하여 사용할 수 있음
                options={{ tabBarLabel: "설정" }}
            />
        </BottomTab.Navigator>
    );
}
function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: MainStyle.colors.white,
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    // headerShown: false,
                    title: "",
                }}
            />
        </Stack.Navigator>
    );
}
function SharedStack({ route }) {
    const { screenName } = route.params;
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: MainStyle.colors.white,
                },
                headerTitleAlign: "center",
            }}
        >
            {screenName === "Home" ? (
                <Stack.Screen
                    name="Home"
                    component={MainPage}
                    options={{
                        headerShown: false,
                    }}
                />
            ) : null}
            {screenName === "Schedule" ? (
                <Stack.Screen
                    name="Schedule"
                    component={ScheduleList}
                    options={{
                        headerShown: false,
                    }}
                />
            ) : null}
            {screenName === "Payment" ? (
                <Stack.Screen
                    name="Payment"
                    component={PayPage}
                    options={{
                        headerShown: false,
                    }}
                />
            ) : null}
            {screenName === "Setting" ? (
                <Stack.Screen
                    name="Setting"
                    component={SettingList}
                    options={{
                        headerShown: false,
                    }}
                />
            ) : null}
            <Stack.Screen
                name="계좌등록"
                component={AccountRegist}
                options={{
                    headerBackVisible: false,
                }}
            />
            <Stack.Screen
                name="Pay List"
                component={PayList}
                options={{
                    headerTitle: () => (
                        <YoYoText type="subTitle" logo>
                            Pay List
                        </YoYoText>
                    ),
                }}
            />
            <Stack.Screen name="돈보내기" component={SendMoney} />
            <Stack.Screen
                name="EventList"
                component={EventList}
                options={{
                    title: "경조사 목록",
                }}
            />
            <Stack.Screen
                name="EventRegist"
                component={EventRegist}
                options={{
                    // headerShown: false,
                    title: "",
                }}
            />
            <Stack.Screen
                name="GiveAndTake"
                component={GiveAndTakeList}
                options={{
                    // headerShown: false,
                    title: "요요 목록보기",
                }}
            />
            <Stack.Screen name="YoYoDetail" component={GiveAndTakeDetail} />
            <Stack.Screen name="EventDetail" component={EventDetail} />
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="UserInfo" component={UserInfo} />

            <Stack.Screen
                name="GiveAndTakeRegist"
                component={GiveAndTakeRegist}
                options={{
                    title: "거래내역추가",
                }}
            />
            <Stack.Screen name="지인선택" component={SelectCard} />
            <Stack.Screen name="지인추가" component={RegistNewFriend} />
            <Stack.Screen
                name="SelectRegistType"
                component={SelectRegistType}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="SelectLinkType"
                component={SelectLinkType}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="QrCode"
                component={QrCode}
                options={{
                    title: "",
                    presentation: "modal",
                }}
            />
            <Stack.Screen
                name="RegistPayPassword"
                component={RegistPayPassword}
                options={{
                    headerShown: false,
                    presentation: "modal",
                }}
            />
            <Stack.Screen
                name="AfterPassword"
                component={AfterPassword}
                options={{
                    headerShown: false,
                    presentation: "modal",
                }}
            />

            <Stack.Screen
                name="SelectGiveAndTake"
                component={SelectGiveAndTake}
                options={{
                    // headerShown: false,
                    title: "",
                }}
            />
            <Stack.Screen
                name="GiveAndTakeDetail"
                component={GiveAndTakeDetail}
                options={{
                    // headerShown: false,
                    title: "요요 상세보기",
                }}
            />
            <Stack.Screen name="ScheduleDetail" component={ScheduleDetail} />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{
                    // headerShown: false,
                    title: "",
                }}
            />
            <Stack.Screen
                name="Private"
                component={Private}
                options={{
                    // headerShown: false,
                    title: "개인정보처리방침",
                }}
            />
            <Stack.Screen
                name="ManageAccount"
                component={ManageAccount}
                options={{
                    // headerShown: false,
                    title: "나의 계좌",
                }}
            />
            <Stack.Screen
                name="OCRPAGE"
                component={OcrPage}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="OCRLIST"
                component={OcrList}
                options={{
                    title: "인식 결과",
                }}
            />
            <Stack.Screen
                name="OCRSELECT"
                component={OcrSelect}
                options={{
                    title: "",
                }}
            />
        </Stack.Navigator>
    );
}
function AuthenticatedStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: MainStyle.colors.white,
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen
                name="BottomTabBar"
                component={BottomTabBar}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
        <NavigationContainer>
            {!authCtx.isAuthenticated && <AuthStack />}
            {authCtx.isAuthenticated && <AuthenticatedStack />}
        </NavigationContainer>
    );
}
function Root() {
    const authCtx = useContext(AuthContext);
    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem("token");
            const nowMember = await AsyncStorage.getItem("memberId");
            if (storedToken && nowMember) {
                authCtx.login(storedToken, nowMember);
            }
        }
        fetchToken();
    }, []);
    // useEffect(() => {
    //     axiosInterceptor(authCtx);
    // }, [authCtx.token]);
    return <Navigation />;
}
export default function App() {
    return (
        <>
            <SafeAreaView />
            <StatusBar style="dark" />
            {/* <Provider store={store}> */}
            <AuthContextProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <Root />
                </GestureHandlerRootView>
            </AuthContextProvider>
            {/* </Provider> */}
        </>
    );
}
