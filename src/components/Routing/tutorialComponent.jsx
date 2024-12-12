import { BrowserRouter, Route, Routes , Link} from "react-router-dom"

export function Routing(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <h2>Routing</h2>
                <ul>
                    <li><Link to="html">HTML</Link></li>
                    <li><Link to="css">CSS</Link></li>
                    <li><Link to="js">JavaScript</Link></li>
                </ul>
                <Routes>
                    <Route path="html" element={
                        <div>
                            <h2>HTML</h2>
                            <p>It is a markup Language</p>
                        </div>
                    }>
                    </Route>
                    <Route path="css" element={
                        <div>
                            <h2>CSS</h2>
                            <p>It defines styles for HTML</p>
                        </div>
                    }>
                    </Route>
                    <Route path="js" element={
                        <div>
                            <h2>JavaScript</h2>
                            <p>It is a Language to manipulate DOM</p>
                        </div>
                    }>
                    </Route>
                    <Route path="/" element={
                        <div>
                            <h2>Home</h2>
                            <p>Welcome to Home Page</p>
                        </div>
                    }>
                    </Route>
                    <Route path="*" element={
                        <div>
                            <h2>NotFound</h2>
                            <code>Content Requested Not Found</code>
                        </div>
                    }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}