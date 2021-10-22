import { useState } from 'react';
import Elements from './elements';
import "./element.css"
import "./index.css"
import { Container, Row, Col, Stack } from 'react-bootstrap'

const GameSuit = () => {

    const [element, setElement] = useState(["batu", "gunting", "kertas"]);
    const [versus, setVersus] = useState("")

    
    return (
        <>
            <div className="row">
                <div className="column margin">
                    <Elements 
                    
                    onMouseOver={ () => alert('onMouseOver...')}/>
                </div>
                <div className="column margin vs-frame">
                    VS
                </div>
                <div className="column margin">
                    <Elements />
                </div>
            </div>
        </>

    )
}

export default GameSuit;