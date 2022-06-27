import logo from './logo.svg';
import './snake.css';

function Snake() {
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    }
    
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
  return (
    <div className="App">
      <div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  
  <div className="overlay-content">
    <div style="border:1px solid #ffffff" className="ui-grid-a">
      <div className="ui-block-a">
    
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    
  </div>
  </div>
    </div>
</div>

<h2>Fullscreen Overlay Nav Example</h2>
<p>Click on the element below to open the fullscreen overlay navigation menu.</p>
<p>In this example, the navigation menu will slide downwards from the top:</p>
<span style="font-size:30px;cursor:pointer" onClick={openNav}>&#9776; open</span>
    <span></span>
    </div>
  );
}

export default Snake;
