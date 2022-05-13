import React,{useState} from 'react'
import Calendar from "react-calendar";
import banner from "../../images/add_banner.jpg";
import AddSideBar from '../../components/AddSidebar/AddSideBar';
import "./AddListing.css";
import { useNavigate } from 'react-router-dom';

const AddListing = () => {

    let navigate = useNavigate();

    const [shops,setShops] = useState(JSON.parse(localStorage.getItem("shops")));

    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [category,setCategory] = useState("");

    const [openingDate,setOpeningDate] = useState(new Date());
    const [closingDate,setClosingDate] = useState(new Date());

    const handleSubmit  = (e) => {
       shops.push({
           name:name,
           location:location,
           category:category,
           opening:openingDate,
           closingDate:closingDate
       });
       setShops(shops);
        localStorage.setItem("shops",JSON.stringify(shops));
        navigate("/");
    }

    const handleOpeningDate = (e) => {
        setOpeningDate(e);
    }
    const handleCloseDate = (e) => {
        setClosingDate(e);
    }

  return (
   <>
        <div className="listing-container">
            <AddSideBar />
            <div className="content-container">
            <div className="banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="form-container">
                <form action="">
                   <input type="text" className="input-field" placeholder='Name'
                   onChange={(e) => {setName(e.target.value)}}
                   value={name}
                   />
                   <select className='select-field' placeholder='Location'
                   onChange={(e) => {setLocation(e.target.value)}}
                    value={location}>
                        <option selected>Location</option>
                        <option value="Thane">Thane</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai Suburban">Mumbai Suburban</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Solarpur">Solarpur</option>
                   </select>
                   <select className='select-field'
                   onChange={(e) => {setCategory(e.target.value)}}
                   value={category}>
                        <option selected>Category</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Stationary Shop">Stationary Shop</option>
                   </select>
                   <div className="calendar-section">
                    <div className="open-date">
                        <Calendar value={openingDate} onChange={handleOpeningDate}/>
                    </div>
                    <div className="close-date">
                        <Calendar value={closingDate} onChange={handleCloseDate}/>
                    </div>
                   </div>
                   <button id="submit-btn"
                   onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            </div>
        </div>
   </>
  )
}

export default AddListing