import { END_POINT } from "../axiosConstants";
import { axiosInstance } from "../axiosInstance";

export const updateTransaction = async (id, data) => {
    return await axiosInstance.patch(END_POINT.TRANSACTIONS(id), data);
};
