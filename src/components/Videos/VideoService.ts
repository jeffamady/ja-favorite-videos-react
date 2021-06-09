import axios from 'axios';
import { Video } from './Videos';

const api = 'http://localhost:4000';

export const getVideos = async () => {
    return await axios.get<Video[]>(api+'/videos');
}

export const getVideo = async (id: string) => {
    return await axios.get<Video>(`${api}/videos/${id}`);
}

export const createVideos = async (video: Video) => {
    await axios.post(api+'/videos', video)
        .then(res => {
            return res
        })
        .catch(error => {
            return error
        });
}

export const updateVideo = async (id: string, video: Video) => {
    return await axios.put(`${api}/videos/${id}`, video);
}

export const deleteVideo = async (id: string) => {
    return await axios.delete(`${api}/videos/${id}`);
}