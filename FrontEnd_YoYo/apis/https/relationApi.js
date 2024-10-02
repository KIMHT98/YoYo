import { END_POINT } from "../axiosConstants";
import { axiosInstance } from "../axiosInstance";

export async function getRelations(search) {
    const response = await axiosInstance.get(
        END_POINT.RELATIONS + `?search=${search}&tag=`
    );

    return response.data.data;
}
