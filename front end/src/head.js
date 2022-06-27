import logo from './logo.png';
import notification from './notification.jpg'
import search from './search.png'
import {Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./head.css";
import { useState } from 'react';

function Head() {
  const [lol,Setlol]=useState(false);

  function LogOut(){
    localStorage.removeItem("data")
    Setlol(true)
  }
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
  return (
    <div class="margintop">
    <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  
  <div className="overlay-content">
    <div style={{}} className=" ui-grid-a">
      <div className=" ui-block-a">
    
    <a ><Link to={'/'} style={{ textDecoration: 'none' ,color:"white"}}>Home</Link></a>
    <a ><Link to={'/Live'} style={{ textDecoration: 'none', color:"white" }}>Live</Link></a>
    <a ><Link to={'/Movies'} style={{ textDecoration: 'none' ,color:"white"}}>Movies</Link></a>
    <a ><Link to={'/Shows'} style={{ textDecoration: 'none' ,color:"white"}}>Shows</Link></a>
    <a ><Link to={'/Kids'} style={{ textDecoration: 'none' ,color:"white"}}>Kids</Link></a>
    <a ><Link to={'/ComingSoon'} style={{ textDecoration: 'none' ,color:"white"}}>Coming Soon</Link></a>
  </div>
  </div>
    </div>
</div>

<div>


<div className=' row col-lg-12 col-md-12 col-sm-12 col-12 '>

    <div className=' row col-lg-2 col-md-2 col-sm-3 col-4'>
    <div className='hide col-lg-4 col-md-4 col-sm-4 col-4' >
    <span style={{fontSize:25,cursor:"pointer"}} onClick={openNav}>&#9776; </span>
    </div>
    <div className='col-lg-8 col-md-8 col-sm-8 col-8'>
    <Link to={'/'} style={{ textDecoration: 'none'}}>
<img src={logo}
  height="25"
  className='logo'
/>
</Link>
</div>
    </div>

    
    <div className=' col-lg-8 col-md-7 col-sm-5 col-3'>
<div className='sad row'>
  <div  className='col-lg-1'><a><Link to={'/'} style={{ textDecoration: 'none' ,color:"black"}}>Home</Link></a></div>
  <div className='col-lg-1'><Link to={'/Live'} style={{ textDecoration: 'none' ,color:"black"}}>Live</Link></div>
  <div className='col-lg-1'><Link to={'/Movies'} style={{ textDecoration: 'none' ,color:"black"}}  >Movies</Link></div>
  <div className='col-lg-1'><Link to={'/Shows'} style={{ textDecoration: 'none' ,color:"black"}}>Shows</Link></div>
  <div className='col-lg-1'><Link to={'/Kids'} style={{ textDecoration: 'none' ,color:"black"}}>Kids</Link></div>
  <div className='col-lg-3'><Link to={'/ComingSoon'} style={{ textDecoration: 'none' ,color:"black"}}>Coming Soon</Link></div>
</div>
</div>


<div className='row col-lg-2 col-md-3 col-sm-4 col-6'>
<div className='col-lg-4 col-md-5 col-sm-5 col-5'>
<a className='right '><img
src={search}
width="30"></img></a>
</div>
<div className='col-lg-8 col-md-7 col-sm-7 col-7'>
{JSON.parse(localStorage.getItem("data"))?<span onClick={LogOut} className=' Login' style={{ textDecoration: 'none' ,color:"black"}}>Log Out {JSON.parse(localStorage.getItem("data")).name}</span>:<Link to="/Login" style={{ textDecoration: 'none' ,color:"black"}}><span className=' Login'>Login 🢃</span></Link>}
</div>
</div>

    </div>

</div>
    </div>
  );
}

export default Head;
