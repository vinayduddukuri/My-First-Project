import React, { useState } from "react";

export function FormValidation() {
    const [userdetails,setUserdetails]=useState({"UserName":'',"Age":0,"City":"","Mobile":""})
    
    function handleNameChange(e){
        setUserdetails({
            UserName:e.target.value,
            Age:userdetails.Age,
            City:userdetails.City,
            Mobile:userdetails.Mobile
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(userdetails);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleNameChange}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" /></dd>
                    <dt>City</dt>
                    <dd><select>
                        <option>Hyd</option>
                        <option>Delhi</option>
                        </select>
                    </dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" /></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}