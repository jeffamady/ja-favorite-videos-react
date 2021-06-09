import React from "react";
import { Video } from "./Videos";
import ReactPlayer from "react-player";
import "./VideoItems.css";
import { useHistory } from "react-router-dom";
import * as videoService from './VideoService';
import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItems = ({ video, loadVideos }: Props) => {

  const handleDelete = (id: string) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to delete this videos.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {

            await videoService.deleteVideo(id);
            toast.success('Video deleted');
            loadVideos();
          }
        },
        {
          label: 'No',
          onClick: () => toast.dark('You didn\'t delete it! 😊')
        }
      ]
    });

  }
  const history = useHistory();
  return (
    <div className="col-md-4">
      <div
        className="card video-card"
        style={{ cursor: "pointer" }}
        >
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h1
              onClick={() => history.push(`/update/${video._id}`)}
            >{video.title}</h1>
            <span style={{fontSize: '1.9rem'}} className="text-danger" onClick={() => video._id && handleDelete(video._id)}>
              x
            </span>
          </div>
          <p>{video.description}</p>
          <div className="ratio ratio-16x9">
            <ReactPlayer url={video.url} width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItems;
