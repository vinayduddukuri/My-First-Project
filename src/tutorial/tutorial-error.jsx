import { Link } from "react-router-dom";


export function TutorialError(){
    return(
        <div>
            <h3>Invalid User Id / Password</h3>
            <Link to="/login">Try again</Link>
        </div>
    )
}