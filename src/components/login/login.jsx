import "./login.css";
export function Login() {
    return(
        <div className="container-fliud">
            <form>
                <h2>User Login</h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                    <button className="btn btn-primary w-100">Login</button>

                </dl>
            </form>

        </div>
    )
}