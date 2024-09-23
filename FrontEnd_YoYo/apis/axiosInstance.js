import axios from "axios";
import { BASE_URL } from "./axiosConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const axiosInstance = async (port) => {
    const token = await AsyncStorage.getItem("token");

    return axios.create({
        baseURL: BASE_URL(port),
        headers: {
            Authorization: token ? `Bearer ${token}` : null,
        },
        withCredentials: true,
    });
};
