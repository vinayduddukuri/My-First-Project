export function Databinding() {
    var categories=["Footwear","Electronics","Fashion"]
    return(
        <div className="container-fluid">
            <h1>Categories</h1>
            <div>
                {
                    categories.map((category)=>                  
                    <button key={category} className="btn btn-dark mb-1 d-block w-25">{category}</button>
                    )
                }
            </div>
            <ul className="list-unstyled">
                {
                    categories.map((category)=>
                    <li key={category}><input type="checkbox" />{category}</li>)
                }
            </ul>
            <ol>
                {
                    categories.map((category)=>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
            <h1>Categories</h1>
            <select name="" id="">
                {
                    categories.map((category)=>
                        <option key={category} value="">{category}</option>
                    )
                }
            </select>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            Categories
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category)=>
                            <tr key={category}>
                                <td>
                                    {category}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}