import {useState} from "react";
export function TwowayBinding() {
    const [product,setproduct]=useState({Name:"",Price:0,City:"",Stock:false});
    function handleNameChange(e) {
        setproduct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock
        })
    }
    function handlePriceChange(e){
        setproduct({
            Name:product.Name,
            Price:e.target.value,
            City:product.City,
            Stock:product.Stock
        })
    }
    function handleCityChange(e){
        setproduct({
            Name:product.Name,
            Price:product.Price,
            City:e.target.value,
            Stock:product.Stock
        })
    }
    function handleStockChange(e){
        setproduct({
            Name:product.Name,
            Price:product.Price,
            City:product.City,
            Stock:e.target.checked
        })
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <nav className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleNameChange} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="number" onChange={handlePriceChange} className="form-control"/></dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select" onChange={handleCityChange}>
                                <option value="">Delhi</option>
                                <option value="">hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input type="checkbox" onChange={handleStockChange} className="form-check-input"/>Available
                            </dd>
                    </dl>

                </nav>
                <main className="col-9">
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
                    </dl>
                </main>

            </div>
        </div>
    )
}