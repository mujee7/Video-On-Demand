import React, { useEffect,Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Carousels from './carousel';
import Head from './head';
import Sliders from './slider';


const AnotherComponent = React.lazy(() => import('./slidercarousel.js'));

function DApp() {
  const [loader,SetLoader]=useState(true);
  const [loader1,SetLoader1]=useState(true);
  const [loader2,SetLoader2]=useState(true);
  const [data,setData]=useState([])
  const [data1,setData1]=useState([])
  const [data2,setData2]=useState([])
 const [scroll,Setscroll]=useState(0)

window.addEventListener("scroll",()=>{
  Setscroll(window.pageYOffset)
  console.log(window.pageYOffset)
})

  async function GetData(){
    if(loader==false){
      return
    }
    const response=await fetch(`http://localhost:5000/category/kids`)
    const result=await response.json()
    setData(result)
    SetLoader(false)
    

  }
  async function GetData1(){
    if(loader1==false){
      return
    }

    const response=await fetch(`http://localhost:5000/category/movies`)
    const result=await response.json()
    
    setData1(result)
    SetLoader1(false)
    

  }
  async function GetData2(){
    if(loader2==false){
      return
    }
    const response=await fetch(`http://localhost:5000/category/shows`)
    const result=await response.json()
    
    setData2(result)
    SetLoader2(false)
    

  }
  
 if(scroll>350 ){

    GetData()
  
 }
 if(scroll>400){
  GetData1();
 }
 if(scroll>800){
  GetData2();
 }
  return (
  <>
  <Head/>
  <Carousels/>
  <Sliders  />
      {loader?<h1>Loading</h1>:<>
      <div className="">
      


        <AnotherComponent data={data} heading={"Kids Section"}/>
      {
        loader1?<h1>Loading</h1>:
        <AnotherComponent data={data1} heading={"Movies Section"}/>
      }
      {
       scroll>800? loader2 ?<h1>Loading</h1>:
        <AnotherComponent data={data2} heading={"Shows Section"}/>
        :null
      }
        
      
    </div>
    </>}
  </>
  );
}

export default DApp;
