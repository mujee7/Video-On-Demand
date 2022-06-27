import React ,{ useState } from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

function FormsElements(){
const [name,Setname]=useState()
const [image,Setimage]=useState()
const [Bannerimage,SetBannerimage]=useState()
const [Description,SetDescription]=useState()
const [Categories,SetCategories]=useState()
const [Episodes,SetEpisodes]=useState()
const [Video,SetVideo]=useState()
//2nd variables for update
const [name1,Setname1]=useState()
const [image1,Setimage1]=useState()
const [Bannerimage1,SetBannerimage1]=useState()
const [Description1,SetDescription1]=useState()
const [Categories1,SetCategories1]=useState()
const [Episodes1,SetEpisodes1]=useState()
const [Video1,SetVideo1]=useState()
const [ID,SetID]=useState()


async function UpdateData(){
    console.log(name1,image1,Bannerimage1,Description1,Categories1,Episodes1)
    
        // console.log(name," ",SignupEmail," ",SignupPassword)
        var response=await fetch(`http://localhost:5000/UpdateData/${ID}`,{
            method:"PUT",
            body:JSON.stringify({name:name1,image:image1,bannerimage:Bannerimage1,description:Description1,categories:Categories1,episodes:[{
                episodeNumber:Episodes1,
                image:image1
            }
            ],
            video:Video1
        }),
            headers:{"Content-Type":"application/json"}
        })
        const result =await response.json()
        console.log(result)
        // if(result.code===201){
        //  window.alert("succesfully account created")
        //  localStorage.setItem("data",JSON.stringify(result.data))
        //  navigate("/")
        // }else
        // {
        //      window.alert(result.message)
        // }
    }

async function CreateData(){
console.log(name,image,Bannerimage,Description,Categories,Episodes)

    // console.log(name," ",SignupEmail," ",SignupPassword)
    var response=await fetch("http://localhost:5000/PostData",{
        method:"POST",
        body:JSON.stringify({name:name,image:image,bannerimage:Bannerimage,description:Description,categories:Categories,episodes:[{
            episodeNumber:Episodes,
            image:image
        }
        ],
        video:Video
    }),
        headers:{"Content-Type":"application/json"}
    })
    const result =await response.json()
    console.log(result)
    // if(result.code===201){
    //  window.alert("succesfully account created")
    //  localStorage.setItem("data",JSON.stringify(result.data))
    //  navigate("/")
    // }else
    // {
    //      window.alert(result.message)
    // }
}


useState(()=>{

})
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">TapMad Data Management</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Create Data</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Movie Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Movie Name" value={name} onChange={(e)=>{Setname(e.target.value)}} />
                                                <Form.Text className="text-muted">
                                                    required
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Image Link</Form.Label>
                                                <Form.Control type="text" placeholder="image link" value={image} onChange={(e)=>{Setimage(e.target.value)}}/>
                                                <Form.Text className="text-muted">
                                                    required
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Banner Image </Form.Label>
                                                <Form.Control type="text" placeholder="image link" value={Bannerimage} onChange={(e)=>{SetBannerimage(e.target.value)}}/>
                                                <Form.Text className="text-muted">
                                                    required
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Video Link </Form.Label>
                                                <Form.Control type="text" placeholder="image link" value={Video} onChange={(e)=>{SetVideo(e.target.value)}}/>
                                                <Form.Text className="text-muted">
                                                    Not required
                                                </Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Episode Numbers</Form.Label>
                                            <Form.Control type="number" placeholder="number here" value={Episodes} onChange={(e)=>{SetEpisodes(e.target.value)}}/>
                                            <Form.Text className="text-muted">
                                                   Not required
                                                </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control as="select" value={Categories} onChange={(e)=>{SetCategories(e.target.value)}}>
                                               <option></option>
                                                <option>shows</option>
                                                <option>movies</option>
                                                <option>kids</option>
                                                <option>live</option>
                                                <option>coming</option>
                                            </Form.Control>
                                            <Form.Text className="text-muted">
                                                    required
                                                </Form.Text>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows="3"  value={Description} onChange={(e)=>{SetDescription(e.target.value)}}/>
                                            <Form.Text className="text-muted">
                                                    required
                                                </Form.Text>
                                        </Form.Group>
                                        <Button variant="primary" onClick={() => CreateData()}>
                                                Submit
                                            </Button>
                                    </Col>
                                </Row>
                                <br></br>
                                
                                                              
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">TapMad Update Data </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Update Data</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Movie ID</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Movie Name" value={ID} onChange={(e)=>{SetID(e.target.value)}} />
                                                <Form.Text className="text-muted">
                                                    required
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Movie Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Movie Name" value={name1} onChange={(e)=>{Setname1(e.target.value)}} />
                                               
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Image Link</Form.Label>
                                                <Form.Control type="text" placeholder="image link" value={image1} onChange={(e)=>{Setimage1(e.target.value)}}/>
                                                
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Banner Image </Form.Label>
                                                <Form.Control type="text" placeholder="image link" value={Bannerimage1} onChange={(e)=>{SetBannerimage1(e.target.value)}}/>
                                                
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Video Link </Form.Label>
                                                <Form.Control type="text" placeholder="image link" value={Video1} onChange={(e)=>{SetVideo1(e.target.value)}}/>
                                                
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Video Link</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Movie Name" value={name1} onChange={(e)=>{Setname1(e.target.value)}} />
                                                
                                            </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Episode Numbers</Form.Label>
                                            <Form.Control type="number" placeholder="number here" value={Episodes1} onChange={(e)=>{SetEpisodes1(e.target.value)}}/>
                                           
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control as="select" value={Categories1} onChange={(e)=>{SetCategories1(e.target.value)}}>
                                               <option></option>
                                                <option>shows</option>
                                                <option>movies</option>
                                                <option>kids</option>
                                                <option>live</option>
                                                <option>coming</option>
                                            </Form.Control>
                                            
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows="3"  value={Description1} onChange={(e)=>{SetDescription1(e.target.value)}}/>
                                            
                                        </Form.Group>
                                        <Button variant="primary" onClick={() => UpdateData()}>
                                                Submit
                                            </Button>
                                    </Col>
                                </Row>
                                <br></br>
                                
                                                              
                            </Card.Body>
                        </Card>
                        
                            <Card>
                            <Card.Header>
                                <Card.Title as="h5">Delete from Database</Card.Title>
                            </Card.Header>

                            
                            <Card.Body>
                               
                                <h5 className="mt-5">Delete Data</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                       
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    
                                    
                                    
                                    
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }


export default FormsElements;
