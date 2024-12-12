import React, { useState } from "react";
import { useFormik } from "formik";
export function FormikValidate() {

    function UserValidation(formBody){
        var errors={};

        if(formBody.UserName==""){
            errors.UserName="Username Required";
        }else if(formBody.UserName.length<4){
            errors.UserName="User Name Must be 4 characters Atleast";
        }else{
            errors.UserName="";
        }

        if(isNaN(formBody.Age)){
            errors.Age="Please enter age in Number";
        }else{
            errors.Age="";
        }

        return errors;
    }

    const formik=useFormik({
        initialValues:{
            "UserName":"",
            "Age":0,
            "City":"",
            "Mobile":""
        },
        validate:UserValidation,
        onSubmit: values=>{
            alert(JSON.stringify(values));
        }
    })
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd><select name="City" onChange={formik.handleChange}>
                        <option value="-1">Choose City</option>
                        <option value="Hyd">Hyd</option>
                        <option value="Delhi">Delhi</option>
                        </select>
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}