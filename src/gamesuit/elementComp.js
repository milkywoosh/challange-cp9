import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack, Alert } from 'react-bootstrap';
import { Suitclass } from './suit';

// import bootstrap HERE !!!


const ElementsComp = (props) => {

    const [hoverBatu, setHoverBatu] = useState(null);
    const [hoverGunting, setHoverGunting] = useState(null);
    const [hoverKertas, setHoverKertas] = useState(null);

    const mouseOverBatu = () => {
        if (hoverBatu == null) {
            setHoverBatu("set-bg-grey")
        }
    }
    const mouseOverGunting = () => {
        if (hoverGunting == null) {
            setHoverGunting("set-bg-grey")
        }
    }
    const mouseOverKertas = () => {
        if (hoverKertas == null) {
            setHoverKertas("set-bg-grey")
        }
    }

    const mouseLeave = () => {
        if (hoverBatu !== null) {
            setHoverBatu(null)
        }
        if (hoverGunting !== null) {
            setHoverGunting(null)
        }
        if (hoverKertas !== null) {
            setHoverKertas(null)
        }
    }




    return (
        <Container>

            <div  >
                <div className="margin-div">

                    <div onMouseOver={mouseOverBatu} onMouseLeave={mouseLeave} className={hoverBatu}>
                        <img
                            id="batuElement"
                            className="batu margin"
                            src={batu}
                            alt="batu" />
                    </div>

                    <div onMouseOver={mouseOverGunting} onMouseLeave={mouseLeave} className={hoverGunting} >
                        <img
                            className="gunting margin"
                            src={gunting}
                            alt="gunting"
                            id="idGunting"/>
                    </div>
                    <div onMouseOver={mouseOverKertas} onMouseLeave={mouseLeave} className={hoverKertas}>
                        <img
                            className="kertas margin"
                            src={kertas}
                            alt="kertas"
                            id="idKertas" />
                    </div>
                </div>

            </div>

        </Container >


    )
}

export default ElementsComp;