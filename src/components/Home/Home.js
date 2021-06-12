import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {

    return (
        <div style={{minHeight: '90vh'}}>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-5 gris-adidas ml-auto">
                       <img className="img-fluid p-5"  src="/assets/home/hombre.jpg" alt=""/>
                    </div>
                    <div className="col-6 col-md-5 d-flex flex-column justify-content-center px-5 mr-auto">
                        <h6>Explora nuestra categoria de Hombres</h6>
                        <Link to={`/items/hombre`} className="btn btn-light regularLink w-100 my-2">Ver más</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-5 d-flex flex-column justify-content-center px-5 ml-auto">
                        <h6>Explora nuestra categoria de Mujeres</h6>
                        <Link to={`/items/mujer`} className="btn btn-light regularLink w-100 my-2">Ver más</Link>
                    </div>
                    <div className="col-6 col-md-5 gris-adidas mr-auto">
                       <img className="img-fluid p-5"  src="/assets/home/mujer.jpg" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-5 gris-adidas ml-auto">
                       <img className="img-fluid p-5"  src="/assets/home/ninos.jpg" alt=""/>
                    </div>
                    <div className="col-6 col-md-5 d-flex flex-column justify-content-center px-5 mr-auto">
                        <h6>Explora nuestra categoria de Niños</h6>
                        <Link to={`/items/ninos`} className="btn btn-light regularLink w-100 my-2">Ver más</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-5 d-flex flex-column justify-content-center px-5 ml-auto">
                        <h6>Explora nuestra categoria de Accesorios</h6>
                        <Link to={`/items/accesorios`} className="btn btn-light regularLink w-100 my-2">Ver más</Link>
                    </div>
                    <div className="col-6 col-md-5 gris-adidas mr-auto">
                       <img className="img-fluid p-5"  src="/assets/home/accesorios.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home