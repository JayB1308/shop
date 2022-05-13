import React from 'react'
import {GrAdd} from "react-icons/gr";
import {FiEdit2} from "react-icons/fi";
import { Link } from 'react-router-dom';
import {MdHelpCenter} from "react-icons/md";
import "./AddSideBar.css"
const AddSideBar = () => {
  return (
    <div className="sidebar">
        <div className="listing-options">
            <div className="sidebar-links">
                <GrAdd className="sidebar-icon"/>
                <Link className='link' to="/add">Add Listing</Link>
            </div>
            <div className="sidebar-links">
                <FiEdit2 className="sidebar-icon"/>
                <Link className='link' to="">Edit Listing</Link>
            </div>
        </div>
        <div className="sidebar-links">
            <MdHelpCenter className='sidebar-icon'/>
            <p>Help</p>
        </div>
    </div>
  )
}

export default AddSideBar