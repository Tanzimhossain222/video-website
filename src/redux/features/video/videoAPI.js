import axiosInstance from "../../../api/axiosInstance";

export const getVideo = async (id) => {
    const res = await axiosInstance.get('/videos/'+id);
    return res.data;
}