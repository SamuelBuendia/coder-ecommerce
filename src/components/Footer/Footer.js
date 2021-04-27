import { getByTitle } from '@testing-library/dom'
import React, {useState, useEffect } from 'react'

const Footer = () => {

    return (
        <footer>
        <section className="container-fluid">
          <div className="row py-4 justify-content-center align-items-center text-center">
            <div className="col-12 col-md-6">
              <h5>Contáctame</h5>
              <p className="mb-1">Email: sbuendiapuyo@gmail.com</p>
              <p>Teléfono: (+57) 3155927974</p>
            </div>
            <div className="col-12 col-md-6">
                <h5>Redes Sociales</h5>
                <a href="https://www.facebook.com/profile.php?id=100009490854595" target="_blank">
                    <img className="mr-3" style={{width:'2%'}} src="/assets/footer/facebook-f-brands.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/samuel-buend%C3%ADa-a433a81a9/" target="_blank">
                    <img className="mr-3" style={{width: '4%'}} src="/assets/footer/linkedin-in-brands.svg" alt="" />
                </a>
                <a href="https://github.com/SamuelBuendia" target="_blank">
                    <img style={{width: '4%'}} src="/assets/footer/github-brands.svg" className="mr-3" alt="" />
                </a>
                <a href="https://wa.link/y6n141" target="_blank">
                    <img style={{width: '4%'}} src="/assets/footer/whatsapp-brands.svg" alt=""/>
                </a>
            </div>
          </div>
        </section>
  
        <div className="container-fluid bg-dark text-light">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p className="mt-3">Todos los derechos reservados 2020 ©</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer