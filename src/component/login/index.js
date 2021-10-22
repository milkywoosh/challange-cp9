import React,{ Component } from "react";
import {Form,Button, Container} from 'react-bootstrap'
import './index.css'
import { Link } from "react-router-dom";
import {firebaseAuthentication} from "../../base/firebase";

export default class Login extends Component{
 state ={
     email:'',
     password:''
 }
 handleChangeField = (e) =>{
     this.setState({[e.target.name]:e.target.value})
 }
 handleSubmit = (e) =>{
     e.preventDefault()
     const {email,password} = this.state
     firebaseAuthentication.signInWithEmailAndPassword(email,password)
     .then(res=>{
         console.log(res)
         if(res.emalVerified===true){
             this.props.history.push('/page')
         } else {
             alert('ooops something wrong! Please Check Again your input')
         }
     })
     .catch(err=>{
        alert(err.message)
     })
     
    
 }
 render(){
    const {email,password} = this.state
        // make validation 
        let errors = []
        if (!email || !password ){
            errors.push({message:'Please enter all fields!'})
        }
        // logic password masih salah
    return(
        <Container>
    <Form className="register" onSubmit={this.handleSubmit}>
    <h1> Login </h1>
    <h6>Hello,</h6>

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
    <Button   type="submit" >Login </Button>
    <br/><br/><br/>
    <p>Do not have an account ? Please <Link to="/"> Register </Link> First</p>
    </Form>
        </Container>
    )
}
}