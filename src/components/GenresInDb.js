import React from "react";

import {useState, useEffect} from "react"

function GenresInDb() {

  const [Category, setCategory] = useState([])
  const [ProductCat, setProductCat] = useState([])

    useEffect(()=>{
            fetch("/api/category")
                .then(response => response.json())
                .then(data => {setCategory(data.data)})

        }, []

    )
    useEffect(()=>{
            fetch("/api/products")
                .then(response => response.json())
                .then(data => {setProductCat(data.data)})

        }, []

    )

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
                Categorías
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            {Category.map((categoria, i)=>{
                return(
                        <div className="col-lg-6 mb-4" key={i}>
                            <div className="card bg-dark text-white shadow">
                                <div className="card-body">{categoria.category_name}</div>
                                <div>Total Productos= {(ProductCat.filter(product => product.product_category === categoria.id)).length

                                }</div>
                            </div>
                        </div>
                )
            })}


          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
