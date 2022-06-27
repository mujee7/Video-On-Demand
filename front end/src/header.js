import logo from './logo.png';
import notification from './notification.jpg'
import search from './search.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";
function Header() {

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }
  return (
    <div class="">
    <div className='header row '>

    <div className=' good col-lg-2 col-12'>
<img src={logo}
  height="30"
  className='mblogo logo'
/>
    </div>
    
    <div className='col-lg-6'>
<div className='menu row'>
  <div className='col-lg-2'>Home</div>
  <div className='col-lg-2'>Series</div>
  <div className='col-lg-2'>Movies</div>
  <div className='col-lg-2'>Pricing</div>
</div>
</div>


<div className='row col-12 col-lg-4 mb'>
<div className=' gotit col-lg-6 col-6'>
<a><img
src={search}
width="30"></img></a>┃
<a><img
src={notification}
width="30"
></img></a>┃
<a><img
src={notification}
width="30"></img></a>
</div>
<div className=' col-lg-6 col-6'>
<button className='subscribe'>Subscribe Now</button>
</div>
</div>

    </div>
    
    </div>
  );
}

export default Header;
