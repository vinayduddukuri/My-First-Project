import { useState,useEffect } from "react";
import { useParams,Link} from "react-router-dom";
import axios from "axios"; 


export function ShoppingDetails() {
    const params=useParams();
    const [product,setProduct]=useState({id:0,title:"",price:0,category:"",rating:{rate:0,count:0}});

    useEffect(()=>{
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/${params.prodId}`,
        })
        .then((response)=>{
            setProduct(response.data);
        })
        
    },[]);

    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Preview</dt>
                <dd><img src={product.image} height="200" width="200" /></dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>
                     {/* Check if rating exists before accessing rate and count */}
                     {product.rating ? (
                        <>
                            <span className="bi bi-star-fill text-success"></span>
                            {product.rating.rate} [{product.rating.count}]
                        </>
                    ) : (
                        <span>No ratings available</span>
                    )}
                </dd>
            </dl>
            <p><Link to={`/products/${product.category}`}>Back to {product.category} </Link></p>
        </div>
    )
}