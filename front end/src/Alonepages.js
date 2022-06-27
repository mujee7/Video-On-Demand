import React, { useState,useEffect } from 'react'
import Head from './head';
import {Link} from 'react-router-dom'
import {Row,Col, Card } from "react-bootstrap"
function Alonepages(props) {
const [loader,SetLoader]=useState(true);
const [data,setData]=useState()
const [change,SetChange]=useState(true)

    async function GetData(){
        console.log("ye chal ra hai ya ni",props)
        
        const response=await fetch(`http://localhost:5000/category/${props.data}`)
        const result=await response.json()
        console.log(result)
        setData(result.data)
        SetLoader(false)
        
    
      }
      function loaderokhai(){
        SetChange(false)
        SetChange(true)
      }
useEffect(()=>{
     GetData()
},[props])




  return (
    <div>

    <Head/>
    {}
    {console.log(props.data)}
    <button onClick={()=>{loaderokhai()}}>Reloard</button>
    {!loader?
<>
<br></br>
 <Row xs={1} md={4} className="g-4" style={{marginLeft:"-10px",marginTop:"5px"}}>
  {data.map((a,b) => (
    <Col style={{ marginTop:"100px"}}>
      <Card style={{height:"250px",cursor:"pointer",width:"250px",backgroundColor:"black"}} onClick={{}} >
      <Link to={`/Movies/${a._id}`} >
        <Card.Img variant="top" src={a.image} style={{height:"100%"}}/>
        </Link>
        
        
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
  )
}

export default Alonepages