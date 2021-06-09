import React, { useEffect, useState } from 'react';
import { Video } from './Videos';
import * as videoService from './VideoService';
import VideoItems from './VideoItems';



const VideosList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos();
        const formatedVideo = res.data.map(video => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt): new Date(),
                updattedAt: video.updatedAt ? new Date(video.updatedAt): new Date(),

            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

 


        setVideos(formatedVideo);
    }

    useEffect(() => {
        loadVideos();
    }, [])

    return (
        <div className="row">
            {videos.map(video => {
                return <VideoItems video={video} key={video._id} loadVideos={loadVideos} />
            })}
        </div>
    )
}

export default VideosList
