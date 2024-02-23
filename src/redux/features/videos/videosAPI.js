import axiosInstance from "../../../api/axiosInstance";

export const getVideos = async () => {
    const res = await axiosInstance.get('/videos');
    return res.data;
}