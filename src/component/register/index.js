import React,{ Component, useCallback, useState} from "react";
import {Form,Button, Container} from 'react-bootstrap'
import './index.css'
// import { useAuth } from "../../auth/authContext";
// import { firebaseAuth } from "../../config/firebase";
import { Link } from "react-router-dom";
import {firebaseAuthentication} from "../../base/firebase";

export default class Register extends Component{
 state ={
     username:'',
     email:'',
     password:'',
     confirmpass:''
 }
 handleChangeField = (e) =>{
     this.setState({[e.target.name]:e.target.value})
 }
 handleSubmit = (e) =>{
     e.preventDefault()
     const {email,confirmpass} = this.state
     firebaseAuthentication.createUserWithEmailAndPassword(email,confirmpass)
     .then(res=>{
         firebaseAuthentication.currentUser.sendEmailVerification()
         .then(()=>{
             alert('Please Check Your Email')
             this.props.history.push('/login')
         })
         .catch((error)=>{
             alert(error.message)
         })
        })
        .catch(err=>{
            alert(err.message)
     })



 }
 render(){
    const {username,email,password,confirmpass} = this.state
        // make validation 
        let errors = []
        if (!username || !email || !password || !confirmpass){
            errors.push({message:'Please enter all fields!'})
        }
        if(password.length < 6){
            errors.push({message:'Your Password too short!'})
        }
        if(password !== confirmpass){
            errors.push({message:'Password did not match'})
        }
        // logic password masih salah
    return(
        <Container>
    <Form className="register" onSubmit={this.handleSubmit}>
    <h1> Register </h1>
    <h6>Create Your Account First!</h6>
    
    <Form.Group className="mb-3" controlId="username">
    <Form.Label >Username</Form.Label>
    <Form.Control type="username" onChange={this.handleChangeField} placeholder="Username" name='username' required />
    <Form.Text   >
    </Form.Text>
    </Form.Group>


    <Form.Group className="mb-3" controlId="email">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" onChange={this.handleChangeField} placeholder="Enter email" name='email' value={email} required />
    <Form.Text   >
    </Form.Text>
    </Form.Group>

    <Form.Group  className="mb-3" controlId="password">
    <Form.Label >Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={this.handleChangeField} name='password' value={password} required />
    </Form.Group>
    <Form.Text  >
    </Form.Text>

    <Form.Group  className="mb-3" controlId="confirmpassword">
    <Form.Label >Confirm Password</Form.Label>
    <Form.Control  type="password" onChange={this.handleChangeField} name='confirmpass' placeholder="Confirm Password" value={confirmpass} required/>
    <Form.Text>
    </Form.Text>
</Form.Group>
    <Button   type="submit" >Registered</Button>
    <br/><br/><br/>
    <p>Have an account ? <Link>Login here</Link></p>
    </Form>
        </Container>
    )
}
}