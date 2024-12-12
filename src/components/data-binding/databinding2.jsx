export function Databinding2() {
    var data=[
        {name:"Samsung",price:5999,stock:true},
        {name:"Nike",price:3999,stock:true},
        {name:"Watch",price:4999,stock:false}
    ]
    return(
        <div className="container-fluid">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{(item.stock==true)?"Available":"Out of Stock"}</td>
                            <td>
                                <button className="btn btn-danger">
                                    <span className="bi bi-trash"></span>
                                </button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}