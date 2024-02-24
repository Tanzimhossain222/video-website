import axiosInstance from "../../../api/axiosInstance";

export const getRelatedVideos = async ({ tags = [], id }) => {
    const limit = 5;
    let queryString = tags?.length > 0 ? `tags_like=${tags.join('&tags_like=')}&id_ne=${id}&_limit=${limit}` :
        (`id_ne=${id}&_limit=${limit}`)

    const res = await axiosInstance.get(`/videos?${queryString}`);
    return res.data;
}