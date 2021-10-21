import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack } from 'react-bootstrap'

const Elements = () => {

    return (

        <Container>

            <div>
                <div className="d-flex flex-column">
                    <div>
                        <img className="batu margin" src={batu} alt="batu" />
                    </div>
                    <div>
                        <img className="gunting margin" src={gunting} alt="gunting" />
                    </div>
                    <div>
                        <img className="kertas margin" src={kertas} alt="kertas" />
                    </div>
                </div>

            </div>

        </Container >


    )
}

export default Elements;