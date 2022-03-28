import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import {useState, useEffect} from "react"

function LastMovieInDb(){

    const [Product, setProduct] = useState({})

    useEffect(()=>{
        fetch("/api/products")
            .then(response => response.json())
            .then(data => {setProduct(data.data[data.total-1])})
        
        }, []

    )


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"><strong>Último producto en base: </strong>{Product.product_name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={"http://localhost:3000/images/products/"+Product.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{Product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={"http://localhost:3000/products/detail/"+Product.id}>Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
