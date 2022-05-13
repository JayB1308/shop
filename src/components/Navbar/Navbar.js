import React from 'react';
import "./Navbar.css";
import logo from "../../images/shop_logo-removebg-preview.png";
import { Link } from 'react-router-dom';
import {AiFillHome} from "react-icons/ai";
import {AiOutlineAppstoreAdd} from 'react-icons/ai';
import {HiShoppingCart} from "react-icons/hi";
import {MdManageAccounts} from "react-icons/md";
const Navbar = () => {
  return (
    <nav>
        <div className="nav-image">
            <img src={logo} alt="logo" />
            <h6 className="logo-text">Shopper</h6>
        </div>
        <div className="nav-links">
            <div className="nav-item">
                <AiFillHome  className='nav-icons'/>
                <Link className='link' to="/">Home</Link>
            </div>
            <div className="nav-item">
                <AiOutlineAppstoreAdd className='nav-icons'/>
                <Link className='link' to="/add">Add Listing</Link>
            </div>
            <div className="nav-item">
                <HiShoppingCart  className='nav-icons'/>
                <p>Cart</p>
            </div>
            <div className="nav-item">
                <MdManageAccounts className='nav-icons'/>
                <p>Account</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar