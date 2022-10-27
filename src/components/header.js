import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useCart} from 'react-use-cart'

const Header = () => {
    const {totalItems } = useCart();


  return (
    <div>
        <nav class="navbar p-0 navbar-light bg-primary fixed-top">
                <div class="container">
                    <a class="navbar-brand fs-1 fw-bold">Buy What You Want</a>
                    <form class="d-flex">
                    <input className=" form-control " placeholder="type here"/>
                    <Link to="home" className='px-5 text-dark fs-4 fw-bold text-decoration-none '>Home</Link>
                    <Link to="Cartitem">
                    <i className="fa-solid fa-cart-shopping text-dark fs-2">
                    <span className='ms-2 bg-dark text-light px-2 fs-3 py-1'>
                    {totalItems}
                    </span>
                    </i>
                    </Link>
                    </form>
                </div>
            </nav>
    </div>
  )
}

export default Header