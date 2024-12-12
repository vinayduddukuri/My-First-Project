import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export function TutorialVideos(){
    const [cookies,setCookies,removeCookies]=useCookies();
    const navigate=useNavigate();

    useEffect(()=>{
        if(cookies.userid==undefined){
            navigate("/login");
        }
    },[]);

    function handleSignout() {
        removeCookies("userid");
        navigate("/login");
    }

    return(
        <div>
            <h2>Viedos Home -{cookies.userid} <span><button onClick={handleSignout} className="btn btn-link">Signout</button></span></h2>
            <div className="d-flex">
                <div className="me-3">
                    <iframe src="https://www.youtube.com/embed/0HxjsUqRlIs"width="400" height="300" frameborder=""></iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/4KabdGAWJD0" width="400" height="300" frameborder=""></iframe>
                </div>
            </div>
        </div>
    )
}