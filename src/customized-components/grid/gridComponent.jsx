export function GridComponent(props) {

    return(
        <div className="container-fluid">
            <caption>{props.caption}</caption>
            <table className="table table-hover">
                <thead>
                    {
                        props.fields.map((field)=>
                        <th key={field}>{field}</th>
                        )
                    }
                </thead>
                <tbody>
                    {
                        props.data.map((item)=>
                        <tr key={item}>
                            {
                                Object.keys(item).map((key)=>
                                <td key={item[key]}>{item[key]}</td>
                                )    
                            }
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}