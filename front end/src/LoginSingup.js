
import React, { useState, useEffect } from 'react'
import './LoginSignup.css'
import {useNavigate} from "react-router-dom"
import Logo from './logo.png'
function LoginSingup() {
	const navigate=useNavigate();
	const [name,SetName]=useState("");
	const [SignupEmail,SetSignupEmail]=useState("");
	const [SignupPassword,SetSignupPassword]=useState("");
	const [LoginEmail,SetLoginEmail]=useState("");
	const [LoginPassword,SetLoginPassword]=useState("");
	useEffect(()=>{
     if(JSON.parse(localStorage.getItem("data") ))
	 {
		navigate("/")
		;
	 }
     		
	})

	async function SignUp(){
		// console.log(name," ",SignupEmail," ",SignupPassword)
        var response=await fetch("http://localhost:5000/RegisterData",{
			method:"POST",
			body:JSON.stringify({name:name,email:SignupEmail,password:SignupPassword}),
			headers:{"Content-Type":"application/json"}
		})
		const result =await response.json()
		
		if(result.code===201){
         window.alert("succesfully account created")
		 localStorage.setItem("data",JSON.stringify(result.data))
		 navigate("/")
		}else
		{
			 window.alert(result.message)
		}
	}
async function Login(){
	var response=await fetch("http://localhost:5000/LoginData",{
		method:"POST",
		body:JSON.stringify({email:LoginEmail,password:LoginPassword}),
		headers:{"Content-Type":"application/json"}
	})
	const result =await response.json()
	if(result.code===202){
		window.alert("succesfully account Logged In")
		localStorage.setItem("data",JSON.stringify(result.data))
		navigate("/")
	   }else
	   {
			window.alert(result.message)
	   }

}


  return (
    <div>
    
	<a href="https://front.codes/" className="LogoLogin" target="_blank">
		<img src={Logo} alt=""/>
	</a>

	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" value={LoginEmail} onChange={(e)=>SetLoginEmail(e.target.value)} className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" value={LoginPassword} onChange={(e)=>SetLoginPassword(e.target.value)} className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" className="btn mt-4" onClick={Login}>Login</a>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>

								{/* Signup */}
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" name="logname" value={name} onChange={(e)=>SetName(e.target.value)} className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" value={SignupEmail} onChange={(e)=>SetSignupEmail(e.target.value)} className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" value={SignupPassword} onChange={(e)=>SetSignupPassword(e.target.value)} className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<a href="#" onClick={SignUp} className="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>

    </div>
  )
}

export default LoginSingup