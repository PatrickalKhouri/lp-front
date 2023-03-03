import React, { useState } from "react"
import logo from '../assets/images/logo.png'
import cart from '../assets/images/shopping-cart.png'

export default function Navbar() {
    const [logged, setLogged] = useState(false)

    /// Barra de pesquisa
    /// login/logout
    /// carrinho.
    return (
        <nav>
            <img src={logo} className="nav--icon" alt="logo" />
            <div class="rounded nav--search">
            <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autoComplete="off" placeholder="Pesquise aqui" className="nav-input nav-progressive-attribute" dir="auto" tabIndex="0" aria-label="Search Amazon" spellCheck="false"/>
                <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
                </span>
            </div>
            <h5>Explorar</h5>
            <img src={cart} className="nav--cart" alt="logo" />
            <h5 className="nav--text">{logged ? "Bem Vindo" : "Logar"}</h5>
            <h5 className="nav--text">{logged ? null : "Registrar"}</h5>
        </nav>
    )
}