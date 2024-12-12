import { useState } from "react";

export function MouseDemo() {
    const [photos]=useState(["images/m1.png","images/m2.png","images/m3.png","images/m4.png","images/m5.png"]);
    const [preview,setPreview]=useState("");

    function handleMouseOver(e) {
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
            <section className="row mt-2">
                <nav className="clo-2">
                    {
                        photos.map((photo)=>
                        <div className="mb-2 p-1 border border-2 border-primary" key={photo} style={{width:"70px"}}>
                            <img onMouseOver={handleMouseOver} src={photo} width="50" height="40" />
                        </div>
                        )
                    }
                </nav>
                <main className="col-10">
                    <img src={preview} width="200" height="200"/>
                </main>
            </section>
        </div>
    )
}