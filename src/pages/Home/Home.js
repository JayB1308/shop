import React,{useEffect,useState} from 'react'
import "./Home.css";

const Home = () => {

  const [shops,setShops] = useState([]);

  useEffect(() => {
    const shop_list = JSON.parse(localStorage.getItem("shops"));
    if(shop_list)
    {
      setShops(shop_list);
    }
  },[]);

  return (
    <div className="home-container">
        <div className="home-sidebar">
          <h2>Filter</h2>
          <div className="filter-form">
              <div className="filter-field">
                  <label>Category</label>
                  <select className='filter-select'>
                        <option selected>Category</option>
                        <option value="">Grocery</option>
                        <option value="">Butcher</option>
                        <option value="">Baker</option>
                        <option value="">Chemist</option>
                        <option value="">Stationary Shop</option>
                   </select>
              </div>
              <div className="filter-field">
                  <label>Location</label>
                  <select className='filter-select'>
                  <option selected>Location</option>
                  <option value="">Thane</option>
                  <option value="">Pune</option>
                  <option value="">Mumbai Suburban</option>
                  <option value="">Nashik</option>
                  <option value="">Nagpur</option>
                  <option value="">Ahmednagar</option>
                  <option value="">Solarpur</option>
                  </select>
              </div>
              <button>Apply</button>
          </div>
          
        </div>
        <div className="all-listings">
            <h1>All Shops</h1>
              <div className="all-shops">
               {
                 shops.map((shop) => {
                   return(
                    <div className="shop-card">
                        <h4>{shop.name}</h4>
                        <div className="info">
                          <p id="location">{shop.location}</p>
                          <p id="category">{shop.category}</p>
                        </div>
                    </div>
                   )
                 })
               }
              </div>
        </div>
    </div>
  )
}

export default Home