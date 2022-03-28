import React from 'react';
import ChartRow from './ChartRow';

import {useState, useEffect} from "react"

function Chart (){
    const [Products, setProducts] = useState([]);
    useEffect(()=>{
            fetch("/api/products")
                .then(response => response.json())
                .then(data => {setProducts(data.data)})

        }, []

    )
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4" >
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Descripción</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            Products.map(( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;