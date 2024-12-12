import { useEffect, useState } from "react";
import "../fakestoreAPI/fakestoreComponent.css";
import $ from 'jquery';
import axios from "axios";
export function FakestoreComponent() {
    const [categories,setCategories]=useState([]);
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);

    function GetCartCount() {
        setCartCount(cartItems.length)
    }

    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
        .then((response)=>{
            response.data.unshift("All");
            setCategories(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })

        /* fetch("https://fakestoreapi.com/products/categories")
        .then((response)=>response.json())
        .then((data)=>{
            data.unshift("All");
            setCategories(data);
        }) */
    }
    function LoadProducts(url) {
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data);
        })
    }
    useEffect(()=>{
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
        GetCartCount();
    },[])

    function handleCategoryChange(event) {
        if(event.target.value=="All"){
            LoadProducts("https://fakestoreapi.com/products");
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }

    function handleAddtoCartClick(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then((response)=>response.json())
        .then((data)=>{
            cartItems.push(data);
            GetCartCount();
            alert(`${data.title}\n Added to Cart`);
        })
    }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 mt-2 bg-dark text-white">
                <h2>FakeStore</h2>
                <div>
                    <span className="me-4">Home</span>
                    <span className="me-4">Electronics</span>
                    <span className="me-4">Jwewllery</span>
                    <span className="me-4">Men's Fashion</span>
                    <span className="me-4">Women's Fashion</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <button data-bs-target="#cart" data-bs-toggle="modal" className="btn btn-light position-relative">
                        <span className="bi bi-cart me-3"></span>
                        <span className="badge rounded-circle bg-danger position-absolute">{cartCount}</span>
                    </button>
                    <div className="modal fade" id="cart">
                        <div className="modal-dailog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                    <button data-bs-dismiss="modal" className="btn-close"></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <section className="row mt-4">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category=>
                                    <option key={category} value={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map(product=>
                            <div key={product.id} className="card p-1 m-2">
                                <img src={product.image} className="card-body" height="130" />
                                <div className="card-header">
                                    <p className="card-title">{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate}[{product.rating.count}]
                                        </dd>
                                    </dl>
                                    <div className="card-footer">
                                        <button id={product.id} onClick={handleAddtoCartClick} className="btn btn-danger w-150">
                                            <span className="bi bi-cart4"></span>Add to cart
                                            </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>

        </div>
    )
}