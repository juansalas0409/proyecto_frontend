import React, {useEffect, useState} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let totalProducts = {
    title: 'Total de Productos',
    color: 'primary',
    quantity: 21,
    icon: 'fa-clipboard-list'
}

let totalUsers = {
    title: 'Usuarios Registrados',
    color: 'success',
    quantity: '79',
    icon: 'fa-user-check'
}

let totalCategories = {
    title: 'Total de Categorías con Productos',
    color: 'warning',
    quantity: '49',
    icon: 'fa-music'
}


function ContentRowMovies() {

    //Total de Productos
    const [ProductTotal, setProductTotal] = useState({})
    useEffect(() => {
            fetch('/api/products/')
                .then(response => response.json())
                .then(response => {
                    setProductTotal(response.total)
                })
                .catch(error => console.log(error))

        }, []
    )

    //Total de Usuarios
    const [UserTotal, setUserTotal] = useState({})
    useEffect(() => {
            fetch('/api/users/')
                .then(response => response.json())
                .then(response => {
                    setUserTotal(response.count)
                })
                .catch(error => console.log(error))

        }, []
    )

    //Total de Categorías
    const [CategoriesTotal, setCategoriesTotal] = useState({})
    useEffect(() => {
            fetch('/api/category/')
                .then(response => response.json())
                .then(response => {
                    setCategoriesTotal(response.total)
                })
                .catch(error => console.log(error))

        }, []
    )
    return (

        <div className="row">


            <SmallCard title={totalProducts.title} color={totalProducts.color} quantity={`${ProductTotal}`} icon={totalProducts.icon}/>

            <SmallCard title={totalUsers.title} color={totalUsers.color} quantity={`${UserTotal}`} icon={totalUsers.icon}/>

            <SmallCard title={totalCategories.title} color={totalCategories.color} quantity={`${CategoriesTotal}`} icon={totalCategories.icon}/>


        </div>
    )
}

export default ContentRowMovies;