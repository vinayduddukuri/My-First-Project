import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

 export function TutorialLogin() {

    const navigate=useNavigate();
    const [cookies,setCookies,removeCookies]=useCookies();
    const [users,setUsers]=useState({"UserId":"","Password":""});
    const formik=useFormik({
        initialValues:{
            "UserId":"",
            "Password":""
        },
        onSubmit:(customer)=>{
            axios({
                method:"get",
                url:"http://127.0.0.1:5000/customers"
            })
            .then(response => {
                const fetchedUsers = response.data;
                const matchingUser = fetchedUsers.find(user =>
                    user.UserId === customer.UserId && user.Password === customer.Password
                );
                console.log(matchingUser)
                if (matchingUser) {
                    alert("Login Successful!");
                    setCookies("userid",customer.UserId,{expires:new Date('2025-11-16 21:15:10')});
                    navigate("/videos");
                } else {
                    alert("Invalid UserId or Password.");
                    navigate("/error");
                }
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                alert("Unable to login. Please try again later.");
            });
        }
    })
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                </dl>
                <button>Login</button>
                <p>
                    <Link to="/register">New User register</Link>
                </p>
            </form>
        </div>
    )
}