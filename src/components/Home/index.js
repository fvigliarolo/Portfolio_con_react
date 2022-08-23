import './index.scss'
import { Link } from 'react-router-dom'
import LogoF from '../../assets/images/Logo_F_blanco.png'
import LogoD from '../../assets/images/Logo_d_blanco.png'
import LogoV from '../../assets/images/Logo_V_blanco.png'
import React from 'react'

const Home = () => {


  return (
        <React.Fragment>
            <div className="container home-page">
                <div className="text-zone">
                        <h1>Hi, <br /> I'm Fede
                            <br />
                            Technology enthusiast
                        </h1>
                    <h2>Fullstack javascript Developer / Software &#38; Security tester /   Ethical Hacking apassionate</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>
                <div className="logo-container">
                  <img src={LogoF} className="solid-logo solid-logo-F" alt="logoF"/>
                  <img src={LogoD} className="solid-logo solid-logo-D" alt="logoD"/>
                  <img src={LogoV} className="solid-logo solid-logo-V" alt="logoV"/>
                </div>
        </React.Fragment>
  )
}

export default Home