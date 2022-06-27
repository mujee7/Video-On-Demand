import React, { useState,useEffect } from 'react'
import Head from './head.js'
import './MoviePage.css'
import favourite from './favorite.png'
import share from './share.png'
import banner from './banner.jpg'
import {useParams} from "react-router-dom"
import {Row,Col, Card } from "react-bootstrap"
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"
function MoviePage() {
const params=useParams();
const [Loader,SetLoader]=useState(true)
const [MovieData,SetMoviedata]=useState({})
const [array,SetArray]=useState([])
const navigate=useNavigate();
function okok(){
  navigate('/video',{state:{MovieData}})
}
useEffect(()=>{
  MovieDatas();
},[])
  

var i=1;
async function MovieDatas(){
  // console.log(name," ",SignupEmail," ",SignupPassword)
      var response=await fetch(`http://localhost:5000/SingleMovie/${params.id}`)
  const result =await response.json()
  
  if(result.code===201){
       
       SetMoviedata(result.movie)
       
       if(result.movie.episodes[0]){
       for(i;i<=result.movie.episodes[0].episodeNumber;i++)
       {
        SetArray(array => [...array, i])
        
       }
      }
       
      
       
       SetLoader(false)
       
  }else
  {
     window.alert(result.message)
  }
}

  return (
    <>
{Loader?<><h1>Loading</h1></>:<div  className=''>
<Head/>
<div  className="movieheight row col-lg-12 MoviePageMain">
<div className='movieheight col-lg-6'>
<h1>{MovieData.name}</h1> 
<p>
{MovieData.description}
</p>
<div className='row col-lg-12 col-md-12 col-sm-12 col-12'>

<div className='col add-whishlist col-lg-3 col-md-2 col-sm-2 col-2 col-3' role="button">
<div><img src={favourite}></img></div>
<div><span>
  Add to list
</span>
</div>

</div>

<div className='col add-whishlist1 col-lg-2 col-md-2 col-sm-2 col-3' role="button">
<div><img src={share}></img></div>
<div><span>
  Share it
</span>
{MovieData.video?<button style={{backgroundColor:"green"}} onClick={okok}>Watch Now</button>:<></>}

</div>
</div>

<div className='col-lg-7 col-md-8 col-sm-8 col-6'></div>
</div>

</div>

<div className='movieheight movieimage col-lg-6'>
<img src={MovieData.bannerimage} className='achayewala'></img>


</div>


</div>
<h1>Episodes</h1>
<div className='moviemargin row col-lg-12'>
{console.log("array get",array)}
{array.length>0?
<>
 <Row xs={1} md={4} className="g-4" style={{marginLeft:"-80px"}}>
  {array.map((a,b) => (
    <Col style={{marginBottom:"",backgroundColor:"black"}}>
      <Card style={{height:"200px",cursor:"pointer" ,marginBottom:"30px",backgroundColor:"black"}} onClick={{}} >
      
       <Link to={`/Movies/${MovieData._id}`} > <Card.Img variant="top" src={MovieData.image} style={{height:"250px",backgroundColor:"black"}}/></Link> 
        <Card.Title style={{color:"white",backgroundColor:"black"}}>Part {b+1}</Card.Title>
        
      </Card>.
    </Col>
  ))}
</Row>
</>


:
<>
  <h1>
    No episodes found
  </h1>
</>
}

</div>
    </div>
    }


    </>
  )
}

export default MoviePage