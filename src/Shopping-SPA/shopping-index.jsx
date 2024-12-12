import { BrowserRouter,Routes,Route,Link } from "react-router-dom" ;
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";

export function ShoppingIndex() {

    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-dark text-white p-2 mt-2 d-flex justify-content-between">
                <div>Shopper.</div>
                <div>
                     <span className="me-3"><Link to="home" className="text-decoration-none text-white">Home</Link></span>
                     <span className="me-3">Electronics</span>
                     <span className="me-3">Jewelery</span>
                     <span className="me-3">Men's Clothing</span>
                     <span className="me-3">Women's Colthing</span>
                </div>
                <div>
                    <span className="bi bi-person-fill me-3"></span>
                    <span className="bi bi-heart me-3" ></span>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </header>
            <section className="mt-3 overflow-auto" style={{height:'500px'}}>
                <Routes>
                    <Route path="/" element={<ShoppingHome />} />
                    <Route path="home" element={<ShoppingHome />}/>
                    <Route path="details/:prodId" element={<ShoppingDetails />}/>
                    <Route path="products/:catName" element={<ShoppingProducts />} />
                    <Route path="*" element={<div className="text-danger"><h2>Requested Path not Found</h2></div>} />
                </Routes>
            </section>
            </BrowserRouter>

        </div>
    )
}