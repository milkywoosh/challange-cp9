import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack, Alert } from 'react-bootstrap';
import { Suitclass } from './suit';
import IsWin from './isWin';


function ElementKertas(props) {

    
    return (
        
        <div onMouseOver={props.onMouseOver} 
        onMouseLeave={props.onMouseLeave} 
        className={props.className}>
            <img
                className="kertas margin"
                src={kertas}
                alt="kertas"
                id="idKertas" 
                onClick={props.onClick}/>
        </div>
    )
}

export default ElementKertas;