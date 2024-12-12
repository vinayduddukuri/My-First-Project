import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ShoppingHome() {
    const [categories, setCategories] = useState([]);
    
    // Load products when the component mounts
    useEffect(() => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/products/categories",
        })
        .then((response) => {
            console.log("Products fetched:", response.data); // Log data to verify it's coming in
            setCategories(response.data); // Set the products state with the data
        })
        .catch((error) => {
            console.error("Error fetching products:", error); // Log error if the request fails
        });
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
               <ol>
                {
                    categories.map((category)=>
                    <li key={category}>
                        <Link to={`/products/${category}`}>{category.toUpperCase()}</Link>
                    </li>
                    )
                }
               </ol>
            </div>
        </div>
    );
}
