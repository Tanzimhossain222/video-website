import axiosInstance from "../../../api/axiosInstance";

export const getTags = async () => {
    const res = await axiosInstance.get('/tags');
    return res.data;
}