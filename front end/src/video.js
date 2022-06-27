import React, { useEffect, useState } from 'react'
import Head from './head'
import videeo from "./video.mp4"
import ReactPlayer from 'react-player/youtube'
import {useLocation} from 'react-router-dom';
function Video() {
    const [data,SetData]=useState()
    const location = useLocation();
    const [loader,SetLoader]=useState(true)
console.log("value ayi?",location.state);
function callit(){
    SetData(location.state)
    SetLoader(false)
    
}
useEffect(()=>{
    callit()
})
  return (
    loader?<h1>Wait</h1>:
    <div><Head></Head>
    {console.log(data.MovieData.name)}
    <h1 style={{color:"white"}}>{data.MovieData.name}</h1>


<img src={data.MovieData.image} style={{width:"100%"}}></img>
{console.log("link aya ya ni?",data.MovieData.video)}
    <ReactPlayer url={data.MovieData.video} playing={true} width={"100%"} style={{marginLeft:"20px",marginRight:"20px",marginTop:"20px"}}/>
<video width="320" height="240" autoplay muted>
  
<source src={data.MovieData.videos} type="video/mp4"/>
  
</video>

    </div>
    
  )
}

export default Video