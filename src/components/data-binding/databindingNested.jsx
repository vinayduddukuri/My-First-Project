export function DatabindingNested() {
    var menu=[
        {category:"Electronics",products:["SamsungTV","Moblie"]},
        {category:"Footwear",products:["Nike","Lee Boot"]}
    ]
    return(
        <div className="container-fluid">
            <ol>
                {
                    menu.map((item)=>
                    <li key={item.category}>{item.category}
                        <ul>
                            {
                                item.products.map((product)=>
                                <li key={product}>{product}</li>
                                )
                            }
                        </ul>
                    </li>
                    )
                }
            </ol>
            <select>
                {
                    menu.map((item)=>
                    <optgroup label={item.category}>
                        {item.category}
                            {
                                
                                item.products.map((product)=>
                                <option key={product} value="">
                                    {product}
                                </option>    
                                )
                            
                            }
                    </optgroup>
                    )
                }
            </select>
        </div>
    )
}