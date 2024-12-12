import { useState } from "react"

export function SortComponent() {
    const [cities]=useState(["Hyd","Delhi","Mumbai","Banglore","Chennai"]);
    const [buttonclass,setButtonclass]=useState('bi bi-sort-alpha-down');

    function handleSortClick(e){
        if(e.target.className=="bi bi-sort-alpha-down"){
            setButtonclass('bi bi-sort-alpha-up');
            cities.sort();
        }else{
            setButtonclass('bi bi-sort-alpha-down');
            cities.sort();
            cities.reverse();
        }
    }

    return(
        <div className="container-fluid p-3">
            <h2>Cities List <button onClick={handleSortClick} className="btn btn-success"><span className={buttonclass}></span></button> </h2>
            <ol>
                {
                    cities.map((city)=>
                    <li key={city}>{city}</li>
                    )
                }
            </ol>
        </div>
    )
}