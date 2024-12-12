import { useState } from "react";

export function MobileNumberValidate() {

    const [country,setCountry]=useState('');
    const [tip,setTip]=useState('');
    const [mobile,setMobile]=useState('');
    const [regExp,setRegExp]=useState(/ /);
    const [mobileError,setMobileError]=useState('');
    function handleCountryChange(e) {
        setCountry(e.target.value);
        switch (e.target.value) {
            case "India":
                setTip('+91 Enter 10 numbers');
                setRegExp(/\+91\d{10}$/);
                break;
            case "US":
                setTip('+(1)(20)(363) 365 3454');
                setRegExp(/\+\(1\)\(\d{2}\)\(\d{3}\)\s\d{3}\d{4}$/);
                break;    
            case "UK":
                setTip('+(44)(345) 6566 3577');
                setRegExp(/\+\(44\)\(\d{3}\)\s\d{4}\d{4}$/);
                break;
        }
    }  
    
    function handleMobileChange(e){
        setMobile(e.target.value);
    }

    function handleSubmitClick() {
        if(mobile.match(regExp)){
            setMobileError('valid'); 
        }else{
            setMobileError(`Invalid Mobile - ${tip}`);
        }
    }

    return(
        <div className="container-fluid">
            <h2>Register user</h2>
            <dl>
                <dt>Your Country</dt>
                <dd>
                    <select onChange={handleCountryChange} >
                        <option>Select Category</option>
                        <option>US</option>
                        <option>UK</option>
                        <option>India</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd>
                    <input type="text" onChange={handleMobileChange} placeholder={tip} />
                </dd>
                <dd className="text-danger">{mobileError}</dd>
                <button onClick={handleSubmitClick} className="btn btn-primary">Validate</button>
            </dl>

        </div>
    )
}