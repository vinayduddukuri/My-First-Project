import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";

export function VideoEdit() {
    const [video, setVideo] = useState({
        id: 0,
        title: "",
        url: "",
        views: 0,
        likes: 0,
        subscribed: false,
    });
    const params = useParams();

    const formik = useFormik({
        initialValues: {
            id: video.id,
            title: video.title,
            url: video.url,
            views: video.views,
            likes: video.likes,
            subscribed: video.subscribed,
        },
        enableReinitialize: true, // Important for reinitializing form values
        onSubmit: (values) => {
            axios({
                method: "put",
                url: `http://127.0.0.1:5566/updatevideo/${params.id}`,
                data: values,
            })
                .then(() => {
                    alert("Video updated successfully");
                })
                .catch(() => {
                    alert("Failed to update video");
                });
        },
    });

    useEffect(() => {
        axios({
            method: "get",
            url: `http://127.0.0.1:5566/videos/${params.id}`,
        }).then((response) => {
            setVideo(response.data[0]); // Assuming API returns an array with one object
        });
    }, [params.id]);

    return (
        <div>
            <h2>Edit Video</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd>
                        <input
                            type="number"
                            name="id"
                            value={formik.values.id}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Title</dt>
                    <dd>
                        <input
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Video URL</dt>
                    <dd>
                        <input
                            type="text"
                            name="url"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Views</dt>
                    <dd>
                        <input
                            type="number"
                            name="views"
                            value={formik.values.views}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Likes</dt>
                    <dd>
                        <input
                            type="number"
                            name="likes"
                            value={formik.values.likes}
                            onChange={formik.handleChange}
                        />
                    </dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="subscribed"
                            checked={formik.values.subscribed}
                            onChange={formik.handleChange}
                        />
                    </dd>
                </dl>
                <button className="btn btn-success me-3" type="submit">
                    Save
                </button>
                <Link to="/manage" className="btn btn-warning">
                    Cancel
                </Link>
            </form>
        </div>
    );
}
