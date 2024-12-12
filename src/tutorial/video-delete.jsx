import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function VideoDelete() {
    const [video, setVideo] = useState({ id: 0, title: "", url: "", views: 0, likes: 0, subscribed: false });
    const params = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:5566/videos/${params.id}`,
        })
        .then((response) => {
            setVideo(response.data[0]);
        })
        .catch((error) => {
            console.error("Error fetching video:", error);
        });
    }, [params.id]);

    function handleDelete() {
        axios({
            method: "delete",
            url: `http://127.0.0.1:5566/deletevideo/${params.id}`
        })
        .then((response) => {
            alert(response.data.message);  // Show success message
            navigator('/manage');  // Navigate to the manage page
        })
        .catch((error) => {
            alert("Failed to delete the video.");  // Show error message
        });
    }

    return (
        <div>
            <h2>Are you sure you want to delete the video?</h2>
            <div className="card w-50">
                <div className="card-header">
                    <h3>{video.title}</h3>
                </div>
                <div className="card-body">
                    <iframe src={video.url} height="200" width="100%"></iframe>
                </div>
                <div className="card-footer">
                    <span className="bi bi-eye-fill"></span> [{video.views}] Views
                    <span className="bi bi-hand-thumbs-up-fill"></span> [{video.likes}] Likes
                </div>
            </div>
            <div className="mt-3">
                <button className="btn btn-danger m-2" onClick={handleDelete}>Yes, Delete</button>
                <Link className="btn btn-warning" to="/manage">No, Go Back</Link>
            </div>
        </div>
    );
}
