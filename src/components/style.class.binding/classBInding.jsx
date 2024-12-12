import { useState } from "react";

export function ClassBindingComponent() {
    const [theme,setTheme]=useState('');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('bg-dark text-white p-3');
        }else{
            setTheme('bg-light text-black p-3');
        }
    }
    function handleNameChange(e){
        if(e.target.value==''){
            setTheme('bg-danger text-white p-3');
        }else{
            setTheme('bg-success text-white p-3');
        }
    }


    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:"500px"}}>
                <form className={theme}>
                    <div className="form-switch mt-4 mb-4">
                        <input type="checkbox" onChange={handleThemeChange} className="form-check-input"/>Dark Mode
                    </div>
                    <h2><span className="bi bi-person-fill"></span>User Login</h2>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onChange={handleNameChange} className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"/></dd>
                    </dl>
                    <button className="btn btn-primary w-50">Login</button>
                </form>
            </div>

        </div>
    )
}