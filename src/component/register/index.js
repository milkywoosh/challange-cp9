import React,{ useState, useRef } from "react";
import {Form,Button, Container,Alert} from 'react-bootstrap'
import './index.css'
import { Link,useHistory } from "react-router-dom";
import {firebaseAuthentication} from "../../base/firebase";

// logic 2
export default function Register(){
    const [error,setError] = useState('')
    const passwordRef = useRef()
    const confirmPassRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const history = useHistory()
    
async function handleSubmit(e){
    e.preventDefault()
    if (passwordRef.current.value !== confirmPassRef.current.value){
        return setError('Password Did Not Match')
    }
     firebaseAuthentication.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
     .then(data=>{
            console.log('got data',data )
             alert('SuccessFully Regist')
             history.push('/login')
            //  if(data.user.emailVerified === false){
            //     firebaseAuthentication.isEmailVerified()
            // }
     })
     
    
}

    return(
        <Container>
    <Form className="register" onSubmit={handleSubmit}>
    <h1> Register </h1>
    <h6>Create Your Account First!</h6>
    {error && <Alert variant="danger">{error}</Alert>}
    
    <Form.Group className="mb-3" controlId="username">
    <Form.Label >Username</Form.Label>
    <Form.Control type="username" ref={usernameRef} placeholder="Username" name='username' required />
    <Form.Text   >
    </Form.Text>
    </Form.Group>


    <Form.Group className="mb-3" controlId="email">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" ref={emailRef} placeholder="Enter email" name='email'  required />
    <Form.Text   >
    </Form.Text>
    </Form.Group>

    <Form.Group  className="mb-3" controlId="password">
    <Form.Label >Password</Form.Label>
    <Form.Control type="password" placeholder="Password" ref={passwordRef} name='password'  required />
    </Form.Group>
    <Form.Text  >
    </Form.Text>

    <Form.Group  className="mb-3" controlId="confirmpassword">
    <Form.Label >Confirm Password</Form.Label>
    <Form.Control  type="password" ref={confirmPassRef} name='confirmpass' placeholder="Confirm Password"  required/>
    <Form.Text>
    </Form.Text>
</Form.Group>
    <Button   type="submit" >Register</Button>
    <br/><br/><br/>
    <p>Have an account ? <Link to='/login'>Login here</Link></p>
    </Form>
        </Container>
    )
}
//     return(
//         <Container>
//     <Form className="register" onSubmit={this.handleSubmit}>
//     <h1> Register </h1>
//     <h6>Create Your Account First!</h6>
    
//     <Form.Group className="mb-3" controlId="username">
//     <Form.Label >Username</Form.Label>
//     <Form.Control type="username" onChange={this.handleChangeField} placeholder="Username" name='username' required />
//     <Form.Text   >
//     </Form.Text>
//     </Form.Group>


//     <Form.Group className="mb-3" controlId="email">
//     <Form.Label >Email address</Form.Label>
//     <Form.Control type="email" onChange={this.handleChangeField} placeholder="Enter email" name='email' value={email} required />
//     <Form.Text   >
//     </Form.Text>
//     </Form.Group>

//     <Form.Group  className="mb-3" controlId="password">
//     <Form.Label >Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" onChange={this.handleChangeField} name='password' value={password} required />
//     </Form.Group>
//     <Form.Text  >
//     </Form.Text>

//     <Form.Group  className="mb-3" controlId="confirmpassword">
//     <Form.Label >Confirm Password</Form.Label>
//     <Form.Control  type="password" onChange={this.handleChangeField} name='confirmpass' placeholder="Confirm Password" value={confirmpass} required/>
//     <Form.Text>
//     </Form.Text>
// </Form.Group>
//     <Button   type="submit" >Register</Button>
//     <br/><br/><br/>
//     <p>Have an account ? <Link to='/login'>Login here</Link></p>
//     </Form>
//         </Container>
//     )
// }
// }