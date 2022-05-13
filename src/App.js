import './App.css';
import { useEffect } from 'react';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AddListing from './pages/AddListing/AddListing';

function App() {

  useEffect(() => {
    let shops = JSON.parse(localStorage.getItem("shops"));
    if(!shops)
    {
      shops=[];
      localStorage.setItem("shops",JSON.stringify(shops));
    }
  },[]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddListing />} />
      </Routes>
    </>
  );
}

export default App;
