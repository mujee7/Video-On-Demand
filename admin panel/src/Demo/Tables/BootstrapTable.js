import React, { useState } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
function BootstrapTable  (){
const [Data,SetData]=useState([])
const [loader,SetLoader]=useState(true)
const [Data1,SetData1]=useState([])
const [loader1,SetLoader1]=useState(true)
const [Data2,SetData2]=useState([])
const [loader2,SetLoader2]=useState(true)
async function removeItem(id) {
    try {
        let response =await fetch(`http://localhost:5000/DeleteData/${id}`, {
            method: "DELETE",
        });
    } catch (err) {
    }
    console.log("deleted here")
}
    async function GetData(){
        if(loader==false){
          return
        }
        const response=await fetch(`http://localhost:5000/category/kids`)
        const result=await response.json()
        console.log(result)
        SetData(result.data)
        
        SetLoader(false)
        
    
      }
      async function GetData1(){
        if(loader1==false){
          return
        }
        const response=await fetch(`http://localhost:5000/category/movies`)
        const result=await response.json()
        console.log(result)
        SetData1(result.data)
        
        SetLoader1(false)
        
    
      }
      async function GetData2(){
        if(loader2==false){
          return
        }
        const response=await fetch(`http://localhost:5000/category/shows`)
        const result=await response.json()
        console.log(result)
        SetData2(result.data)
        
        SetLoader2(false)
        
    
      }

    useState(()=>{
        GetData();
        GetData1();
        GetData2()

    })
    
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Movie Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Movie ID</th>
                                        <th>Movie Name</th>
                                        <th>Movie Category</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {loader?
                                    <h1>Loading</h1>:
                                    
                                    Data.map((data,i) => (
                                        <>
                                        <tr>
                                        <th scope="row">{i+1}</th>
                                        <td>{data._id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.categories}</td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={{marginLeft:"-5px"}} onClick={() => removeItem(data._id)} >Delete</a></td>
                                        
                                        </tr>
                                       </>
                                     ))
                                    }
                                    
                                    
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Movie Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Movie ID</th>
                                        <th>Movie Name</th>
                                        <th>Movie Category</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {loader1?
                                    <h1>Loading</h1>:
                                    
                                    Data1.map((data,i) => (
                                        <>
                                        <tr>
                                        <th scope="row">{i+1}</th>
                                        <td>{data._id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.categories}</td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={{marginLeft:"-5px"}} onClick={() => removeItem(data._id)} >Delete</a></td>
                                        </tr>
                                       </>
                                     ))
                                    }
                                    
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card><Card>
                            <Card.Header>
                                <Card.Title as="h5">Movie Table</Card.Title>
                                <span className="d-block m-t-5">use bootstrap <code>Table</code> component</span>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Movie ID</th>
                                        <th>Movie Name</th>
                                        <th>Movie Category</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {loader2?
                                    <h1>Loading</h1>:
                                    
                                    Data2.map((data,i) => (
                                        <>
                                        <tr>
                                        <th scope="row">{i+1}</th>
                                        <td>{data._id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.categories}</td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12" style={{marginLeft:"-5px"}} onClick={() => removeItem(data._id)} >Delete</a></td>
                                        
                                        </tr>
                                       </>
                                     ))
                                    }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }


export default BootstrapTable;