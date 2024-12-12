import { useState } from "react"
import { GridComponent } from "../../customized-components/grid/gridComponent"

export function HomeComponent() {
    const [products]=useState([{Name:"TV",price:44433},{Name:"Mobile",price:5565}])
    return(
        <div className="container-fluid">
           
           <GridComponent caption="Employees Table" fields={["First Name","Last Name","Salary"]} data={[{'firstname':'Vinay','lastname':'Chowdary','salary':1000}]}/>
           <hr />
           <GridComponent caption='Products List' fields={['productname','productprice']} data={products}/>
        </div>
    )
}