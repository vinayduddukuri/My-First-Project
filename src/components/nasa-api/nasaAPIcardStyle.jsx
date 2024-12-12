import { useEffect, useState } from "react"
import "../nasa-api/nasaAPIcomponent.css";
export function NasaAPIcardComponent() {
    const [mars,setMars]=useState({photos:[]});
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Nt1cTW1qNVoIPhTkVSd0FQYimarEqf2xLrDi1N6a")
        .then(response=>response.json())
        .then(data=>{
            setMars(data);
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>Mars Rover photos</h2>
            <div className="d-flex flex-wrap">
                {
                    mars.photos.map((item)=>
                        <div key={item.id} className="card m-2 p-2">
                            <img src={item.img_src} height="200" className="card-image" />
                            <div className="card-body">
                                <dl>
                                    <dt>Camera Name</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover Name</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>

    )
}