import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function TutorialManage(){

    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://127.0.0.1:5566/videos"
        })
        .then(response=>{
            setVideos(response.data)
        })
    },[]);
    return(
        <div className="container-fluid">
                <h2>Manage Videos</h2>
                <div className="mb-2">
                    <Link to="/addvideo" className="btn btn-info">Add New Video</Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {videos.map((video) => (
                        <tr key={video.id}>
                            <td>{video.title}</td>
                            <td>
                                <iframe
                                    src={video.url}
                                    width="100"
                                    height="100"
                                    title={video.title}
                                    allowFullScreen
                                ></iframe>
                            </td>
                            <td>
                                <Link to={`/details/${video.id}`} className="btn btn-primary">
                                    <span className="bi bi-eye"></span>Details
                                </Link>
                                <Link to={`/edit/${video.id}`} className="btn btn-warning ms-2">
                                    <span className="bi bi-pen"></span>Edit
                                </Link>
                                <Link to={`/delete/${video.id}`} className="btn btn-danger ms-2">
                                    <span className="bi bi-trash"></span>Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
        </div>
    )
}