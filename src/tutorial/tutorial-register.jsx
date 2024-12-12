import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export function TutorialRegister(){

    const [userError,setUserError]=useState('');
    const [users,setUsers]=useState([]);
    const [textClass,setTextClass]=useState('');
    const navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            "UserId":"",
            "UserName":"",
            "Password":"",
            "Age":0,
            "Email":"",
            "Mobile":""
        },
        onSubmit:(values)=>{
            axios({
                method:"post",
                url:"http://127.0.0.1:5000/registercustomer",
                data:values
            })
            alert("Registered Successfully");
            navigate("/login");
        }
    })

    function VerifyUserId(e){
        axios({
            method:"get",
            url:"http://127.0.0.1:5000/customers"
        })
        .then((response)=>{
            setUsers(response.data);
            for(var user of users){
                if(user.UserId===e.target.value){
                    setUserError("User Id Taken - Try Another");
                    setTextClass("text-danger");
                    break;
                }else{
                    setUserError("User Id Available");
                    setTextClass("text-success");
                }
            }
        })
    }

    return(
        <div>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onBlur={VerifyUserId} name="UserId" onChange={formik.handleChange}/></dd>
                    <dd className={textClass}>{userError}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange}/></dd>
                    <dt>Email</dt>
                    <dd><input type="text" name="Email" onChange={formik.handleChange}/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange}/></dd>
                </dl>
                <button>Register</button>
                <p>
                    <Link to="/login">Existing User Login</Link>
                </p>
            </form>
        </div>
    )
}