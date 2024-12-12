import { useState,useEffect } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";


export function ShoppingProducts(){
    const params=useParams();
    const [products,setProducts]=useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/category/${params.catName}`,
        })
        .then((response) => {
            console.log("Products fetched:", response.data); // Log data to verify it's coming in
            setProducts(response.data); // Set the products state with the data
        })
        .catch((error) => {
            console.error("Error fetching products:", error); // Log error if the request fails
        });
    }, []);
    return(
        <div className="container-fluid">
            <h2> {params.catName} Products</h2>
            <div className="d-flex">
                {
                    products.map((product)=>
                    <div key={product.id}>
                        <Link to={`/details/${product.id}`}>
                        <img className="me-2 p-2 border border-2 boarder-primary" src={product.image} width="100" height="100" />
                        </Link>
                    </div>
                    )
                }

            </div>
            <p><Link to="/home">Back to Categories</Link></p>
        </div>
    )
}