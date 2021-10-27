import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack, Alert } from 'react-bootstrap';
import { Suitclass } from './suit';
import IsWin from './isWin';
import { propTypes } from 'react-bootstrap/esm/Image';


function ElementBatu(props) {


    return (
        <div className={props.className}>
            <div
            // onMouseOver={props.onMouseOver} 
            //  onMouseLeave={props.onMouseLeave} 
            //  className={props.className}
            >
                <img
                    className="batu"
                    id="batuElement"
                    src={batu}
                    alt="batu"
                    onClick={props.onClick} />
            </div>
        </div>

    )
}

export default ElementBatu;