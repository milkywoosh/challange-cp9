import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import Logo from '../../Assets/SeTeam.png'

class Login extends React.Component{
    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target 
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="text"><img src={Logo} alt="SeTeam Logo"/> SeTeam</h1>
                    <div>
                    <Form onSubmit = {this.handleSubmit}>
                        <Form.Group className="form" style={{color: "white"}}>
                            <Form.Label className="label">Email</Form.Label>
                            <Form.Control type='email' name='email' placeholder='Enter your email' required onChange={this.handleChange}/>
                            <Form.Label className="label">Password</Form.Label>
                            <Form.Control type='password' name='password' placeholder='Enter your password' required onChange={this.handleChange}/> 
                        </Form.Group>
                        <Button onSubmit={this.handleSubmit}> Login </Button>
                    </Form>
                    <Form.Label> <a href="/Signup" color="inherit"> Don't have an account? SIGN UP NOW </a> </Form.Label>
                    
                    </div>
                </header>
            </div>
        )
    }
}

export default Login;