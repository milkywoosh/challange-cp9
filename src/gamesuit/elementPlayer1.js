import { useState } from 'react';
import batu from './assets/batu.png';
import gunting from './assets/gunting.png';
import kertas from './assets/kertas.png';
import "./element.css"
import { Container, Row, Col, Stack, Alert } from 'react-bootstrap';
import { Suitclass } from './suit';

// import bootstrap HERE !!!


const ElementsPlayer1 = (props) => {

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

    const [winner, setWinner] = useState(null)

    const [versus, setVersus] = useState("")

    let game = new Suitclass();
    const getSuit = (arg) => {
        let result = game.suit(arg);
        if (result === "menang") {
            setWinner("Player 1")
            alert("menang")
            return;
        } else {
            setWinner("Computer")
            alert("kalah")
            return;
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
                            alt="batu"
                            onClick={() => getSuit("batu")} />
                    </div>

                    <div onMouseOver={mouseOverGunting} onMouseLeave={mouseLeave} className={hoverGunting} >
                        <img
                            className="gunting margin"
                            src={gunting}
                            alt="gunting"
                            id="idGunting"
                            onClick={() => getSuit("gunting")} />
                    </div>
                    <div onMouseOver={mouseOverKertas} onMouseLeave={mouseLeave} className={hoverKertas}>
                        <img
                            className="kertas margin"
                            src={kertas}
                            alt="kertas"
                            id="idKertas"
                            onClick={() => getSuit("kertas ")} />
                    </div>
                </div>

            </div>

        </Container >


    )
}

export default ElementsPlayer1;