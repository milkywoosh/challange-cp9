import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack, Alert } from 'react-bootstrap';
import { Suitclass } from './suit';
import IsWin from './isWin';


function ElementGunting(props) {

    return (
        <div className={props.className}>
                <div 
                    // onMouseOver={props.onMouseOver}
                    // onMouseLeave={props.onMouseLeave}
                    // className={props.className} 
                    >
                    <img
                        className="gunting"
                        src={gunting}
                        alt="gunting"
                        id="idGunting"
                        onClick={props.onClick} />
                </div>
        </div>

    )
}

export default ElementGunting;