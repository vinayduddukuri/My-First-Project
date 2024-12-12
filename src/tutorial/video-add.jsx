import axios from "axios";
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";


export function VideoAdd(){
    var navigator=useNavigate();
    const formik=useFormik({
        initialValues:{
            id:0,
            title:"",
            url:"",
            views:0,
            likes:0,
            subscribed:false
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5566/addvideo",
                data:values
            })
            alert(`Video Added`);
            navigator('/manage');
        }
    });
    return(
        <div>
            <h2>Add New Video</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" name="id" onChange={formik.handleChange} /></dd>
                    <dt>Title</dt>
                    <dd><input type="text" name="title" onChange={formik.handleChange} /></dd>
                    <dt>Video URL</dt>
                    <dd><input type="text" name="url" onChange={formik.handleChange} /></dd>
                    <dt>Views</dt>
                    <dd><input type="number" name="views" onChange={formik.handleChange} /></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" name="likes" onChange={formik.handleChange} /></dd>
                    <dt>Subscribed</dt>
                    <dd className="form-switch">
                        <input type="checkbox" className="form-check-input" name="subscribed" onChange={formik.handleChange} />
                    </dd>
                </dl>
                <button type="submit" className="btn btn-primary">Add Video</button>
            </form>
        </div>
    )
}