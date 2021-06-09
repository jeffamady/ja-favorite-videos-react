import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { Video } from "./Videos";
import * as videoService from "./VideoService";

interface Params {
  id: string;
}

const VideosForm = () => {
  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const history = useHistory();
  const params = useParams<Params>();
  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!params.id){
      await videoService.createVideos(video)
      toast.success("New video added")
    } else {
      await videoService.updateVideo(params.id, video);

      toast.success("Video Updated")
 
    }
    history.push("/");
  };

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const {title, description, url} = res.data;
    setVideo({title, description, url});
  }

  useEffect(() => {
    if(params.id) getVideo(params.id);
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Add a title to the video"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={video.title}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Add a description"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>
              {
                params.id ?
                <button className="btn btn-info ">Update Video</button>
                :
                <button className="btn btn-primary ">Add Video</button>

              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosForm;
